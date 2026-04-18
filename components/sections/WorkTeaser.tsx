'use client'

import { DrawLine } from '@/components/ui/DrawLine'
import { ClipReveal } from '@/components/ui/ClipReveal'

const HEADING_FONT = '"Neue Haas Unica", "Helvetica Neue", Arial, sans-serif'

const C = {
  text:   '#F3ECE6',
  muted:  'rgba(243,236,230,0.5)',
  border: 'rgba(243,236,230,0.12)',
}

const PROJECTS = [
  {
    title:    'Sable',
    category: 'Luxury Skincare',
    image:    '/work/sable.jpg',
    colour:   '#004225',
  },
  {
    title:    'Meridian',
    category: 'Streetwear',
    image:    '/work/meridian.jpg',
    colour:   '#1D4ED8',
  },
  {
    title:    'Flora & Co',
    category: 'Sustainable Fashion',
    image:    '/work/flora-co.jpg',
    colour:   '#5B21B6',
  },
  {
    title:    'Vault',
    category: 'Limited Drops',
    image:    '/work/vault.jpg',
    colour:   '#BE185D',
  },
]


export default function WorkTeaser() {
  return (
    <section id="work" className="section-dark" style={{ paddingTop: 'clamp(48px, 7vw, 72px)', paddingBottom: 'clamp(48px, 7vw, 72px)' }}>

      {/* Header — constrained to page width */}
      <div className="mx-auto px-6 md:px-12 mb-8" style={{ maxWidth: 1200 }}>
        <DrawLine color={C.border} />
        <div className="pt-6 flex items-end justify-between gap-8">
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
              Selected work and concept pieces
            </h2>
          </ClipReveal>
          <p
            style={{
              fontFamily: '"EB Garamond", Garamond, Georgia, serif',
              fontSize: '17px',
              lineHeight: 1.6,
              color: C.muted,
              marginTop: 12,
              maxWidth: 480,
            }}
          >
            A look at pages, systems, and visual directions designed to make brands feel more distinctive online.
          </p>
          <a
            href="/work"
            className="btn-pill hidden md:inline-flex flex-shrink-0"
            style={{ borderColor: C.border, color: C.text }}
          >
            See all work →
          </a>
        </div>
      </div>

      {/* Full-width scroll strip with edge fades */}
      <div
        style={{
          overflowX: 'auto',
          overflowY: 'hidden',
          WebkitOverflowScrolling: 'touch',
          scrollSnapType: 'x mandatory',
          cursor: 'grab',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        } as React.CSSProperties}
        className="no-scrollbar"
      >
        <div
          style={{
            display: 'flex',
            gap: 16,
            width: 'max-content',
            paddingLeft: 'clamp(24px, 4vw, 96px)',
            paddingRight: 'clamp(24px, 4vw, 96px)',
          }}
        >
          {PROJECTS.map((p, i) => (
            <a
              key={p.title}
              href="/work"
              style={{
                display: 'block',
                flexShrink: 0,
                width: 'clamp(280px, 75vw, 400px)',
                borderRadius: 16,
                overflow: 'hidden',
                position: 'relative',
                textDecoration: 'none',
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
                  }}
                  className="work-thumb"
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `${p.colour}cc`,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '24px',
                  }}
                  className="work-overlay"
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-fragment), monospace',
                      fontSize: '10px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(243,236,230,0.7)',
                      display: 'block',
                      marginBottom: 6,
                    }}
                  >
                    {p.category}
                  </span>
                  <span
                    style={{
                      fontFamily: HEADING_FONT,
                      fontWeight: 700,
                      fontSize: '22px',
                      letterSpacing: '-0.02em',
                      color: '#F3ECE6',
                    }}
                  >
                    {p.title} →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="mt-6 px-6 md:hidden">
        <a href="/work" className="btn-pill inline-flex" style={{ borderColor: C.border, color: C.text }}>
          See all work →
        </a>
      </div>

      <style>{`
        .work-thumb { transform: scale(1); }
        a:hover .work-thumb { transform: scale(1.04); }
        a:hover .work-overlay { opacity: 1 !important; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  )
}
