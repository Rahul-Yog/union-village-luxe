import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Trees, Car, Home, Waves, Clock } from 'lucide-react';
import sitePlanImage from '@/assets/union-village-site-plan-new.jpg';

const SitePlanSection = () => {
  const phases = [
    {
      name: "Phase 1",
      status: "Completed",
      badge: "Sold Out",
      badgeColor: "bg-trust-green"
    },
    {
      name: "Phase 2", 
      status: "Now Available",
      badge: "Available",
      badgeColor: "luxury-gradient"
    }
  ];

  const amenities = [
    {
      icon: Trees,
      title: "Central Park",
      description: "Large community park with playground and recreational facilities"
    },
    {
      icon: Waves,
      title: "Preserved Wetlands",
      description: "Protected natural areas with walking trails and wildlife observation"
    },
    {
      icon: Car,
      title: "Community Centre",
      description: "Modern facility with fitness center, meeting rooms, and event space"
    },
    {
      icon: MapPin,
      title: "Retail Plaza",
      description: "Convenient shopping with cafes, services, and everyday necessities"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="site-plan" className="section-spacing bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Master Site Plan
          </h2>
          <div className="w-24 h-1 luxury-gradient mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the thoughtful layout of Union Village, where every detail has been 
            carefully planned to create a harmonious community that celebrates both 
            nature and modern living.
          </p>
        </div>

        {/* Site Plan Image */}
        <div className="mb-16">
          <Card className="luxury-card overflow-hidden">
            <div className="relative">
              <img 
                src={sitePlanImage} 
                alt="Union Village Master Site Plan - Luxury Community Layout | Unionville Houses For Sale in Markham"
                className="w-full h-auto"
              />
              <div className="absolute top-4 right-4">
                <Button 
                  onClick={scrollToContact}
                  className="luxury-gradient text-primary font-semibold shadow-luxury"
                >
                  Get Detailed Site Plan
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Development Phases */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-primary text-center mb-12">
            Development Phases
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <Card key={index} className="luxury-card text-center animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="p-6">
                  <div className="mb-4">
                    <Badge className={`${phase.badgeColor} text-white font-semibold px-4 py-2`}>
                      {phase.badge}
                    </Badge>
                  </div>
                  
                  <h4 className="text-2xl font-display font-bold text-primary mb-2">
                    {phase.name}
                  </h4>
                  
                  <p className="text-accent font-semibold mb-4">
                    {phase.status}
                  </p>
                  
                  {phase.badge === "Available" && (
                    <Button 
                      onClick={scrollToContact}
                      className="cta-secondary w-full"
                    >
                      View Available Homes
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Amenities */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-primary text-center mb-12">
            Community Amenities
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <Card key={index} className="luxury-card text-center group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="p-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <amenity.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="font-display font-semibold text-primary mb-3">
                    {amenity.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SitePlanSection;