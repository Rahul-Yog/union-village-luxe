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

interface CrownContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  formType: 'floorplans' | 'siteplan' | 'tour' | 'general';
}

const CrownContactModal = ({ isOpen, onClose, formType }: CrownContactModalProps) => {
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
      case 'floorplans': return 'Get Exclusive Crown of Caledon Floor Plans';
      case 'siteplan': return 'Download Crown of Caledon Site Plan';
      case 'tour': return 'Schedule a Crown of Caledon Tour';
      default: return 'Contact Crown of Caledon Sales Team';
    }
  };

  const getFormMessage = () => {
    switch (formType) {
      case 'floorplans': return 'Get detailed floor plans and pricing information for Crown of Caledon homes starting from $730K.';
      case 'siteplan': return 'Download the complete site plan to see all available lots and community layout in Caledon.';
      case 'tour': return 'Schedule a private tour of our model homes and community amenities at Crown of Caledon.';
      default: return 'Get in touch with our Crown of Caledon sales team for any questions about this premium community.';
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
          form_type: `crown-${formType}`,
          user_agent: navigator.userAgent
        }
      });

      if (error) {
        console.error('Error submitting lead:', error);
        toast({
          title: "Error",
          description: "Something went wrong. Please try again or contact us directly.",
          variant: "destructive",
        });
        return;
      }

      console.log('Crown of Caledon lead submitted successfully:', data);

      // Track Google Ads conversion
      if (typeof (window as any).gtag !== 'undefined') {
        (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-482683507/LHxtCNag5u8ZEKKsltgC',
          'event_category': 'Crown of Caledon Lead',
          'event_label': `${formType} Form Submission`,
          'value': 1
        });
      }

      toast({
        title: "Thank You!",
        description: "Your information has been submitted. Our Crown of Caledon sales team will contact you soon.",
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
      console.error('Error submitting form:', error);
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
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold text-primary">
            {getFormTitle()}
          </DialogTitle>
          <p className="text-muted-foreground mt-2">
            {getFormMessage()}
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
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
                placeholder="Raj"
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
                placeholder="Singh"
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
                placeholder="raj@example.com"
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
                  <SelectItem value="the-sterling">The Sterling (1,602 sq ft)</SelectItem>
                  <SelectItem value="the-regalia">The Regalia (1,602-1,620 sq ft)</SelectItem>
                  <SelectItem value="the-sceptre">The Sceptre (1,602 sq ft)</SelectItem>
                  <SelectItem value="the-jewel">The Jewel (1,602 sq ft)</SelectItem>
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
                  <SelectItem value="730k-800k">$730K - $800K</SelectItem>
                  <SelectItem value="800k-900k">$800K - $900K</SelectItem>
                  <SelectItem value="900k-1m">$900K - $1M</SelectItem>
                  <SelectItem value="1m+">$1M+</SelectItem>
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
            {isSubmitting ? 'Submitting...' : 'Get Crown of Caledon Information'}
          </Button>

          {/* Trust Messages */}
          <div className="text-center space-y-2 pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">
              🔒 Your information is secure and will never be shared with third parties
            </p>
            <p className="text-xs text-muted-foreground">
              ⚡ We typically respond within 2 hours during business hours
            </p>
            <p className="text-xs text-muted-foreground">
              🏡 Built by Fieldgate Homes - Over 65 Years of Excellence
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CrownContactModal;