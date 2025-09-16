import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Eye, MapPin, Maximize, Users, Car, Bath, Bed, Home } from 'lucide-react';
import LeadForm from '@/components/LeadForm';

// Import all home images
// 50 Feet Home Images
import home50Modern from '@/assets/50-feet-modern.jpg';
import home50English from '@/assets/50-feet-english.jpg';
import home50French from '@/assets/50-feet-french.jpg';
import home50Contemporary from '@/assets/50-feet-contemporary.jpg';
import home50FamilyRoom from '@/assets/50-feet-family-room.jpg';
import home50Foyer from '@/assets/50-feet-foyer.jpg';
import floorPlanTeaser from '@/assets/floor-plan-teaser.jpg';
// Traditional Townhome Images
import traditionalModern from '@/assets/traditional-modern.jpg';
import traditionalContemporary from '@/assets/traditional-contemporary.jpg';
import traditionalTudor from '@/assets/traditional-tudor.jpg';
import traditionalKitchen from '@/assets/traditional-kitchen.jpg';
import traditionalBedroom from '@/assets/traditional-bedroom.jpg';
// Rear-Lane Townhome Images
import rearLaneModern from '@/assets/rear-lane-modern.jpg';
import rearLaneFrench from '@/assets/rear-lane-french.jpg';
import rearLaneEnglish from '@/assets/rear-lane-english.jpg';
import rearLaneKitchen from '@/assets/rear-lane-kitchen.jpg';
import rearLaneBedroom from '@/assets/rear-lane-bedroom.jpg';
// 36 Feet Home Images
import home36French from '@/assets/36-feet-french.jpg';
import home36English from '@/assets/36-feet-english.jpg';
import home36Modern from '@/assets/36-feet-modern.jpg';
import home36Contemporary from '@/assets/36-feet-contemporary.jpg';
import home36Living from '@/assets/36-feet-living.jpg';
import home36Kitchen from '@/assets/36-feet-kitchen.jpg';
// 43 Feet Home Images
import home43Modern from '@/assets/43-feet-modern.jpg';
import home43English from '@/assets/43-feet-english.jpg';
import home43French from '@/assets/43-feet-french.jpg';
import home43Contemporary from '@/assets/43-feet-contemporary.jpg';
import home43Traditional from '@/assets/43-feet-traditional.jpg';
import home43Living from '@/assets/43-feet-living.jpg';
import home43Bathroom from '@/assets/43-feet-bathroom.jpg';
import home43Kitchen from '@/assets/43-feet-kitchen.jpg';

