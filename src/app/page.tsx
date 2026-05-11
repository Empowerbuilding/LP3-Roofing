import Link from "next/link";
import PartnerLogos from "@/components/PartnerLogos";
import ServicesSection from "@/components/ServicesSection";
import WarrantySection from "@/components/WarrantySection";
import CTABanner from "@/components/CTABanner";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import HeroForm from "@/components/HeroForm";




export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center min-h-[auto] lg:min-h-screen bg-gray-800">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Headline + subtext + phone */}
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Fort Worth&apos;s{" "}
                <span className="text-orange-500">#1 Rated</span>
                <br />
                Roofing Contractor
              </h1>
              <p className="mt-2 lg:mt-6 text-xs sm:text-xl text-gray-200 leading-snug max-w-lg">
                Licensed &amp; insured. Storm damage specialists. 20+ years serving the DFW area.
                We handle your insurance claim from start to finish — at no extra cost to you.
              </p>
              <a
                href="tel:8175550100"
                className="mt-4 lg:mt-8 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 lg:bg-transparent lg:hover:bg-transparent text-white lg:hover:text-orange-400 font-bold rounded-full px-4 py-1.5 lg:px-0 lg:py-0 lg:rounded-none transition-colors duration-200 mx-auto lg:mx-0 text-sm lg:text-base"
              >
                <div className="flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-white/20 lg:bg-orange-500 flex-shrink-0">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="hidden lg:block text-sm text-gray-300">Call us anytime</div>
                  <div className="text-base lg:text-2xl font-bold tracking-wide">817-555-0100</div>
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

      {/* Warranty / About Section */}
      <WarrantySection />

      {/* Reviews */}
      <ReviewsCarousel />

      {/* How It Works */}
      <HowItWorks />

      <CTABanner />
      <Footer />
    </>
  );
}
