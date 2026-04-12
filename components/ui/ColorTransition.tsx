'use client'

import { useEffect } from 'react'

const DARK_COLORS: Record<string, string> = {
  green:  '#0A1F14',
  purple: '#120D1F',
  blue:   '#060C18',
}

const LIGHT_COLORS: Record<string, string> = {
  green:  '#EAF2ED',
  purple: '#EDE8F5',
  blue:   '#E8EDF5',
}

export default function ColorTransition() {
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const colors = prefersDark ? DARK_COLORS : LIGHT_COLORS

    const sections = document.querySelectorAll<HTMLElement>('[data-color]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const colorKey = (entry.target as HTMLElement).dataset.color ?? 'green'
            const color = colors[colorKey] ?? colors.green
            document.documentElement.style.setProperty('--bg-color', color)
          }
        })
      },
      { threshold: 0.35 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return null
}
