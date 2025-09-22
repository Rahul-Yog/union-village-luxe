import CrownNavigation from '@/components/crown/CrownNavigation';
import CrownHeroSection from '@/components/crown/CrownHeroSection';
import CrownOverviewSection from '@/components/crown/CrownOverviewSection';
import CrownLocationSection from '@/components/crown/CrownLocationSection';
import CrownHomeCollection from '@/components/crown/CrownHomeCollection';
import CrownAmenities from '@/components/crown/CrownAmenities';
import CrownFAQSection from '@/components/crown/CrownFAQSection';
import CrownLeadForm from '@/components/crown/CrownLeadForm';
import CrownFooter from '@/components/crown/CrownFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <CrownNavigation />
      <CrownHeroSection />
      <CrownOverviewSection />
      <CrownLocationSection />
      <CrownHomeCollection />
      <CrownAmenities />
      <CrownFAQSection />
      <CrownLeadForm />
      <CrownFooter />
    </div>
  );
};

export default Index;