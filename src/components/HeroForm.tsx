'use client'

import { useState } from 'react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const StarRow = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

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
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
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
        <div className="w-14 h-14 bg-green-100 rounded-none flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-bold text-gray-950 mb-2">We&apos;ll be in touch!</h3>
        <p className="text-gray-500 text-sm">Thanks for reaching out. Our team will contact you within 2 business hours.</p>
      </div>
    )
  }

  const inputClass = "w-full border border-gray-300 rounded-none px-4 py-2.5 text-gray-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition text-sm"

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Header bar */}
      <div className="bg-gray-900 px-6 py-3 text-center">
        <h2 className="font-display text-4xl font-bold text-white">Get a Free Estimate Today!</h2>
      </div>

      {/* Review badges */}
      <div className="flex items-stretch divide-x divide-gray-200 border-b border-gray-100 px-4 py-3">
        {/* Google */}
        <div className="flex flex-col items-center gap-1 flex-1 px-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <StarRow />
          <span className="text-xs font-semibold text-gray-700">5.0 Google</span>
        </div>
        {/* Facebook */}
        <div className="flex flex-col items-center gap-1 flex-1 px-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
            <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.931-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
          </svg>
          <StarRow />
          <span className="text-xs font-semibold text-gray-700">5.0 Facebook</span>
        </div>
        {/* Yelp */}
        <div className="flex flex-col items-center gap-1 flex-1 px-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FF1A1A">
            <path d="M20.16 12.73l-4.703 1.14c-.847.204-1.538-.616-1.166-1.402l2.162-4.48c.372-.772 1.463-.74 1.79.05l2.54 5.32c.181.38-.19.796-.623.372zm-6.16 4.636l1.988 4.273c.33.71-.272 1.49-1.04 1.3l-4.85-1.21c-.77-.19-.98-1.18-.36-1.67l2.86-2.06c.623-.45 1.49-.11 1.403.367zm-5.81-1.39L3.45 17.93c-.725.447-.683 1.524.07 1.9l4.57 2.26c.752.37 1.553-.31 1.332-1.11l-1.08-4.04c-.22-.8-1.138-1.08-1.62-.57zm-.73-5.27L2.67 9.06c-.645-.497-.483-1.55.27-1.83l4.75-1.72c.753-.27 1.49.45 1.23 1.21l-1.54 4.4c-.26.76-1.204.93-1.72.45zm5.39-4.69V1.37c0-.794-.9-1.24-1.54-.76L7.38 3.73c-.64.48-.55 1.5.17 1.85l4.27 2.07c.723.35 1.575-.21 1.583-.97z"/>
          </svg>
          <StarRow />
          <span className="text-xs font-semibold text-gray-700">5.0 Yelp</span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="px-4 py-4 sm:px-6 sm:py-5 flex flex-col gap-3">
        {/* Name + Email side by side on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input name="name" type="text" required placeholder="Your Name *" className={inputClass} />
          <input name="email" type="email" required placeholder="Email Address *" className={inputClass} />
        </div>

        {/* Phone */}
        <input name="phone" type="tel" required placeholder="Phone Number *" className={inputClass} />

        {/* Service dropdown */}
        <select name="service" required className={inputClass + " bg-white"}>
          <option value="">Select a Service...</option>
          <option value="Roof Replacement">Roof Replacement</option>
          <option value="Roof Repair">Roof Repair</option>
          <option value="Gutter Install">Gutter Install</option>
          <option value="Roof Cleaning">Roof Cleaning</option>
        </select>

        {/* Message */}
        <textarea name="message" rows={3} placeholder="Tell us about your roofing needs..." className={inputClass + " resize-none"} />

        {status === 'error' && <p className="text-red-600 text-xs">{errorMsg}</p>}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white font-bold py-3 rounded-none transition-colors duration-200"
        >
          {status === 'submitting' ? 'Sending…' : 'Get My Free Estimate →'}
        </button>
      </form>
    </div>
  )
}
