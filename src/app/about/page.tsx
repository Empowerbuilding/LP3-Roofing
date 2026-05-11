import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About LP3 Roofing & Construction | Fort Worth TX",
  description: "Learn about LP3 Roofing & Construction — Fort Worth's trusted roofing company with 20+ years of experience serving the DFW area.",
};

const values = [
  {
    title: "Integrity First",
    desc: "We give honest assessments, fair prices, and recommendations that serve your best interest — not ours.",
    icon: (
      <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Craftsmanship",
    desc: "We take pride in every job, using premium materials and following manufacturer installation standards on every project.",
    icon: (
      <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    title: "Community",
    desc: "We&apos;re Fort Worth locals. We live, work, and raise our families here — and we treat every home like it&apos;s our neighbor&apos;s.",
    icon: (
      <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

const team = [
  {
    name: "Luis Perez",
    title: "Founder & CEO",
    bio: "Luis founded LP3 Roofing with a single truck and a commitment to honest work. Over 20 years later, he still personally oversees every major project.",
  },
  {
    name: "Pedro Reyes",
    title: "Operations Manager",
    bio: "Pedro ensures every crew has what they need to deliver on time. With 15 years in the industry, he&apos;s seen every roofing challenge imaginable.",
  },
  {
    name: "Marco Salinas",
    title: "Lead Estimator & Insurance Specialist",
    bio: "Marco works directly with insurance adjusters to maximize claim value for homeowners. He&apos;s recovered millions in additional coverage for LP3 clients.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            About <span className="text-orange-500">LP3 Roofing</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Fort Worth&apos;s trusted roofing company. Family-owned, locally operated, and committed to doing the right thing every time.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-950 mb-6">Our Story</h2>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                LP3 Roofing &amp; Construction was founded in Fort Worth by Luis Perez with a simple mission: provide Fort Worth homeowners with the honest, skilled roofing work they deserve. Starting with residential repairs in the Westside and Ridglea neighborhoods, LP3 quickly grew through word-of-mouth referrals from satisfied customers.
              </p>
              <p>
                After the devastating hailstorms of 2015, LP3 became one of the first local companies to develop a dedicated insurance claims department — helping hundreds of homeowners navigate the process and get their roofs replaced at little to no out-of-pocket cost. That expertise has since become a cornerstone of our business.
              </p>
              <p>
                Today, LP3 Roofing employs over 30 full-time craftsmen and serves all of the DFW metroplex, including Fort Worth, Keller, Burleson, Crowley, Arlington, and beyond. We remain family-owned and committed to the same values that built our reputation: integrity, craftsmanship, and care for our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-950 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-8 border border-gray-100 text-center">
                <div className="flex justify-center mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold text-gray-950 mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-950 text-center mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-950">{member.name}</h3>
                <p className="text-orange-500 font-medium text-sm mt-1">{member.title}</p>
                <p className="mt-3 text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </>
  )
}
