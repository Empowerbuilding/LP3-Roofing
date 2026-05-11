'use client'

import { useState } from 'react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function HeroForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (res.ok && json.success) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMsg(json.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-950 mb-2">We&apos;ll be in touch!</h3>
        <p className="text-gray-500 text-sm">
          Thanks for reaching out. Our team will contact you within 2 business hours.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8">
      <h2 className="text-2xl font-bold text-gray-950 mb-1">Get a Free Estimate Today!</h2>
      <p className="text-gray-500 text-sm mb-6">No obligation. Fast response. Expert advice.</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="hero-name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            id="hero-name"
            name="name"
            type="text"
            required
            placeholder="John Smith"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
          />
        </div>

        <div>
          <label htmlFor="hero-phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            id="hero-phone"
            name="phone"
            type="tel"
            required
            placeholder="(817) 555-0100"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
          />
        </div>

        <div>
          <label htmlFor="hero-email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="hero-email"
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
          />
        </div>

        {status === 'error' && (
          <p className="text-red-600 text-sm">{errorMsg}</p>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-bold text-lg py-3 rounded-lg transition-colors duration-200"
        >
          {status === 'submitting' ? 'Sending…' : 'Get My Free Estimate'}
        </button>
      </form>
    </div>
  )
}
