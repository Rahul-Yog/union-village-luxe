import Navigation from '@/components/Navigation';
import HeroSectionWithModal from '@/components/HeroSectionWithModal';
import OverviewSection from '@/components/OverviewSection';
import LocationSection from '@/components/LocationSection';
import SitePlanSectionWithModal from '@/components/SitePlanSectionWithModal';
import EnhancedHomeCollection from '@/components/EnhancedHomeCollection';
import CommunityRenderings from '@/components/CommunityRenderings';
import FAQSection from '@/components/FAQSection';
import UnionVillageLeadForm from '@/components/UnionVillageLeadForm';
import UnionVillageFooter from '@/components/UnionVillageFooter';

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
      <UnionVillageLeadForm />
      <UnionVillageFooter />
    </div>
  );
};

export default Index;
