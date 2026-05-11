import Link from "next/link";
import TrustBadges from "@/components/TrustBadges";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Storm Damage",
    desc: "Fast, expert insurance claim assistance after hail, wind, or tornado damage.",
    href: "/services/storm-damage",
    icon: (
      <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
  },
  {
    title: "Roof Replacement",
    desc: "Full roof replacement using premium materials backed by manufacturer warranties.",
    href: "/services/roof-replacement",
    icon: (
      <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Roof Repair",
    desc: "Targeted repairs for leaks, missing shingles, flashing, and more.",
    href: "/services/roof-repair",
    icon: (
      <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: "Commercial Roofing",
    desc: "Low-slope, flat, and TPO roofing systems for businesses and commercial properties.",
    href: "/services/commercial",
    icon: (
      <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Gutters",
    desc: "Seamless gutter installation and replacement to protect your foundation.",
    href: "/services/gutters",
    icon: (
      <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Free Inspection",
    desc: "Schedule your free, no-obligation roof inspection with our certified experts.",
    href: "/contact",
    icon: (
      <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Fort Worth, TX",
    text: "LP3 handled our entire hail damage claim from start to finish. They dealt with our insurance company and we had a brand new roof in less than two weeks. Absolutely outstanding service.",
    rating: 5,
  },
  {
    name: "James R.",
    location: "Keller, TX",
    text: "Professional, prompt, and honest. They found issues our previous contractor missed and fixed everything at a fair price. I wouldn't use anyone else for roofing in Fort Worth.",
    rating: 5,
  },
  {
    name: "Linda T.",
    location: "Arlington, TX",
    text: "From the free inspection to the final walkthrough, LP3 was exceptional. Their crew was clean, efficient, and respectful of our property. Highly recommend!",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-screen bg-gray-950">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Fort Worth&apos;s Most Trusted<br />
            <span className="text-orange-500">Roofing Contractor</span>
          </h1>
          <p className="mt-6 text-xl text-gray-200 max-w-2xl mx-auto">
            Licensed &amp; insured. Storm damage specialists. 20+ years serving the DFW area.
            We handle your insurance claim from start to finish — at no extra cost to you.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-md transition-colors duration-200"
            >
              Get Free Inspection
            </Link>
            <Link
              href="/gallery"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-950 font-bold text-lg rounded-md transition-colors duration-200"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Services */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-950">Our Services</h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              From emergency repairs to full replacements, we do it all with expert craftsmanship and honest pricing.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group block p-8 border border-gray-100 rounded-xl hover:border-orange-200 hover:shadow-lg transition-all duration-200"
              >
                <div className="mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-gray-950 group-hover:text-orange-500 transition-colors duration-200">{s.title}</h3>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                <span className="mt-4 inline-block text-orange-500 text-sm font-semibold">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why LP3 */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-950">Why Choose LP3 Roofing?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center px-6">
              <div className="text-5xl font-extrabold text-orange-500 mb-3">20+</div>
              <h3 className="text-xl font-bold text-gray-950 mb-2">Years of Experience</h3>
              <p className="text-gray-500">Two decades of roofing excellence in Fort Worth and the greater DFW metroplex.</p>
            </div>
            <div className="text-center px-6">
              <div className="text-5xl font-extrabold text-orange-500 mb-3">100%</div>
              <h3 className="text-xl font-bold text-gray-950 mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-500">We stand behind every project. If you&apos;re not satisfied, we make it right — no questions asked.</p>
            </div>
            <div className="text-center px-6">
              <div className="text-5xl font-extrabold text-orange-500 mb-3">#1</div>
              <h3 className="text-xl font-bold text-gray-950 mb-2">Insurance Experts</h3>
              <p className="text-gray-500">We navigate the claims process for you, maximizing your payout and eliminating stress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-950">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <StarRating count={t.rating} />
                <p className="mt-4 text-gray-600 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-6">
                  <p className="font-bold text-gray-950">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </>
  );
}
