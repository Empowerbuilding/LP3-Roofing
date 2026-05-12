'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinkClass = "text-base font-semibold text-gray-300 hover:text-white transition-colors duration-200 tracking-wide uppercase"

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-gray-700 shadow-lg" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 md:h-36">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://dwwfegzxjccqfrtgspzx.supabase.co/storage/v1/object/public/assets/logo-v2.jpg"
              alt="LP3 Roofing & Construction"
              width={160}
              height={96}
              className="h-16 md:h-24 w-auto object-contain"
              style={{ mixBlendMode: 'lighten' }}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/services" className={navLinkClass}>Services</Link>
            <Link href="/gallery" className={navLinkClass}>Gallery</Link>
            <Link href="/about" className={navLinkClass}>About</Link>
            <Link href="/contact" className={navLinkClass}>Contact</Link>
          </div>

          {/* Right: phone + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:8175550100"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-white text-white rounded-full px-4 py-2 transition-all duration-200"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span className="text-base font-bold tracking-widest uppercase">817-555-0100</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-200 text-gray-900 text-base font-bold rounded-lg tracking-wide uppercase transition-all duration-200"
            >
              Free Inspection
            </Link>
          </div>

          {/* Hamburger */}
          <button className="md:hidden p-2 text-white bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-800 px-4 py-4 space-y-1" style={{ background: '#111' }}>
          <Link href="/services" className="block px-2 py-2 text-sm font-semibold text-gray-300 hover:text-white uppercase tracking-wide" onClick={() => setMobileOpen(false)}>Services</Link>
          <Link href="/gallery" className="block px-2 py-2 text-sm font-semibold text-gray-300 hover:text-white uppercase tracking-wide" onClick={() => setMobileOpen(false)}>Gallery</Link>
          <Link href="/about" className="block px-2 py-2 text-sm font-semibold text-gray-300 hover:text-white uppercase tracking-wide" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/contact" className="block px-2 py-2 text-sm font-semibold text-gray-300 hover:text-white uppercase tracking-wide" onClick={() => setMobileOpen(false)}>Contact</Link>
          <div className="pt-3 space-y-2">
            <a href="tel:8175550100" className="flex items-center justify-center gap-2 w-full py-2.5 bg-gray-800 border border-gray-600 text-white text-sm font-bold rounded-lg uppercase tracking-wide">
              📞 817-555-0100
            </a>
            <Link href="/contact" className="block w-full text-center px-4 py-2.5 bg-white hover:bg-gray-200 text-gray-900 text-sm font-bold rounded-lg uppercase tracking-wide" onClick={() => setMobileOpen(false)}>
              Free Inspection
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
