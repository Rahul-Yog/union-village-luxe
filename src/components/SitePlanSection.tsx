import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Trees, Car, Home, Waves, Clock } from 'lucide-react';
import sitePlanImage from '@/assets/union-village-site-plan.jpg';

const SitePlanSection = () => {
  const phases = [
    {
      name: "Phase 1",
      status: "Completed",
      homes: "350 Homes",
      badge: "Sold Out",
      badgeColor: "bg-trust-green"
    },
    {
      name: "Phase 2", 
      status: "Now Available",
      homes: "180 Homes",
      badge: "Available",
      badgeColor: "luxury-gradient"
    },
    {
      name: "Phase 3",
      status: "Coming 2025",
      homes: "220 Homes",
      badge: "Future",
      badgeColor: "bg-muted"
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
                alt="Union Village Master Site Plan"
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
                  
                  <p className="text-accent font-semibold mb-2">
                    {phase.status}
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                    <Home className="h-4 w-4" />
                    <span className="text-sm">{phase.homes}</span>
                  </div>
                  
                  {phase.badge === "Available" && (
                    <Button 
                      onClick={scrollToContact}
                      className="cta-secondary w-full"
                    >
                      View Available Homes
                    </Button>
                  )}
                  
                  {phase.badge === "Future" && (
                    <Button 
                      onClick={scrollToContact}
                      variant="outline"
                      className="w-full"
                    >
                      Join Interest List
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

        {/* Green Spaces Highlight */}
        <div className="text-center">
          <Card className="luxury-card bg-gradient-to-br from-trust-green/5 to-primary/5 border-trust-green/20 max-w-4xl mx-auto">
            <div className="p-8">
              <Trees className="h-16 w-16 text-trust-green mx-auto mb-6" />
              <h3 className="text-3xl font-display font-bold text-primary mb-4">
                40% Green Space Commitment
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Union Village is committed to preserving and creating green spaces that enhance 
                quality of life. With preserved wetlands, community parks, and tree-lined streets, 
                residents enjoy a natural oasis within the urban setting.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-trust-green mb-2">15 Acres</div>
                  <div className="text-sm text-muted-foreground">Central Park & Recreation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-trust-green mb-2">8 km</div>
                  <div className="text-sm text-muted-foreground">Walking & Cycling Trails</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-trust-green mb-2">25 Acres</div>
                  <div className="text-sm text-muted-foreground">Preserved Wetlands</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SitePlanSection;