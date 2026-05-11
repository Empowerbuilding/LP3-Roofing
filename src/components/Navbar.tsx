'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  { name: 'Storm Damage', href: '/services/storm-damage' },
  { name: 'Roof Replacement', href: '/services/roof-replacement' },
  { name: 'Roof Repair', href: '/services/roof-repair' },
  { name: 'Commercial Roofing', href: '/services/commercial' },
  { name: 'Gutters', href: '/services/gutters' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-48">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://dwwfegzxjccqfrtgspzx.supabase.co/storage/v1/object/public/assets/logo.jpg"
              alt="LP3 Roofing & Construction"
              width={500}
              height={176}
              className="h-48 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
              >
                Services
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-48 bg-gray-900 rounded-md shadow-lg border border-gray-700 py-1"
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200"
                      onClick={() => setServicesOpen(false)}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/gallery" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
              Gallery
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-md transition-colors duration-200"
            >
              Free Inspection
            </Link>
            <button
              className="md:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-4 py-4 space-y-1">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 pb-1">Services</p>
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="block px-2 py-2 text-sm text-gray-300 hover:text-white transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              {s.name}
            </Link>
          ))}
          <div className="border-t border-gray-800 pt-2 mt-2 space-y-1">
            <Link href="/gallery" className="block px-2 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200" onClick={() => setMobileOpen(false)}>Gallery</Link>
            <Link href="/about" className="block px-2 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/contact" className="block px-2 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200" onClick={() => setMobileOpen(false)}>Contact</Link>
          </div>
          <div className="pt-2">
            <Link
              href="/contact"
              className="block w-full text-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-md transition-colors duration-200"
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
