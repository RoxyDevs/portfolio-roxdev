import Header from '@/components/layout/header';
import HomeSection from '@/components/sections/home';
import AboutSection from '@/components/sections/about';
import SkillsSection from '@/components/sections/skills';
import PortfolioSection from '@/components/sections/portfolio';
import SupportSection from '@/components/sections/support';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/layout/footer';
import { AiSection } from '@/components/sections/ai-section';
import { TiktokSection } from '@/components/sections/tiktok-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <AiSection />
        <TiktokSection />
        <SupportSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
