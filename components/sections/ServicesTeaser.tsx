'use client'

import { motion } from 'motion/react'
import { ClipReveal } from '@/components/ui/ClipReveal'
import { DrawLine } from '@/components/ui/DrawLine'

const HEADING_FONT = '"Neue Haas Unica", "Helvetica Neue", Arial, sans-serif'
const BODY_FONT    = '"EB Garamond", Garamond, Georgia, serif'

const CARD_TEXT  = '#F3ECE6'
const CARD_MUTED = 'rgba(243,236,230,0.55)'

const FEATURED_SERVICE = {
  colour: '#004225',
  badge: 'Founding rate',
  title: 'Digital Flagship Sprint',
  body: 'A concept-led redesign of the pages that shape first impression, product feel, and brand perception. Ideal for brands whose product or identity feels stronger than their current site.',
  includes: [
    'Visual concept direction',
    'Page strategy',
    'Homepage and key page design',
    'Mobile refinement',
    'Shopify or Framer build',
    'Copy structure guidance',
  ],
  price: 'From £950',
  priceNote: 'Founding rate',
  cta: 'Start a project →',
}

const SUPPORT_SERVICES = [
  {
    colour: '#1D4ED8',
    title: 'Asset Direction Pack',
    body: 'Visual direction for imagery used across the site. Ideal for brands that need stronger image selection, layout consistency, and clearer visual hierarchy.',
    cta: 'Enquire →',
  },
  {
    colour: '#5B21B6',
    title: 'Page Extensions',
    body: 'Additional pages for campaigns, collections, product storytelling, and seasonal updates. Ideal for brands that need to expand the site without starting from zero.',
    cta: 'Enquire →',
  },
]

function FeaturedCard() {
  const s = FEATURED_SERVICE
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px' }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        style={{
          background: 'rgba(28,28,28,0.06)',
          border: '1px solid rgba(28,28,28,0.1)',
          borderRadius: 22,
          padding: 3,
        }}
      >
        <div
          style={{
            background: s.colour,
            borderRadius: 19,
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
            padding: 'clamp(24px, 4vw, 44px)',
          }}
        >
          {/* Badge */}
          <span
            style={{
              fontFamily: 'var(--font-fragment), monospace',
              fontSize: '10px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              background: 'rgba(243,236,230,0.15)',
              color: CARD_TEXT,
              padding: '4px 12px',
              borderRadius: 9999,
              display: 'inline-block',
              marginBottom: 28,
            }}
          >
            {s.badge}
          </span>

          {/* Two-column: title + body / includes */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-10">
            <div>
              <h3
                style={{
                  fontFamily: HEADING_FONT,
                  fontWeight: 900,
                  fontSize: 'clamp(26px, 3.2vw, 46px)',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.0,
                  color: CARD_TEXT,
                  marginBottom: 20,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: BODY_FONT,
                  fontSize: '17px',
                  lineHeight: 1.65,
                  color: CARD_MUTED,
                }}
              >
                {s.body}
              </p>
            </div>

            <div>
              <p
                style={{
                  fontFamily: 'var(--font-fragment), monospace',
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: CARD_MUTED,
                  marginBottom: 16,
                }}
              >
                Includes
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {s.includes.map((item, i) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: BODY_FONT,
                      fontSize: '16px',
                      lineHeight: 1.5,
                      color: CARD_MUTED,
                      paddingTop: i > 0 ? 10 : 0,
                      paddingBottom: 10,
                      borderBottom: i < s.includes.length - 1 ? '1px solid rgba(243,236,230,0.1)' : 'none',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Price + CTA */}
          <div
            style={{
              borderTop: '1px solid rgba(243,236,230,0.12)',
              paddingTop: 28,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: 16,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: HEADING_FONT,
                  fontWeight: 900,
                  fontSize: 'clamp(28px, 3vw, 44px)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  color: CARD_TEXT,
                }}
              >
                {s.price}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-fragment), monospace',
                  fontSize: '10px',
                  letterSpacing: '0.06em',
                  color: CARD_MUTED,
                  marginTop: 5,
                }}
              >
                {s.priceNote}
              </p>
            </div>
            <a
              href="#contact"
              className="btn-pill btn-pill-card"
              style={{ fontSize: '13px', padding: '10px 22px', '--btn-hover-bg': s.colour } as React.CSSProperties}
            >
              {s.cta}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function SupportCard({
  service,
  delay,
}: {
  service: typeof SUPPORT_SERVICES[0]
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px' }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ height: '100%' }}
    >
      <div
        style={{
          background: 'rgba(28,28,28,0.06)',
          border: '1px solid rgba(28,28,28,0.1)',
          borderRadius: 22,
          padding: 3,
          height: '100%',
        }}
      >
        <div
          style={{
            background: service.colour,
            borderRadius: 19,
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
            padding: 'clamp(20px, 3.5vw, 32px)',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h3
            style={{
              fontFamily: HEADING_FONT,
              fontWeight: 900,
              fontSize: 'clamp(20px, 2.2vw, 30px)',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              color: CARD_TEXT,
              marginBottom: 14,
            }}
          >
            {service.title}
          </h3>

          <p
            style={{
              fontFamily: BODY_FONT,
              fontSize: '16px',
              lineHeight: 1.6,
              color: CARD_MUTED,
              flex: 1,
              marginBottom: 24,
            }}
          >
            {service.body}
          </p>

          <div
            style={{
              borderTop: '1px solid rgba(243,236,230,0.12)',
              paddingTop: 20,
            }}
          >
            <a
              href="#contact"
              className="btn-pill btn-pill-card"
              style={{ fontSize: '12px', padding: '8px 18px', '--btn-hover-bg': service.colour } as React.CSSProperties}
            >
              {service.cta}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ServicesTeaser() {
  return (
    <section
      id="services"
      style={{ background: 'var(--bg)', paddingTop: 'clamp(56px, 8vw, 96px)', paddingBottom: 'clamp(56px, 8vw, 96px)' }}
    >
      <div className="mx-auto px-6 md:px-12" style={{ maxWidth: 1200 }}>

        {/* Header */}
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
                Services
              </h2>
            </ClipReveal>
          </div>
        </div>

        {/* Featured service */}
        <div className="mb-4">
          <FeaturedCard />
        </div>

        {/* Support services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {SUPPORT_SERVICES.map((s, i) => (
            <SupportCard key={s.title} service={s} delay={i * 0.08} />
          ))}
        </div>

        {/* Footer note */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{ borderTop: '1px solid var(--border)', paddingTop: 32 }}
        >
          <p style={{ fontFamily: BODY_FONT, fontSize: '18px', color: 'var(--muted)', maxWidth: 480 }}>
            Not sure where to start? Tell us about the brand and we&apos;ll figure it out.
          </p>
          <a href="#contact" className="btn-pill flex-shrink-0">
            Enquire →
          </a>
        </div>

      </div>
    </section>
  )
}
