'use client'

const NAV_LINKS = [
  { label: 'Work',     href: '/work' },
  { label: 'Services', href: '/#services' },
  { label: 'About',    href: '/#about' },
  { label: 'Contact',  href: '/#contact' },
]

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/asdfg.studio',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/asdfg-studio',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
]

const MONO: React.CSSProperties = {
  fontFamily: 'var(--font-fragment), monospace',
  fontSize: '11px',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
}

export default function Footer() {
  return (
    <footer
      className="section-dark"
      style={{ borderTop: '1px solid rgba(243,236,230,0.12)', padding: '24px clamp(24px, 4vw, 48px)' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          {/* Logo / copyright */}
          <span style={{ ...MONO, color: 'rgba(243,236,230,0.4)' }}>
            © {new Date().getFullYear()} asdfg.studio
          </span>

          {/* Nav links */}
          <nav className="flex items-center gap-6 flex-wrap">
            {NAV_LINKS.map(l => (
              <a
                key={l.label}
                href={l.href}
                style={{ ...MONO, color: 'rgba(243,236,230,0.4)', transition: 'color 150ms', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F3ECE6')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(243,236,230,0.4)')}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right: social + email */}
          <div className="flex items-center gap-5">
            {SOCIAL_LINKS.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{ color: 'rgba(243,236,230,0.4)', transition: 'color 150ms', display: 'flex', alignItems: 'center' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F3ECE6')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(243,236,230,0.4)')}
              >
                {s.icon}
              </a>
            ))}
            <a
              href="mailto:hello@asdfg.studio"
              style={{ ...MONO, color: 'rgba(243,236,230,0.4)', transition: 'color 150ms', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F3ECE6')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(243,236,230,0.4)')}
            >
              hello@asdfg.studio
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
