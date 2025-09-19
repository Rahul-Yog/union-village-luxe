import { useState } from 'react';
import { MapPin, Calendar, DollarSign, Building2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactModal from '@/components/crown/CrownContactModal';
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
      style={{ backgroundImage: `url(/crown-hero-rendering.jpg)` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-3 text-sm">
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Hurontario St. & Mayfield Rd.</span>
              </div>
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <DollarSign className="h-4 w-4 text-accent" />
                <span>From $730K ⚡ Beat Competitors</span>
              </div>
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Building2 className="h-4 w-4 text-accent" />
                <span>Townhomes & 38'/60' Detached</span>
              </div>
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Calendar className="h-4 w-4 text-accent" />
                <span>VIP Pricing Available</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                CROWN OF
                <span className="block text-accent">CALEDON</span>
              </h1>
              <div className="space-y-3">
                <p className="text-2xl md:text-3xl font-semibold leading-relaxed">
                  <strong>Freehold Townhomes & 38'/60' Detached Homes</strong>
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Starting from $730K - <span className="text-accent font-semibold">$20K+ Less than Competitors!</span>
                </p>
                <p className="text-base text-gray-300">
                  🏡 Perfect for modern families • ⛪ Minutes from places of worship • 🌟 Fieldgate's 65+ Years Excellence
                </p>
              </div>
            </div>

            {/* Builder Credibility */}
            <div className="flex items-center gap-4 py-4">
              <img src="/fieldgate-logo.jpg" alt="Fieldgate Homes" className="h-12 object-contain" />
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
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span><strong>Beat competitors by $20K+</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>VIP floor plans sent instantly</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Punjabi, Hindi & English consultation</span>
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