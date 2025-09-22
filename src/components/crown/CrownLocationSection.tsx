import { MapPin, Clock, Car, Plane, GraduationCap, ShoppingBag, Building2, TreePine } from 'lucide-react';
import { Card } from '@/components/ui/card';

const CrownLocationSection = () => {
  const keyDistances = [
    { icon: Car, title: "Highway 410", time: "5 min", description: "Direct GTA access" },
    { icon: GraduationCap, title: "Sheridan College", time: "15 min", description: "Davis Campus" },
    { icon: ShoppingBag, title: "Bramalea City Centre", time: "12 min", description: "Major shopping" },
    { icon: Plane, title: "Pearson Airport", time: "25 min", description: "International travel" },
    { icon: Building2, title: "Downtown Toronto", time: "45 min", description: "Financial district" },
    { icon: TreePine, title: "Credit Valley", time: "8 min", description: "Conservation area" }
  ];

  const communityFeatures = [
    {
      title: "Shopping & Services",
      items: [
        "Major shopping centers nearby",
        "Grocery stores and pharmacies",
        "Restaurants and entertainment", 
        "Banking and professional services"
      ]
    },
    {
      title: "Educational Excellence", 
      items: [
        "Peel District School Board",
        "Dufferin-Peel Catholic DSB",
        "Private schools available",
        "French immersion programs"
      ]
    },
    {
      title: "Recreation & Wellness",
      items: [
        "Caledon Recreation Complex", 
        "Credit Valley Golf Club",
        "Hiking & nature trails",
        "Community centers"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Premium Caledon Location
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Perfectly positioned for modern living with cultural connections and natural beauty
          </p>
        </div>

        {/* Location Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {keyDistances.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group hover:border-accent/50">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-accent font-bold">
                    <Clock className="h-4 w-4" />
                    {item.time}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Detailed Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {communityFeatures.map((feature, index) => (
            <Card key={index} className="p-6 border-l-4 border-l-accent">
              <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
              <ul className="space-y-2">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Get Consultation at Home */}
        <Card className="p-8 bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-6 w-6 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">Get Personal Consultation</h3>
            </div>
            <p className="text-lg text-muted-foreground">
              Schedule a personalized consultation from the comfort of your home
            </p>
            <p className="text-muted-foreground">
              Our experts will bring all the information directly to you
            </p>
            <div className="pt-4">
              <button 
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Book Consultation Now
              </button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CrownLocationSection;