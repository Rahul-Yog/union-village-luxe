import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import OverviewSection from '@/components/OverviewSection';
import LocationSection from '@/components/LocationSection';
import SitePlanSection from '@/components/SitePlanSection';
import HomeCollection from '@/components/HomeCollection';
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
      <HomeCollection />
      <LeadForm />
      <Footer />
    </div>
  );
};

export default Index;
