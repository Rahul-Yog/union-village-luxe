import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const CrownNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/src/assets/crown-logo.png" 
              alt="Crown of Caledon" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('overview')}
                className="text-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
              >
                Overview
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="text-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
              >
                Location
              </button>
              <button 
                onClick={() => scrollToSection('homes')}
                className="text-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
              >
                Homes
              </button>
              <button 
                onClick={() => scrollToSection('amenities')}
                className="text-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
              >
                Amenities
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Call Button */}
          <div className="hidden md:block">
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
            <button
              onClick={() => scrollToSection('overview')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md w-full text-left"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md w-full text-left"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection('homes')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md w-full text-left"
            >
              Homes
            </button>
            <button
              onClick={() => scrollToSection('amenities')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md w-full text-left"
            >
              Amenities
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md w-full text-left"
            >
              Contact
            </button>
            <div className="px-3 py-2">
              <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default CrownNavigation;