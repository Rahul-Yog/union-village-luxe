import { useState } from 'react';
import { MapPin, Calendar, DollarSign, Building2, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactModal from '@/components/crown/CrownContactModal';
import crownHeroImage from '@/assets/crown-hero-image.png';
import crownLogo from '@/assets/crown-logo.png';
const CrownHeroSection = () => {
  const [isFloorPlansModalOpen, setIsFloorPlansModalOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${crownHeroImage})` }}
        >
          <div className="absolute inset-0 overlay-gradient"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container-custom text-center text-white">
          <div className="max-w-4xl mx-auto animate-fade-in">
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-1 sm:gap-3 md:gap-6 mb-8 text-[9px] sm:text-xs md:text-sm px-2">
              <div className="flex items-center gap-1 bg-white/15 backdrop-blur-md px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-full min-w-0 shadow-lg">
                <MapPin size={10} className="text-luxury-gold sm:w-4 sm:h-4 md:w-4 md:h-4 flex-shrink-0" />
                <span className="truncate font-medium text-white">Hurontario & Mayfield</span>
              </div>
              <div className="flex items-center gap-1 bg-white/15 backdrop-blur-md px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-full min-w-0 shadow-lg">
                <DollarSign size={10} className="text-luxury-gold sm:w-4 sm:h-4 md:w-4 md:h-4 flex-shrink-0" />
                <span className="truncate font-medium text-white">From $730K</span>
              </div>
              <div className="flex items-center gap-1 bg-white/15 backdrop-blur-md px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-full min-w-0 shadow-lg">
                <Clock size={10} className="text-luxury-gold sm:w-4 sm:h-4 md:w-4 md:h-4 flex-shrink-0" />
                <span className="truncate font-medium text-white">2026 Move-in</span>
              </div>
              <div className="flex items-center gap-1 bg-white/15 backdrop-blur-md px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-full min-w-0 shadow-lg">
                <span className="w-2.5 h-2.5 sm:w-4 sm:h-4 bg-luxury-gold rounded-full flex items-center justify-center text-[7px] sm:text-xs font-bold text-primary flex-shrink-0">4</span>
                <span className="truncate font-medium text-white">Near Hwy 410</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title font-display font-bold mb-6 leading-tight">
              Welcome to
              <span className="block text-gradient">Crown of Caledon</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Discover premium freehold townhomes and stunning 38' detached homes on the vibrant 
              border of Brampton. Where luxury living meets unbeatable value - offering the 
              <span className="text-luxury-gold font-semibold"> best pricing in today's market</span>.
            </p>

            {/* Home Types */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-white/80">
              <span className="text-sm">Featuring:</span>
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">Rear Lane Townhomes</span>
                <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">2-Story Townhomes</span>
                <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">38' Single Detached</span>
              </div>
            </div>

            {/* Builder Credibility */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-10 text-white/80">
              <span className="text-sm">Developed by</span>
              <div className="flex items-center gap-4">
                <span className="font-semibold text-luxury-gold">Fieldgate Homes</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => setIsFloorPlansModalOpen(true)}
                size="lg"
                className="luxury-gradient text-primary font-semibold px-8 py-4 text-lg hover:scale-105 transition-transform duration-200 shadow-luxury"
              >
                Get Crown Floor Plans
              </Button>
              <Button 
                onClick={() => scrollToSection('#overview')}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg transition-all duration-300"
              >
                Explore Community
              </Button>
            </div>

            {/* Trust Building Message */}
            <div className="mt-12 text-white/70 text-sm max-w-2xl mx-auto">
              <p>
                ✓ Best market pricing guaranteed
                <span className="mx-4">•</span>
                ✓ Floor plans & pricing sheets sent instantly
                <span className="mx-4">•</span>
                ✓ No obligation consultation
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      <ContactModal 
        isOpen={isFloorPlansModalOpen} 
        onClose={() => setIsFloorPlansModalOpen(false)}
        formType="floorplans"
      />
    </>
  );
};

export default CrownHeroSection;