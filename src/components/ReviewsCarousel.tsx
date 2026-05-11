'use client'

import { useState, useEffect, useRef } from 'react'
import { useReveal } from '@/hooks/useReveal'

const reviews = [
  {
    name: 'Chris J',
    text: "You'd be foolish not to use this company for your roofing and construction needs. Aaron and his crew did an amazing job at a very reasonable price. Don't waste your money on guys that go door to door. Thanks for the amazing job Aaron!!!",
    rating: 5,
  },
  {
    name: 'kiko cazares',
    text: "I don't usually write reviews, but when a company shows up on time, fixes my roof, and doesn't leave my yard looking like a crime scene… they've earned it. 😂 LP3 Roofing and Construction was professional, honest, and ridiculously easy to work with.",
    rating: 5,
  },
  {
    name: 'Conch Clement',
    text: "LP3 Roofing & Construction replaced my roofs and garage, replaced decking that was damaged with new wood — very professional and honest. Cleaned up all trash and hauled off all debris. All workers were polite. Very happy with the job, definitely a 10+ out of 10.",
    rating: 5,
  },
  {
    name: 'Chris Carpenter',
    text: "LP3 Roofing & Construction did outstanding work replacing both my home's roof and outdoor fencing. Aaron is very honest and professional to work with, and he made the insurance claim process on my roof a breeze. Highly recommend.",
    rating: 5,
  },
  {
    name: 'Steven Torres',
    text: "Aaron and his team did a great job identifying and providing a fix for the roof for my exhaust fan. He communicated well through the process and conducted a water test to confirm no further issues occurred. I highly recommend Aaron and his team.",
    rating: 5,
  },
]

function Stars() {
  return (
    <div className="flex gap-1 justify-center">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsCarousel() {
  const ref = useReveal()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const review = reviews[current]

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="reveal text-orange-500 text-xs font-bold uppercase tracking-[4px] mb-3">5-Star Reviews</p>
        <h2 className="reveal delay-100 text-3xl sm:text-4xl font-extrabold text-gray-950 mb-2">Real Customer Reviews</h2>
        <a
          href="https://www.google.com/maps/search/LP3+Roofing+Fort+Worth"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 underline hover:text-orange-500 transition-colors"
        >
          See All Reviews
        </a>

        {/* Card */}
        <div className="reveal delay-200 mt-10 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-500">
          {/* Header bar */}
          <div className="bg-gray-950 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* Google G */}
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-white font-bold text-sm">Google Review</span>
            </div>
            <Stars />
          </div>

          {/* Review body */}
          <div className="px-8 py-8">
            <p className="font-bold text-gray-950 text-lg mb-4">{review.name}</p>
            <p className="text-gray-600 leading-relaxed text-base">&ldquo;{review.text}&rdquo;</p>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === current ? 'bg-orange-500 scale-110' : 'bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
