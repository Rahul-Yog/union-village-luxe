import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const UnionVillageFooter = () => {
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
              Union Village
            </h3>
            
            <Card className="bg-primary-light border-primary-lighter p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-display font-semibold text-primary-foreground mb-2">
                    Premium New Homes
                  </h4>
                  <p className="text-primary-foreground/80 text-sm">
                    Luxury Living in Markham
                  </p>
                  <p className="text-primary-foreground/80 text-sm">
                    Unionville Houses For Sale
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="text-primary-foreground/80 text-sm">
                    Freehold Townhomes & Detached Homes
                  </div>
                  <div className="text-primary-foreground/80 text-sm">
                    Starting from $1.4M
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Links & Project Info */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-display font-bold mb-6">
              Union Village Features
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 luxury-gradient rounded-full"></div>
                <a href="#overview" className="text-primary-foreground/80 hover:text-luxury-gold transition-colors">
                  New Homes in Markham
                </a>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 luxury-gradient rounded-full"></div>
                <a href="#location" className="text-primary-foreground/80 hover:text-luxury-gold transition-colors">
                  Premium Markham Location
                </a>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 luxury-gradient rounded-full"></div>
                <a href="#home-collection" className="text-primary-foreground/80 hover:text-luxury-gold transition-colors">
                  Freehold Townhomes & Detached Homes Starting from $1.4M
                </a>
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
              Have questions about Union Village? We're here to help you find your perfect home 
              in this exceptional Markham community.
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
                © {currentYear} Union Village - Premium New Homes in Markham
              </p>
              <p className="mb-2">
                Not intended to solicit buyers or sellers currently under contract with a real estate brokerage.
              </p>
              <p className="mb-2">
                <strong>Disclaimer:</strong> We are independent Real Estate Broker/Sales Representatives. We do not represent the Builder. All information on the project is subject to change by the Builder. E. & O.E.
              </p>
              <p>
                <a href="https://unionvillagehomes.ca/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:text-luxury-gold transition-colors underline">
                  Privacy Policy
                </a>
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

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/14169038026"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-luxury z-40 hover:scale-110 transition-transform duration-200 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </footer>
  );
};

export default UnionVillageFooter;