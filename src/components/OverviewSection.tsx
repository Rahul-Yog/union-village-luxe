import { Card } from '@/components/ui/card';
import { Trees, Home, MapPin, Award } from 'lucide-react';

const OverviewSection = () => {
  const highlights = [
    {
      icon: Home,
      title: "Master-Planned Community",
      description: "Thoughtfully designed neighborhood with established charm and modern amenities."
    },
    {
      icon: Trees,
      title: "Abundant Green Space", 
      description: "Preserved wetlands, pedestrian trails, and sprawling parks create a natural oasis."
    },
    {
      icon: MapPin,
      title: "Prime Markham Location",
      description: "Corner of 16th Avenue and Kennedy Road - small-town charm, metropolitan access."
    },
    {
      icon: Award,
      title: "Feng Shui Principles",
      description: "Interior layouts designed by international feng shui master Paul Ng for harmony and well-being."
    }
  ];

  return (
    <section id="overview" className="section-spacing bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Welcome to Union Village
          </h2>
          <div className="w-24 h-1 luxury-gradient mx-auto mb-8"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-slide-up">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The vision for Union Village is an extraordinary new master-planned community that looks and feels like part of an established neighbourhood. With the first phase of distinctive homes, modern amenities, and abundant green space complete, that vision has become a reality.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Located at the corner of 16th Avenue and Kennedy Road, Union Village offers the small-town charm and character of Unionville, with the access and opportunity of the Markham metropolis.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Beautiful homes and new local landmarks dot the landscape, nestled between preserved wetlands, new pedestrian and cycling trails, and sprawling parks. Today, the area is animated with residents strolling along the streetscapes, proud to be part of this master-planned masterpiece.
              </p>

              <div className="bg-card-elevated border-l-4 border-accent p-6 rounded-lg">
                <p className="text-primary font-semibold mb-2">New Release Available</p>
                <p className="text-muted-foreground">
                  The neighbourhood is growing once more, with a new release of homes. 
                  Discover a truly complete community.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-scale-in">
            {highlights.map((highlight, index) => (
              <Card key={index} className="luxury-card group">
                <div className="mb-4">
                  <highlight.icon className="h-8 w-8 text-accent group-hover:text-luxury-gold transition-colors duration-300" />
                </div>
                <h3 className="font-display font-semibold text-lg text-primary mb-3">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Feng Shui Special Section */}
        <div className="mt-16">
          <Card className="luxury-card bg-gradient-to-br from-accent/5 to-luxury-gold/5 border-accent/20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-display font-bold text-primary mb-4">
                Thoughtfully Designed Living
              </h3>
              <div className="w-16 h-1 luxury-gradient mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary">🔥</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">Fire & Water Harmony</h4>
                <p className="text-sm text-muted-foreground">
                  Separated stoves and sinks avoid elemental clashes between fire and water energies.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary">🏠</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">Energy Flow Design</h4>
                <p className="text-sm text-muted-foreground">
                  Staircases and entrances maintain respectful distances to preserve positive energy flow.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary">🌟</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">Chi Optimization</h4>
                <p className="text-sm text-muted-foreground">
                  Front and back doors are offset to maintain the natural flow of chi throughout the home.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-lg text-primary font-medium">
                Designed by International Feng Shui Master 
                <span className="text-accent font-semibold"> Paul Ng</span>
              </p>
              <p className="text-muted-foreground mt-2">
                Creating curated spaces for harmony, happiness, and better quality of life.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;