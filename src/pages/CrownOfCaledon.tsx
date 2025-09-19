import Navigation from '@/components/Navigation';
import CrownHeroSection from '@/components/crown/CrownHeroSection';
import CrownOverviewSection from '@/components/crown/CrownOverviewSection';
import CrownLocationSection from '@/components/crown/CrownLocationSection';
import CrownHomeCollection from '@/components/crown/CrownHomeCollection';
import CrownAmenities from '@/components/crown/CrownAmenities';
import FAQSection from '@/components/FAQSection';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

const CrownOfCaledon = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <CrownHeroSection />
      <CrownOverviewSection />
      <CrownLocationSection />
      <CrownHomeCollection />
      <CrownAmenities />
      <FAQSection />
      <LeadForm />
      <Footer />
    </div>
  );
};

export default CrownOfCaledon;