import { useState } from 'react';
import { MapPin, Calendar, DollarSign, Building2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactModal from '@/components/crown/CrownContactModal';
import crownHeroImage from '@/assets/crown-hero-rendering.jpg';
import fieldgateLogo from '@/assets/fieldgate-logo.jpg';

const CrownHeroSection = () => {
  const [isFloorPlansModalOpen, setIsFloorPlansModalOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${crownHeroImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Caledon, ON</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                <DollarSign className="h-4 w-4 text-accent" />
                <span>From $730K</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                <Calendar className="h-4 w-4 text-accent" />
                <span>Now Selling</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                <Building2 className="h-4 w-4 text-accent" />
                <span>Phase 1</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                CROWN OF
                <span className="block text-accent">CALEDON</span>
              </h1>
              <p className="text-xl md:text-2xl font-light leading-relaxed">
                Premium City Townhomes in the Heart of Caledon
                <span className="block mt-2 text-lg text-gray-300">
                  Where Modern Living Meets Natural Beauty
                </span>
              </p>
            </div>

            {/* Builder Credibility */}
            <div className="flex items-center gap-4 py-4">
              <img src={fieldgateLogo} alt="Fieldgate Homes" className="h-12 object-contain" />
              <div>
                <p className="font-semibold">Built by Fieldgate Homes</p>
                <p className="text-sm text-gray-300">Over 65 Years of Excellence</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold"
                onClick={() => setIsFloorPlansModalOpen(true)}
              >
                Get Exclusive Floor Plans
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/20 px-8 py-4 text-lg"
                onClick={() => scrollToSection('#overview')}
              >
                Explore Community
              </Button>
            </div>

            {/* Trust Building */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Best Price in Caledon</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Prime Location</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Limited Release</span>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            {/* Additional content space if needed */}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      <ContactModal 
        isOpen={isFloorPlansModalOpen} 
        onClose={() => setIsFloorPlansModalOpen(false)}
        formType="floorplans"
      />
    </section>
  );
};

export default CrownHeroSection;