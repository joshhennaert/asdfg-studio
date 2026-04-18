import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'
import NavHeader from '@/components/nav/NavHeader'
import HeroSection from '@/components/sections/HeroSection'
import IntroSection from '@/components/sections/IntroSection'
import WorkTeaser from '@/components/sections/WorkTeaser'
import ServicesTeaser from '@/components/sections/ServicesTeaser'
import ProcessSection from '@/components/sections/ProcessSection'
import AboutSection from '@/components/sections/AboutSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <SmoothScrollProvider>
      <NavHeader />
      <main>
        <HeroSection />
        <IntroSection />
        <WorkTeaser />
        <ServicesTeaser />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>
    </SmoothScrollProvider>
  )
}
