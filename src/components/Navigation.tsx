import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import unionVillageLogo from '@/assets/union-village-logo.jpg';
import crownLogo from '@/assets/crown-logo.png';
import AuthButton from '@/components/AuthButton';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const isUnionVillage = location.pathname === '/';
  const isCrownOfCaledon = location.pathname === '/crown-of-caledon';

  const navItems = isUnionVillage 
    ? [
        { label: 'New Homes Overview', href: '#overview' },
        { label: 'Markham Location', href: '#location' },
        { label: 'Community Site Plan', href: '#site-plan' },
        { label: 'Unionville Houses For Sale', href: '#home-collection' },
        { label: 'Contact Agent', href: '#contact' },
      ]
    : [
        { label: 'Crown of Caledon Homes', href: '#overview' },
        { label: 'Caledon Location & Neighbourhood', href: '#location' },
        { label: 'Caledon New Homes Collection', href: '#home-collection' },
        { label: 'Community Amenities', href: '#amenities' },
        { label: 'Crown of Caledon FAQ', href: '#faq' },
        { label: 'Schedule Consultation', href: '#contact' },
      ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={isCrownOfCaledon ? crownLogo : unionVillageLogo} 
              alt={isCrownOfCaledon ? "Crown of Caledon - Luxury New Homes in Caledon by Fieldgate" : "Union Village - Unionville Houses For Sale | Luxury New Homes in Markham"} 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Site Switcher */}
              <div className="flex items-center space-x-2 border-r border-border pr-4">
                <Button
                  variant={isUnionVillage ? "default" : "ghost"}
                  size="sm"
                  onClick={() => navigate('/')}
                  className="text-xs"
                >
                  Union Village
                </Button>
                <Button
                  variant={isCrownOfCaledon ? "default" : "ghost"}
                  size="sm"
                  onClick={() => navigate('/crown-of-caledon')}
                  className="text-xs"
                >
                  Crown of Caledon
                </Button>
              </div>
              
              {/* Page Navigation */}
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-accent px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-muted rounded-md"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            {user && (
              <Button
                variant="outline"
                onClick={() => navigate('/dashboard')}
              >
                Dashboard
              </Button>
            )}
            <AuthButton />
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="luxury-gradient text-primary font-semibold hover:scale-105 transition-transform duration-200"
            >
              {isCrownOfCaledon ? 'Get Crown Floor Plans' : 'Get Floor Plans'}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {/* Mobile Site Switcher */}
              <div className="flex space-x-2 pb-3 border-b border-border mb-3">
                <Button
                  variant={isUnionVillage ? "default" : "ghost"}
                  size="sm"
                  onClick={() => navigate('/')}
                  className="flex-1 text-xs"
                >
                  Union Village
                </Button>
                <Button
                  variant={isCrownOfCaledon ? "default" : "ghost"}
                  size="sm"
                  onClick={() => navigate('/crown-of-caledon')}
                  className="flex-1 text-xs"
                >
                  Crown of Caledon
                </Button>
              </div>
              
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-accent block px-3 py-2 text-base font-medium w-full text-left hover:bg-muted rounded-md transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 space-y-2">
                {user && (
                  <Button
                    variant="outline"
                    onClick={() => navigate('/dashboard')}
                    className="w-full"
                  >
                    Dashboard
                  </Button>
                )}
                <AuthButton />
                <Button 
                  onClick={() => scrollToSection('#contact')}
                  className="luxury-gradient text-primary font-semibold w-full"
                >
                  {isCrownOfCaledon ? 'Get Crown Floor Plans' : 'Get Floor Plans'}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;