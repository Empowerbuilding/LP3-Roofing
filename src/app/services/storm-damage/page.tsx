import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Storm Damage Roofing | LP3 Roofing & Construction Fort Worth TX",
  description: "Expert storm damage roofing and insurance claim assistance in Fort Worth, TX. Hail, wind, and tornado damage specialists.",
};

export default function StormDamagePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Storm Damage <span className="text-orange-500">Roofing</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Hail, wind, and tornado specialists. We handle your entire insurance claim process from inspection to final approval.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-950 mb-4">Navigating Your Insurance Claim</h2>
              <p className="text-gray-600 leading-relaxed">
                Storm damage insurance claims can be complex and overwhelming. LP3 Roofing has helped hundreds of Fort Worth homeowners successfully navigate the claims process. Our certified insurance claim specialists work directly with your adjuster to ensure every dollar of damage is documented and covered.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-950 mb-4">What Happens After a Storm</h2>
              <p className="text-gray-600 leading-relaxed">
                After a major storm, your roof may have hidden damage that isn&apos;t immediately visible from the ground. Hail can bruise shingles and compromise their protective granule layer, while high winds can lift shingles, exposing your home to water intrusion. The sooner damage is identified and documented, the stronger your insurance claim will be.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-950 mb-4">Protecting Your Investment</h2>
              <p className="text-gray-600 leading-relaxed">
                Left unaddressed, storm damage leads to leaks, mold, structural rot, and skyrocketing repair costs. LP3 Roofing responds quickly to minimize further damage and protect your home while the claim process is underway. We provide temporary protective measures at no charge when needed.
              </p>
            </div>

            {/* What's Included */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-950 mb-6">What&apos;s Included</h2>
              <ul className="space-y-3">
                {[
                  "Comprehensive free roof inspection and damage assessment",
                  "Detailed photo documentation for insurance claim",
                  "Direct communication with your insurance adjuster",
                  "Supplement filing to maximize your claim value",
                  "Full roof replacement or repair with premium materials",
                  "Manufacturer and workmanship warranties",
                  "Final inspection and walkthrough with homeowner",
                  "Clean-up and removal of all old materials",
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
