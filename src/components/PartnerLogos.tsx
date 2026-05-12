'use client'
import React from 'react'
import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'

const logos = [
  { name: 'Atlas Roofing', src: 'https://static.wixstatic.com/media/fdf3af_a4f2cbd198ec405ab054db29f3705940~mv2.png/v1/fill/w_200,h_133,al_c,q_85,enc_avif,quality_auto/atlas-logo.png', width: 200, height: 133 },
  { name: 'TAMKO', src: 'https://static.wixstatic.com/media/fdf3af_95245401b04b4e229097a80b051513df~mv2.png/v1/fill/w_189,h_147,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/tamko-logo-png-transparent.png', width: 189, height: 147 },
  { name: 'GAF', src: 'https://static.wixstatic.com/media/fdf3af_d7cda47b53164f88b955fac0dd5dbf6c~mv2.png/v1/fill/w_177,h_138,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GAF-Final.png', width: 177, height: 138 },
  { name: 'DECRA', src: 'https://static.wixstatic.com/media/fdf3af_b4a511fd6d7645e0a03d6955e50ca766~mv2.jpg/v1/fill/w_234,h_76,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DECRA-logo.jpg', width: 234, height: 76 },
  { name: 'Farmers Insurance', src: 'https://static.wixstatic.com/media/fdf3af_2738faadce1a4d599f7dc73b2bbd3dab~mv2.png/v1/fill/w_283,h_121,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/share-opengraph-1200.png', width: 283, height: 121 },
  { name: 'State Farm', src: 'https://static.wixstatic.com/media/fdf3af_894323b1b82443bab7b86a4a33fade04~mv2.png/v1/fill/w_252,h_35,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/State_Farm_logo_svg.png', width: 252, height: 35 },
  { name: 'Allstate', src: 'https://static.wixstatic.com/media/fdf3af_d3aa9eb270ef406c8eee5d5c1f1c52f5~mv2.png/v1/fill/w_245,h_138,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Allstate-Logo.png', width: 245, height: 138 },
  { name: 'American Family Insurance', src: 'https://static.wixstatic.com/media/fdf3af_76f0b13396b1409284baf44db053957e~mv2.jpg/v1/fill/w_234,h_105,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/American-Family-Insurance-Logo.jpg', width: 234, height: 105 },
]

export default function PartnerLogos() {
  const ref = useReveal()
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-8 border-y border-gray-300" style={{ background: "#e8e8e8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="reveal text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">Our Trusted Partners</p>
        {/* Desktop: single row | Mobile: staggered 4-4 */}
        <div className="hidden md:grid md:grid-cols-8 items-center gap-6">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-10 w-auto object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Mobile staggered layout */}
        <div className="md:hidden flex flex-col gap-4">
          <div className="flex justify-center items-center gap-6">
            {logos.slice(0, 4).map((logo) => (
              <div key={logo.name} className="flex items-center justify-center">
                <Image src={logo.src} alt={logo.name} width={logo.width} height={logo.height}
                  className="h-11 w-auto object-contain transition-all duration-300" />
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-6 ml-8">
            {logos.slice(4).map((logo) => (
              <div key={logo.name} className="flex items-center justify-center">
                <Image src={logo.src} alt={logo.name} width={logo.width} height={logo.height}
                  className="h-11 w-auto object-contain transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
