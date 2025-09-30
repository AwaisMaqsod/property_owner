import { HeroSection } from "@/components/hero-section"
import { InfoCardsSection } from "@/components/info-cards-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <InfoCardsSection />
      </main>
    </div>
  )
}
