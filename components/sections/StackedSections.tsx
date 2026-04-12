'use client'

import { useRef, useState } from 'react'
import { useTransform, motion, useScroll, MotionValue } from 'motion/react'

// ─── Card wrapper ─────────────────────────────────────────────
function StickyCard({
  i, color, progress, range, targetScale, children,
}: {
  i: number
  color: string
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
  children: React.ReactNode
}) {
  const scale = useTransform(progress, range, [1, targetScale])
  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)` }}
        className="relative w-[92%] md:w-[88%] h-[82vh] rounded-2xl md:rounded-3xl p-8 md:p-12 origin-top overflow-hidden flex flex-col"
      >
        {children}
      </motion.div>
    </div>
  )
}

// ─── Shared text helpers ──────────────────────────────────────
const W = 'text-white'
const MUTED = 'rgba(255,255,255,0.5)'
const BORDER = '1px solid rgba(255,255,255,0.15)'

// ─── Hero card ────────────────────────────────────────────────
function HeroCard() {
  return (
    <div className="flex flex-col h-full justify-between">
      <div />

      <div>
        <h1
          className="text-white leading-[0.92]"
          style={{ fontFamily: 'Amulya, serif', fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 700 }}
        >
          Your store,<br />done properly.
        </h1>
      </div>

      <div className="pt-5 flex flex-col sm:flex-row sm:items-end justify-between gap-5"
           style={{ borderTop: BORDER }}>
        <p className="font-fragment leading-relaxed"
           style={{ fontSize: 'clamp(12px, 1.1vw, 15px)', color: MUTED }}>
          Shopify design &amp; builds for brands that convert.<br />Based in the UK.
        </p>
        <div className="flex gap-3 flex-wrap">
          <a href="#work"    className="btn-pill btn-pill-white text-[10px] py-2 px-4">See the work</a>
          <a href="#contact" className="btn-pill btn-pill-white text-[10px] py-2 px-4">Start a conversation</a>
        </div>
      </div>
    </div>
  )
}

// ─── Work card (preview → links to /work) ────────────────────
function WorkCard() {
  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <p className="font-fragment text-[10px] tracking-[0.12em] uppercase mb-6"
           style={{ color: MUTED }}>Selected work</p>
        <h2
          className="text-white leading-[0.92]"
          style={{ fontFamily: 'Amulya, serif', fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 700 }}
        >
          Work with ecommerce brands that convert.
        </h2>
      </div>

      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {['SABLE', 'MERIDIAN', 'FLORA & CO', 'VAULT'].map((name, i) => (
            <div key={name} className="py-4" style={{ borderTop: BORDER }}>
              <p className="font-fragment text-[10px] tracking-widest uppercase mb-2"
                 style={{ color: MUTED }}>0{i + 1}</p>
              <p className="text-white font-bebas tracking-wider"
                 style={{ fontSize: 'clamp(18px, 2vw, 26px)' }}>{name}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between" style={{ borderTop: BORDER, paddingTop: '20px' }}>
          <p className="font-fragment text-xs" style={{ color: MUTED }}>04 projects</p>
          <a href="/work" className="btn-pill btn-pill-white text-[10px] py-2 px-5">
            View all work →
          </a>
        </div>
      </div>
    </div>
  )
}

// ─── Services card ────────────────────────────────────────────
const SERVICES = [
  { n: '01', title: 'Brand Strategy',        price: 'From £800',  body: 'Positioning, identity, and messaging that actually sticks.' },
  { n: '02', title: 'Shopify Design & Build', price: 'From £2,500', body: 'Custom storefronts. Fast, mobile-first, conversion-engineered.' },
  { n: '03', title: 'UX & Conversion Audit',  price: '£149',        body: 'Full store review in 5 days with a prioritised action plan.' },
]

function ServicesCard() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-baseline justify-between pb-4 mb-6" style={{ borderBottom: BORDER }}>
        <h2 className="text-white"
            style={{ fontFamily: 'Amulya, serif', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 700 }}>
          Services
        </h2>
      </div>

      <div className="flex-1 divide-y" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
        {SERVICES.map(s => (
          <div key={s.n} className="py-5 md:py-6 grid grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-center">
            <span className="font-fragment text-[10px] tracking-widest uppercase w-8"
                  style={{ color: MUTED }}>{s.n}</span>
            <div>
              <h3 className="text-white mb-1"
                  style={{ fontFamily: 'Amulya, serif', fontSize: 'clamp(18px, 2.2vw, 28px)', fontWeight: 700 }}>
                {s.title}
              </h3>
              <p className="font-fragment text-xs leading-relaxed" style={{ color: MUTED }}>{s.body}</p>
            </div>
            <span className="font-fragment text-xs font-bold text-white whitespace-nowrap">{s.price}</span>
          </div>
        ))}
      </div>

      <div style={{ borderTop: BORDER, paddingTop: '20px' }}>
        <a href="#contact" className="btn-pill btn-pill-white text-[10px] py-2 px-5">
          Talk to us →
        </a>
      </div>
    </div>
  )
}

// ─── Process card ─────────────────────────────────────────────
const STEPS = [
  { n: '01', title: 'Discovery',  body: 'Your brand, your market, your customers. Before anything gets designed.' },
  { n: '02', title: 'Design',     body: 'Every touchpoint considered. Every pixel intentional.' },
  { n: '03', title: 'Build',      body: 'Custom Shopify. Fast, clean code. No shortcuts.' },
  { n: '04', title: 'Launch',     body: 'Conversion-optimised from day one. Ongoing support available.' },
]

function ProcessCard() {
  return (
    <div className="flex flex-col h-full">
      <div className="pb-4 mb-6" style={{ borderBottom: BORDER }}>
        <h2 className="text-white"
            style={{ fontFamily: 'Amulya, serif', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 700 }}>
          How we work
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-1 content-start">
        {STEPS.map(s => (
          <div key={s.n} className="pt-4" style={{ borderTop: BORDER }}>
            <p className="font-fragment text-[10px] tracking-widest uppercase mb-3"
               style={{ color: MUTED }}>{s.n}</p>
            <h3 className="text-white mb-2"
                style={{ fontFamily: 'Amulya, serif', fontSize: 'clamp(16px, 1.8vw, 22px)', fontWeight: 700 }}>
              {s.title}
            </h3>
            <p className="font-fragment text-xs leading-relaxed" style={{ color: MUTED }}>{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── About card ───────────────────────────────────────────────
function AboutCard() {
  return (
    <div className="flex flex-col h-full">
      <div className="pb-4 mb-8" style={{ borderBottom: BORDER }}>
        <p className="font-fragment text-[10px] tracking-[0.12em] uppercase" style={{ color: MUTED }}>About</p>
      </div>

      <div className="flex-1 grid md:grid-cols-[1fr_1.8fr] gap-10 md:gap-20">
        <div className="space-y-6">
          {[['Based', 'United Kingdom'], ['Focus', 'Ecommerce brands'], ['Availability', 'Q3 2025']].map(([l, v]) => (
            <div key={l}>
              <p className="font-fragment text-[10px] tracking-[0.12em] uppercase mb-1" style={{ color: MUTED }}>{l}</p>
              <p className="font-fragment text-sm text-white leading-relaxed">{v}</p>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <h3 className="text-white leading-[1.05]"
              style={{ fontFamily: 'Amulya, serif', fontSize: 'clamp(22px, 3.2vw, 44px)', fontWeight: 700 }}>
            We work with fewer clients on purpose.
          </h3>
          <p className="font-fragment leading-relaxed" style={{ fontSize: 'clamp(12px, 1.1vw, 15px)', color: MUTED }}>
            When the work matters, attention can&apos;t be divided. No pitch decks,
            no discovery treadmills — just an honest conversation about whether
            we&apos;re the right fit.
          </p>
          <a href="#contact" className="btn-pill btn-pill-white text-[10px] py-2 px-5 inline-flex">
            Work with us →
          </a>
        </div>
      </div>
    </div>
  )
}

// ─── Contact card ─────────────────────────────────────────────
function ContactCard() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true) }

  return (
    <div className="flex flex-col h-full">
      <div className="pb-4 mb-8" style={{ borderBottom: BORDER }}>
        <h2 className="text-white"
            style={{ fontFamily: 'Amulya, serif', fontSize: 'clamp(26px, 4vw, 58px)', fontWeight: 700 }}>
          Start a conversation
        </h2>
      </div>

      <div className="flex-1 grid md:grid-cols-2 gap-10 md:gap-16">
        <div className="space-y-7">
          <p className="font-fragment leading-relaxed" style={{ fontSize: 'clamp(12px,1.1vw,15px)', color: MUTED }}>
            No pitch decks. Tell us what you&apos;re working on — we&apos;ll be honest about whether we&apos;re the right fit.
          </p>
          <div>
            <p className="font-fragment text-[10px] tracking-[0.12em] uppercase mb-2" style={{ color: MUTED }}>Direct</p>
            <a href="mailto:hello@asdfg.studio"
               className="text-white hover:opacity-70 transition-opacity duration-150"
               style={{ fontFamily: 'Amulya, serif', fontSize: 'clamp(15px, 1.8vw, 24px)', fontWeight: 700 }}>
              hello@asdfg.studio
            </a>
          </div>
          <div style={{ borderTop: BORDER, paddingTop: '18px' }}>
            <p className="font-fragment text-[10px] tracking-[0.12em] uppercase mb-1" style={{ color: MUTED }}>Response time</p>
            <p className="font-fragment text-xs text-white/40">Within one business day.</p>
          </div>
        </div>

        {sent ? (
          <div className="flex items-center">
            <div>
              <p className="text-white text-2xl mb-2" style={{ fontFamily: 'Amulya, serif', fontWeight: 700 }}>Thank you.</p>
              <p className="font-fragment text-xs" style={{ color: MUTED }}>We&apos;ll be in touch within one business day.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { k: 'name',  label: 'Name',  type: 'text',  ph: 'Your name' },
              { k: 'email', label: 'Email', type: 'email', ph: 'hello@yourbrand.com' },
            ].map(f => (
              <div key={f.k}>
                <label className="font-fragment text-[10px] tracking-[0.12em] uppercase block mb-1.5"
                       style={{ color: MUTED }}>{f.label}</label>
                <input
                  type={f.type} required
                  value={form[f.k as 'name' | 'email']}
                  onChange={e => setForm(p => ({ ...p, [f.k]: e.target.value }))}
                  placeholder={f.ph}
                  className="w-full bg-transparent py-2 font-fragment text-sm text-white focus:outline-none placeholder:opacity-30"
                  style={{ borderBottom: BORDER }}
                />
              </div>
            ))}
            <div>
              <label className="font-fragment text-[10px] tracking-[0.12em] uppercase block mb-1.5"
                     style={{ color: MUTED }}>What are you building?</label>
              <textarea
                required rows={2}
                value={form.message}
                onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                placeholder="Tell us about your brand."
                className="w-full bg-transparent py-2 font-fragment text-sm text-white focus:outline-none resize-none placeholder:opacity-30"
                style={{ borderBottom: BORDER }}
              />
            </div>
            <button type="submit" className="btn-pill btn-pill-white text-[10px] py-2.5 w-full justify-center">
              Send →
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

// ─── Cards config ─────────────────────────────────────────────
const CARDS = [
  { id: 'hero',     color: '#1E4D3A', Content: HeroCard },
  { id: 'work',     color: '#5A1F66', Content: WorkCard },
  { id: 'services', color: '#163A70', Content: ServicesCard },
  { id: 'process',  color: '#4A0E4F', Content: ProcessCard },
  { id: 'about',    color: '#8A3F16', Content: AboutCard },
  { id: 'contact',  color: '#6B7048', Content: ContactCard },
]

// ─── Export ───────────────────────────────────────────────────
export default function StackedSections() {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  return (
    <div ref={container} className="relative">
      {/* Scroll anchors for nav links */}
      {CARDS.map((card, i) => (
        <div
          key={`anchor-${card.id}`}
          id={card.id}
          className="absolute w-0 h-0 pointer-events-none"
          style={{ top: `${i * 100}vh` }}
        />
      ))}

      {CARDS.map((card, i) => {
        const targetScale = 1 - (CARDS.length - i) * 0.05
        const Content = card.Content
        return (
          <StickyCard
            key={card.id}
            i={i}
            color={card.color}
            progress={scrollYProgress}
            range={[i / CARDS.length, 1]}
            targetScale={targetScale}
          >
            <Content />
          </StickyCard>
        )
      })}
    </div>
  )
}
