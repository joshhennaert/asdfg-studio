'use client'

import { motion } from 'motion/react'
import { ClipReveal } from '@/components/ui/ClipReveal'
import { DrawLine } from '@/components/ui/DrawLine'

const HEADING_FONT = '"Neue Haas Unica", "Helvetica Neue", Arial, sans-serif'
const BODY_FONT    = '"EB Garamond", Garamond, Georgia, serif'

const C = {
  text:   '#F3ECE6',
  muted:  'rgba(243,236,230,0.5)',
  soft:   'rgba(243,236,230,0.65)',
  border: 'rgba(243,236,230,0.12)',
}

const FACTS = [
  ['Based',        'United Kingdom'],
  ['Reach',        'UK & global'],
  ['Availability', 'Now open'],
  ['Approach',     'By conversation'],
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-dark"
      style={{ paddingTop: 'clamp(56px, 8vw, 96px)', paddingBottom: 'clamp(56px, 8vw, 96px)' }}
    >
      <div className="mx-auto px-6 md:px-12" style={{ maxWidth: 1200 }}>

        {/* Section label + heading */}
        <div className="mb-20">
          <DrawLine color={C.border} />
          <div className="pt-6">
            <ClipReveal>
              <h2
                style={{
                  fontFamily: HEADING_FONT,
                  fontWeight: 900,
                  fontSize: 'clamp(22px, 3vw, 40px)',
                  letterSpacing: '-0.03em',
                  lineHeight: 0.95,
                  color: C.text,
                }}
              >
                About
              </h2>
            </ClipReveal>
          </div>
        </div>

        {/* ── Large editorial statement ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ paddingBottom: 64, borderBottom: `1px solid ${C.border}` }}
        >
          <p
            style={{
              fontFamily: HEADING_FONT,
              fontWeight: 900,
              fontSize: 'clamp(32px, 5.5vw, 80px)',
              letterSpacing: '-0.03em',
              lineHeight: 1.0,
              color: C.text,
            }}
          >
            We work with fewer<br />clients on purpose.
          </p>
        </motion.div>

        {/* ── Two-column body copy ── */}
        <div
          className="grid md:grid-cols-2 gap-8 md:gap-20"
          style={{ paddingTop: 56, paddingBottom: 56, borderBottom: `1px solid ${C.border}` }}
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: BODY_FONT, fontSize: '18px', lineHeight: 1.7, color: C.soft }}
          >
            No pitch decks, no discovery treadmills. We have an honest conversation
            about whether we&apos;re the right fit. We&apos;re comfortable saying
            no when we&apos;re not.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px' }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: BODY_FONT, fontSize: '18px', lineHeight: 1.7, color: C.muted }}
          >
            Beautiful work that doesn&apos;t convert is decoration. We design for
            clarity first. Trust is earned in seconds and lost just as fast.
          </motion.p>
        </div>

        {/* ── Horizontal facts strip + CTA ── */}
        <div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-12"
          style={{ paddingTop: 48 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-10">
            {FACTS.map(([label, val], i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px' }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-fragment), monospace',
                    fontSize: '10px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: C.muted,
                    marginBottom: 8,
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    fontFamily: HEADING_FONT,
                    fontWeight: 600,
                    fontSize: '17px',
                    color: C.text,
                  }}
                >
                  {val}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#contact"
            className="btn-pill btn-pill-filled flex-shrink-0 self-start lg:self-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '0px' }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Work with us →
          </motion.a>
        </div>

      </div>
    </section>
  )
}
