'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import SectionReveal from '@/components/ui/SectionReveal'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const titleY = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section id="about" ref={sectionRef}
             className="px-6 md:px-10 py-28 md:py-44 bg-bg relative overflow-hidden">

      <SectionReveal>
        <div className="rule pb-5 mb-20 relative z-10">
          <span className="label">About</span>
        </div>
      </SectionReveal>

      <div className="relative z-10 grid md:grid-cols-[1fr_2fr] gap-16 md:gap-28">

        <SectionReveal>
          <div className="space-y-8">
            {[
              ['Based',        'United Kingdom'],
              ['Focus',        'Fashion · Beauty\nLifestyle'],
              ['Availability', 'Q3 2025'],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="label mb-1.5">{label}</p>
                <p className="font-fragment text-fg/60 text-sm whitespace-pre-line leading-relaxed">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={120}>
          <div className="space-y-10">
            <motion.p
              style={{ y: titleY, fontSize: 'clamp(26px, 3.8vw, 52px)' }}
              className="font-alfa text-fg leading-[1.05]"
            >
              We work with fewer clients on purpose.
            </motion.p>

            <p className="font-fragment leading-relaxed text-base max-w-lg text-fg/65"
               style={{ fontSize: 'clamp(14px,1.3vw,17px)' }}>
              When the work matters, attention can&apos;t be divided. We&apos;re not chasing volume.
              No pitch decks, no discovery treadmills — just an honest conversation about
              whether we&apos;re the right fit.
            </p>

            <p className="font-fragment text-sm leading-relaxed max-w-md text-fg/50">
              Beautiful work that doesn&apos;t convert is just decoration.
              We design for clarity first — trust is built in seconds and lost just as fast.
            </p>

            <a href="#contact" className="btn-pill btn-pill-filled text-[10px] py-2 px-5 inline-flex">
              Work with us →
            </a>
          </div>
        </SectionReveal>
      </div>

    </section>
  )
}
