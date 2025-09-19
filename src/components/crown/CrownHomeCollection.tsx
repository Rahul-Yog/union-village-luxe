import { useState } from 'react';
import { Bed, Bath, Car, Maximize, Eye, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import LeadForm from '@/components/LeadForm';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CrownHomeCollection = () => {
  const [selectedHome, setSelectedHome] = useState<string | null>(null);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const homeTypes = [
    {
      id: 'sterling',
      title: 'The Sterling',
      sqft: '1,602',
      bedrooms: 3,
      bathrooms: 2.5,
      garage: '2-Car',
      lotSize: '20\' x 50\'',
      priceRange: '$730K - $750K',
      architecturalStyle: 'Contemporary',
      images: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ],
      floorPlanTeaser: '/api/placeholder/400/300',
      description: 'Elegantly designed with an open-concept layout perfect for entertaining and family gatherings.',
      features: [
        '9\' ceilings on main floor',
        'Granite countertops in kitchen',
        'Hardwood floors in living areas',
        'En-suite master bathroom',
        'Walk-in closet',
        'Covered balcony',
        'Finished basement',
        'Energy-efficient appliances'
      ],
      culturalFeatures: [
        'Spacious kitchen for family cooking',
        'Open layout for gatherings',
        'Separate entrance to basement',
        'Prayer room potential'
      ]
    },
    {
      id: 'regalia',
      title: 'The Regalia',
      sqft: '1,602 - 1,620',
      bedrooms: 3,
      bathrooms: 2.5,
      garage: '2-Car',
      lotSize: '20\' x 50\'',
      priceRange: '$735K - $760K',
      architecturalStyle: 'Traditional',
      images: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ],
      floorPlanTeaser: '/api/placeholder/400/300',
      description: 'Classic design with modern amenities, featuring traditional charm and contemporary comfort.',
      features: [
        'Elegant crown molding',
        'Coffered ceilings in dining',
        'Upgraded kitchen cabinetry',
        'Luxurious master suite',
        'Double vanity ensuite',
        'Private balcony',
        'Premium fixtures',
        'Smart home pre-wiring'
      ],
      culturalFeatures: [
        'Large dining area for hosting',
        'Multiple gathering spaces',
        'Flexible room layouts',
        'Cultural art display walls'
      ]
    },
    {
      id: 'sceptre',
      title: 'The Sceptre',
      sqft: '1,602',
      bedrooms: 3,
      bathrooms: 2.5,
      garage: '2-Car',
      lotSize: '20\' x 50\'',
      priceRange: '$732K - $755K',
      architecturalStyle: 'Modern',
      images: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ],
      floorPlanTeaser: '/api/placeholder/400/300',
      description: 'Sleek modern design with clean lines and abundant natural light throughout.',
      features: [
        'Floor-to-ceiling windows',
        'Quartz countertops',
        'Stainless steel appliances',
        'Modern light fixtures',
        'Floating vanities',
        'Glass shower enclosures',
        'Vinyl plank flooring',
        'USB outlets throughout'
      ],
      culturalFeatures: [
        'Open concept for families',
        'Easy maintenance finishes',
        'Modern kitchen for cooking',
        'Bright living spaces'
      ]
    },
    {
      id: 'jewel',
      title: 'The Jewel',
      sqft: '1,602',
      bedrooms: 3,
      bathrooms: 2.5,
      garage: '2-Car',
      lotSize: '20\' x 50\'',
      priceRange: '$728K - $748K',
      architecturalStyle: 'Transitional',
      images: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ],
      floorPlanTeaser: '/api/placeholder/400/300',
      description: 'Perfect blend of traditional and contemporary elements, offering timeless appeal.',
      features: [
        'Vaulted ceilings in great room',
        'Upgraded trim package',
        'Designer color palette',
        'Spa-inspired bathrooms',
        'Walk-in pantry',
        'Laundry room upstairs',
        'Covered front porch',
        'Upgraded electrical package'
      ],
      culturalFeatures: [
        'Flexible space usage',
        'Family-friendly layout',
        'Storage throughout',
        'Multi-generational living ready'
      ]
    }
  ];

  const selectedHomeData = homeTypes.find(home => home.id === selectedHome);

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Crown Collection Homes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Four distinctive townhome designs crafted for modern families, starting from just $730,000
          </p>
        </div>

        {/* Home Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {homeTypes.map((home) => (
            <Card key={home.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 hover:border-accent/30">
              <CardContent className="p-0">
                {/* Image Carousel */}
                <div className="relative">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {home.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <img 
                            src={image} 
                            alt={`${home.title} - View ${index + 1}`}
                            className="w-full h-64 object-cover"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                  
                  <Badge className="absolute top-4 left-4 bg-accent text-white">
                    {home.architecturalStyle}
                  </Badge>
                  <Badge className="absolute top-4 right-4 bg-primary text-white">
                    {home.priceRange}
                  </Badge>
                </div>

                <div className="p-6 space-y-4">
                  {/* Home Title & Details */}
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{home.title}</h3>
                    <p className="text-muted-foreground">{home.description}</p>
                  </div>

                  {/* Key Features Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-border">
                    <div className="text-center">
                      <Bed className="h-6 w-6 text-accent mx-auto mb-1" />
                      <p className="text-sm font-semibold">{home.bedrooms} BR</p>
                    </div>
                    <div className="text-center">
                      <Bath className="h-6 w-6 text-accent mx-auto mb-1" />
                      <p className="text-sm font-semibold">{home.bathrooms} BA</p>
                    </div>
                    <div className="text-center">
                      <Car className="h-6 w-6 text-accent mx-auto mb-1" />
                      <p className="text-sm font-semibold">{home.garage}</p>
                    </div>
                    <div className="text-center">
                      <Maximize className="h-6 w-6 text-accent mx-auto mb-1" />
                      <p className="text-sm font-semibold">{home.sqft} sq ft</p>
                    </div>
                  </div>

                  {/* Floor Plan Teaser */}
                  <div className="bg-secondary/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-foreground">Floor Plan Preview</h4>
                    <img 
                      src={home.floorPlanTeaser} 
                      alt={`${home.title} floor plan`}
                      className="w-full h-32 object-cover rounded"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      className="flex-1 bg-accent hover:bg-accent/90"
                      onClick={() => setIsLeadModalOpen(true)}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Unlock Floor Plans & Pricing
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setSelectedHome(selectedHome === home.id ? null : home.id)}
                      className="px-6"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      {selectedHome === home.id ? 'Hide' : 'View'} Details
                    </Button>
                  </div>

                  {/* Expanded Details */}
                  {selectedHome === home.id && (
                    <div className="mt-6 space-y-4 border-t border-border pt-4 animate-fade-in">
                      <div>
                        <h5 className="font-semibold mb-2 text-foreground">Standard Features</h5>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {home.features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold mb-2 text-foreground">Perfect for Indian Families</h5>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {home.culturalFeatures.map((feature, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-accent/5 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-semibold">Lot Size:</span> {home.lotSize} • 
                          <span className="font-semibold"> Architecture:</span> {home.architecturalStyle} Style
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lead Generation Modal */}
        <Dialog open={isLeadModalOpen} onOpenChange={setIsLeadModalOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Get Exclusive Crown of Caledon Information</DialogTitle>
            </DialogHeader>
            <LeadForm />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default CrownHomeCollection;