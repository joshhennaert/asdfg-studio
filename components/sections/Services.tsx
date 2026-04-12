'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import SectionReveal from '@/components/ui/SectionReveal'

const SERVICES = [
  {
    n: '01',
    title: 'Brand Strategy',
    headline: 'Know what you stand for — and show it.',
    body: 'We help founders get clear on what makes them different, then make sure every touchpoint actually reflects that.',
    tags: ['Positioning', 'Identity', 'Messaging'],
  },
  {
    n: '02',
    title: 'Shopify Design & Build',
    headline: 'A store that feels like your brand, not a theme.',
    body: 'Custom-built Shopify storefronts. Fast, mobile-first, and built to convert. No theme hacks, no shortcuts.',
    tags: ['Custom Themes', 'Mobile-First', 'Shopify'],
  },
  {
    n: '03',
    title: 'UX & Conversion Audit',
    headline: 'Find out why visitors leave. Fix it.',
    body: 'A thorough review of your store in five working days — with a prioritised action plan you can actually do something with.',
    tags: ['UX Review', 'Conversion', 'Action Plan'],
    badge: '£149',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const titleY = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="px-6 md:px-10 py-28 md:py-44"
      style={{ background: 'var(--green)', color: 'var(--green-fg)' }}
    >

      {/* Section title */}
      <SectionReveal>
        <div className="pb-5 mb-20 flex items-baseline justify-between"
             style={{ borderTop: '1px solid rgba(243,236,230,0.2)', paddingTop: '20px', marginTop: 0 }}>
          <motion.h2
            style={{ y: titleY, fontSize: 'clamp(36px,5.5vw,72px)' }}
            className="font-alfa text-[var(--green-fg)] leading-none"
          >
            Services
          </motion.h2>
          <span className="label label-inv hidden md:block">What we do</span>
        </div>
      </SectionReveal>

      <div className="divide-y" style={{ borderColor: 'rgba(243,236,230,0.15)' }}>
        {SERVICES.map((s, i) => (
          <SectionReveal key={s.n} delay={i * 80}>
            <div className="grid md:grid-cols-[56px_1fr_auto] gap-6 md:gap-14 py-12 md:py-16 items-start">

              <span className="label label-inv pt-1">{s.n}</span>

              <div className="space-y-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="font-alfa text-[var(--green-fg)]"
                      style={{ fontSize: 'clamp(22px, 2.8vw, 38px)' }}>
                    {s.title}
                  </h3>
                  {s.badge && (
                    <span className="label px-2.5 py-1 rounded-full"
                          style={{ border: '1px solid var(--acid)', color: 'var(--acid)' }}>
                      {s.badge} intro
                    </span>
                  )}
                </div>
                <p className="font-fragment italic leading-snug"
                   style={{ fontSize: 'clamp(15px,1.6vw,20px)', color: 'rgba(243,236,230,0.8)' }}>
                  {s.headline}
                </p>
                <p className="font-fragment leading-relaxed text-sm max-w-md"
                   style={{ color: 'rgba(243,236,230,0.55)' }}>
                  {s.body}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 md:justify-end pt-1">
                {s.tags.map(t => (
                  <span key={t}
                        className="label label-inv px-3 py-1.5 rounded-full"
                        style={{ border: '1px solid rgba(243,236,230,0.2)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>

      {/* CTA */}
      <SectionReveal delay={160}>
        <div className="pt-16 flex justify-start">
          <a href="#contact" className="btn-pill btn-pill-inv text-[10px] py-2.5 px-6">
            Talk to us about your store
          </a>
        </div>
      </SectionReveal>

    </section>
  )
}
