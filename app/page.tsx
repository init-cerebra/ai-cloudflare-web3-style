import { Navbar } from "@/components/navbar"
import { StarField } from "@/components/star-field"
import { HeroSection } from "@/components/hero-section"
import { MetricsSection } from "@/components/metrics-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <StarField />
      <Navbar />
      <HeroSection />
      <MetricsSection />
      <SkillsSection />
      <ExperienceSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
