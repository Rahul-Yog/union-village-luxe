import { TreePine, Car, Shield, Wifi, Dumbbell, Users, Heart, Leaf } from 'lucide-react';
import { Card } from '@/components/ui/card';

const CrownAmenities = () => {
  const amenities = [
    {
      icon: TreePine,
      title: "Natural Landscapes",
      description: "Beautifully landscaped green spaces and walking trails connecting you to Caledon's natural beauty"
    },
    {
      icon: Car,
      title: "2-Car Garages",
      description: "Every home includes a spacious 2-car garage with additional driveway parking for family convenience"
    },
    {
      icon: Shield,
      title: "Safe Community",
      description: "Gated community features with 24/7 security monitoring for complete peace of mind"
    },
    {
      icon: Wifi,
      title: "Smart Home Ready",
      description: "Pre-wired for high-speed internet, smart home systems, and modern technology integration"
    },
    {
      icon: Users,
      title: "Community Center",
      description: "Dedicated spaces for cultural celebrations, community events, and religious observances"
    },
    {
      icon: Heart,
      title: "Family Wellness",
      description: "Health and wellness facilities designed with multigenerational families in mind"
    }
  ];

  const culturalAmenities = [
    {
      title: "Cultural Celebration Spaces",
      features: [
        "Large community hall for festivals",
        "Outdoor gathering areas for ceremonies", 
        "Kitchen facilities for community meals",
        "Prayer and meditation spaces"
      ]
    },
    {
      title: "Family Recreation",
      features: [
        "Children's playground with safety features",
        "Sports courts for cricket & other games",
        "Walking paths for evening strolls",
        "Garden areas for community growing"
      ]
    },
    {
      title: "Convenience Services",
      features: [
        "Visitor parking throughout",
        "Package delivery reception",
        "Maintenance services available", 
        "Snow removal included"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Community Amenities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Thoughtfully designed amenities that celebrate community living and cultural traditions
          </p>
        </div>

        {/* Main Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {amenities.map((amenity, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group hover:border-accent/50">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl flex items-center justify-center group-hover:from-accent/20 group-hover:to-primary/20 transition-colors">
                  <amenity.icon className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{amenity.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{amenity.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Cultural & Family Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {culturalAmenities.map((section, index) => (
            <Card key={index} className="p-6 border-l-4 border-l-accent">
              <h3 className="text-xl font-bold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Sustainability & Environment */}
        <Card className="p-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-4">
              <Leaf className="h-8 w-8 text-green-600" />
              <h3 className="text-2xl font-bold text-foreground">
                Sustainable Living
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">Energy Efficient</h4>
                <p className="text-sm text-muted-foreground">
                  ENERGY STAR appliances and high-efficiency heating systems
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">Water Conservation</h4>
                <p className="text-sm text-muted-foreground">
                  Low-flow fixtures and drought-resistant landscaping
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">Green Spaces</h4>
                <p className="text-sm text-muted-foreground">
                  Native plant gardens and tree preservation
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">Clean Air</h4>
                <p className="text-sm text-muted-foreground">
                  Advanced HVAC filtration and natural ventilation
                </p>
              </div>
            </div>
            
            <p className="text-center text-muted-foreground italic">
              "Building for today while preserving tomorrow"
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CrownAmenities;