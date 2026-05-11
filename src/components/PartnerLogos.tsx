import Image from 'next/image'

const logos = [
  {
    name: 'Atlas Roofing',
    src: 'https://static.wixstatic.com/media/fdf3af_a4f2cbd198ec405ab054db29f3705940~mv2.png/v1/fill/w_200,h_133,al_c,q_85,enc_avif,quality_auto/atlas-logo.png',
    width: 200,
    height: 133,
  },
  {
    name: 'TAMKO',
    src: 'https://static.wixstatic.com/media/fdf3af_95245401b04b4e229097a80b051513df~mv2.png/v1/fill/w_189,h_147,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/tamko-logo-png-transparent.png',
    width: 189,
    height: 147,
  },
  {
    name: 'GAF',
    src: 'https://static.wixstatic.com/media/fdf3af_d7cda47b53164f88b955fac0dd5dbf6c~mv2.png/v1/fill/w_177,h_138,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GAF-Final.png',
    width: 177,
    height: 138,
  },
  {
    name: 'DECRA',
    src: 'https://static.wixstatic.com/media/fdf3af_b4a511fd6d7645e0a03d6955e50ca766~mv2.jpg/v1/fill/w_234,h_76,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DECRA-logo.jpg',
    width: 234,
    height: 76,
  },
]

export default function PartnerLogos() {
  return (
    <section className="bg-gray-50 py-12 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">Our Trusted Partners</p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
