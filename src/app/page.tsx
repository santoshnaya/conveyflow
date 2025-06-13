import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import VideoSection from '@/components/VideoSection'
import FeatureSection from '@/components/FeatureSection'
import CollaborationSection from '@/components/CollaborationSection'
import IntelligenceSection from '@/components/IntelligenceSection'
import CollaborationToolsSection from '@/components/CollaborationToolsSection'
import ImpactSection from '@/components/ImpactSection'
import TagCloudSection from '@/components/TagCloudSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <VideoSection />
      <FeatureSection />
      <CollaborationSection />
      <IntelligenceSection />
      <CollaborationToolsSection />
      <ImpactSection />
      <TagCloudSection />
      <CTASection />
    </main>
  )
}
