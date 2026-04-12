import Link from 'next/link'

const HEADING_FONT = '"Neue Haas Unica", "Helvetica Neue", Arial, sans-serif'
const BODY_FONT    = '"EB Garamond", Garamond, Georgia, serif'

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100dvh',
        background: '#1C1C1C',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(24px, 6vw, 96px)',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-fragment), monospace',
          fontSize: '11px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'rgba(243,236,230,0.4)',
          marginBottom: 24,
        }}
      >
        404
      </p>

      <h1
        style={{
          fontFamily: HEADING_FONT,
          fontWeight: 900,
          fontSize: 'clamp(40px, 9vw, 140px)',
          letterSpacing: '-0.035em',
          lineHeight: 0.9,
          color: '#F3ECE6',
          marginBottom: 32,
        }}
      >
        Page not<br />found.
      </h1>

      <p
        style={{
          fontFamily: BODY_FONT,
          fontSize: '18px',
          lineHeight: 1.6,
          color: 'rgba(243,236,230,0.5)',
          maxWidth: 400,
          marginBottom: 48,
        }}
      >
        This page doesn&apos;t exist. Head back home or take a look at our work.
      </p>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            borderRadius: 9999,
            border: '1px solid #F3ECE6',
            padding: '12px 28px',
            fontFamily: HEADING_FONT,
            fontWeight: 600,
            fontSize: '14px',
            color: '#1C1C1C',
            background: '#F3ECE6',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          Back home
        </Link>
        <Link
          href="/work"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            borderRadius: 9999,
            border: '1px solid rgba(243,236,230,0.3)',
            padding: '12px 28px',
            fontFamily: HEADING_FONT,
            fontWeight: 600,
            fontSize: '14px',
            color: '#F3ECE6',
            background: 'transparent',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          See the work →
        </Link>
      </div>
    </main>
  )
}
