import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'asdfg.studio — Ecommerce Design for Brands That Convert'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1C1C1C',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'Helvetica Neue, Arial, sans-serif',
        }}
      >
        {/* Top: logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: '#004225',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: '#F3ECE6', fontWeight: 700, fontSize: 16, letterSpacing: '-0.5px' }}>af</span>
          </div>
          <span style={{ color: '#F3ECE6', fontWeight: 700, fontSize: 22, letterSpacing: '-0.5px' }}>asdfg.studio</span>
        </div>

        {/* Middle: headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              color: '#F3ECE6',
              fontWeight: 900,
              fontSize: 72,
              letterSpacing: '-2px',
              lineHeight: 0.95,
            }}
          >
            Ecommerce design for brands that convert.
          </div>
        </div>

        {/* Bottom: descriptor */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ color: 'rgba(243,236,230,0.45)', fontSize: 18, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Brand Strategy · Store Design · Shopify Builds
          </span>
          <span style={{ color: 'rgba(243,236,230,0.3)', fontSize: 16 }}>asdfg.studio</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
