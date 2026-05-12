'use client'
import { useReveal } from '@/hooks/useReveal'
import Link from 'next/link'

const steps = [
  {
    number: 'Step 1',
    title: 'Get a Free Quote',
    description: 'Simply fill out the form on our website or give us a call. We respond within 2 business hours and there\'s zero obligation.',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: 'Step 2',
    title: 'Schedule Your Inspection',
    description: 'We\'ll set up a no-obligation roof inspection at a time that works for you — mornings, evenings, or weekends. We work around your schedule.',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: 'Step 3',
    title: 'Sit Back & Relax',
    description: 'We handle everything — inspection, insurance claim, materials, and installation. Our crew shows up, gets it done right, and leaves your property spotless.',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  const ref = useReveal()
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-20" style={{ background: "#111" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-display reveal text-white text-xs font-bold uppercase tracking-[4px] mb-3">Simple Process</p>
          <h2 className="font-display reveal delay-100 text-3xl sm:text-4xl font-extrabold text-white">Get Your Roof Fixed in 3 Easy Steps</h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="reveal px-8 py-8 text-center flex flex-col items-center gap-3 flex-1"
              style={{ background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)' }}
            >
              <div className="text-white">{step.icon}</div>
              <p className="text-white text-xs font-bold uppercase tracking-[3px]">{step.number}</p>
              <h3 className="font-display text-2xl font-extrabold text-white">{step.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed max-w-md">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-bold px-8 py-4 text-base uppercase tracking-wide transition-all duration-200" style={{ background: "#111", color: "#fff" }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            Get Started Now
          </Link>
        </div>
      </div>
    </section>
  )
}
