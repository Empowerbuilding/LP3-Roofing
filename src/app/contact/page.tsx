'use client'

import { useState } from 'react'
import Footer from '@/components/Footer'

const serviceOptions = [
  'Storm Damage',
  'Roof Replacement',
  'Roof Repair',
  'Commercial Roofing',
  'Gutters',
  'Free Inspection',
  'Other',
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gray-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Contact <span className="text-orange-500">Us</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto">
            Request your free inspection or ask us anything. We typically respond within 2 business hours.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-950 mb-8">Request a Free Inspection</h2>

              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-gray-950 mb-2">Message Received!</h3>
                  <p className="text-gray-600">We&apos;ll be in touch within 2 business hours to schedule your free inspection.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                        placeholder="(817) 555-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200 bg-white"
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200 resize-none"
                      placeholder="Tell us about your roofing needs..."
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-600 text-sm">Something went wrong. Please try again or call us directly.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-bold text-lg rounded-md transition-colors duration-200"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-950">Get in Touch</h2>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-950">Phone</p>
                  <a href="tel:8175550100" className="text-orange-500 font-bold text-xl hover:text-orange-600 transition-colors duration-200">
                    817-555-0100
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-950">Address</p>
                  <p className="text-gray-600">Fort Worth, TX 76101</p>
                  <p className="text-gray-500 text-sm mt-1">Serving all of DFW</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-950">Business Hours</p>
                  <div className="text-gray-600 space-y-1 mt-1">
                    <p>Monday – Friday: 7:00 AM – 6:00 PM</p>
                    <p>Saturday: 8:00 AM – 4:00 PM</p>
                    <p>Sunday: Emergency calls only</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-100 rounded-xl p-6">
                <h3 className="font-bold text-gray-950 mb-2">Emergency Roof Damage?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Storms don&apos;t keep business hours. Call us 24/7 for emergency tarping and damage assessment.
                </p>
                <a
                  href="tel:8175550100"
                  className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-md transition-colors duration-200"
                >
                  Call Now: 817-555-0100
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
