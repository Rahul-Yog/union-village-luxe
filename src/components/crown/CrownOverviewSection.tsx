import { Heart, TreePine, GraduationCap, ShoppingCart, Car, Home, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const CrownOverviewSection = () => {
  const highlights = [
    {
      icon: Home,
      title: "Townhomes & Detached Homes",
      description: "Freehold townhomes and single-family detached homes - both options available!"
    },
    {
      icon: Heart,
      title: "Family-Focused Design",
      description: "Thoughtfully designed layouts perfect for growing families of all backgrounds"
    },
    {
      icon: GraduationCap,
      title: "Excellent Schools",
      description: "Top-rated schools in Peel & Dufferin regions with diverse programs and excellence"
    },
    {
      icon: ShoppingCart,
      title: "Shopping & Amenities",
      description: "Easy access to shopping plazas, specialty stores, and essential services"
    },
    {
      icon: TreePine,
      title: "Natural Beauty",
      description: "Surrounded by Caledon's pristine nature and conservation areas"
    },
    {
      icon: Car,
      title: "GTA Connectivity",
      description: "Quick access to Highway 410, 407 & GO Transit for easy commuting"
    }
  ];

  return (
    <section id="overview" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Crown of <span className="text-accent">Caledon</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Introducing Crown of Caledon, where luxury meets comfort in one of the GTA's most prestigious locations. 
            This exclusive development features premium freehold townhomes and spacious detached homes, 
            all crafted with unmatched quality and attention to detail by Fieldgate Homes. 
            Experience the perfect blend of modern design and natural beauty in Caledon's thriving community.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-muted-foreground leading-relaxed">
                Crown of Caledon represents the pinnacle of modern living, offering an exclusive collection of 
                freehold townhomes and detached homes in one of Ontario's most desirable communities. Located at the 
                prestigious intersection of Hurontario Street and Mayfield Road, this development seamlessly blends 
                luxury with the natural beauty of Caledon.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Each home is thoughtfully designed with premium finishes, spacious layouts, and modern amenities that 
                cater to today's discerning homeowners. From elegant architectural details to gourmet kitchens with 
                premium appliances, every element reflects our commitment to quality and sophisticated living.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                The community offers an ideal balance of rural charm and urban convenience, with access to pristine 
                natural spaces, top-rated schools, and recreational facilities, while maintaining excellent 
                connectivity throughout the Greater Toronto Area.
              </p>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-accent">
                <div className="flex flex-col space-y-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Premium Location Benefits */}
        <Card className="p-8 bg-gradient-to-r from-accent/5 via-primary/5 to-secondary/5 border-accent/20">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-4">
              <Users className="h-8 w-8 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">
                Premium Caledon Living
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">Nature & Recreation</h4>
                <p className="text-sm text-muted-foreground">
                  Conservation areas, golf courses, hiking trails, and outdoor activities throughout Caledon
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">Transportation Hub</h4>
                <p className="text-sm text-muted-foreground">
                  Quick highway access, GO Transit connections, and easy commute to downtown Toronto
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">Growing Community</h4>
                <p className="text-sm text-muted-foreground">
                  New amenities, shopping centers, schools, and infrastructure development in the area
                </p>
              </div>
            </div>
            
            <p className="text-center text-muted-foreground italic">
              "Where luxury meets convenience in Caledon's most promising community"
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CrownOverviewSection;