import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, User, MessageSquare, Clock, Home } from 'lucide-react';

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
    timeline: '',
    message: '',
    emailConsent: false,
    phoneConsent: false,
    honeypot: '' // Anti-spam field
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const getFormTitle = () => {
    switch (formType) {
      case 'floorplans':
        return 'Get Exclusive Floor Plans';
      case 'siteplan':
        return 'Get Detailed Site Plan';
      case 'tour':
        return 'Schedule Your Private Tour';
      default:
        return 'Contact Us';
    }
  };

  const getFormMessage = () => {
    switch (formType) {
      case 'floorplans':
        return 'Get instant access to floor plans and pricing for all home types.';
      case 'siteplan':
        return 'Receive detailed site plan information and phase development details.';
      case 'tour':
        return 'Book a personalized tour of our model homes and community.';
      default:
        return 'Get in touch with our sales team for more information.';
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
      toast({
        title: "Error",
        description: "Spam detected. Please try again.",
        variant: "destructive",
      });
      return;
    }

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
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
      // Simulate API call - integrate with your CRM
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would integrate with your CRM system
      console.log('Form submission:', {
        ...formData,
        formType,
        timestamp: new Date().toISOString()
      });

      toast({
        title: "Thank You!",
        description: "Your information has been submitted. We'll contact you within 24 hours.",
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
        emailConsent: false,
        phoneConsent: false,
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
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold text-primary">
            {getFormTitle()}
          </DialogTitle>
          <p className="text-muted-foreground">
            {getFormMessage()}
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot field for spam protection */}
          <input
            type="text"
            name="website"
            value={formData.honeypot}
            onChange={(e) => handleInputChange('honeypot', e.target.value)}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm font-medium flex items-center gap-2">
                <User className="h-4 w-4" />
                First Name *
              </Label>
              <Input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                required
                className="border-input focus:border-accent"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm font-medium">
                Last Name *
              </Label>
              <Input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                required
                className="border-input focus:border-accent"
              />
            </div>
          </div>

          {/* Contact Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="border-input focus:border-accent"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
                className="border-input focus:border-accent"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          {/* Interest Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="interestedIn" className="text-sm font-medium flex items-center gap-2">
                <Home className="h-4 w-4" />
                Interested In
              </Label>
              <Select onValueChange={(value) => handleInputChange('interestedIn', value)}>
                <SelectTrigger className="border-input focus:border-accent">
                  <SelectValue placeholder="Select home type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="36-feet">36' Single Family Homes</SelectItem>
                  <SelectItem value="43-feet">43' Single Family Homes</SelectItem>
                  <SelectItem value="50-feet">50' Single Family Homes</SelectItem>
                  <SelectItem value="traditional-townhome">Traditional Townhomes</SelectItem>
                  <SelectItem value="rear-lane-townhome">Rear Lane Townhomes</SelectItem>
                  <SelectItem value="general">General Information</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeline" className="text-sm font-medium flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Purchase Timeline
              </Label>
              <Select onValueChange={(value) => handleInputChange('timeline', value)}>
                <SelectTrigger className="border-input focus:border-accent">
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Immediate (0-3 months)</SelectItem>
                  <SelectItem value="short-term">Short-term (3-6 months)</SelectItem>
                  <SelectItem value="medium-term">Medium-term (6-12 months)</SelectItem>
                  <SelectItem value="long-term">Long-term (12+ months)</SelectItem>
                  <SelectItem value="exploring">Just exploring</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Additional Comments
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Tell us about your specific needs or questions..."
              rows={4}
              className="border-input focus:border-accent resize-none"
            />
          </div>

          {/* Consent Checkboxes */}
          <div className="space-y-4 p-4 bg-muted/30 rounded-lg border">
            <h4 className="font-medium text-primary">Contact Preferences *</h4>
            
            <div className="flex items-start space-x-2">
              <Checkbox
                id="emailConsent"
                checked={formData.emailConsent}
                onCheckedChange={(checked) => handleInputChange('emailConsent', checked)}
              />
              <Label htmlFor="emailConsent" className="text-sm leading-relaxed">
                I consent to receive marketing communications via email about Union Village, 
                including floor plans, pricing updates, and exclusive offers.
              </Label>
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox
                id="phoneConsent"
                checked={formData.phoneConsent}
                onCheckedChange={(checked) => handleInputChange('phoneConsent', checked)}
              />
              <Label htmlFor="phoneConsent" className="text-sm leading-relaxed">
                I consent to receive phone calls and text messages about Union Village, 
                including follow-up communications and appointment scheduling.
              </Label>
            </div>
            
            <p className="text-xs text-muted-foreground">
              * You must provide consent for at least one form of communication. 
              You can withdraw consent at any time.
            </p>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full luxury-gradient text-primary font-semibold py-3 text-base hover:scale-105 transition-transform duration-200 shadow-luxury"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </Button>

          {/* Trust Message */}
          <div className="text-center text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg">
            <p>
              ✓ Your information is secure and will never be shared with third parties
              <br />
              ✓ We'll respond within 24 hours during business days
              <br />
              ✓ No high-pressure sales - just helpful information
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;