import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, TreePine, Waves, Dumbbell, School } from 'lucide-react';
import sitePlan from '@/assets/union-village-site-plan-new.jpg';
import ContactModal from '@/components/ContactModal';

const SitePlanSectionWithModal = () => {
  const [isSitePlanModalOpen, setIsSitePlanModalOpen] = useState(false);
  const [isAvailableHomesModalOpen, setIsAvailableHomesModalOpen] = useState(false);

  const phases = [
    {
      name: "Phase One",
      status: "Sold Out",
      badge: "Sold Out",
      badgeColor: "bg-red-500"
    },
    {
      name: "Phase Two", 
      status: "Late 2026",
      badge: "Pre-Launch",
      badgeColor: "bg-blue-500"
    }
  ];

  const amenities = [
    {
      icon: TreePine,
      title: "Central Park & Green Spaces",
      description: "Expansive parklands with walking trails, playgrounds, and natural habitat preservation areas throughout the community."
    },
    {
      icon: Waves,
      title: "Stormwater Management",
      description: "Innovative water management systems including beautiful retention ponds that double as community focal points."
    },
    {
      icon: Dumbbell,
      title: "Community Recreation Centre", 
      description: "State-of-the-art recreation facility with fitness amenities, multi-purpose rooms, and community programming."
    },
    {
      icon: School,
      title: "Educational Facilities",
      description: "Planned elementary school sites and proximity to top-rated secondary schools in the York Region."
    },
    {
      icon: Users,
      title: "Community Gathering Spaces",
      description: "Thoughtfully designed common areas, community gardens, and event spaces for resident activities."
    },
    {
      icon: Calendar,
      title: "Future Commercial Hub",
      description: "Planned retail and service amenities including shopping, dining, and professional services within the community."
    }
  ];

  return (
    <>
      <section id="site-plan" className="section-spacing bg-background">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Master Community Plan
            </h2>
            <div className="w-24 h-1 luxury-gradient mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the thoughtful design and phased development of Union Village, 
              where each element has been carefully planned to create a harmonious living environment.
            </p>
          </div>

          {/* Site Plan Image */}
          <div className="mb-16">
            <Card className="luxury-card overflow-hidden max-w-5xl mx-auto group">
              <div className="relative">
                <img 
                  src={sitePlan} 
                  alt="Union Village Master Community Site Plan - 16th Avenue & Kennedy Road | New Homes in Markham Layout" 
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    onClick={() => setIsSitePlanModalOpen(true)}
                    size="lg"
                    className="luxury-gradient text-primary font-semibold px-8 py-3 hover:scale-105 transition-transform duration-200 shadow-luxury"
                  >
                    View Detailed Plan
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
            <div className="grid md:grid-cols-2 gap-6 justify-center max-w-2xl mx-auto">
              {phases.map((phase, index) => (
                <Card key={index} className="luxury-card group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="p-6 text-center">
                    <Badge className={`${phase.badgeColor} text-white mb-4`}>
                      {phase.badge}
                    </Badge>
                    <h4 className="text-xl font-display font-bold text-primary mb-2">
                      {phase.name}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {phase.status}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Community Amenities */}
          <div className="mb-16">
            <h3 className="text-3xl font-display font-bold text-primary text-center mb-12">
              Planned Community Amenities
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {amenities.map((amenity, index) => (
                <Card key={index} className="luxury-card group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                        <amenity.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary mb-2">{amenity.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {amenity.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <Button 
                onClick={() => setIsSitePlanModalOpen(true)}
                size="lg"
                className="luxury-gradient text-primary font-semibold px-8 py-3 hover:scale-105 transition-transform duration-200 shadow-luxury"
              >
                Get Detailed Site Plan
              </Button>
              <Button 
                onClick={() => setIsAvailableHomesModalOpen(true)}
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 transition-all duration-300"
              >
                View Available Homes
              </Button>
            </div>
            
            <p className="text-muted-foreground text-sm mt-6 max-w-xl mx-auto">
              Get instant access to detailed site plans, phase information, and available inventory. 
              Our sales team will contact you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Modals */}
      <ContactModal
        isOpen={isSitePlanModalOpen}
        onClose={() => setIsSitePlanModalOpen(false)}
        formType="siteplan"
      />
      <ContactModal
        isOpen={isAvailableHomesModalOpen}
        onClose={() => setIsAvailableHomesModalOpen(false)}
        formType="general"
      />
    </>
  );
};

export default SitePlanSectionWithModal;