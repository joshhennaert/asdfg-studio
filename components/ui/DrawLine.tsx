'use client'

import { motion } from 'motion/react'

export function DrawLine({ color }: { color?: string }) {
  return (
    <motion.div
      style={{
        height: 1,
        background: color ?? 'var(--border)',
        transformOrigin: 'left center',
      }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
    />
  )
}
