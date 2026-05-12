import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gutter Installation | LP3 Roofing & Construction Fort Worth TX",
  description: "Seamless gutter installation and replacement in Fort Worth, TX. Protect your foundation and landscaping with properly installed gutters.",
};

export default function GuttersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Gutter <span className="text-white">Installation</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Seamless gutters custom-fabricated on-site. Protect your home&apos;s foundation, siding, and landscaping from water damage.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-950 mb-4">Why Gutters Matter</h2>
              <p className="text-gray-600 leading-relaxed">
                Gutters are one of the most important — and most overlooked — components of your home&apos;s water management system. Properly installed gutters direct roof runoff away from your foundation, preventing basement flooding, soil erosion, and costly foundation damage. Without them, or with failing gutters, water pools against your home and slowly destroys it.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-950 mb-4">Seamless vs. Sectional Gutters</h2>
              <p className="text-gray-600 leading-relaxed">
                LP3 Roofing installs seamless gutters fabricated on-site to the exact length of your roofline. Unlike sectional gutters that join in multiple places, seamless gutters have only two seams — at the corners — dramatically reducing the chance of leaks. They also look cleaner and require less maintenance than sectional alternatives.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-950 mb-4">Gutter Guards and Downspouts</h2>
              <p className="text-gray-600 leading-relaxed">
                We also install gutter guards that keep leaves and debris out of your gutters while allowing water to flow freely. Properly sized and positioned downspouts ensure water is directed well away from your foundation. We assess each home individually to design a complete drainage solution that works year-round in Fort Worth&apos;s climate.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-950 mb-6">Our Gutter Services</h2>
              <ul className="space-y-3">
                {[
                  "Seamless aluminum gutter installation",
                  "Seamless copper gutter installation",
                  "Fascia-mounted gutter systems",
                  "Downspout installation and relocation",
                  "Gutter guard and leaf protection systems",
                  "Old gutter removal and disposal",
                  "Gutter repair and re-sealing",
                  "Underground downspout drainage systems",
                  "Color matching to home exterior",
                  "Free estimate and drainage assessment",
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
