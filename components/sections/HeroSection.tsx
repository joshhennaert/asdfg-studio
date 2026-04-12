'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const HEADING_FONT = '"Neue Haas Unica", "Helvetica Neue", Arial, sans-serif'
const BODY_FONT    = '"EB Garamond", Garamond, Georgia, serif'

function MaskWord({ word, delay }: { word: string; delay: number }) {
  return (
    <span style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
      <motion.span
        style={{ display: 'inline-block' }}
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{ delay, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
      >
        {word}
      </motion.span>
    </span>
  )
}

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const headlineY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const subY      = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])
  const fadeOut   = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex flex-col justify-between overflow-hidden"
      style={{
        minHeight: '100dvh',
        background: '#1C1C1C',
        padding: '0 clamp(24px, 4vw, 64px)',
        paddingTop: '72px',
        paddingBottom: '56px',
      }}
    >
      {/* Headline */}
      <motion.div
        style={{ y: headlineY, opacity: fadeOut }}
        className="flex-1 flex flex-col justify-center"
      >
        <h1
          style={{
            fontFamily: HEADING_FONT,
            fontWeight: 900,
            fontSize: 'clamp(36px, 11vw, 200px)',
            letterSpacing: '-0.035em',
            lineHeight: 0.87,
            color: '#F3ECE6',
            paddingBottom: '0.1em',
          }}
        >
          <span style={{ display: 'block' }}>
            <MaskWord word="Your" delay={0.1} />
            &nbsp;
            <MaskWord word="store," delay={0.22} />
          </span>
          <span style={{ display: 'block' }}>
            <MaskWord word="done" delay={0.38} />
            &nbsp;
            <MaskWord word="properly." delay={0.52} />
          </span>
        </h1>
      </motion.div>

      {/* Bottom row */}
      <motion.div
        style={{ y: subY, opacity: fadeOut }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <motion.p
          className="leading-relaxed max-w-sm"
          style={{ fontFamily: BODY_FONT, fontSize: '18px', color: 'rgba(243,236,230,0.55)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Ecommerce stores built for brands that take their product seriously.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="/work"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 9999,
              border: '1.5px solid rgba(243,236,230,0.4)',
              padding: '14px 32px',
              fontFamily: HEADING_FONT,
              fontWeight: 600,
              fontSize: '15px',
              color: '#F3ECE6',
              background: 'transparent',
              whiteSpace: 'nowrap',
              transition: 'background 150ms, border-color 150ms',
              textDecoration: 'none',
              minHeight: 48,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(243,236,230,0.08)'
              e.currentTarget.style.borderColor = '#F3ECE6'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(243,236,230,0.4)'
            }}
          >
            See the work
          </a>
          <a
            href="#contact"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 9999,
              border: '1.5px solid #F3ECE6',
              padding: '14px 32px',
              fontFamily: HEADING_FONT,
              fontWeight: 600,
              fontSize: '15px',
              color: '#1C1C1C',
              background: '#F3ECE6',
              whiteSpace: 'nowrap',
              transition: 'background 150ms, color 150ms, border-color 150ms',
              textDecoration: 'none',
              minHeight: 48,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#004225'
              e.currentTarget.style.borderColor = '#004225'
              e.currentTarget.style.color = '#F3ECE6'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#F3ECE6'
              e.currentTarget.style.borderColor = '#F3ECE6'
              e.currentTarget.style.color = '#1C1C1C'
            }}
          >
            Get in touch →
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
