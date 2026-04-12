'use client'

import SectionReveal from '@/components/ui/SectionReveal'

export default function TCG() {
  return (
    <section id="tcg" className="bg-bg px-6 md:px-10 py-14 md:py-16"
             style={{ borderTop: '1px solid var(--border)' }}>
      <SectionReveal>
        <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-14 items-start">
          <span className="label px-3 py-1.5 rounded-full whitespace-nowrap"
                style={{ border: '1px solid var(--acid)', color: 'var(--acid)' }}>
            Also — TCG
          </span>
          <div className="space-y-3 max-w-xl">
            <p className="font-fragment leading-relaxed text-sm text-fg/60">
              We work with UK trading card game sellers — tournament stores, singles operations, collectors.
              Same standards. Different market.
            </p>
            <a href="#contact"
               className="label hover:text-fg transition-colors duration-150 underline underline-offset-4 inline-block"
               style={{ color: 'var(--muted)' }}>
              Talk to us about TCG →
            </a>
          </div>
        </div>
      </SectionReveal>
    </section>
  )
}
