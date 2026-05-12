'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const links = [
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-black" style={{ borderBottom: '1px solid #222' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-28">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://dwwfegzxjccqfrtgspzx.supabase.co/storage/v1/object/public/assets/logo-v2.jpg"
              alt="LP3 Roofing & Construction"
              width={140}
              height={84}
              className="h-14 md:h-20 w-auto object-contain"
              style={{ mixBlendMode: 'lighten' }}
            />
          </Link>

          {/* Desktop nav — center */}
          <div className="hidden md:flex items-center gap-10">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="font-display text-sm font-semibold text-gray-400 hover:text-white tracking-[3px] uppercase transition-colors duration-200"
              >
                {l.name}
              </Link>
            ))}
          </div>

          {/* Right: phone + CTA */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:8175550100"
              className="font-display text-sm font-semibold text-gray-400 hover:text-white tracking-widest uppercase transition-colors duration-200"
            >
              (817) 555-0100
            </a>
            <Link
              href="/contact"
              className="font-display px-6 py-2.5 bg-white hover:bg-gray-100 text-black text-sm font-bold tracking-[2px] uppercase transition-all duration-200 rounded-sm"
            >
              Free Inspection
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
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
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-6 space-y-4">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="block font-display text-base font-semibold text-gray-400 hover:text-white tracking-[3px] uppercase transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              {l.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-800 space-y-3">
            <a href="tel:8175550100" className="block font-display text-center py-3 border border-gray-700 text-white text-sm tracking-widest uppercase">
              (817) 555-0100
            </a>
            <Link
              href="/contact"
              className="block font-display text-center py-3 bg-white text-black text-sm font-bold tracking-[2px] uppercase"
              onClick={() => setMobileOpen(false)}
            >
              Free Inspection
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
