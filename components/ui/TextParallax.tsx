'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const HEADING_FONT = '"Neue Haas Unica", "Helvetica Neue", Arial, sans-serif'
const BODY_FONT    = '"EB Garamond", Garamond, Georgia, serif'
const PAD = 12

// ─── Sticky image with scale-out ─────────────────────────────
function StickyImage({ imgUrl }: { imgUrl: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'end start'] })
  const scale   = useTransform(scrollYProgress, [0, 1], [1, 0.88])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <motion.div
      ref={ref}
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '68vh',
        top: PAD,
        scale,
      }}
      className="sticky z-0 overflow-hidden rounded-2xl"
    >
      <motion.div className="absolute inset-0 bg-black/45" style={{ opacity }} />
    </motion.div>
  )
}

// ─── Parallax overlay: label, title, CTA ─────────────────────
function OverlayCopy({
  subheading,
  heading,
  cta,
  ctaHref,
}: {
  subheading: string
  heading: string
  cta?: string
  ctaHref?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], [200, -200])
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0])

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-6 px-6 text-white"
    >
      <p style={{ fontFamily: HEADING_FONT, fontWeight: 500, fontSize: '13px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
        {subheading}
      </p>
      <p style={{ fontFamily: HEADING_FONT, fontWeight: 700, fontSize: 'clamp(40px, 7vw, 100px)', lineHeight: 0.92, letterSpacing: '-0.02em' }}
         className="text-center text-white">
        {heading}
      </p>
      {cta && ctaHref && (
        <a href={ctaHref} className="btn-pill btn-pill-white" style={{ marginTop: '8px' }}>
          {cta}
        </a>
      )}
    </motion.div>
  )
}

// ─── Public: full parallax block ─────────────────────────────
export function TextParallaxContent({
  imgUrl,
  subheading,
  heading,
  cta,
  ctaHref,
  children,
}: {
  imgUrl: string
  subheading: string
  heading: string
  cta?: string
  ctaHref?: string
  children?: React.ReactNode
}) {
  return (
    <div style={{ paddingLeft: PAD, paddingRight: PAD }}>
      <div className="relative h-[110vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} cta={cta} ctaHref={ctaHref} />
      </div>
      {children}
    </div>
  )
}

// ─── Content block below each image ──────────────────────────
export function ParallaxCopyBlock({
  headline,
  body,
  cta,
  href = '#contact',
}: {
  headline: string
  body: string
  cta?: string
  href?: string
}) {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2
        className="col-span-1 text-fg md:col-span-4 leading-tight"
        style={{ fontFamily: HEADING_FONT, fontWeight: 700, fontSize: 'clamp(22px, 2.8vw, 36px)' }}
      >
        {headline}
      </h2>
      <div className="col-span-1 md:col-span-8">
        <p className="text-fg/60 leading-relaxed mb-8" style={{ fontFamily: BODY_FONT, fontSize: '18px' }}>
          {body}
        </p>
        {cta && (
          <a href={href} className="btn-pill btn-pill-filled">
            {cta} →
          </a>
        )}
      </div>
    </div>
  )
}
