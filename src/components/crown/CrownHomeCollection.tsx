import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, Bed, Bath, Car } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useState } from 'react';
import ContactModal from '@/components/crown/CrownContactModal';

// Import elevation images
import townElevA from '@/assets/town-elev-a.png';
import townElevB from '@/assets/town-elev-b.png';
import townElevC from '@/assets/town-elev-c.png';

const CrownHomeCollection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState<string>('');

  const homeCollections = [
    {
      id: 'city-townhomes',
      title: 'City Townhomes',
      subtitle: 'Regalia • Jewel • Sceptre • Sterling • Abbey',
      description: 'Modern townhome designs featuring 6 distinct architectural elevations in the heart of the community.',
      elevations: 6,
      images: [townElevA, townElevB, townElevC],
      features: ['3 Bedrooms', '2.5-3 Bathrooms', '1 Car Garage', '1,602-1,620 sq ft'],
      priceRange: 'Starting from $730K',
      badge: 'Popular Choice',
      available: true
    },
    {
      id: 'freehold-townhomes',
      title: 'Freehold Townhomes',
      subtitle: 'Premium Ownership',
      description: 'Spacious freehold townhomes with 3 unique elevation designs and premium finishes.',
      elevations: 3,
      images: [townElevA],
      features: ['3-4 Bedrooms', '3-4 Bathrooms', '2 Car Garage', '1,800+ sq ft'],
      priceRange: 'Starting from $780K',
      badge: 'Freehold',
      available: true
    },
    {
      id: 'monarch-38',
      title: 'The Monarch - 38 Feet',
      subtitle: 'Single Family Detached',
      description: 'Elegant 38-foot detached homes with 2 sophisticated elevation options.',
      elevations: 2,
      images: [townElevB],
      features: ['4-5 Bedrooms', '3.5-4 Bathrooms', '2 Car Garage', '2,400+ sq ft'],
      priceRange: 'Starting from $950K',
      badge: 'Detached',
      available: true
    },
    {
      id: 'tradition-38',
      title: 'The Tradition - 38 Feet',
      subtitle: 'Classic Family Living',
      description: 'Traditional 38-foot detached homes featuring 3 timeless elevation styles.',
      elevations: 3,
      images: [townElevC],
      features: ['4-6 Bedrooms', '4-5 Bathrooms', '2 Car Garage', '2,600+ sq ft'],
      priceRange: 'Starting from $980K',
      badge: 'Family Home',
      available: true
    },
    {
      id: 'tiara-38',
      title: 'The Tiara - 38 Feet',
      subtitle: 'Luxury Collection',
      description: 'Premium 38-foot detached homes with 3 luxury elevation designs and high-end finishes.',
      elevations: 3,
      images: [townElevA],
      features: ['5-6 Bedrooms', '5-6 Bathrooms', '3 Car Garage', '3,000+ sq ft'],
      priceRange: 'Starting from $1.2M',
      badge: 'Luxury',
      available: true
    },
    {
      id: 'collection-6',
      title: 'Premium Collection',
      subtitle: 'Coming Soon',
      description: 'Exclusive home designs currently in development. Register your interest for early access.',
      elevations: 0,
      images: [townElevB],
      features: ['Details Coming Soon', 'Multiple Options', 'Premium Features', 'Various Sizes'],
      priceRange: 'TBA',
      badge: 'Coming Soon',
      available: false
    }
  ];

  const handleViewFloorPlans = (collectionId: string) => {
    setSelectedCollection(collectionId);
    setIsContactModalOpen(true);
  };

  return (
    <section id="home-collection" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Home Collection
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Discover our diverse collection of townhomes and detached homes, each designed with premium finishes 
            and thoughtful layouts. From urban townhomes to luxury detached homes, find your perfect match.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeCollections.map((collection, index) => (
            <Card key={collection.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              {/* Image Carousel */}
              <div className="relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    {collection.images.map((image, imgIndex) => (
                      <CarouselItem key={imgIndex}>
                        <div className="relative h-64 overflow-hidden">
                          <img 
                            src={image} 
                            alt={`${collection.title} - Elevation ${imgIndex + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {collection.images.length > 1 && (
                    <>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </>
                  )}
                </Carousel>
                
                {/* Badges */}
                <div className="absolute top-4 left-4">
                  <Badge className={`${collection.available ? 'bg-accent' : 'bg-muted'} text-white font-semibold`}>
                    {collection.badge}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="font-semibold text-foreground text-sm">{collection.priceRange}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {collection.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      {collection.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {collection.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    {collection.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Elevations Info */}
                  {collection.elevations > 0 && (
                    <div className="flex items-center gap-2 text-sm text-accent">
                      <Home className="h-4 w-4" />
                      <span>{collection.elevations} Elevation{collection.elevations > 1 ? 's' : ''} Available</span>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Button 
                    onClick={() => handleViewFloorPlans(collection.id)}
                    className={`w-full ${collection.available 
                      ? 'bg-accent hover:bg-accent/90 text-white' 
                      : 'bg-muted text-muted-foreground cursor-not-allowed'
                    } transition-all duration-300`}
                    disabled={!collection.available}
                  >
                    {collection.available ? 'View Floor Plans & Pricing' : 'Coming Soon - Register Interest'}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-accent/5 via-primary/5 to-secondary/5 border-accent/20 max-w-2xl mx-auto">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Can't Decide Which Home is Right for You?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our real estate experts will help you find the perfect home that matches 
                your lifestyle and budget. Get personalized recommendations today.
              </p>
              <Button 
                onClick={() => {
                  setSelectedCollection('consultation');
                  setIsContactModalOpen(true);
                }}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 hover:scale-105 transition-transform duration-200"
              >
                Schedule Personal Consultation
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
        formType="floorplans"
      />
    </section>
  );
};

export default CrownHomeCollection;