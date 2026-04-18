'use client'

import { motion } from 'motion/react'
import { ClipReveal } from '@/components/ui/ClipReveal'

const HEADING_FONT = '"Neue Haas Unica", "Helvetica Neue", Arial, sans-serif'
const BODY_FONT    = '"EB Garamond", Garamond, Georgia, serif'

export default function IntroSection() {
  return (
    <section
      id="intro"
      style={{
        background: 'var(--bg)',
        paddingTop: 'clamp(72px, 10vw, 128px)',
        paddingBottom: 'clamp(72px, 10vw, 128px)',
      }}
    >
      <div className="mx-auto px-6 md:px-12" style={{ maxWidth: 1200 }}>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-14 md:gap-24">

          {/* Left: studio name + one-liner */}
          <div>
            <ClipReveal>
              <p
                style={{
                  fontFamily: HEADING_FONT,
                  fontWeight: 900,
                  fontSize: 'clamp(18px, 2vw, 26px)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: 'var(--fg)',
                  marginBottom: 16,
                }}
              >
                asdfg.studio
              </p>
            </ClipReveal>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: BODY_FONT,
                fontSize: '17px',
                lineHeight: 1.65,
                color: 'var(--muted)',
              }}
            >
              A creative studio focused on digital brand presence for fashion and selected wellness brands.
            </motion.p>
          </div>

          {/* Right: studio description */}
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: BODY_FONT, fontSize: '18px', lineHeight: 1.7, color: 'var(--fg)' }}
            >
              Shaped by spontaneity, experimentation, and self-expression, the studio balances that energy with a clean, tasteful, and restrained approach.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: BODY_FONT, fontSize: '18px', lineHeight: 1.7, color: 'var(--muted)' }}
            >
              We combine creative direction, page design, and web build to create online experiences that feel visually strong, clear, and commercially aware.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ paddingTop: 8 }}
            >
              <p
                style={{
                  fontFamily: HEADING_FONT,
                  fontWeight: 700,
                  fontSize: '17px',
                  lineHeight: 1.5,
                  color: 'var(--fg)',
                  marginBottom: 4,
                }}
              >
                Not a broad agency.
              </p>
              <p
                style={{
                  fontFamily: HEADING_FONT,
                  fontWeight: 700,
                  fontSize: '17px',
                  lineHeight: 1.5,
                  color: 'var(--fg)',
                  marginBottom: 12,
                }}
              >
                Not vague consulting.
              </p>
              <p
                style={{
                  fontFamily: BODY_FONT,
                  fontSize: '17px',
                  lineHeight: 1.65,
                  color: 'var(--muted)',
                }}
              >
                A focused studio for brands that need their site to match the quality of what they make.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
