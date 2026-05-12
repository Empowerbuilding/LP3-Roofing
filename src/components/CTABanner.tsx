import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
          Ready to Protect Your Home?
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Get a free, no-obligation roof inspection from Fort Worth&apos;s most trusted roofing experts.
          We work directly with your insurance company.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block px-8 py-4 font-bold text-lg transition-colors duration-200 btn-dark" style={{ background: "#111", color: "#fff" }}
        >
          Book Your Free Inspection
        </Link>
      </div>
    </section>
  )
}
