import type { Metadata } from 'next'
import { fragmentMono, ebGaramond } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'asdfg.studio — Ecommerce Design for Brands That Convert',
    template: '%s | asdfg.studio',
  },
  description:
    'Brand strategy, ecommerce design & builds, and UX audits for fashion, beauty, and lifestyle brands. Based in the UK, working globally.',
  metadataBase: new URL('https://asdfg.studio'),
  alternates: { canonical: '/' },
  keywords: [
    'ecommerce design', 'Shopify design', 'Shopify agency UK',
    'brand strategy', 'UX audit', 'ecommerce builds', 'UK web design studio',
    'asdfg studio',
  ],
  authors: [{ name: 'asdfg.studio', url: 'https://asdfg.studio' }],
  creator: 'asdfg.studio',
  openGraph: {
    title: 'asdfg.studio — Ecommerce Design for Brands That Convert',
    description: 'Ecommerce stores built for brands that take their product seriously. Based in the UK.',
    url: 'https://asdfg.studio',
    siteName: 'asdfg.studio',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'asdfg.studio — Ecommerce Design for Brands That Convert',
    description: 'Ecommerce stores built for brands that take their product seriously.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fragmentMono.variable} ${ebGaramond.variable}`}>
      <body>{children}</body>
    </html>
  )
}
