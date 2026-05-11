import Link from 'next/link'
import Image from 'next/image'

export default function WarrantySection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">

        {/* Left — dark bg with diagonal clip */}
        <div
          className="relative flex items-center bg-gray-950 px-10 py-20 lg:pr-24"
          style={{ clipPath: 'polygon(0 0, 100% 0, 88% 100%, 0 100%)' }}
        >
          <div className="max-w-lg">
            <p className="text-orange-500 text-xs font-bold uppercase tracking-[4px] mb-4">
              Fort Worth&apos;s Trusted Roofing Experts
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-6">
              Industry-Leading Warranties On Every Roof We Install
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              When LP3 Roofing installs your roof, you get more than shingles — you get peace of mind.
              We use only premium manufacturer materials backed by lifetime warranties covering both
              materials and workmanship. Our crew is licensed, insured, and trained to meet the exact
              installation standards required to keep your warranty valid for life.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="px-7 py-3 rounded-full border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white font-bold text-sm uppercase tracking-wide transition-all duration-200"
              >
                About LP3 Roofing
              </Link>
              <Link
                href="/contact"
                className="px-7 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm uppercase tracking-wide transition-all duration-200 shadow-[0_0_15px_rgba(249,115,22,0.35)]"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Right — photo overlapping the diagonal */}
        <div className="relative flex items-center justify-center bg-gray-100">
          <div className="absolute inset-0">
            <Image
              src="https://dwwfegzxjccqfrtgspzx.supabase.co/storage/v1/object/public/assets/inspection-photo.png"
              alt="LP3 Roofing inspector on a roof"
              fill
              className="object-cover object-top"
            />
          </div>
          {/* Overlay gradient on left edge to blend with diagonal */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-950 to-transparent z-10" />
        </div>

      </div>
    </section>
  )
}
