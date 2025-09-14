import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import OverviewSection from '@/components/OverviewSection';
import LocationSection from '@/components/LocationSection';
import SitePlanSection from '@/components/SitePlanSection';
import EnhancedHomeCollection from '@/components/EnhancedHomeCollection';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <OverviewSection />
      <LocationSection />
      <SitePlanSection />
      <EnhancedHomeCollection />
      <LeadForm />
      <Footer />
    </div>
  );
};

export default Index;
