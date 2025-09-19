import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Mail, Phone, User, MessageSquare, Clock, Home } from 'lucide-react';

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
    timeline: '',
    message: '',
    isRealtor: '',
    emailConsent: false,
    phoneConsent: false,
    privacy: false,
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
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.isRealtor || !formData.privacy) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields including the realtor question and privacy policy.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.emailConsent && !formData.phoneConsent) {
      toast({
        title: "Consent Required",
        description: "Please provide consent for us to contact you.",
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
          phone: formData.phone || null,
          interested_in: formData.interestedIn || null,
          timeline: formData.timeline || null,
          message: formData.message || null,
          is_realtor: formData.isRealtor === 'yes',
          newsletter_consent: formData.emailConsent,
          privacy_consent: formData.privacy,
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
        timeline: '',
        message: '',
        isRealtor: '',
        emailConsent: false,
        phoneConsent: false,
        privacy: false,
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
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="(416) 123-4567"
              />
            </div>
          </div>

          {/* Interest and Timeline */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="interestedIn" className="flex items-center gap-2">
                <Home size={16} />
                Interested In
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
              <Label htmlFor="timeline" className="flex items-center gap-2">
                <Clock size={16} />
                Purchase Timeline
              </Label>
              <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="When are you looking to buy?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">As soon as possible</SelectItem>
                  <SelectItem value="3-6-months">3-6 months</SelectItem>
                  <SelectItem value="6-12-months">6-12 months</SelectItem>
                  <SelectItem value="1-2-years">1-2 years</SelectItem>
                  <SelectItem value="researching">Just researching</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Realtor Question */}
          <div>
            <Label className="text-base font-medium">Are you a Realtor? *</Label>
            <RadioGroup 
              value={formData.isRealtor} 
              onValueChange={(value) => handleInputChange('isRealtor', value)}
              className="flex gap-6 mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="realtor-yes-crown" />
                <Label htmlFor="realtor-yes-crown">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="realtor-no-crown" />
                <Label htmlFor="realtor-no-crown">No</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message" className="flex items-center gap-2">
              <MessageSquare size={16} />
              Additional Comments
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Any specific questions about Crown of Caledon or requirements?"
              rows={3}
            />
          </div>

          {/* Consent Checkboxes */}
          <div className="space-y-3 bg-muted/50 p-4 rounded-lg">
            <p className="text-sm font-medium text-primary mb-3">How would you like us to contact you?</p>
            
            <div className="flex items-start gap-2">
              <Checkbox 
                id="emailConsent"
                checked={formData.emailConsent}
                onCheckedChange={(checked) => handleInputChange('emailConsent', !!checked)}
              />
              <Label htmlFor="emailConsent" className="text-sm leading-relaxed">
                Yes, you may contact me via email with information about Crown of Caledon and other real estate opportunities.
              </Label>
            </div>
            
            <div className="flex items-start gap-2">
              <Checkbox 
                id="phoneConsent"
                checked={formData.phoneConsent}
                onCheckedChange={(checked) => handleInputChange('phoneConsent', !!checked)}
              />
              <Label htmlFor="phoneConsent" className="text-sm leading-relaxed">
                Yes, you may contact me via phone/text with information about Crown of Caledon and other real estate opportunities.
              </Label>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="flex items-start gap-2">
            <Checkbox 
              id="privacy"
              checked={formData.privacy}
              onCheckedChange={(checked) => handleInputChange('privacy', !!checked)}
              required
            />
            <Label htmlFor="privacy" className="text-sm leading-relaxed">
              I agree to the{' '}
              <a href="/privacy-policy" target="_blank" className="text-accent hover:underline">
                privacy policy
              </a>{' '}
              and consent to being contacted about Crown of Caledon. *
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