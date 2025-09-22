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
      icon: Shield,
      title: "Safe Community",
      description: "Gated community features with 24/7 security monitoring for complete peace of mind"
    },
    {
      icon: Users,
      title: "Community Center",
      description: "Dedicated spaces for community events and gatherings"
    },
    {
      icon: Heart,
      title: "Family Wellness",
      description: "Health and wellness facilities designed with multigenerational families in mind"
    },
    {
      icon: Dumbbell,
      title: "Recreation Facilities",
      description: "Children's playground, sports courts, walking paths, and garden areas for community activities"
    },
    {
      icon: Wifi,
      title: "Modern Infrastructure", 
      description: "High-speed internet ready and smart technology integration throughout the community"
    }
  ];


  return (
    <section id="amenities" className="py-20 bg-gradient-to-b from-background to-secondary/20">
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