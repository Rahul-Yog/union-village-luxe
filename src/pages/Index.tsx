import Navigation from '@/components/Navigation';
import HeroSectionWithModal from '@/components/HeroSectionWithModal';
import OverviewSection from '@/components/OverviewSection';
import LocationSection from '@/components/LocationSection';
import EnhancedHomeCollection from '@/components/EnhancedHomeCollection';
import CommunityRenderings from '@/components/CommunityRenderings';
import SitePlanSectionWithModal from '@/components/SitePlanSectionWithModal';
import FAQSection from '@/components/FAQSection';
import UnionVillageLeadForm from '@/components/UnionVillageLeadForm';
import UnionVillageFooter from '@/components/UnionVillageFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <Navigation />
      <HeroSectionWithModal />
      <OverviewSection />
      <LocationSection />
      <EnhancedHomeCollection />
      <CommunityRenderings />
      <SitePlanSectionWithModal />
      <FAQSection />
      <UnionVillageLeadForm />
      <UnionVillageFooter />
    </div>
  );
};

export default Index;