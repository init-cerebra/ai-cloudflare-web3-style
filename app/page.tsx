import { Navbar } from "@/components/navbar"
import { StarField } from "@/components/star-field"
import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { InfraSection } from "@/components/infra-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="scanlines grid-bg relative min-h-screen overflow-x-hidden">
      <StarField />
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <InfraSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
