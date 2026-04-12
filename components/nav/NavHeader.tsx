'use client'

import { useEffect, useState } from 'react'

const LINKS = [
  { label: 'Work',     href: '/work',          section: 'work'     },
  { label: 'Services', href: '/#services',     section: 'services' },
  { label: 'About',    href: '/#about',        section: 'about'    },
  { label: 'Contact',  href: '/#contact',      section: 'contact'  },
]

export default function NavHeader() {
  const [open, setOpen] = useState(false)

  // Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Escape key
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      {/* ── Fixed dark nav bar ─────────────────────── */}
      <header className="nav-bar">
        <a href="/" className="nav-bar-logo">asdfg.studio</a>
        <button
          className="nav-bar-btn"
          onClick={() => setOpen(p => !p)}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="nav-panel"
        >
          <span>{open ? 'Close' : 'Menu'}</span>
          <span className="nav-bar-icon" style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M7.33333 16L7.33333 0L8.66667 0L8.66667 16L7.33333 16Z" fill="currentColor" />
              <path d="M16 8.66667L0 8.66667L0 7.33333L16 7.33333L16 8.66667Z" fill="currentColor" />
            </svg>
          </span>
        </button>
      </header>

      {/* ── Fullscreen overlay ─────────────────────── */}
      <div className={`nav-overlay ${open ? 'nav-overlay--open' : ''}`}>
        {/* Backdrop — click to close */}
        <div className="nav-overlay-backdrop" onClick={close} />

        {/* Panel */}
        <nav className="nav-panel" id="nav-panel" aria-label="Main navigation">
          <ul className="nav-panel-list">
            {LINKS.map(link => (
              <li key={link.label} className={`nav-panel-item nav-panel-item--${link.section}`}>
                <a href={link.href} className="nav-panel-link" onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-panel-footer">
            <a href="mailto:hello@asdfg.studio" className="nav-panel-email">
              hello@asdfg.studio
            </a>
            <a href="#contact" className="btn-pill btn-pill-filled" style={{ fontSize: '12px', padding: '8px 18px' }} onClick={close}>
              Get in touch →
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
