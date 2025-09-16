import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import unionVillageLogo from '@/assets/union-village-logo.jpg';
import AuthButton from '@/components/AuthButton';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    { label: 'New Homes Overview', href: '#overview' },
    { label: 'Markham Location', href: '#location' },
    { label: 'Community Site Plan', href: '#site-plan' },
    { label: 'Unionville Houses For Sale', href: '#home-collection' },
    { label: 'Contact Agent', href: '#contact' },
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
              src={unionVillageLogo} 
              alt="Union Village - Unionville Houses For Sale | Luxury New Homes in Markham" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
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
              Get Floor Plans
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
                  Get Floor Plans
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