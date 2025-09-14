import { Card } from '@/components/ui/card';
import { MapPin, Train, Plane, ShoppingBag, GraduationCap, Hospital, TreePine } from 'lucide-react';
import neighbourhoodMap from '@/assets/neighbourhood-map.jpg';

const LocationSection = () => {
  const amenities = [
    {
      icon: Train,
      title: "GO Transit Access",
      description: "Quick access to GO Transit for easy commuting to downtown Toronto",
      distance: "5 min drive"
    },
    {
      icon: ShoppingBag,
      title: "CF Markville Mall",
      description: "Major shopping destination with 140+ stores and services",
      distance: "8 min drive"
    },
    {
      icon: GraduationCap,
      title: "Top-Rated Schools",
      description: "Access to highly-rated public and private schools in the area",
      distance: "Walking distance"
    },
    {
      icon: Hospital,
      title: "Markham Stouffville Hospital",
      description: "Full-service hospital with emergency and specialized care",
      distance: "12 min drive"
    },
    {
      icon: TreePine,
      title: "Unionville Main Street",
      description: "Historic charm with boutique shops, cafes, and restaurants",
      distance: "3 min drive"
    },
    {
      icon: Plane,
      title: "Pearson Airport",
      description: "Easy access to Canada's largest international airport",
      distance: "35 min drive"
    }
  ];

  const neighborhoods = [
    {
      name: "Unionville",
      description: "Historic village charm with tree-lined streets and heritage buildings",
      highlights: ["Main Street Heritage Conservation District", "Unionville Library", "Toogood Pond"]
    },
    {
      name: "Markham Centre",
      description: "Modern urban hub with business districts and entertainment",
      highlights: ["Markham Civic Centre", "Pan Am Centre", "Downtown Markham"]
    },
    {
      name: "Cornell",
      description: "Master-planned community with modern amenities and green spaces",
      highlights: ["Cornell Community Centre", "New parks and trails", "Shopping plazas"]
    }
  ];

  return (
    <section id="location" className="section-spacing bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Prime Markham Location
          </h2>
          <div className="w-24 h-1 luxury-gradient mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Located at the prestigious intersection of 16th Avenue and Kennedy Road, 
            Union Village offers the perfect balance of small-town charm and metropolitan convenience.
          </p>
        </div>

        {/* Location Highlight */}
        <div className="mb-16">
          <Card className="luxury-card bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="p-8 text-center">
              <MapPin className="h-16 w-16 text-accent mx-auto mb-6" />
              <h3 className="text-3xl font-display font-bold text-primary mb-4">
                16th Avenue & Kennedy Road
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                This prestigious address places you at the heart of Markham's most sought-after area, 
                where Unionville's historic charm meets modern urban amenities.
              </p>
            </div>
          </Card>
        </div>

        {/* Amenities Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-primary text-center mb-12">
            Everything You Need Nearby
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
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-primary">{amenity.title}</h4>
                        <span className="text-xs text-accent font-medium bg-accent/10 px-2 py-1 rounded-full">
                          {amenity.distance}
                        </span>
                      </div>
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

        {/* Surrounding Neighborhoods */}
        <div>
          <h3 className="text-3xl font-display font-bold text-primary text-center mb-12">
            Explore the Surrounding Area
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {neighborhoods.map((neighborhood, index) => (
              <Card key={index} className="luxury-card animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="p-6">
                  <h4 className="text-xl font-display font-bold text-primary mb-3">
                    {neighborhood.name}
                  </h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {neighborhood.description}
                  </p>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-primary text-sm">Key Highlights:</h5>
                    {neighborhood.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 luxury-gradient rounded-full"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Transportation Note */}
        <div className="mt-16 text-center">
          <Card className="luxury-card bg-gradient-to-br from-trust-blue/5 to-primary/5 border-trust-blue/20 max-w-3xl mx-auto">
            <div className="p-8">
              <Train className="h-12 w-12 text-trust-blue mx-auto mb-4" />
              <h4 className="text-xl font-display font-bold text-primary mb-4">
                Exceptional Transit Connectivity
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                With GO Transit, Highway 407, and major arterial roads nearby, Union Village 
                offers unparalleled access to the Greater Toronto Area while maintaining 
                the peaceful suburban lifestyle you desire.
              </p>
            </div>
          </Card>
        </div>

        {/* Neighbourhood Map */}
        <div className="mt-16">
          <h3 className="text-3xl font-display font-bold text-primary text-center mb-8">
            Neighbourhood Map
          </h3>
          <Card className="luxury-card overflow-hidden max-w-4xl mx-auto">
            <img 
              src={neighbourhoodMap} 
              alt="Union Village Neighbourhood Map" 
              className="w-full h-auto"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;