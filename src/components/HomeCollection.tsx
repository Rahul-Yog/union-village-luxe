import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, Maximize, Users, Car } from 'lucide-react';
import home36Feet from '@/assets/36-feet-home.jpg';
import home43Feet from '@/assets/43-feet-home.jpg';
import home50Feet from '@/assets/50-feet-home.jpg';

const HomeCollection = () => {
  const homeTypes = [
    {
      title: "36' Single Family Home",
      image: home36Feet,
      description: "Spacious single family homes on 36-foot lots offering the perfect balance of luxury and functionality with thoughtfully designed layouts following feng shui principles.",
      features: ["4-5 Bedrooms", "3.5-4.5 Baths", "Double Car Garage", "Private Driveway"],
      priceRange: "Coming Soon",
      badge: "Great Value"
    },
    {
      title: "43' Single Family Home",
      image: home43Feet,
      description: "Premium single family homes with enhanced lot sizes, offering more space for families and elegant entertaining areas designed for harmony and happiness.",
      features: ["4-6 Bedrooms", "4-5 Baths", "Double Car Garage", "Larger Lots"],
      priceRange: "Coming Soon", 
      badge: "Premium"
    },
    {
      title: "50' Single Family Home",
      image: home50Feet,
      description: "Luxury estate homes on generous 50-foot lots, featuring the finest finishes and most spacious layouts in the community, designed with feng shui expertise.",
      features: ["5-6 Bedrooms", "5-6 Baths", "Triple Car Garage", "Estate Lots"],
      priceRange: "Coming Soon",
      badge: "Ultra Luxury"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home-collection" className="section-spacing bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Home Collection
          </h2>
          <div className="w-24 h-1 luxury-gradient mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our collection of single family homes, each designed with feng shui principles 
            by international master Paul Ng to promote harmony, happiness, and a better quality of life.
          </p>
        </div>

        {/* Home Types Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {homeTypes.map((home, index) => (
            <Card key={index} className="luxury-card group overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Image */}
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={home.image} 
                  alt={home.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="luxury-gradient text-primary font-semibold">
                    {home.badge}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="font-semibold text-primary text-sm">{home.priceRange}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-primary mb-3">
                  {home.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {home.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {home.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 luxury-gradient rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  onClick={scrollToContact}
                  className="w-full cta-secondary group-hover:luxury-gradient group-hover:text-primary transition-all duration-300"
                >
                  View Floor Plans
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Collection CTA */}
        <div className="text-center mt-16">
          <Card className="luxury-card bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 max-w-2xl mx-auto">
            <div className="p-8">
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                Can't Decide Which Home is Right for You?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our real estate experts will help you find the perfect home that matches 
                your lifestyle and budget. Get personalized recommendations today.
              </p>
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="luxury-gradient text-primary font-semibold px-8 py-4 hover:scale-105 transition-transform duration-200"
              >
                Schedule Personal Consultation
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCollection;