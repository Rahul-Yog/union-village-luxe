import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Mail, Phone, User, Home } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  formType: 'floorplans' | 'siteplan' | 'tour' | 'general';
}

const ContactModal = ({ isOpen, onClose, formType }: ContactModalProps) => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interestedIn: '',
    priceRange: '',
    isRealtor: '',
    contactConsent: false,
    honeypot: '' // Bot protection
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const getFormTitle = () => {
    switch (formType) {
      case 'floorplans': return 'Get Exclusive Floor Plans';
      case 'siteplan': return 'Download Site Plan';
      case 'tour': return 'Schedule a Tour';
      default: return 'Contact Us';
    }
  };

  const getFormMessage = () => {
    switch (formType) {
      case 'floorplans': return 'Get detailed floor plans and pricing information for Union Village homes.';
      case 'siteplan': return 'Download the complete site plan to see all available lots and community layout.';
      case 'tour': return 'Schedule a private tour of our model homes and community amenities.';
      default: return 'Get in touch with our sales team for any questions about Union Village.';
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Bot protection - check honeypot field
    if (formData.honeypot) {
      return;
    }

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.isRealtor || !formData.contactConsent) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields including phone number, realtor question, and consent.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit via secure edge function (bypasses RLS)
      const { data, error } = await supabase.functions.invoke('submit-lead', {
        body: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          interested_in: formData.interestedIn || null,
          price_range: formData.priceRange || null,
          is_realtor: formData.isRealtor === 'yes',
          contact_consent: formData.contactConsent,
          form_type: formType,
          user_agent: navigator.userAgent
        }
      });

      if (error) {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again or contact us directly.",
          variant: "destructive",
        });
        return;
      }

      // Track Google Ads conversion
      if (typeof (window as any).gtag !== 'undefined') {
        (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-482683507/LHxtCNag5u8ZEKKsltgC',
          'event_category': 'Lead Generation',
          'event_label': `${formType} Form Submission`,
          'value': 1
        });
      }

      toast({
        title: "Thank You!",
        description: "Your information has been submitted. We'll contact you soon.",
      });

      // Reset form and close modal
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interestedIn: '',
        priceRange: '',
        isRealtor: '',
        contactConsent: false,
        honeypot: ''
      });
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-full mx-4 max-h-[95vh] flex flex-col p-0 overflow-hidden">
        <DialogHeader className="flex-shrink-0 p-6 pb-2">
          <DialogTitle className="text-xl font-display font-bold text-primary">
            {getFormTitle()}
          </DialogTitle>
          <p className="text-muted-foreground text-sm mt-1">
            {getFormMessage()}
          </p>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6 pb-6" style={{ 
          scrollbarWidth: 'thin',
          scrollbarColor: 'hsl(var(--muted-foreground)) transparent'
        }}>
          <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot field - hidden from users */}
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={(e) => handleInputChange('honeypot', e.target.value)}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" className="flex items-center gap-2">
                <User size={16} />
                First Name *
              </Label>
              <Input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                placeholder="John"
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName" className="flex items-center gap-2">
                <User size={16} />
                Last Name *
              </Label>
              <Input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                placeholder="Smith"
                required
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail size={16} />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone size={16} />
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="(416) 123-4567"
                required
              />
            </div>
          </div>

          {/* Interest and Budget */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="interestedIn" className="flex items-center gap-2">
                <Home size={16} />
                Home Interest
              </Label>
              <Select value={formData.interestedIn} onValueChange={(value) => handleInputChange('interestedIn', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select home type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="traditional-townhomes">Traditional Townhomes</SelectItem>
                  <SelectItem value="rear-lane-townhomes">Rear-Lane Townhomes</SelectItem>
                  <SelectItem value="36-feet">36' Single Family Home</SelectItem>
                  <SelectItem value="43-feet">43' Single Family Home</SelectItem>
                  <SelectItem value="50-feet">50' Single Family Home</SelectItem>
                  <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="priceRange">Budget</Label>
              <Select value={formData.priceRange} onValueChange={(value) => handleInputChange('priceRange', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1.4-1.6M">$1.4M - $1.6M</SelectItem>
                  <SelectItem value="1.6-1.8M">$1.6M - $1.8M</SelectItem>
                  <SelectItem value="1.8-2.0M">$1.8M - $2.0M</SelectItem>
                  <SelectItem value="2.0M+">$2.0M+</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Realtor Question */}
          <div>
            <Label htmlFor="isRealtor" className="text-base font-medium">Are you a Realtor? *</Label>
            <Select value={formData.isRealtor} onValueChange={(value) => handleInputChange('isRealtor', value)} required>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start gap-2 bg-muted/50 p-4 rounded-lg">
            <Checkbox 
              id="contactConsent"
              checked={formData.contactConsent}
              onCheckedChange={(checked) => handleInputChange('contactConsent', !!checked)}
              required
            />
            <Label htmlFor="contactConsent" className="text-sm leading-relaxed">
              I consent to be contacted via SMS, phone call, and email regarding this inquiry and future opportunities. *
            </Label>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full luxury-gradient text-primary font-semibold py-4 text-lg hover:scale-105 transition-transform duration-200 disabled:hover:scale-100"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Information'}
          </Button>

          {/* Trust Messages */}
          <div className="text-center space-y-2 pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">
              🔒 Your information is secure and will never be shared with third parties
            </p>
            <p className="text-xs text-muted-foreground">
              ⚡ We typically respond within 2 hours during business hours
            </p>
          </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;