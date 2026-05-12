'use client'

import { useState, useEffect, useRef } from 'react'
import React from 'react'

const faqs = [
  {
    q: 'What Type Of Roofing Warranties Come With My Roof?',
    a: 'LP3 Roofing installs Atlas and GAF certified roofing systems backed by industry-leading warranties. Depending on your selected system, you can receive up to a lifetime material warranty and a 10-year workmanship warranty. We handle all warranty registration on your behalf so you\'re fully protected from day one.',
  },
  {
    q: 'Do You Help With Insurance Claims?',
    a: 'Absolutely — it\'s one of our specialties. Aaron and our team have extensive experience navigating the insurance claim process. We\'ll document the damage, work directly with your adjuster, handle all the paperwork, and make the process as stress-free as possible for you.',
  },
  {
    q: 'How Much Does A Roof Replacement Cost?',
    a: 'Every roof is different. Cost depends on the size of your home, the materials selected, and the complexity of your roof. We offer free inspections and transparent, no-surprise estimates. Many of our customers pay little to nothing out of pocket when their replacement is covered through their homeowner\'s insurance.',
  },
  {
    q: 'Are You Licensed & Insured?',
    a: 'Yes — LP3 Roofing & Construction is fully licensed and insured in Texas. We are also BBB accredited. You\'ll never have to worry about liability on your property. We take professionalism seriously from the first call to the final cleanup.',
  },
  {
    q: 'How Long Does A Roof Replacement Take?',
    a: 'Most residential roof replacements are completed in a single day. Our crews are efficient, experienced, and come prepared with everything needed to get the job done right without dragging it out. We\'ll also clean up completely before we leave.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number>(0)
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20" style={{ background: "#f0f0f0" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-display text-white text-xs font-bold uppercase tracking-[4px] mb-3" style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'all 0.6s ease' }}>FAQ</p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-950" style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'all 0.6s ease 0.1s' }}>Got Questions? We&apos;ve Got Answers.</h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: `all 0.5s ease ${i * 0.1}s` }}
              className={`border-2 overflow-hidden transition-colors duration-300 ${
                open === i ? 'bg-black border-black' : 'bg-white border-gray-200 hover:border-gray-400'
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                onClick={() => setOpen(i)}
              >
                <span className={`font-bold text-base sm:text-lg ${open === i ? 'text-white' : 'text-gray-950'}`}>
                  {faq.q}
                </span>
                <span className={`text-2xl font-light flex-shrink-0 ${open === i ? 'text-gray-300' : 'text-white'}`}>
                  {open === i ? '−' : '+'}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="/contact" className="text-gray-500 hover:text-white text-sm underline underline-offset-4 transition-colors">
            Have more questions? Contact us →
          </a>
        </div>
      </div>
    </section>
  )
}
