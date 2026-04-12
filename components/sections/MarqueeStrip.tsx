'use client'

const ITEMS = [
  'Shopify Design',
  'Brand Strategy',
  'UX & Conversion',
  'Custom Builds',
  'eCommerce',
  'UK Based',
  'Mobile-First',
  'Shopify Design',
  'Brand Strategy',
  'UX & Conversion',
  'Custom Builds',
  'eCommerce',
  'UK Based',
  'Mobile-First',
]

export default function MarqueeStrip() {
  return (
    <div
      className="overflow-hidden py-5 border-y"
      style={{ borderColor: 'var(--border)', background: 'var(--fg)' }}
    >
      <div className="marquee-track">
        {ITEMS.map((item, i) => (
          <span
            key={i}
            className="font-fragment text-[11px] tracking-[0.15em] uppercase whitespace-nowrap px-6"
            style={{ color: i % 3 === 0 ? 'var(--acid)' : 'rgba(243,236,230,0.5)' }}
          >
            {item}
            <span className="mx-6 opacity-20">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
