'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Smooth GSAP-driven body background color morph
// Green → Purple → Blue as sections enter the viewport
export default function ColorMorph() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Force body to start at deep green
    gsap.set(document.body, { backgroundColor: '#0D1F15' })

    const morphs = [
      { trigger: '#services', color: '#130D1E' }, // deep violet
      { trigger: '#about',    color: '#060C18' }, // midnight blue
    ]

    const triggers = morphs.map(({ trigger, color }) =>
      gsap.to(document.body, {
        backgroundColor: color,
        ease: 'none',
        scrollTrigger: {
          trigger,
          start: 'top 85%',
          end:   'top 15%',
          scrub: 1.8,
        },
      })
    )

    return () => {
      triggers.forEach(t => t.scrollTrigger?.kill())
    }
  }, [])

  return null
}
