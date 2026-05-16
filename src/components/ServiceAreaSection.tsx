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
  const [truckX, setTruckX] = useState(100) // % offset from right, 100 = fully off screen

  // Scroll-driven truck animation
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowH = window.innerHeight
      // Start animating when section top hits bottom of screen
      // Complete when section top hits center of screen
      const start = windowH
      const end = windowH * 0.3
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)))
      setTruckX(100 - progress * 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
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
        center: { lat: 32.92, lng: -97.18 },
        zoom: 9,
        disableDefaultUI: true,
        zoomControl: true,
        styles: [
          { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#b0b0b0' }] },
        ],
      })
      new window.google.maps.Circle({
        map, center: { lat: 32.92, lng: -97.18 }, radius: 40000,
        strokeColor: '#f97316', strokeOpacity: 0.9, strokeWeight: 3,
        fillColor: '#f97316', fillOpacity: 0.12,
      })
      new window.google.maps.Marker({
        position: { lat: 32.92, lng: -97.18 }, map,
        icon: { path: window.google.maps.SymbolPath.CIRCLE, scale: 12, fillColor: '#f97316', fillOpacity: 1, strokeColor: '#ffffff', strokeWeight: 3 },
      })
      setMapLoaded(true)
    }).catch(() => {})
    return () => { mounted = false }
  }, [])

  return (
    <section ref={sectionRef} className="bg-black py-20" style={{ overflowX: 'clip' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <p className="font-display text-white text-xs font-bold uppercase tracking-[4px] mb-3">Service Area</p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">Proudly Serving North Fort Worth & DFW</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm">
            Serving the entire northside DFW — from Keller to Grapevine, Southlake to Azle. If you&apos;re in the DFW area, LP3 is your local roofer.
          </p>
        </div>

        {/* Map */}
        <div className="rounded-2xl shadow-2xl border border-gray-700 w-full lg:w-3/4" style={{ height: '420px', position: 'relative', zIndex: 1 }}>
          <div ref={mapContainerRef} className="w-full h-full rounded-2xl overflow-hidden" style={{ display: mapLoaded ? 'block' : 'none' }} />
          {!mapLoaded && (
            <div className="w-full h-full rounded-2xl overflow-hidden flex items-center justify-center bg-black">
              <div className="w-10 h-10 border-4 border-gray-700 border-t-transparent rounded-none animate-spin" />
            </div>
          )}
        </div>

        {/* Truck — mobile: negative margin pulls it up over map. Desktop: absolute */}
        <div className="relative lg:hidden" style={{ marginTop: '-60px', zIndex: 20, transform: `translateX(${truckX}%)`, transition: 'transform 0.1s linear', willChange: 'transform' }}>
          <Image
            src="https://dwwfegzxjccqfrtgspzx.supabase.co/storage/v1/object/public/assets/lp33%20truckk.png"
            alt="LP3 Roofing truck"
            width={1654}
            height={640}
            className="w-full h-auto"
          />
        </div>

        {/* Desktop truck — absolute overlap */}
        <div className="hidden lg:block" style={{ position: 'relative', zIndex: 20, marginTop: '-140px', marginLeft: '35%' }}>
          <div
            style={{
              transform: `translateX(${truckX}%)`,
              willChange: 'transform',
            }}
          >
            <Image
              src="https://dwwfegzxjccqfrtgspzx.supabase.co/storage/v1/object/public/assets/lp33%20truckk.png"
              alt="LP3 Roofing truck"
              width={1654}
              height={640}
              className="w-full h-auto"
            />
          </div>
        </div>



        {/* City pills */}
        <div className="flex flex-wrap gap-3 mt-8 justify-center">
          {['Colleyville', 'Southlake', 'Grapevine', 'Keller', 'Westlake', 'North Richland Hills', 'Watauga', 'Fort Worth', 'Hurst', 'Haltom City', 'Haslet', 'Saginaw', 'Azle'].map((city) => (
            <span key={city} className="flex items-center gap-2 text-gray-300 text-sm bg-black px-4 py-2 rounded-none border border-gray-700">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              {city}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
