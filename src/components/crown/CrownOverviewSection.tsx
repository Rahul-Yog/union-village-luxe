import { Heart, TreePine, GraduationCap, ShoppingCart, Car, Home, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const CrownOverviewSection = () => {
  const highlights = [
    {
      icon: Home,
      title: "Townhomes & Detached Homes",
      description: "Freehold townhomes AND 38'/60' single-family detached homes - both options available!"
    },
    {
      icon: Heart,
      title: "Community Focused",
      description: "Designed with Indian families in mind - celebrating culture and tradition"
    },
    {
      icon: GraduationCap,
      title: "Excellent Schools",
      description: "Top-rated schools in Peel & Dufferin regions serving diverse communities"
    },
    {
      icon: ShoppingCart,
      title: "Cultural Shopping",
      description: "Easy access to Indian grocery stores, temples, and cultural centers"
    },
    {
      icon: TreePine,
      title: "Natural Beauty",
      description: "Surrounded by Caledon's pristine nature and conservation areas"
    },
    {
      icon: Car,
      title: "GTA Connectivity",
      description: "Quick access to Highway 410, 427 & GO Transit for easy commuting"
    }
  ];

  return (
    <section id="overview" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            The Gateway to <span className="text-accent">Affordable Luxury</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Crown of Caledon offers <strong>both freehold townhomes AND detached homes (38' & 60')</strong> 
            starting from just $730K - significantly less than competitors at $750K+. Built by Fieldgate Homes 
            with 65+ years of excellence, perfect for Indian families seeking quality & value.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-muted-foreground leading-relaxed">
                Crown of Caledon represents the perfect harmony between modern luxury and cultural connection. 
                Built by Fieldgate Homes with over 65 years of excellence, this exceptional community offers 
                <span className="font-semibold text-foreground"> both freehold townhomes AND 38'/60' detached homes starting from just $730,000</span> 
                - <strong className="text-accent">$20,000+ less than competitors</strong> in the same area.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Thoughtfully designed for the Indian community, Crown of Caledon celebrates diverse traditions 
                while providing contemporary amenities. From spacious 1,602 to 1,620 sq ft layouts to 
                proximity to cultural centers and temples, every detail has been carefully considered.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Located in the prestigious Town of Caledon, residents enjoy the perfect balance of suburban 
                tranquility and urban convenience, with easy access to the GTA while being surrounded by 
                nature's beauty.
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

        {/* Cultural Connection Section */}
        <Card className="p-8 bg-gradient-to-r from-accent/5 via-primary/5 to-secondary/5 border-accent/20">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-4">
              <Users className="h-8 w-8 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">
                Celebrating Diversity & Tradition
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">Sikh Community</h4>
                <p className="text-sm text-muted-foreground">
                  Close to Gurdwaras, Punjabi schools, and cultural centers throughout the region
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">Hindu Community</h4>
                <p className="text-sm text-muted-foreground">
                  Convenient access to temples, Indian grocery stores, and traditional festivals
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">Muslim Community</h4>
                <p className="text-sm text-muted-foreground">
                  Near mosques, halal markets, and Islamic educational institutions
                </p>
              </div>
            </div>
            
            <p className="text-center text-muted-foreground italic">
              "Where every family finds their home, and every tradition finds its place"
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CrownOverviewSection;