'use client'

import { motion } from 'motion/react'
import { ClipReveal } from '@/components/ui/ClipReveal'
import { DrawLine } from '@/components/ui/DrawLine'

const HEADING_FONT = '"Neue Haas Unica", "Helvetica Neue", Arial, sans-serif'
const BODY_FONT    = '"EB Garamond", Garamond, Georgia, serif'

const PALETTE = {
  green:  '#004225',
  blue:   '#1D4ED8',
  purple: '#5B21B6',
  pink:   '#BE185D',
  teal:   '#0F766E',
}

const CARD_TEXT  = '#F3ECE6'
const CARD_MUTED = 'rgba(243,236,230,0.55)'

// Top row — 2 featured / highest value
const TOP_SERVICES = [
  {
    colour: PALETTE.green,
    badge: 'Limited, 2 spots',
    title: 'UX & Conversion Audit',
    body: 'A full review of your store in five working days. Every page, every touchpoint, every drop-off. A prioritised action plan you can act on immediately.',
    price: '£149',
    priceNote: '£300 after launch',
    cta: 'Book an audit →',
  },
  {
    colour: PALETTE.blue,
    badge: 'Most popular',
    title: 'Store Design & Build',
    body: 'Custom-built storefronts. Fast, mobile-first, conversion-engineered from the ground up. No theme hacks. Built around your brand.',
    price: 'From £1,250',
    priceNote: 'Scope dependent',
    cta: 'Get in touch →',
  },
]

// Bottom row — 3 supporting
const BOTTOM_SERVICES = [
  {
    colour: PALETTE.purple,
    title: 'Brand Strategy',
    body: 'Positioning, identity, and messaging that makes sense of who you are and what you stand for.',
    price: 'From £800',
    cta: 'Get in touch →',
  },
  {
    colour: PALETTE.pink,
    title: 'TCG Website Build',
    body: 'Specialist storefronts for UK trading card game sellers. Tournament-ready, singles-optimised, collector-focused platforms.',
    price: 'From £400',
    cta: 'Get in touch →',
  },
  {
    colour: PALETTE.teal,
    title: 'Monthly Retainer',
    body: 'Ongoing store management, updates, and priority access for brands that want a studio on call.',
    price: 'From £400/mo',
    cta: 'Get in touch →',
  },
]

function TopCard({
  service,
  delay,
}: {
  service: typeof TOP_SERVICES[0]
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
      {/* Outer bezel */}
      <div
        style={{
          background: 'rgba(28,28,28,0.06)',
          border: '1px solid rgba(28,28,28,0.1)',
          borderRadius: 22,
          padding: 3,
          height: '100%',
        }}
      >
        {/* Inner core */}
        <div
          style={{
            background: service.colour,
            borderRadius: 19,
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
            padding: 'clamp(20px, 4vw, 36px)',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
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
              alignSelf: 'flex-start',
              marginBottom: 24,
            }}
          >
            {service.badge}
          </span>

          {/* Title */}
          <h3
            style={{
              fontFamily: HEADING_FONT,
              fontWeight: 900,
              fontSize: 'clamp(24px, 2.8vw, 38px)',
              letterSpacing: '-0.025em',
              lineHeight: 1.0,
              color: CARD_TEXT,
              marginBottom: 18,
            }}
          >
            {service.title}
          </h3>

          {/* Body */}
          <p
            style={{
              fontFamily: BODY_FONT,
              fontSize: '17px',
              lineHeight: 1.65,
              color: CARD_MUTED,
              flex: 1,
              marginBottom: 28,
            }}
          >
            {service.body}
          </p>

          {/* Price + CTA */}
          <div
            style={{
              borderTop: '1px solid rgba(243,236,230,0.12)',
              paddingTop: 24,
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
                  fontSize: 'clamp(28px, 3vw, 40px)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  color: CARD_TEXT,
                }}
              >
                {service.price}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-fragment), monospace',
                  fontSize: '10px',
                  letterSpacing: '0.06em',
                  color: CARD_MUTED,
                  textDecoration: service.priceNote.startsWith('£') ? 'line-through' : 'none',
                  marginTop: 5,
                }}
              >
                {service.priceNote}
              </p>
            </div>
            <a
              href="#contact"
              className="btn-pill btn-pill-card"
              style={{ fontSize: '13px', padding: '10px 22px', '--btn-hover-bg': service.colour } as React.CSSProperties}
            >
              {service.cta}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function BottomCard({
  service,
  delay,
}: {
  service: typeof BOTTOM_SERVICES[0]
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
      {/* Outer bezel */}
      <div
        style={{
          background: 'rgba(28,28,28,0.06)',
          border: '1px solid rgba(28,28,28,0.1)',
          borderRadius: 22,
          padding: 3,
          height: '100%',
        }}
      >
        {/* Inner core */}
        <div
          style={{
            background: service.colour,
            borderRadius: 19,
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
            padding: 'clamp(16px, 3.5vw, 28px)',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
          }}
        >
          <h3
            style={{
              fontFamily: HEADING_FONT,
              fontWeight: 900,
              fontSize: 'clamp(20px, 2vw, 26px)',
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
              paddingTop: 18,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
            }}
          >
            <span
              style={{
                fontFamily: HEADING_FONT,
                fontWeight: 700,
                fontSize: '18px',
                letterSpacing: '-0.01em',
                color: CARD_TEXT,
              }}
            >
              {service.price}
            </span>
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

        {/* Top row — 2 featured */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {TOP_SERVICES.map((s, i) => (
            <TopCard key={s.title} service={s} delay={i * 0.08} />
          ))}
        </div>

        {/* Bottom row — 3 supporting */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {BOTTOM_SERVICES.map((s, i) => (
            <BottomCard key={s.title} service={s} delay={0.1 + i * 0.07} />
          ))}
        </div>

        {/* Footer note */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{ borderTop: '1px solid var(--border)', paddingTop: 32 }}
        >
          <p style={{ fontFamily: BODY_FONT, fontSize: '18px', color: 'var(--muted)', maxWidth: 480 }}>
            Not sure what you need? Drop us a message and we&apos;ll point you in the right direction.
          </p>
          <a href="#contact" className="btn-pill flex-shrink-0">
            Get in touch →
          </a>
        </div>

      </div>
    </section>
  )
}
