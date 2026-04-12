'use client'

import { useRef, ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

interface ParallaxLayerProps {
  children: ReactNode
  offset?: number        // px to travel over scroll range (default 40)
  className?: string
}

// Wraps content in a scroll-driven parallax layer.
// Moves `offset` px upward as user scrolls through the section.
export default function ParallaxLayer({
  children,
  offset = 40,
  className,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}
