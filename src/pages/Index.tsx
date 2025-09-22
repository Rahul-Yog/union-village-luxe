import Navigation from '@/components/Navigation';
import HeroSectionWithModal from '@/components/HeroSectionWithModal';
import OverviewSection from '@/components/OverviewSection';
import LocationSection from '@/components/LocationSection';
import SitePlanSectionWithModal from '@/components/SitePlanSectionWithModal';
import HomeCollection from '@/components/HomeCollection';
import UnionVillageLeadForm from '@/components/UnionVillageLeadForm';
import UnionVillageFooter from '@/components/UnionVillageFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <Navigation />
      <HeroSectionWithModal />
      <OverviewSection />
      <LocationSection />
      <SitePlanSectionWithModal />
      <HomeCollection />
      <UnionVillageLeadForm />
      <UnionVillageFooter />
    </div>
  );
};

export default Index;