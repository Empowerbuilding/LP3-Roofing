'use client'
import { useReveal } from '@/hooks/useReveal'
import Link from 'next/link'
import Image from 'next/image'

const photos = [
  { src: 'https://dwwfegzxjccqfrtgspzx.supabase.co/storage/v1/object/public/assets/gallery-1.webp', alt: 'LP3 Roofing Project 1' },
  { src: 'https://dwwfegzxjccqfrtgspzx.supabase.co/storage/v1/object/public/assets/gallery-2.webp', alt: 'LP3 Roofing Project 2' },
  { src: 'https://dwwfegzxjccqfrtgspzx.supabase.co/storage/v1/object/public/assets/gallery-3.webp', alt: 'LP3 Roofing Project 3' },
  { src: 'https://dwwfegzxjccqfrtgspzx.supabase.co/storage/v1/object/public/assets/gallery-4.webp', alt: 'LP3 Roofing Project 4' },
  { src: 'https://dwwfegzxjccqfrtgspzx.supabase.co/storage/v1/object/public/assets/gallery-5.webp', alt: 'LP3 Roofing Project 5' },
  { src: 'https://dwwfegzxjccqfrtgspzx.supabase.co/storage/v1/object/public/assets/gallery-6.webp', alt: 'LP3 Roofing Project 6' },
  { src: 'https://dwwfegzxjccqfrtgspzx.supabase.co/storage/v1/object/public/assets/gallery-7.webp', alt: 'LP3 Roofing Project 7' },
]

export default function GallerySection() {
  const ref = useReveal()
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-display reveal text-gray-900 text-xs font-bold uppercase tracking-[4px] mb-3">Recent Roofing Projects</p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-950 mb-3">Our Work Speaks For Itself</h2>
          <Link href="/gallery" className="text-gray-500 hover:text-white text-sm underline underline-offset-4 transition-colors duration-200">
            View Our Gallery →
          </Link>
        </div>

        {/* Mobile: horizontal scroll carousel */}
        <div className="sm:hidden flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-hide -mx-4 pl-6 pr-4 scroll-pl-6">
          {photos.map((photo, i) => (
            <div key={i} className="relative flex-shrink-0 w-72 h-56 rounded-2xl overflow-hidden snap-start">
              <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* Desktop: original grid */}
        <div className="hidden sm:grid grid-cols-3 gap-3">
          <div className="col-span-2 relative h-80 rounded-2xl overflow-hidden">
            <Image src={photos[0].src} alt={photos[0].alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden">
            <Image src={photos[1].src} alt={photos[1].alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          {photos.slice(2, 5).map((photo, i) => (
            <div key={i} className="relative h-60 rounded-2xl overflow-hidden">
              <Image src={photo.src} alt={photo.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3 font-bold text-sm uppercase tracking-wide transition-all duration-200" style={{ background: "#111", color: "#fff", border: "2px solid #111" }}
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}
