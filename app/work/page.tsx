import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected ecommerce and brand projects. Shopify builds, UX audits, and brand strategy for independent brands.',
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Work | asdfg.studio',
    description: 'Selected ecommerce and brand projects.',
    url: 'https://asdfg.studio/work',
  },
}

import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'
import NavHeader from '@/components/nav/NavHeader'
import Footer from '@/components/sections/Footer'
import WorkGrid from '@/components/sections/WorkGrid'

export default function WorkPage() {
  return (
    <SmoothScrollProvider>
      <NavHeader />
      <main style={{ background: 'var(--bg)', minHeight: '100dvh' }}>
        <WorkGrid />
      </main>
      <Footer />
    </SmoothScrollProvider>
  )
}
