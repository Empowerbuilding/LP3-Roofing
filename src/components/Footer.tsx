import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src="https://dwwfegzxjccqfrtgspzx.supabase.co/storage/v1/object/public/assets/logo-v2.jpg"
              alt="LP3 Roofing & Construction"
              width={160}
              height={80}
              className="h-24 w-auto object-contain mb-4"
            />
            <p className="text-sm text-gray-400 max-w-sm">
              Fort Worth&apos;s most trusted roofing contractor. Licensed, insured, and committed to quality craftsmanship on every job.
            </p>
            <p className="mt-4 text-orange-500 font-semibold text-lg">
              817-555-0100
            </p>
            <p className="text-sm text-gray-400 mt-1">Fort Worth, TX</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/storm-damage" className="hover:text-white transition-colors duration-200">Storm Damage</Link></li>
              <li><Link href="/services/roof-replacement" className="hover:text-white transition-colors duration-200">Roof Replacement</Link></li>
              <li><Link href="/services/roof-repair" className="hover:text-white transition-colors duration-200">Roof Repair</Link></li>
              <li><Link href="/services/commercial" className="hover:text-white transition-colors duration-200">Commercial Roofing</Link></li>
              <li><Link href="/services/gutters" className="hover:text-white transition-colors duration-200">Gutters</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors duration-200">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors duration-200">Contact</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors duration-200">Free Inspection</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} LP3 Roofing &amp; Construction. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">Fort Worth, TX 76101</p>
        </div>
      </div>
    </footer>
  )
}
