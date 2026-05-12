import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Roof Repair | LP3 Roofing & Construction Fort Worth TX",
  description: "Professional roof repair services in Fort Worth, TX. Leaks, missing shingles, flashing, and more. Same-day emergency service available.",
};

export default function RoofRepairPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Roof <span className="text-white">Repair</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Targeted, cost-effective repairs for leaks, damaged shingles, and flashing issues. Fast response, lasting results.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-950 mb-4">Don&apos;t Ignore a Leaking Roof</h2>
              <p className="text-gray-600 leading-relaxed">
                Even a small leak can cause significant damage over time — soaking insulation, rotting wood framing, breeding mold, and damaging ceilings and drywall. LP3 Roofing offers fast, professional repairs that address the root cause, not just the symptom. We diagnose the problem correctly the first time so you don&apos;t pay for repeat visits.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-950 mb-4">Common Repair Scenarios</h2>
              <p className="text-gray-600 leading-relaxed">
                Our repair team handles everything from a few missing shingles after a windstorm to failed flashing around chimneys and skylights, deteriorated pipe boots, damaged valleys, and soft spots in the decking. If water is getting in, we can find it and fix it — often the same day you call.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-950 mb-4">Repair vs. Replace — Honest Advice</h2>
              <p className="text-gray-600 leading-relaxed">
                LP3 Roofing will always give you a straight answer. If your roof has isolated damage and plenty of life left, we&apos;ll repair it and give you an honest assessment of how long it should last. If the damage is widespread or the roof is near the end of its life, we&apos;ll tell you that too — so you can plan accordingly and avoid throwing good money after bad.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-950 mb-6">What We Repair</h2>
              <ul className="space-y-3">
                {[
                  "Missing, cracked, or curling shingles",
                  "Active leaks and water intrusion points",
                  "Chimney and skylight flashing",
                  "Pipe boot and vent flashing",
                  "Ridge cap and hip cap",
                  "Damaged or clogged valleys",
                  "Soft spots and rotted decking",
                  "Fascia and soffit damage",
                  "Drip edge and ice-and-water shield",
                  "Emergency tarping and temporary weatherproofing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
