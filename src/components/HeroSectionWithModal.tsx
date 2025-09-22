import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, DollarSign } from 'lucide-react';
import heroImage from '@/assets/hero-union-village-new.jpg';
import ContactModal from '@/components/ContactModal';

const HeroSectionWithModal = () => {
  const [isFloorPlansModalOpen, setIsFloorPlansModalOpen] = useState(false);
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 overlay-gradient"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center text-white">
          <div className="max-w-4xl mx-auto animate-fade-in">
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-3 md:gap-6 mb-8 text-xs sm:text-sm md:text-sm px-4">
              <div className="flex items-center gap-1 sm:gap-2 bg-white/20 backdrop-blur-md px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-full min-w-0 shadow-lg border border-white/10">
                <MapPin size={12} className="text-luxury-gold sm:w-3 sm:h-3 md:w-4 md:h-4 flex-shrink-0" />
                <span className="truncate font-medium text-white">16th & Kennedy</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 bg-white/20 backdrop-blur-md px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-full min-w-0 shadow-lg border border-white/10">
                <DollarSign size={12} className="text-luxury-gold sm:w-3 sm:h-3 md:w-4 md:h-4 flex-shrink-0" />
                <span className="truncate font-medium text-white">$1.4M+</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 bg-white/20 backdrop-blur-md px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-full min-w-0 shadow-lg border border-white/10">
                <Clock size={12} className="text-luxury-gold sm:w-3 sm:h-3 md:w-4 md:h-4 flex-shrink-0" />
                <span className="truncate font-medium text-white">2026</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 bg-white/20 backdrop-blur-md px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-full min-w-0 shadow-lg border border-white/10">
                <span className="w-4 h-4 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-luxury-gold rounded-full flex items-center justify-center text-xs sm:text-[8px] md:text-xs font-bold text-primary flex-shrink-0">2</span>
                <span className="truncate font-medium text-white">Phase 2</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title font-display font-bold mb-6 leading-tight">
              <span className="block">Welcome to</span>
              <span className="text-gradient">Union Village</span>
              <span className="block text-lg md:text-xl font-light opacity-90">Premium Unionville Houses For Sale</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Discover luxury Unionville homes for sale in Markham's most sought-after master-planned community. 
              Where modern design meets small-town charm, crafted by award-winning developers.
            </p>

            {/* Builder Credibility */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-10 text-white/80">
              <span className="text-sm">Developed by</span>
              <div className="flex items-center gap-4">
                <span className="font-semibold text-luxury-gold">The Minto Group</span>
                <span className="text-white/50">•</span>
                <span className="font-semibold text-luxury-gold">Metropia</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => setIsFloorPlansModalOpen(true)}
                size="lg"
                className="luxury-gradient text-primary font-semibold px-8 py-4 text-lg hover:scale-105 transition-transform duration-200 shadow-luxury"
              >
                Get Exclusive Floor Plans
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
                ✓ Pre-construction pricing available now
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

      {/* Contact Modals */}
      <ContactModal
        isOpen={isFloorPlansModalOpen}
        onClose={() => setIsFloorPlansModalOpen(false)}
        formType="floorplans"
      />
    </>
  );
};

export default HeroSectionWithModal;