'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ClipReveal } from '@/components/ui/ClipReveal'
import { DrawLine } from '@/components/ui/DrawLine'

const HEADING_FONT = '"Neue Haas Unica", "Helvetica Neue", Arial, sans-serif'
const BODY_FONT    = '"EB Garamond", Garamond, Georgia, serif'

const PALETTE = ['#004225', '#1D4ED8', '#5B21B6', '#BE185D']

const CARD_TEXT  = '#F3ECE6'
const CARD_MUTED = 'rgba(243,236,230,0.55)'

const PROJECTS = [
  {
    id: 'sable',
    title: 'Sable',
    category: 'Luxury Skincare',
    year: '2024',
    services: ['Brand Strategy', 'Shopify Build'],
    image: '/work/sable.jpg',
    headline: 'Brand strategy and full Shopify build.',
    body: 'A ground-up Shopify build for a luxury skincare brand entering the UK market. Custom theme, conversion-optimised checkout, and a brand identity that holds up at every touchpoint. The brief was clear: it had to feel expensive before a product was even added to the basket.',
  },
  {
    id: 'meridian',
    title: 'Meridian',
    category: 'Streetwear',
    year: '2024',
    services: ['UX Audit', 'Shopify Rebuild'],
    image: '/work/meridian.jpg',
    headline: 'UX audit and Shopify rebuild.',
    body: 'Conversion was underperforming despite strong traffic. We audited the full funnel, identified the friction points killing purchase intent, and rebuilt the storefront around what actually moves the needle. Sessions to purchase improved significantly within the first month.',
  },
  {
    id: 'flora-co',
    title: 'Flora & Co',
    category: 'Sustainable Fashion',
    year: '2023',
    services: ['Brand Strategy', 'Shopify Build'],
    image: '/work/flora-co.jpg',
    headline: 'Brand strategy and Shopify build.',
    body: 'Founded on sustainability and stocked by values. We helped Flora & Co articulate what made them different, then built a store that communicated that from the first pixel. The result is a site that earns trust before the customer has read a single product description.',
  },
  {
    id: 'vault',
    title: 'Vault',
    category: 'Limited Drops',
    year: '2023',
    services: ['Shopify Build'],
    image: '/work/vault.jpg',
    headline: 'Drop-optimised Shopify build.',
    body: 'High-demand, low-inventory releases need a store that can handle the pressure. Vault was built for speed, scarcity, and conversion. From the landing page to checkout. Load-tested, streamlined, and designed to turn hype into completed transactions.',
  },
]

const SPRING = { type: 'spring', stiffness: 300, damping: 35 } as const

