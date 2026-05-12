'use client'

import { useState } from 'react'
import Footer from '@/components/Footer'

type FilterType = 'All' | 'Residential' | 'Commercial' | 'Storm'

const projects = [
  { id: 1, label: 'Residential Replacement', category: 'Residential' as FilterType },
  { id: 2, label: 'Storm Damage Repair', category: 'Storm' as FilterType },
  { id: 3, label: 'Commercial TPO', category: 'Commercial' as FilterType },
  { id: 4, label: 'Residential Repair', category: 'Residential' as FilterType },
  { id: 5, label: 'Hail Damage Replacement', category: 'Storm' as FilterType },
  { id: 6, label: 'Commercial Metal Roof', category: 'Commercial' as FilterType },
  { id: 7, label: 'New Construction', category: 'Residential' as FilterType },
  { id: 8, label: 'Wind Damage Repair', category: 'Storm' as FilterType },
  { id: 9, label: 'Flat Roof Replacement', category: 'Commercial' as FilterType },
  { id: 10, label: 'Shingle Upgrade', category: 'Residential' as FilterType },
  { id: 11, label: 'Storm Emergency Repair', category: 'Storm' as FilterType },
  { id: 12, label: 'EPDM Installation', category: 'Commercial' as FilterType },
]

const filters: FilterType[] = ['All', 'Residential', 'Commercial', 'Storm']

export default function GalleryPage() {
  const [active, setActive] = useState<FilterType>('All')

  const visible = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      {/* Hero */}
      <section className="bg-gray-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Our <span className="text-white">Work</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Browse our portfolio of completed roofing projects across the Fort Worth and DFW area.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
                  active === f
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((p) => (
              <div key={p.id} className="overflow-hidden rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-200">
                <img
                  src={`https://placehold.co/600x400/1a1a1a/ffffff?text=${encodeURIComponent(p.label)}`}
                  alt={p.label}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">{p.category}</span>
                  <p className="mt-1 font-semibold text-gray-950">{p.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
