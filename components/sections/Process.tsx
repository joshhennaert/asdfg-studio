'use client'

import SectionReveal from '@/components/ui/SectionReveal'

const STEPS = [
  {
    number: '01',
    title: 'Conversation',
    description:
      'One call. No pitch decks, no forms. We talk about what you\'re building, what\'s not working, and whether we\'re the right fit. If we are — we move fast.',
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'Brand positioning, conversion architecture, and a clear brief. We define what success looks like before a single pixel is designed.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'Editorial craft that communicates quality. Every layout decision earns its place. We design in context — not in isolation.',
  },
  {
    number: '04',
    title: 'Build',
    description:
      'Shopify storefronts engineered for performance. Clean code, fast load times, mobile-first by default. No theme hacks, no bloat.',
  },
  {
    number: '05',
    title: 'Launch',
    description:
      'Handoff, training, and 30 days of post-launch support. We don\'t disappear after delivery.',
  },
]

export default function Process() {
  return (
    <section id="process" data-color="purple" className="py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <div className="flex items-baseline justify-between mb-16 md:mb-24 border-b border-[var(--border)] pb-6">
            <h2 className="font-playfair italic text-4xl md:text-6xl text-[var(--text-primary)]">
              How we work
            </h2>
            <span className="font-spacemono text-[10px] tracking-[0.2em] uppercase text-[var(--text-secondary)]">
              Process
            </span>
          </div>
        </SectionReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[2.25rem] top-0 bottom-0 w-px bg-[var(--border)] hidden md:block" />

          <div className="space-y-0">
            {STEPS.map((step, i) => (
              <SectionReveal key={step.number} delay={i * 100}>
                <div className="group relative flex gap-8 md:gap-16 py-10 md:py-12 items-start">
                  {/* Number dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-[18px] h-[18px] rounded-full border border-[var(--border)] bg-[var(--bg-color)] flex items-center justify-center mt-1 group-hover:border-[var(--accent)] transition-colors duration-500 hidden md:flex">
                      <div className="w-[5px] h-[5px] rounded-full bg-[var(--text-secondary)] group-hover:bg-[var(--accent)] transition-colors duration-500" />
                    </div>
                    <span className="font-spacemono text-[10px] tracking-[0.2em] uppercase text-[var(--text-secondary)] md:hidden">
                      {step.number}
                    </span>
                  </div>

                  <div className="flex-1 md:pl-4">
                    <div className="flex items-baseline gap-6 mb-3">
                      <span className="font-spacemono text-[9px] tracking-[0.2em] uppercase text-[var(--text-secondary)] hidden md:block">
                        {step.number}
                      </span>
                      <h3 className="font-playfair italic text-xl md:text-3xl text-[var(--text-primary)]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="font-sans text-[var(--text-secondary)] leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
