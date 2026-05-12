'use client'
import { useReveal } from '@/hooks/useReveal'
import Link from 'next/link'

const services = [
  { title: 'Storm Damage', href: '/services' },
  { title: 'Roof Replacement', href: '/services' },
  { title: 'Roof Repair', href: '/services' },
  { title: 'Commercial Roofing', href: '/services' },
  { title: 'Gutters', href: '/services' },
]

const bullets = [
  'Fully Licensed & Insured in Texas',
  'Locally Owned & Operated in Fort Worth',
  'No High Pressure Sales, EVER',
  'Storm Damage & Insurance Claim Specialists',
]

export default function ServicesSection() {
  const ref = useReveal()
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — service cards */}
          <div className="flex flex-col gap-4">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group flex items-center justify-between px-8 py-6 font-bold text-2xl tracking-wide uppercase transition-all duration-200 hover:scale-[1.02]"
                style={{ background: '#111', border: '1px solid #333', color: '#fff' }}
              >
                <span style={{ color: '#fff' }}>{s.title}</span>
                <span style={{ color: '#fff' }} className="group-hover:translate-x-1 transition-transform duration-200 text-3xl">→</span>
              </Link>
            ))}
          </div>

          {/* Right — content */}
          <div>
            <p className="font-display reveal from-left text-gray-500 text-sm font-bold uppercase tracking-[4px] mb-3">Fort Worth, TX · DFW Metro</p>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-gray-950 leading-tight mb-6">
              Roofing With<br />
              <span className="text-gray-950">Confidence</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              LP3 Roofing & Construction has been protecting Fort Worth homes and businesses for over 20 years.
              We specialize in storm damage restoration, working directly with your insurance company to maximize
              your claim — at no extra cost to you. From shingle replacement to commercial flat roofing, we
              deliver quality craftsmanship backed by industry-leading warranties.
            </p>

            {/* Bullets */}
            <ul className="space-y-3 mb-10">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center" style={{ background: '#111' }}>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-900 font-semibold text-base">{b}</span>
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="px-8 py-3 font-bold text-sm uppercase tracking-wide transition-all duration-200"
                style={{ background: '#111', color: '#fff', border: '2px solid #111' }}
              >
                See All Services
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 font-bold text-sm uppercase tracking-wide transition-all duration-200"
                style={{ background: '#111', color: '#fff' }}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
