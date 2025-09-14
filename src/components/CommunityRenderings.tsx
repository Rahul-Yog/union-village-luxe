import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Image, Calendar } from 'lucide-react';

// Import rendering images
import renderingDaytime from '@/assets/rendering-daytime.jpg';
import renderingEvening from '@/assets/rendering-evening.jpg';
import renderingFall from '@/assets/rendering-fall.jpg';
import renderingGoldenHour from '@/assets/rendering-golden-hour.jpg';
import renderingSummer from '@/assets/rendering-summer.jpg';

const CommunityRenderings = () => {
  const renderings = [
    {
      id: 'daytime',
      title: 'Daytime Community View',
      image: renderingDaytime,
      description: 'Experience the vibrant community atmosphere during the day with families enjoying green spaces and tree-lined streets.'
    },
    {
      id: 'evening',
      title: 'Evening Elegance',
      image: renderingEvening,
      description: 'Beautiful evening ambiance showcasing the sophisticated architectural design and warm lighting throughout the neighborhood.'
    },
    {
      id: 'fall',
      title: 'Autumn Charm',
      image: renderingFall,
      description: 'The community transforms with seasonal beauty, featuring stunning fall colors and cozy streetscapes.'
    },
    {
      id: 'golden-hour',
      title: 'Golden Hour Streetscape',
      image: renderingGoldenHour,
      description: 'Contemporary townhomes and condominiums bathed in golden hour light, showcasing modern architectural excellence.'
    },
    {
      id: 'summer',
      title: 'Summer Serenity',
      image: renderingSummer,
      description: 'Lush summer landscapes with mature trees and beautifully designed homes creating a perfect family environment.'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-spacing bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Community Renderings
          </h2>
          <div className="w-24 h-1 luxury-gradient mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the vision of Union Village through these stunning architectural renderings, 
            showcasing the community's design excellence and natural beauty throughout the seasons.
          </p>
        </div>

        {/* Renderings Carousel */}
        <div className="mb-12">
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {renderings.map((rendering, index) => (
                <CarouselItem key={rendering.id}>
                  <Card className="luxury-card overflow-hidden">
                    <div className="relative">
                      <img
                        src={rendering.image}
                        alt={rendering.title}
                        className="w-full h-[600px] object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                        <div className="max-w-2xl">
                          <h3 className="text-2xl font-display font-bold text-white mb-3">
                            {rendering.title}
                          </h3>
                          <p className="text-white/90 leading-relaxed">
                            {rendering.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Rendering Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {renderings.slice(0, 6).map((rendering, index) => (
            <Card key={rendering.id} className="luxury-card group overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative">
                <img
                  src={rendering.image}
                  alt={rendering.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Image className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-primary mb-2">{rendering.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {rendering.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="luxury-card bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 max-w-2xl mx-auto">
            <div className="p-8">
              <Calendar className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                Ready to See More?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Experience Union Village in person. Contact us to schedule a private tour and 
                discover why this community represents the pinnacle of modern living in Markham.
              </p>
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="luxury-gradient text-primary font-semibold px-8 py-3 hover:scale-105 transition-transform duration-200 shadow-luxury"
              >
                Schedule Your Private Tour
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CommunityRenderings;