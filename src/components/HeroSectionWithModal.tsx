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
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <MapPin size={16} className="text-luxury-gold" />
                <span>16th Avenue & Kennedy Road</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <DollarSign size={16} className="text-luxury-gold" />
                <span>From $1.4M</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <Clock size={16} className="text-luxury-gold" />
                <span>2027 Completion</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title font-display font-bold mb-6 leading-tight">
              Welcome to
              <span className="block text-gradient">Union Village</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              An extraordinary master-planned community that combines small-town charm 
              with metropolitan opportunity. Discover thoughtfully designed homes 
              where luxury meets livability.
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