import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Home, Star, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useState } from 'react';
import ContactModal from '@/components/crown/CrownContactModal';

// Import elevation images
import townElevA from '@/assets/town-elev-a.png';
import townElevB from '@/assets/town-elev-b.png';
import townElevC from '@/assets/town-elev-c.png';
import abbeyElevA from '@/assets/abbey-elev-a.png';
import abbeyElevB from '@/assets/abbey-elev-b.png';
import abbeyElevC from '@/assets/abbey-elev-c.png';
import freeholdCorner from '@/assets/freehold-corner.png';
import freeholdElevB from '@/assets/freehold-elev-b.png';
import freeholdElevC from '@/assets/freehold-elev-c.png';
import monarchElevA from '@/assets/monarch-elev-a.png';
import monarchElevB from '@/assets/monarch-elev-b.png';
import traditionElevA from '@/assets/tradition-elev-a.png';
import traditionElevB from '@/assets/tradition-elev-b.png';
import traditionElevC from '@/assets/tradition-elev-c.png';
import tiaraElevA from '@/assets/tiara-elev-a.png';
import tiaraElevB from '@/assets/tiara-elev-b.png';
import tiaraElevC from '@/assets/tiara-elev-c.png';
import jubileeElevA from '@/assets/jubilee-elev-a.png';
import jubileeElevB from '@/assets/jubilee-elev-b.png';
import jubileeElevC from '@/assets/jubilee-elev-c.png';

