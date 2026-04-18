'use client'

import { motion } from 'motion/react'
import { ClipReveal } from '@/components/ui/ClipReveal'
import { DrawLine } from '@/components/ui/DrawLine'

const HEADING_FONT = '"Neue Haas Unica", "Helvetica Neue", Arial, sans-serif'
const BODY_FONT    = '"EB Garamond", Garamond, Georgia, serif'

const STEPS = [
  {
    n: '01',
    title: 'Direction',
    body: 'We start by understanding the brand, product, audience, and visual tension. Then we define a clear route for how the site should feel and what it needs to do.',
  },
  {
    n: '02',
    title: 'Structure',
    body: 'We map the key pages, refine the flow, and shape the content and hierarchy around what matters most.',
  },
  {
    n: '03',
    title: 'Design',
    body: 'We design the core pages with a strong visual system, balancing clarity, restraint, and personality.',
  },
  {
    n: '04',
    title: 'Build',
    body: 'Once approved, the design is built and refined for desktop and mobile so it is ready to use, not just to look at.',
  },
  {
    n: '05',
    title: 'Extension',
    body: 'If needed, the system can be extended into new pages, campaigns, and future updates without rebuilding everything from scratch.',
  },
]

export default function ProcessSection() {
  return (
    <section
      id="process"
      style={{
        background: 'var(--bg)',
        paddingTop: 'clamp(56px, 8vw, 96px)',
        paddingBottom: 'clamp(56px, 8vw, 96px)',
      }}
    >
      <div className="mx-auto px-6 md:px-12" style={{ maxWidth: 1200 }}>

        <div className="mb-14">
          <DrawLine />
          <div className="pt-6">
            <ClipReveal>
              <h2
                style={{
                  fontFamily: HEADING_FONT,
                  fontWeight: 900,
                  fontSize: 'clamp(22px, 3vw, 40px)',
                  letterSpacing: '-0.03em',
                  lineHeight: 0.95,
                  color: 'var(--fg)',
                }}
              >
                How we work
              </h2>
            </ClipReveal>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)' }}>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px' }}
              transition={{ duration: 0.65, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              style={{ borderBottom: '1px solid var(--border)', paddingTop: '28px', paddingBottom: '28px' }}
            >
              <div className="grid grid-cols-[32px_1fr] md:grid-cols-[32px_180px_1fr] gap-x-8 md:gap-x-12 items-baseline">
                <span
                  style={{
                    fontFamily: 'var(--font-fragment), monospace',
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    color: 'var(--muted)',
                    paddingTop: 3,
                  }}
                >
                  {step.n}
                </span>
                <h3
                  style={{
                    fontFamily: HEADING_FONT,
                    fontWeight: 700,
                    fontSize: 'clamp(17px, 1.8vw, 22px)',
                    letterSpacing: '-0.01em',
                    color: 'var(--fg)',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="col-start-2 col-end-3 md:col-start-3 md:col-end-4 mt-2 md:mt-0"
                  style={{
                    fontFamily: BODY_FONT,
                    fontSize: '17px',
                    lineHeight: 1.65,
                    color: 'var(--muted)',
                  }}
                >
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
