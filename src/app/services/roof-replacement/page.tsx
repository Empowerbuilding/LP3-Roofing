import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Roof Replacement | LP3 Roofing & Construction Fort Worth TX",
  description: "Premium roof replacement services in Fort Worth, TX. Licensed, insured, with manufacturer warranties on all installations.",
};

export default function RoofReplacementPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Roof <span className="text-orange-500">Replacement</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            When repairs aren&apos;t enough, trust LP3 for a complete roof replacement with premium materials and expert installation.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-950 mb-4">When Is Replacement Necessary?</h2>
              <p className="text-gray-600 leading-relaxed">
                Most asphalt shingle roofs last 20–30 years. If your roof is approaching the end of its lifespan, showing widespread granule loss, has repeated leaks, or sustained major storm damage, a full replacement is often more cost-effective than continued repairs. LP3 Roofing provides honest assessments — we&apos;ll never recommend a replacement if a repair will do.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-950 mb-4">Premium Materials for Fort Worth Homes</h2>
              <p className="text-gray-600 leading-relaxed">
                Texas weather demands tough roofing. We install impact-resistant shingles rated for hail and high winds, synthetic underlayment for superior moisture protection, and proper ventilation systems to extend roof life and reduce energy costs. We carry products from leading manufacturers including GAF, Owens Corning, and CertainTeed.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-950 mb-4">Our Installation Process</h2>
              <p className="text-gray-600 leading-relaxed">
                Our certified crews complete most residential replacements in a single day. We begin by safely removing all old roofing material, inspecting and repairing the decking as needed, then installing new underlayment, drip edge, ice-and-water shield, and shingles to manufacturer specifications. Every job ends with a thorough cleanup including magnetic nail sweeping.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-950 mb-6">What&apos;s Included</h2>
              <ul className="space-y-3">
                {[
                  "Complete tear-off of existing roofing materials",
                  "Decking inspection and replacement of damaged boards",
                  "Synthetic underlayment installation",
                  "Ice-and-water shield at eaves and valleys",
                  "Premium impact-resistant shingles",
                  "New pipe boots, flashing, and ridge cap",
                  "Proper attic ventilation assessment",
                  "Full debris removal and magnetic nail sweep",
                  "Manufacturer warranty registration",
                  "10-year workmanship warranty",
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