const EnhancedHomeCollection = () => {
  const [selectedHome, setSelectedHome] = useState<string | null>(null);

  const homeTypes = [
    {
      id: 'traditional-townhomes',
      title: "Traditional Townhomes",
      images: [traditionalModern, traditionalContemporary, traditionalTudor, traditionalKitchen, traditionalBedroom],
      description: "Timeless design meets thoughtful functionality. Available in Tudor and Modern/West Coast Contemporary styles with rich brick, stone, and stucco exteriors.",
      features: ["Open-Concept Layouts", "Finished Basement", "Private Backyards", "Premium Finishes"],
      priceRange: "Starting from $1.4M",
      badge: "Tudor & Contemporary",
      architecturalStyle: "Tudor / Modern",
      bedrooms: "3-4",
      bathrooms: "2.5-3.5",
      garage: "Single",
      lotSize: "Townhome"
    },
    {
      id: 'rear-lane-townhomes',
      title: "Rear-Lane Townhomes",
      images: [rearLaneModern, rearLaneFrench, rearLaneEnglish, rearLaneKitchen, rearLaneBedroom],
      description: "Sophisticated townhomes with timeless architectural aesthetics available in Modern, French, and English Manor styles. Features double car garage and expansive rooftop terrace.",
      features: ["Double Car Garage", "Rooftop Terrace", "Modern Design", "Lane Access"],
      priceRange: "Starting from $1.4M",
      badge: "Rooftop Terrace",
      architecturalStyle: "Modern / French / English Manor",
      bedrooms: "3-4",
      bathrooms: "3-4",
      garage: "Double",
      lotSize: "Townhome"
    },
    {
      id: '36-single-family',
      title: "36' Single Family Home",
      images: [home36French, home36English, home36Modern, home36Contemporary, home36Living, home36Kitchen],
      description: "Spacious single family homes on 36-foot lots offering the perfect balance of luxury and functionality with thoughtfully designed layouts following feng shui principles.",
      features: ["4-5 Bedrooms", "3.5-4.5 Baths", "Double Car Garage", "Private Driveway"],
      priceRange: "Starting from $1.9M",
      badge: "Best Value",
      architecturalStyle: "Modern / English Manor / French",
      bedrooms: "4-5",
      bathrooms: "3.5-4.5",
      garage: "Double",
      lotSize: "36 feet"
    },
    {
      id: '43-single-family',
      title: "43' Single Family Home",
      images: [home43Modern, home43English, home43French, home43Contemporary, home43Traditional, home43Living, home43Bathroom, home43Kitchen],
      description: "Premium single family homes with enhanced lot sizes, offering more space for families and elegant entertaining areas designed for harmony and happiness.",
      features: ["4-6 Bedrooms", "4-5 Baths", "Double Car Garage", "Larger Lots"],
      priceRange: "Starting from $2.3M",
      badge: "Premium Choice",
      architecturalStyle: "Modern / English Manor / French",
      bedrooms: "4-6",
      bathrooms: "4-5",
      garage: "Double",
      lotSize: "43 feet"
    },
    {
      id: '50-single-family',
      title: "50' Single Family Home",
      images: [home50Modern, home50English, home50French, home50Contemporary, home50FamilyRoom, home50Foyer],
      description: "Luxury estate homes on generous 50-foot lots, featuring the finest finishes and most spacious layouts in the community, designed with feng shui expertise.",
      features: ["5-6 Bedrooms", "5-6 Baths", "Triple Car Garage", "Estate Lots"],
      priceRange: "Starting from $2.7M",
      badge: "Ultra Luxury",
      architecturalStyle: "Modern / English Manor / French",
      bedrooms: "5-6",
      bathrooms: "5-6",
      garage: "Triple",
      lotSize: "50 feet"
    }
  ];

  return (
    <section id="home-collection" className="section-spacing bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Luxury Home Collection
          </h2>
          <div className="w-24 h-1 luxury-gradient mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our exclusive collection of townhomes and single family homes, each designed with feng shui principles 
            by international master Paul Ng. Available in Modern, English Manor, and French architectural styles.
          </p>
        </div>

        {/* Home Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {homeTypes.map((home, index) => (
            <Card key={home.id} className="luxury-card group overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Image Carousel */}
              <div className="relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    {home.images.map((image, idx) => (
                      <CarouselItem key={idx}>
                        <div className="relative overflow-hidden rounded-t-lg">
                          <img 
                            src={image} 
                            alt={`${home.title} Luxury Home in Unionville - View ${idx + 1} | New Homes in Markham`}
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {home.images.length > 1 && (
                    <>
                      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
                    </>
                  )}
                </Carousel>
                
                {/* Badges */}
                <div className="absolute top-4 left-4">
                  <Badge className="luxury-gradient text-primary font-semibold">
                    {home.badge}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full">
                    <span className="font-bold text-primary text-sm">{home.priceRange}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-display font-bold text-primary">
                    {home.title}
                  </h3>
                  <Badge variant="outline" className="text-xs">
                    {home.architecturalStyle.split(' / ')[0]}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {home.description}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Bed className="h-4 w-4 text-accent" />
                    <span>{home.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Bath className="h-4 w-4 text-accent" />
                    <span>{home.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Car className="h-4 w-4 text-accent" />
                    <span>{home.garage} Garage</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Home className="h-4 w-4 text-accent" />
                    <span>{home.lotSize}</span>
                  </div>
                </div>

                {/* Floor Plan Teaser */}
                <div className="relative mb-4 group/teaser">
                  <img 
                    src={floorPlanTeaser} 
                    alt="Union Village Floor Plans - Luxury Unionville Houses For Sale | New Homes in Markham"
                    className="w-full h-24 object-cover rounded-lg filter blur-sm group-hover/teaser:blur-none transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 rounded-lg flex items-center justify-center group-hover/teaser:bg-primary/10 transition-all duration-300">
                    <div className="text-center">
                      <Eye className="h-6 w-6 text-white mx-auto mb-1" />
                      <span className="text-white text-xs font-semibold">Floor Plans</span>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="space-y-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full luxury-gradient text-primary font-semibold hover:scale-105 transition-transform duration-200">
                        <Eye className="mr-2 h-4 w-4" />
                        Unlock Floor Plans & Pricing
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <LeadForm />
                    </DialogContent>
                  </Dialog>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setSelectedHome(selectedHome === home.id ? null : home.id)}
                  >
                    {selectedHome === home.id ? 'Hide Details' : 'View Details'}
                  </Button>
                </div>

                {/* Expandable Details */}
                {selectedHome === home.id && (
                  <div className="mt-4 pt-4 border-t animate-fade-in">
                    <h4 className="font-semibold text-primary mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {home.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 luxury-gradient rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EnhancedHomeCollection;