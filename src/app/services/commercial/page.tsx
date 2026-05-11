import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Commercial Roofing | LP3 Roofing & Construction Fort Worth TX",
  description: "Commercial roofing services in Fort Worth, TX. Flat roofs, TPO, EPDM, and metal roofing for businesses and industrial properties.",
};

export default function CommercialPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Commercial <span className="text-orange-500">Roofing</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Durable, low-slope roofing systems for businesses, warehouses, and commercial properties across the DFW area.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-950 mb-4">Built for Business</h2>
              <p className="text-gray-600 leading-relaxed">
                Commercial roofing demands precision, durability, and minimal disruption to your operations. LP3 Roofing brings the same commitment to quality from our residential work to every commercial project — on time, on budget, and built to last. We work around your schedule to minimize downtime and keep your business running.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-950 mb-4">Commercial Roofing Systems</h2>
              <p className="text-gray-600 leading-relaxed">
                We install and repair a wide range of commercial roofing systems. TPO (Thermoplastic Olefin) and EPDM (rubber roofing) are popular choices for flat and low-slope roofs due to their energy efficiency and long service life. Metal roofing offers superior durability for industrial applications. Our team is certified to work with all major commercial roofing systems.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-950 mb-4">Maintenance Programs</h2>
              <p className="text-gray-600 leading-relaxed">
                Proactive maintenance is the most cost-effective way to protect your commercial roof investment. LP3 Roofing offers annual inspection and maintenance programs that identify and address small issues before they become costly repairs. We provide detailed written reports after every inspection so you have documentation for insurance and budgeting purposes.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-950 mb-6">Our Commercial Services</h2>
              <ul className="space-y-3">
                {[
                  "TPO roofing installation and repair",
                  "EPDM (rubber) roofing systems",
                  "Metal roofing for industrial and commercial",
                  "Built-up roofing (BUR) and modified bitumen",
                  "Roof coatings and waterproofing",
                  "Drain and ponding water solutions",
                  "Skylights and roof penetrations",
                  "Annual maintenance contracts",
                  "Emergency storm response",
                  "Insurance claim assistance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </>
  );
}
