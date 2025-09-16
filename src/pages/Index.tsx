import Navigation from '@/components/Navigation';
import HeroSectionWithModal from '@/components/HeroSectionWithModal';
import OverviewSection from '@/components/OverviewSection';
import LocationSection from '@/components/LocationSection';
import SitePlanSectionWithModal from '@/components/SitePlanSectionWithModal';
import EnhancedHomeCollection from '@/components/EnhancedHomeCollection';
import CommunityRenderings from '@/components/CommunityRenderings';
import FAQSection from '@/components/FAQSection';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSectionWithModal />
      <OverviewSection />
      <LocationSection />
      <SitePlanSectionWithModal />
      <EnhancedHomeCollection />
      <CommunityRenderings />
      <FAQSection />
      <LeadForm />
      <Footer />
    </div>
  );
};

export default Index;
