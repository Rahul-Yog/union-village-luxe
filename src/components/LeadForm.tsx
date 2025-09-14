import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Mail, Phone, User, Home, Shield, FileText, DollarSign } from 'lucide-react';

const LeadForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interestedIn: '',
    priceRange: '',
    timeline: '',
    message: '',
    isRealtor: '',
    newsletter: false,
    privacy: false,
    phoneConsent: false,
    honeypot: '' // Bot protection
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Bot protection - honeypot field should be empty
    if (formData.honeypot) {
      console.log('Bot detected');
      return;
    }
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.isRealtor || !formData.privacy) {
      toast({
        title: "Please fill in all required fields",
        description: "Make sure to complete all required fields including the realtor question and privacy policy.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.newsletter && !formData.phoneConsent) {
      toast({
        title: "Contact method required",
        description: "Please allow us to contact you via email or phone.",
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
          price_range: formData.priceRange || null,
          timeline: formData.timeline || null,
          message: formData.message || null,
          is_realtor: formData.isRealtor === 'yes',
          newsletter_consent: formData.newsletter,
          privacy_consent: formData.privacy,
          form_type: 'lead_form',
          user_agent: navigator.userAgent
        }
      });

      if (error) {
        console.error('Error submitting lead:', error);
        toast({
          title: "Something went wrong",
          description: "Please try again or contact us directly.",
          variant: "destructive",
        });
        return;
      }

      console.log('Lead submitted successfully:', data);
      
      toast({
        title: "Thank you for your interest!",
        description: "Floor plans and pricing information will be sent to your email.",
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interestedIn: '',
        priceRange: '',
        timeline: '',
        message: '',
        isRealtor: '',
        newsletter: false,
        privacy: false,
        phoneConsent: false,
        honeypot: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly at 416-903-8026.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="section-spacing bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Form Benefits */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Get Exclusive Access
            </h2>
            <div className="w-24 h-1 luxury-gradient mb-8"></div>
            
            <p className="text-xl text-muted-foreground mb-8">
              Be the first to receive floor plans, pricing information, and exclusive 
              pre-construction offers for Union Village.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <FileText className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">Detailed Floor Plans</h4>
                  <p className="text-muted-foreground text-sm">Complete layouts for all home types with dimensions and specifications.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <DollarSign className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">Pricing & Deposit Structure</h4>
                  <p className="text-muted-foreground text-sm">Current pricing, payment plans, and deposit requirements.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">Priority Access</h4>
                  <p className="text-muted-foreground text-sm">Be notified first when new releases become available.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="animate-slide-up">
            <Card className="luxury-card">
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6 form-luxury">
                  {/* Honeypot field for bot protection - hidden */}
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
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
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
                      <Label htmlFor="lastName">Last Name *</Label>
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

                  {/* Contact Fields */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
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
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(416) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Interest */}
                  <div>
                    <Label htmlFor="interestedIn">Interested In</Label>
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

                   {/* Price Range */}
                   <div>
                     <Label htmlFor="priceRange">Price Range</Label>
                     <Select value={formData.priceRange} onValueChange={(value) => handleInputChange('priceRange', value)}>
                       <SelectTrigger>
                         <SelectValue placeholder="Select your budget range" />
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

                   {/* Timeline */}
                  <div>
                    <Label htmlFor="timeline">Purchase Timeline</Label>
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

                   {/* Realtor Question */}
                   <div>
                     <Label className="text-base font-medium">Are you a Realtor? *</Label>
                     <RadioGroup 
                       value={formData.isRealtor} 
                       onValueChange={(value) => handleInputChange('isRealtor', value)}
                       className="flex gap-6 mt-2"
                     >
                       <div className="flex items-center space-x-2">
                         <RadioGroupItem value="yes" id="realtor-yes" />
                         <Label htmlFor="realtor-yes">Yes</Label>
                       </div>
                       <div className="flex items-center space-x-2">
                         <RadioGroupItem value="no" id="realtor-no" />
                         <Label htmlFor="realtor-no">No</Label>
                       </div>
                     </RadioGroup>
                   </div>

                   {/* Message */}
                   <div>
                     <Label htmlFor="message">Additional Comments</Label>
                     <Textarea
                       id="message"
                       value={formData.message}
                       onChange={(e) => handleInputChange('message', e.target.value)}
                       placeholder="Any specific questions or requirements?"
                       rows={3}
                     />
                   </div>

                   {/* Contact Preferences */}
                   <div className="space-y-3 bg-muted/50 p-4 rounded-lg">
                     <p className="text-sm font-medium text-primary mb-3">How would you like us to contact you? (Select at least one) *</p>
                     
                     <div className="flex items-start gap-2">
                       <Checkbox 
                         id="newsletter"
                         checked={formData.newsletter}
                         onCheckedChange={(checked) => handleInputChange('newsletter', !!checked)}
                       />
                       <Label htmlFor="newsletter" className="text-sm leading-relaxed">
                         Yes, you may contact me via email with information about Union Village and other real estate opportunities.
                       </Label>
                     </div>
                     
                     <div className="flex items-start gap-2">
                       <Checkbox 
                         id="phoneConsent"
                         checked={formData.phoneConsent}
                         onCheckedChange={(checked) => handleInputChange('phoneConsent', !!checked)}
                       />
                       <Label htmlFor="phoneConsent" className="text-sm leading-relaxed">
                         Yes, you may contact me via phone/text with information about Union Village and other real estate opportunities.
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
                       and consent to being contacted about Union Village. *
                     </Label>
                   </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full luxury-gradient text-primary font-semibold py-4 text-lg hover:scale-105 transition-transform duration-200 disabled:hover:scale-100"
                  >
                    {isSubmitting ? 'Sending Information...' : 'Get Floor Plans & Pricing'}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Your information is secure and will never be shared with third parties.
                  </p>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;