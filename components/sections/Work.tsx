'use client'

import SectionReveal from '@/components/ui/SectionReveal'

const PROJECTS = [
  {
    title: 'SABLE',
    category: 'Luxury Skincare',
    type: 'Shopify Build · Brand Strategy',
    year: '2024',
    accent: '#c8a882',
  },
  {
    title: 'MERIDIAN',
    category: 'Streetwear',
    type: 'Shopify Build · UX Audit',
    year: '2024',
    accent: '#8a9cbf',
  },
  {
    title: 'FLORA & CO',
    category: 'Sustainable Fashion',
    type: 'Brand Strategy · Shopify Build',
    year: '2024',
    accent: '#7a9e7e',
  },
  {
    title: 'VAULT',
    category: 'Limited Drops',
    type: 'Shopify Build · Conversion Audit',
    year: '2025',
    accent: '#9b8fa8',
  },
]

export default function Work() {
  return (
    <section id="work" data-color="green" className="py-32 md:py-48 px-6 md:px-12">
      <SectionReveal>
        <div className="flex items-baseline justify-between mb-16 md:mb-24 border-b border-[var(--border)] pb-6">
          <h2 className="font-playfair italic text-4xl md:text-6xl text-[var(--text-primary)]">
            Selected work
          </h2>
          <span className="font-spacemono text-[10px] tracking-[0.2em] uppercase text-[var(--text-secondary)]">
            0{PROJECTS.length} projects
          </span>
        </div>
      </SectionReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border)]">
        {PROJECTS.map((project, i) => (
          <SectionReveal key={project.title} delay={i * 80}>
            <div
              className="group relative bg-[var(--bg-color)] p-8 md:p-12 min-h-[280px] flex flex-col justify-between overflow-hidden"
            >
              {/* Hover accent */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700"
                style={{ backgroundColor: project.accent }}
              />

              <div className="flex items-start justify-between">
                <span className="font-spacemono text-[9px] tracking-[0.2em] uppercase text-[var(--text-secondary)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-spacemono text-[9px] tracking-[0.2em] uppercase text-[var(--text-secondary)]">
                  {project.year}
                </span>
              </div>

              <div>
                <h3
                  className="font-bebas text-5xl md:text-6xl text-[var(--text-primary)] tracking-wider mb-2 transition-transform duration-500 group-hover:-translate-y-1"
                >
                  {project.title}
                </h3>
                <p className="font-playfair italic text-lg text-[var(--text-secondary)]">
                  {project.category}
                </p>
                <p className="font-spacemono text-[10px] tracking-[0.15em] uppercase text-[var(--text-secondary)]/60 mt-3">
                  {project.type}
                </p>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  )
}
