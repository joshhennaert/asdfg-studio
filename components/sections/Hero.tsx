'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'motion/react'

const HEADLINE_WORDS = ['Your', 'store,', 'done', 'properly.']

// ─── Section 1: Hero ─────────────────────────────────────────
function HeroSlide({ sp }: { sp: MotionValue<number> }) {
  const scale  = useTransform(sp, [0, 1], [1,    0.84])
  const rotate = useTransform(sp, [0, 1], [0,   -4.5])
  const textY  = useTransform(sp, [0, 1], ['0%','-8%'])
  const subY   = useTransform(sp, [0, 1], ['0%','-20%'])
  const fade   = useTransform(sp, [0.5,  1], [1, 0])

  return (
    <motion.section
      id="hero"
      style={{ scale, rotate }}
      className="sticky top-0 h-screen overflow-hidden flex flex-col justify-between bg-bg pt-11"
    >
      <div className="relative z-10 flex flex-col h-full px-6 md:px-10 pb-10 pt-8 justify-between">

        {/* Eyebrow */}
        <motion.p
          className="label"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          asdfg.studio — est. 2024
        </motion.p>

        {/* Headline — Alfa Slab One, word-by-word */}
        <motion.div style={{ y: textY }} className="will-change-transform">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
            className="flex flex-wrap items-baseline gap-x-[0.2em] gap-y-0"
          >
            {HEADLINE_WORDS.map((word) => (
              <div key={word} className="overflow-hidden">
                <motion.span
                  variants={{
                    hidden: { y: '105%', opacity: 0 },
                    show:   { y: '0%',   opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
                  }}
                  className="font-alfa text-fg leading-[0.92] block"
                  style={{ fontSize: 'clamp(60px, 14vw, 220px)' }}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom row */}
        <motion.div style={{ y: subY, opacity: fade }} className="will-change-transform">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
            className="rule pt-6 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <p className="font-fragment text-fg/70 leading-relaxed max-w-sm"
                 style={{ fontSize: 'clamp(13px, 1.4vw, 17px)' }}>
                Shopify design &amp; builds for fashion, beauty,<br />
                and lifestyle brands. Based in the UK.
              </p>
              <p className="label mt-2">Fashion · Beauty · Lifestyle</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <a href="#work" className="btn-pill text-[10px] py-2 px-4">See the work</a>
              <a href="#contact" className="btn-pill btn-pill-filled text-[10px] py-2 px-4">Start a conversation</a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

// ─── Section 2: Work preview ─────────────────────────────────
const PROJECTS = [
  { title: 'SABLE',       cat: 'Luxury Skincare',     year: '2024', type: 'Shopify Build · Brand Strategy' },
  { title: 'MERIDIAN',    cat: 'Streetwear',           year: '2024', type: 'Shopify Build · UX Audit'      },
  { title: 'FLORA & CO',  cat: 'Sustainable Fashion',  year: '2024', type: 'Brand Strategy · Build'        },
  { title: 'VAULT',       cat: 'Limited Drops',        year: '2025', type: 'Shopify Build · Conversion'    },
]

function WorkSlide({ sp }: { sp: MotionValue<number> }) {
  const scale  = useTransform(sp, [0, 1], [0.84, 1])
  const rotate = useTransform(sp, [0, 1], [4.5,  0])

  return (
    <motion.section
      id="work"
      style={{ scale, rotate }}
      className="relative h-screen overflow-hidden flex flex-col px-6 md:px-10 py-10 bg-bg"
    >
      <div className="relative z-10 flex items-center justify-between rule pb-5 mb-6">
        <span className="label">Selected work</span>
        <span className="label">04 projects</span>
      </div>

      <div className="relative z-10 grid grid-cols-2 gap-px flex-1"
           style={{ background: 'var(--border)' }}>
        {PROJECTS.map((p, i) => (
          <div
            key={p.title}
            className="group flex flex-col justify-between p-6 md:p-8 bg-bg transition-colors duration-200"
          >
            <div className="flex justify-between items-start">
              <span className="label">{String(i + 1).padStart(2, '0')}</span>
              <span className="label">{p.year}</span>
            </div>
            <div>
              <p className="font-bebas tracking-wider text-fg leading-none mb-1 group-hover:text-[var(--acid)] transition-colors duration-150"
                 style={{ fontSize: 'clamp(32px, 4vw, 60px)' }}>
                {p.title}
              </p>
              <p className="font-fragment italic text-sm text-fg/50">
                {p.cat}
              </p>
              <p className="label mt-2 opacity-50">{p.type}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

// ─── Export ──────────────────────────────────────────────────
export default function Hero() {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })
  return (
    <div ref={container} className="relative h-[200vh]">
      <HeroSlide sp={scrollYProgress} />
      <WorkSlide sp={scrollYProgress} />
    </div>
  )
}
