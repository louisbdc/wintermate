import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { ConceptSection } from "@/components/sections/ConceptSection"
import { FeaturesShowcase } from "@/components/sections/FeaturesShowcase"
import { TeamSection } from "@/components/sections/TeamSection"
import { FaqSection } from "@/components/sections/FaqSection"
import { PricingSection } from "@/components/sections/PricingSection"

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ConceptSection />
      <FeaturesShowcase />
      <TeamSection />
      <FaqSection />
      <PricingSection />
      <Footer />
    </>
  )
}
