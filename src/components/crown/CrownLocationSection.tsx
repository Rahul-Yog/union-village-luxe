import { MapPin, Clock, Car, GraduationCap, ShoppingCart, TreePine, Home, Train } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import neighborhoodMap from '@/assets/crown-neighborhood-map.jpg';

const CrownLocationSection = () => {
  const keyDistances = [
    {
      icon: ShoppingCart,
      title: "Bramalea City Centre", 
      time: "8 minutes",
      description: "Major shopping mall with 300+ stores and dining"
    },
    {
      icon: GraduationCap,
      title: "Top-Rated Schools",
      time: "5-10 minutes", 
      description: "Access to excellent Peel District schools"
    },
    {
      icon: Train,
      title: "GO Transit",
      time: "12 minutes",
      description: "Bramalea GO Station for GTA connectivity"
    },
    {
      icon: TreePine,
      title: "Conservation Areas", 
      time: "15 minutes",
      description: "Heart Lake Conservation & Chinguacousy Park"
    }
  ];

  const communityFeatures = [
    {
      title: "Shopping & Dining",
      items: [
        "Bramalea City Centre - Major shopping destination",
        "Local plazas with grocery and retail", 
        "Diverse restaurant selection",
        "Professional services nearby"
      ]
    },
    {
      title: "Education & Recreation",
      items: [
        "Peel District School Board schools",
        "Recreation centers and sports facilities",
        "Community centers and libraries", 
        "Parks and playgrounds throughout"
      ]
    },
    {
      title: "Transportation & Connectivity",
      items: [
        "Highway 410 access - 5 minutes",
        "Highway 407 ETR - 10 minutes",
        "GO Transit connections to downtown", 
        "YRT bus routes throughout area"
      ]
    }
  ];

  return (
    <section id="location" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Caledon Location & <span className="text-accent">Neighbourhood</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Strategically located at Hurontario Street and Mayfield Road, Crown of Caledon offers the perfect 
            blend of suburban tranquility and urban accessibility in one of the GTA's most desirable areas.
          </p>
        </div>

        {/* Neighbourhood Map */}
        <div className="mb-16">
          <Card className="overflow-hidden">
            <div className="relative">
              <img 
                src={neighborhoodMap} 
                alt="Crown of Caledon Neighbourhood Map showing townhomes, detached homes and community layout"
                className="w-full h-auto max-h-96 object-contain bg-white"
              />
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="font-semibold text-foreground">Crown of Caledon Site Plan</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Key Distances */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyDistances.map((location, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <location.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">{location.title}</h3>
              <p className="text-muted-foreground mb-3">{location.description}</p>
              <div className="flex items-center justify-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                <span className="text-accent font-semibold">{location.time}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Community Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {communityFeatures.map((category, index) => (
            <Card key={index} className="p-6 border-l-4 border-l-accent">
              <h3 className="text-xl font-bold text-foreground mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="p-8 bg-gradient-to-r from-accent/5 via-primary/5 to-secondary/5 border-accent/20">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-4">
              <Home className="h-8 w-8 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">
                Get Personal Consultation
              </h3>
            </div>
            
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover why Crown of Caledon is the perfect place to call home. Get detailed information 
              about floor plans, pricing, and availability.
            </p>
            
            <Button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="luxury-gradient text-primary font-semibold hover:scale-105 transition-transform duration-200 px-8 py-3"
            >
              Schedule Consultation
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CrownLocationSection;