const CrownHomeCollection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('featured');
  const [showAllCollections, setShowAllCollections] = useState(false);
  const [showQuickMatch, setShowQuickMatch] = useState(false);

  // Reorganized collections with categories and tiers
  const featuredCollections = [
    'dynasty-corner', // Placeholder for Dynasty
    'freehold-townhomes',
    'monarch-38', 
    'tiara-38'
  ];

  const townhomeCollections = [
    {
      id: 'city-townhomes',
      title: 'City Townhomes',
      subtitle: 'Urban Living Collection',
      description: 'Modern townhome designs featuring multiple architectural elevations in the heart of the community.',
      category: 'townhome',
      tier: 'starter',
      elevations: 4,
      images: [townElevA, townElevB, townElevC],
      features: ['3 Bedrooms', '2.5-3 Bathrooms', '1 Car Garage', '1,602-1,620 sq ft'],
      priceRange: 'Starting from $730K',
      badge: 'Most Popular',
      available: true,
      units: 'Multiple units available'
    },
    {
      id: 'end-units-city-townhomes',
      title: 'End Unit Townhomes',
      subtitle: 'Abbey Collection',
      description: 'Premium end unit townhomes with enhanced privacy and additional windows.',
      category: 'townhome',
      tier: 'starter',
      elevations: 3,
      images: [abbeyElevA, abbeyElevB, abbeyElevC],
      features: ['3 Bedrooms', '2.5-3 Bathrooms', '1 Car Garage', '1,620+ sq ft'],
      priceRange: 'Starting from $750K',
      badge: 'End Unit Premium',
      available: true,
      units: 'Limited availability'
    },
    {
      id: 'freehold-townhomes',
      title: 'Freehold Townhomes',
      subtitle: 'Premium Ownership Collection',
      description: 'Spacious freehold townhomes with multiple elevation designs and corner units available.',
      category: 'townhome',
      tier: 'premium',
      elevations: 5,
      images: [freeholdCorner, freeholdElevB, freeholdElevC],
      features: ['3-4 Bedrooms', '3-4 Bathrooms', '2 Car Garage', '1,800+ sq ft'],
      priceRange: 'Starting from $780K',
      badge: 'Freehold Ownership',
      available: true,
      units: 'Phase 1 pricing'
    }
  ];

  const detachedCollections = [
    {
      id: 'dynasty-corner',
      title: 'The Dynasty - Corner Detached',
      subtitle: 'Limited Release Premium',
      description: 'Exclusive corner detached homes with premium positioning and enhanced lot sizes. Coming soon with distinctive architectural elevations.',
      category: 'detached',
      tier: 'luxury',
      elevations: 3,
      images: [monarchElevA, monarchElevB, monarchElevA], // Placeholder images
      features: ['5-6 Bedrooms', '4-5 Bathrooms', '2-3 Car Garage', '3,200+ sq ft'],
      priceRange: 'Starting from $1.35M',
      badge: 'Coming Soon',
      available: false,
      featured: true,
      units: 'VIP Preview List'
    },
    {
      id: 'monarch-38',
      title: 'The Monarch - 38 Feet',
      subtitle: 'Premium Detached Collection',
      description: 'Elegant 38-foot detached homes with sophisticated elevation options featuring modern design.',
      category: 'detached',
      tier: 'premium',
      elevations: 2,
      images: [monarchElevA, monarchElevB],
      features: ['4-5 Bedrooms', '3.5-4 Bathrooms', '2 Car Garage', '2,400+ sq ft'],
      priceRange: 'Starting from $950K',
      badge: 'Available Now',
      available: true,
      units: '8 lots remaining'
    },
    {
      id: 'tradition-38',
      title: 'The Tradition - 38 Feet',
      subtitle: 'Classic Family Collection',
      description: 'Traditional 38-foot detached homes featuring timeless elevation styles with classic architectural details.',
      category: 'detached',
      tier: 'premium',
      elevations: 3,
      images: [traditionElevA, traditionElevB, traditionElevC],
      features: ['4-6 Bedrooms', '4-5 Bathrooms', '2 Car Garage', '2,600+ sq ft'],
      priceRange: 'Starting from $980K',
      badge: 'Family Favorite',
      available: true,
      units: 'Multiple lots available'
    },
    {
      id: 'jubilee-38',
      title: 'The Jubilee - 38 Feet',
      subtitle: 'Executive Collection',
      description: 'Sophisticated 38-foot detached homes featuring distinctive elevation designs with contemporary styling.',
      category: 'detached',
      tier: 'premium',
      elevations: 3,
      images: [jubileeElevA, jubileeElevB, jubileeElevC],
      features: ['4-5 Bedrooms', '3.5-4 Bathrooms', '2 Car Garage', '2,500+ sq ft'],
      priceRange: 'Starting from $1.05M',
      badge: 'Executive Style',
      available: true,
      units: '12 lots available'
    },
    {
      id: 'tiara-38',
      title: 'The Tiara - 38 Feet',
      subtitle: 'Luxury Collection',
      description: 'Premium 38-foot detached homes with luxury elevation designs and high-end finishes throughout.',
      category: 'detached',
      tier: 'luxury',
      elevations: 3,
      images: [tiaraElevA, tiaraElevB, tiaraElevC],
      features: ['5-6 Bedrooms', '5-6 Bathrooms', '3 Car Garage', '3,000+ sq ft'],
      priceRange: 'Starting from $1.2M',
      badge: 'Luxury Features',
      available: true,
      units: '6 lots remaining'
    }
  ];

  const allCollections = [...townhomeCollections, ...detachedCollections];

  const getFeaturedCollections = () => {
    return allCollections.filter(collection => 
      featuredCollections.includes(collection.id) || (collection as any).featured
    );
  };

  const getCollectionsByCategory = (category: string) => {
    if (category === 'featured') return getFeaturedCollections();
    if (category === 'townhomes') return townhomeCollections;
    if (category === 'detached') return detachedCollections;
    return allCollections;
  };

  const handleViewFloorPlans = (collectionId: string) => {
    setSelectedCollection(collectionId);
    setIsContactModalOpen(true);
  };

  const handleQuickMatch = () => {
    setShowQuickMatch(true);
    setSelectedCollection('quick-match');
    setIsContactModalOpen(true);
  };

  const CollectionCard = ({ collection }: { collection: any }) => (
    <Card key={collection.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* Image Carousel */}
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {collection.images.map((image: string, imgIndex: number) => (
              <CarouselItem key={imgIndex}>
                <div className="relative h-64 overflow-hidden bg-muted/20">
                  <img 
                    src={image} 
                    alt={`${collection.title} - Elevation ${imgIndex + 1}`}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
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
        {collection.id === 'dynasty-corner' && (
          <div className="absolute bottom-4 left-4">
            <Badge className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-bold">
              <Star className="w-3 h-3 mr-1" />
              Featured Launch
            </Badge>
          </div>
        )}
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
            {collection.features.map((feature: string, idx: number) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Availability & Elevations Info */}
          <div className="flex justify-between items-center">
            {collection.elevations > 0 && (
              <div className="flex items-center gap-2 text-sm text-accent">
                <Home className="h-4 w-4" />
                <span>{collection.elevations} Elevation{collection.elevations > 1 ? 's' : ''}</span>
              </div>
            )}
            <span className="text-xs text-muted-foreground font-medium">
              {collection.units}
            </span>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={() => handleViewFloorPlans(collection.id)}
            className={`w-full ${collection.available 
              ? collection.id === 'dynasty-corner' 
                ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white' 
                : 'bg-accent hover:bg-accent/90 text-white'
              : 'bg-muted text-muted-foreground cursor-not-allowed'
            } transition-all duration-300`}
            disabled={!collection.available && collection.id !== 'dynasty-corner'}
          >
            {collection.available 
              ? 'View Floor Plans & Pricing' 
              : collection.id === 'dynasty-corner'
                ? 'Join VIP Preview List'
                : 'Register Interest'}
          </Button>
        </div>
      </div>
    </Card>
  );

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
            and thoughtful layouts. Find your perfect match with our smart filtering system.
          </p>
        </div>

        {/* Quick Match CTA */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20 max-w-4xl mx-auto">
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">
                🎯 Find Your Perfect Home in 30 Seconds
              </h3>
              <p className="text-muted-foreground mb-4">
                Answer 3 quick questions and get personalized recommendations
              </p>
              <Button 
                onClick={handleQuickMatch}
                className="bg-accent hover:bg-accent/90 text-white px-6"
              >
                Take Quick Match Quiz
              </Button>
            </div>
          </Card>
        </div>

        {/* Category Navigation */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="townhomes">Townhomes</TabsTrigger>
            <TabsTrigger value="detached">Detached</TabsTrigger>
            <TabsTrigger value="all">All Homes</TabsTrigger>
          </TabsList>

          {/* Featured Collections */}
          <TabsContent value="featured" className="space-y-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Featured Collections</h3>
              <p className="text-muted-foreground">Our most popular and exclusive home designs</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {getFeaturedCollections().map((collection) => (
                <CollectionCard key={collection.id} collection={collection} />
              ))}
            </div>
          </TabsContent>

          {/* Townhomes */}
          <TabsContent value="townhomes" className="space-y-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Urban Townhomes</h3>
              <p className="text-muted-foreground">Modern townhome living with premium finishes</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {townhomeCollections.map((collection) => (
                <CollectionCard key={collection.id} collection={collection} />
              ))}
            </div>
          </TabsContent>

          {/* Detached Homes */}
          <TabsContent value="detached" className="space-y-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Detached Homes</h3>
              <p className="text-muted-foreground">Spacious family homes with premium lots</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {detachedCollections.map((collection) => (
                <CollectionCard key={collection.id} collection={collection} />
              ))}
            </div>
          </TabsContent>

          {/* All Collections */}
          <TabsContent value="all" className="space-y-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Complete Home Collection</h3>
              <p className="text-muted-foreground">Browse all available home designs and floor plans</p>
            </div>
            
            {/* Price Filter Pills */}
            <div className="flex justify-center gap-2 mb-6">
              <Badge variant="outline" className="cursor-pointer hover:bg-accent hover:text-white transition-colors">
                Under $800K
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent hover:text-white transition-colors">
                $800K - $1.1M
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent hover:text-white transition-colors">
                $1.1M+
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allCollections.map((collection) => (
                <CollectionCard key={collection.id} collection={collection} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Dynasty Spotlight - Special Featured Section */}
        {activeCategory === 'featured' && (
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200">
              <div className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Badge className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-bold text-lg px-4 py-2">
                    <Star className="w-4 h-4 mr-2" />
                    Coming Soon: The Dynasty Collection
                  </Badge>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  The Dynasty - Corner Detached Homes
                </h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Our most exclusive release featuring premium corner lots with enhanced privacy, 
                  larger outdoor spaces, and distinctive architectural elevations. Limited availability.
                </p>
                <div className="flex justify-center gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">3,200+</div>
                    <div className="text-sm text-muted-foreground">Square Feet</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">$1.35M</div>
                    <div className="text-sm text-muted-foreground">Starting Price</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">Limited</div>
                    <div className="text-sm text-muted-foreground">Corner Lots</div>
                  </div>
                </div>
                <Button 
                  onClick={() => handleViewFloorPlans('dynasty-corner')}
                  size="lg"
                  className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white px-8 py-4 hover:scale-105 transition-transform duration-200"
                >
                  Join VIP Preview List
                </Button>
              </div>
            </Card>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-accent/5 via-primary/5 to-secondary/5 border-accent/20 max-w-2xl mx-auto">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Still Deciding? Let Our Experts Help
              </h3>
              <p className="text-muted-foreground mb-6">
                Our real estate specialists will help you compare options, understand pricing, 
                and find the perfect home that matches your lifestyle and budget.
              </p>
              <div className="flex gap-4 justify-center">
                <Button 
                  onClick={() => {
                    setSelectedCollection('consultation');
                    setIsContactModalOpen(true);
                  }}
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white px-6"
                >
                  Schedule Consultation
                </Button>
                <Button 
                  onClick={handleQuickMatch}
                  variant="outline"
                  size="lg"
                  className="px-6"
                >
                  Take Quick Quiz
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
        formType={selectedCollection === 'quick-match' ? 'general' : 'floorplans'}
      />
    </section>
  );
};

export default CrownHomeCollection;