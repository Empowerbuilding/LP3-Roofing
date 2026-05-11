'use client'
import { useReveal } from '@/hooks/useReveal'
import Link from 'next/link'
import Image from 'next/image'

// Placeholder slots — replace src with real photos when provided
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
          <p className="reveal text-orange-500 text-xs font-bold uppercase tracking-[4px] mb-3">Recent Roofing Projects</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 mb-3">Our Work Speaks For Itself</h2>
          <Link href="/gallery" className="text-gray-500 hover:text-orange-500 text-sm underline underline-offset-4 transition-colors duration-200">
            View Our Gallery →
          </Link>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {/* Top row: large left (spans 2) + tall right */}
          <div className="col-span-2 sm:col-span-2 relative h-64 sm:h-80 rounded-2xl overflow-hidden">
            <Image src={photos[0].src} alt={photos[0].alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden">
            <Image src={photos[1].src} alt={photos[1].alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          {/* Bottom row: 3 equal columns */}
          {photos.slice(2, 5).map((photo, i) => (
            <div key={i} className="relative h-52 sm:h-60 rounded-2xl overflow-hidden">
              <Image src={photo.src} alt={photo.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold text-sm uppercase tracking-wide transition-all duration-200"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}