function ProjectCard({
  project,
  colour,
  isOpen,
  isCompressed,  // eslint-disable-line @typescript-eslint/no-unused-vars
  onToggle,
}: {
  project: typeof PROJECTS[0]
  colour: string
  isOpen: boolean
  isCompressed: boolean
  onToggle: () => void
}) {
  return (
    <div id={project.id} style={{ height: '100%' }}>
      {/* Outer bezel */}
      <div
        style={{
          background: 'rgba(28,28,28,0.06)',
          border: '1px solid rgba(28,28,28,0.1)',
          borderRadius: 22,
          padding: 3,
          cursor: 'pointer',
          height: '100%',
        }}
        onClick={onToggle}
      >
        {/* Inner core */}
        <div
          style={{
            background: colour,
            borderRadius: 19,
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
            overflow: 'hidden',
            height: '100%',
          }}
        >
          {/* Image */}
          <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/9' }}>
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transform: isOpen ? 'scale(1.04)' : 'scale(1)',
                transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
              }}
            />
            <div style={{ position: 'absolute', top: 16, left: 16 }}>
              <span
                style={{
                  fontFamily: 'var(--font-fragment), monospace',
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  background: 'rgba(243,236,230,0.92)',
                  color: '#1C1C1C',
                  padding: '4px 10px',
                  borderRadius: 9999,
                }}
              >
                {project.category}
              </span>
            </div>
          </div>

          {/* Card body */}
          <div style={{ padding: isOpen ? '28px 32px 32px' : '24px 28px 28px', transition: 'padding 0.3s ease' }}>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3
                style={{
                  fontFamily: HEADING_FONT,
                  fontWeight: 700,
                  fontSize: isOpen ? 'clamp(22px, 2.5vw, 32px)' : 'clamp(20px, 2vw, 26px)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  color: CARD_TEXT,
                  transition: 'font-size 0.3s ease',
                }}
              >
                {project.title}
              </h3>

              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  border: '1px solid rgba(243,236,230,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  style={{
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
                    color: CARD_TEXT,
                  }}
                >
                  <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Services + year */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-wrap gap-3">
                {project.services.map(s => (
                  <span
                    key={s}
                    style={{
                      fontFamily: 'var(--font-fragment), monospace',
                      fontSize: '10px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: CARD_MUTED,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-fragment), monospace',
                  fontSize: '10px',
                  letterSpacing: '0.06em',
                  color: CARD_MUTED,
                  flexShrink: 0,
                }}
              >
                {project.year}
              </span>
            </div>

            {/* Expanded detail */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ paddingTop: 20 }}>
                    <div style={{ width: '100%', height: 1, background: 'rgba(243,236,230,0.12)', marginBottom: 20 }} />

                    {/* Two-column layout when expanded full-width */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <p
                          style={{
                            fontFamily: HEADING_FONT,
                            fontWeight: 700,
                            fontSize: 'clamp(15px, 1.5vw, 20px)',
                            letterSpacing: '-0.01em',
                            color: CARD_TEXT,
                            marginBottom: 10,
                          }}
                        >
                          {project.headline}
                        </p>
                        <p
                          style={{
                            fontFamily: BODY_FONT,
                            fontSize: '17px',
                            lineHeight: 1.65,
                            color: CARD_MUTED,
                          }}
                        >
                          {project.body}
                        </p>
                      </div>
                      <div className="flex items-end">
                        <a
                          href="#contact"
                          className="btn-pill btn-pill-card"
                          style={{ fontSize: '13px', padding: '10px 22px', '--btn-hover-bg': colour } as React.CSSProperties}
                          onClick={e => e.stopPropagation()}
                        >
                          Start a project →
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function WorkGrid() {
  const [openId, setOpenId] = useState<string | null>(null)
  const toggle = (id: string) => setOpenId(prev => prev === id ? null : id)

  // When a card is open, float it to the front so it occupies the first slot (full-width row)
  const orderedProjects = openId
    ? [
        PROJECTS.find(p => p.id === openId)!,
        ...PROJECTS.filter(p => p.id !== openId),
      ]
    : PROJECTS

  return (
    <>
      {/* Page header */}
      <section className="px-6 md:px-12 pt-32 pb-16" style={{ maxWidth: 1200, margin: '0 auto' }}>
        <DrawLine color="rgba(243,236,230,0.12)" />
        <div className="pt-8">
          <ClipReveal delay={0.2}>
            <h1
              style={{
                fontFamily: HEADING_FONT,
                fontWeight: 900,
                fontSize: 'clamp(32px, 5vw, 72px)',
                letterSpacing: '-0.03em',
                lineHeight: 0.92,
                color: '#F3ECE6',
              }}
            >
              Work with<br />brands that convert.
            </h1>
          </ClipReveal>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-12 pb-24" style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/*
          6-column grid:
          • No card open  → each card is col-span-3  (2 per row = 2×2)
          • Card open     → open card is col-span-6 (full width), others are col-span-2 (3 per row)
          Reordering floats the open card to position [0] so it always leads the grid.
        */}
        <motion.div
          layout
          className="grid grid-cols-6 gap-4"
        >
          {orderedProjects.map((p, renderIndex) => {
            const isOpen       = openId === p.id
            const anyOpen      = openId !== null
            const colSpan      = isOpen ? 'col-span-6' : anyOpen ? 'col-span-2' : 'col-span-3'
            const originalIndex = PROJECTS.findIndex(proj => proj.id === p.id)

            return (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  layout: SPRING,
                  opacity: { duration: 0.5, delay: renderIndex * 0.07 },
                  y:       { duration: 0.7, delay: renderIndex * 0.07, ease: [0.16, 1, 0.3, 1] },
                }}
                className={`hidden md:block ${colSpan}`}
              >
                <ProjectCard
                  project={p}
                  colour={PALETTE[originalIndex % PALETTE.length]}
                  isOpen={isOpen}
                  isCompressed={anyOpen && !isOpen}
                  onToggle={() => toggle(p.id)}
                />
              </motion.div>
            )
          })}

          {/* Mobile: single-column fallback (no fluid grid needed) */}
          {PROJECTS.map((p, i) => (
            <motion.div
              key={`mob-${p.id}`}
              className="col-span-6 md:hidden"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard
                project={p}
                colour={PALETTE[i % PALETTE.length]}
                isOpen={openId === p.id}
                isCompressed={false}
                onToggle={() => toggle(p.id)}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  )
}
