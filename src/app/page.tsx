import Link from "next/link";
import PartnerLogos from "@/components/PartnerLogos";
import ServicesSection from "@/components/ServicesSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import HeroForm from "@/components/HeroForm";

const serviceLinks = [
  { title: "Storm Damage", href: "/services/storm-damage" },
  { title: "Roof Replacement", href: "/services/roof-replacement" },
  { title: "Roof Repair", href: "/services/roof-repair" },
  { title: "Commercial Roofing", href: "/services/commercial" },
  { title: "Gutters", href: "/services/gutters" },
  { title: "Free Inspection", href: "/contact" },
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
      <section className="relative flex items-center min-h-screen bg-gray-800">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Headline + subtext + phone */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Fort Worth&apos;s{" "}
                <span className="text-orange-500">#1 Rated</span>
                <br />
                Roofing Contractor
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed max-w-lg">
                Licensed &amp; insured. Storm damage specialists. 20+ years serving the DFW area.
                We handle your insurance claim from start to finish — at no extra cost to you.
              </p>
              <a
                href="tel:8175550100"
                className="mt-8 inline-flex items-center gap-3 text-white hover:text-orange-400 transition-colors duration-200"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-300">Call us anytime</div>
                  <div className="text-2xl font-bold tracking-wide">817-555-0100</div>
                </div>
              </a>
            </div>

            {/* Right: Estimate form card */}
            <div>
              <HeroForm />
            </div>
          </div>
        </div>
      </section>


      {/* Partner Logos */}
      <PartnerLogos />

      {/* Services */}
      <ServicesSection />

      {/* Services Row */}
      <section className="bg-gray-950 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {serviceLinks.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="px-6 py-3 border border-gray-600 text-gray-200 rounded-full text-sm font-semibold hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-200 whitespace-nowrap"
              >
                {s.title}
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
