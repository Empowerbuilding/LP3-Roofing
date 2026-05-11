'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

let googleMapsPromise: Promise<void> | null = null
function loadGoogleMaps(apiKey: string): Promise<void> {
  if (googleMapsPromise) return googleMapsPromise
  if (typeof window !== 'undefined' && window.google?.maps) return Promise.resolve()
  googleMapsPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`
    script.async = true; script.defer = true
    script.onload = () => resolve()
    script.onerror = () => reject()
    document.head.appendChild(script)
  })
  return googleMapsPromise
}

export default function ServiceAreaSection() {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapInitRef = useRef(false)
  const [mapLoaded, setMapLoaded] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [truckVisible, setTruckVisible] = useState(false)

  // Slide-in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTruckVisible(true) },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Google Maps init
  useEffect(() => {
    if (mapInitRef.current) return
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    if (!apiKey) return
    let mounted = true
    loadGoogleMaps(apiKey).then(() => {
      if (!mounted || !mapContainerRef.current || mapInitRef.current) return
      mapInitRef.current = true
      const map = new window.google.maps.Map(mapContainerRef.current, {
        center: { lat: 32.8, lng: -97.35 },
        zoom: 10,
        disableDefaultUI: true,
        zoomControl: true,
        styles: [
          { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#a8d4e6' }] },
          { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#f5f3ef' }] },
          { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#ffffff' }] },
          { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#e8e4dc' }] },
        ],
      })
      new window.google.maps.Circle({
        map,
        center: { lat: 32.8, lng: -97.35 },
        radius: 40000,
        strokeColor: '#f97316',
        strokeOpacity: 0.9,
        strokeWeight: 3,
        fillColor: '#f97316',
        fillOpacity: 0.12,
      })
      new window.google.maps.Marker({
        position: { lat: 32.8, lng: -97.35 },
        map,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 12,
          fillColor: '#f97316',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 3,
        },
      })
      setMapLoaded(true)
    }).catch(() => {})
    return () => { mounted = false }
  }, [])

  return (
    <section ref={sectionRef} className="bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-[4px] mb-3">Service Area</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Proudly Serving North Fort Worth & DFW</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm">
            From Keller to Saginaw, Haslet to Azle — if you&apos;re in the DFW area, LP3 is your local roofer.
          </p>
        </div>

        {/* Map + overlapping truck */}
        <div className="relative">

          {/* Map container — extra bottom padding so truck has room to overlap */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800 w-full lg:w-3/4" style={{ height: '420px' }}>
            <div ref={mapContainerRef} className="w-full h-full" style={{ display: mapLoaded ? 'block' : 'none' }} />
            {!mapLoaded && (
              <div className="w-full h-full flex items-center justify-center bg-gray-900">
                <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </div>

          {/* Truck — absolutely positioned overlapping bottom-right of map, slides in from right */}
          <div
            className={`lg:absolute lg:bottom-[-60px] lg:right-0 mt-6 lg:mt-0 lg:w-[60%] ${truckVisible ? 'truck-visible' : 'truck-hidden'}`}
            style={{ zIndex: 10 }}
          >
            <Image
              src="https://dwwfegzxjccqfrtgspzx.supabase.co/storage/v1/object/public/assets/truck-nobg.png"
              alt="LP3 Roofing truck"
              width={1654}
              height={640}
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>

        {/* City pills */}
        <div className="flex flex-wrap gap-3 mt-24 lg:mt-20 justify-center">
          {['Fort Worth', 'Keller', 'Saginaw', 'Haslet', 'Azle', 'North Richland Hills', 'Watauga', 'Haltom City'].map((city) => (
            <span key={city} className="flex items-center gap-2 text-gray-300 text-sm bg-gray-900 px-4 py-2 rounded-full border border-gray-800">
              <span className="w-2 h-2 rounded-full bg-orange-500 inline-block" />
              {city}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
