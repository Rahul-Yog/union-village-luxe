import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const CrownFooter = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Project Information */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-display font-bold mb-6">
              Crown of Caledon
            </h3>
            
            <Card className="bg-primary-light border-primary-lighter p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-display font-semibold text-primary-foreground mb-2">
                    Premium New Homes
                  </h4>
                  <p className="text-primary-foreground/80 text-sm">
                    By Fieldgate Homes
                  </p>
                  <p className="text-primary-foreground/80 text-sm">
                    Hurontario St & Mayfield Rd, Caledon
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="text-primary-foreground/80 text-sm">
                    Freehold Townhomes & Detached Homes
                  </div>
                  <div className="text-primary-foreground/80 text-sm">
                    Starting from $730K
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Links & Project Info */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-display font-bold mb-6">
              Home Types Available
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 luxury-gradient rounded-full"></div>
                <span className="text-primary-foreground/80">
                  Rear Lane Townhomes - Double Car Garage (Freehold / 4 Car Parking)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 luxury-gradient rounded-full"></div>
                <span className="text-primary-foreground/80">
                  2 Story Townhomes - Freehold (2 Car Parking)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 luxury-gradient rounded-full"></div>
                <span className="text-primary-foreground/80">
                  38' Singles Detached Homes
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 luxury-gradient rounded-full"></div>
                <span className="text-primary-foreground/80">Premium Finishes & Modern Layouts</span>
              </div>
            </div>

            <Button 
              onClick={scrollToContact}
              className="luxury-gradient text-primary font-semibold hover:scale-105 transition-transform duration-200"
            >
              Get More Information
            </Button>
          </div>

          {/* Chat & Support */}
          <div className="animate-scale-in">
            <h3 className="text-2xl font-display font-bold mb-6">
              Get In Touch
            </h3>
            
            <p className="text-primary-foreground/80 mb-6">
              Have questions about Crown of Caledon? We're here to help you find your perfect home 
              in this exceptional community.
            </p>
            
            <div className="space-y-4">
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-lighter">
        <div className="container-custom py-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="text-primary-foreground/60 text-sm">
              <p className="mb-2">
                Not intended to solicit buyers or sellers currently under contract with a real estate brokerage.
              </p>
              <p>
                <strong>Disclaimer:</strong> We are independent Real Estate Broker/Sales Representatives. We do not represent the Builder. All information on the project is subject to change by the Builder. E. & O.E.
              </p>
            </div>
            
            <div className="text-primary-foreground/60 text-sm md:text-right">
              <p className="mb-2">
                <strong>Disclaimer:</strong> All information deemed reliable but not guaranteed. 
                Prices, specifications, and availability subject to change without notice.
              </p>
              <p>
                All renderings are artist's concept only. E. & O.E.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <Button 
        onClick={scrollToContact}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full luxury-gradient text-primary shadow-luxury z-40 hover:scale-110 transition-transform duration-200"
        aria-label="Chat with us"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </footer>
  );
};

export default CrownFooter;