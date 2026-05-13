'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 overflow-hidden shadow-xl h-24 md:h-36" style={{ background: 'linear-gradient(105deg, #000 0%, #000 42%, #f0f0f0 42%, #f0f0f0 100%)' }}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">

        {/* Logo — black side */}
        <Link href="/" className="flex-shrink-0 z-10" style={{ width: '180px' }}>
          <Image
            src="https://dwwfegzxjccqfrtgspzx.supabase.co/storage/v1/object/public/assets/logo-v2.jpg"
            alt="LP3 Roofing & Construction"
            width={160}
            height={96}
            className="h-16 md:h-24 w-auto object-contain"
            style={{ mixBlendMode: 'lighten' }}
          />
        </Link>

        {/* Nav links + CTA — white side */}
        <div className="hidden md:flex items-center gap-8 z-10">
          {['Services', 'Gallery', 'About', 'Contact'].map(name => (
            <Link
              key={name}
              href={`/${name.toLowerCase()}`}
              className="font-display text-sm font-semibold text-gray-800 hover:text-black tracking-[3px] uppercase transition-colors duration-200"
            >
              {name}
            </Link>
          ))}
          <a
            href="tel:8175550100"
            className="font-display text-sm font-semibold text-gray-600 hover:text-black tracking-widest uppercase transition-colors duration-200 ml-2"
          >
            817-555-0100
          </a>
          <Link
            href="/contact"
            className="font-display px-6 py-2.5 bg-black hover:bg-gray-900 text-white text-sm font-bold tracking-[2px] uppercase transition-all duration-200"
          >
            Free Inspection
          </Link>
        </div>

        {/* Hamburger */}
        <button className="md:hidden z-10 p-2 text-gray-800" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen
            ? <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            : <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          }
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 z-50 bg-white border-t border-gray-200 px-6 py-6 space-y-4 shadow-xl">
          {['Services', 'Gallery', 'About', 'Contact'].map(name => (
            <Link key={name} href={`/${name.toLowerCase()}`} className="block font-display text-base font-semibold text-gray-800 hover:text-black tracking-[3px] uppercase" onClick={() => setMobileOpen(false)}>
              {name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-200 space-y-3">
            <a href="tel:8175550100" className="block font-display text-center py-3 border border-gray-900 text-gray-900 text-sm tracking-widest uppercase font-semibold">
              817-555-0100
            </a>
            <Link href="/contact" className="block font-display text-center py-3 bg-black text-white text-sm font-bold tracking-[2px] uppercase" onClick={() => setMobileOpen(false)}>
              Free Inspection
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
