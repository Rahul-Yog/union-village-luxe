import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <Button 
            onClick={() => navigate('/')}
            variant="ghost" 
            className="mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>

          <Card className="luxury-card">
            <div className="p-8">
              <h1 className="text-4xl font-display font-bold text-primary mb-8">
                Privacy Policy
              </h1>
              
              <div className="space-y-6 text-muted-foreground">
                <section>
                  <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                    Information Collection and Use
                  </h2>
                  <p className="mb-4">
                    This privacy policy describes how we collect, use, and protect your personal information 
                    when you use our real estate services or visit our website. We are committed to protecting 
                    your privacy and handling your data responsibly.
                  </p>
                  <p>
                    We collect information you provide directly to us, such as when you fill out a contact form, 
                    request information about properties, or communicate with us via email or phone.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                    Types of Information We Collect
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Contact information (name, email address, phone number)</li>
                    <li>Property preferences and requirements</li>
                    <li>Communication history and preferences</li>
                    <li>Website usage data (through cookies and analytics)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                    How We Use Your Information
                  </h2>
                  <p className="mb-4">We use your information to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide real estate services and property information</li>
                    <li>Communicate with you about properties and market updates</li>
                    <li>Improve our services and website functionality</li>
                    <li>Comply with legal obligations and industry regulations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                    Information Sharing and Disclosure
                  </h2>
                  <p className="mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except as described in this privacy policy or as required by law.
                  </p>
                  <p>
                    We may share information with trusted service providers who assist us in operating our 
                    website and conducting our business, provided they agree to keep this information confidential.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                    Data Security
                  </h2>
                  <p>
                    We implement appropriate security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                    over the internet or electronic storage is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                    Cookies and Tracking
                  </h2>
                  <p>
                    Our website may use cookies to enhance your experience and gather information about visitors 
                    and visits to our website. You may choose to set your web browser to refuse cookies, though 
                    this may limit some functionality.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                    Your Rights
                  </h2>
                  <p className="mb-4">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access and update your personal information</li>
                    <li>Request deletion of your data (subject to legal requirements)</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Request information about how your data is used</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                    Contact Information
                  </h2>
                  <p className="mb-4">
                    If you have any questions about this privacy policy or our data practices, please contact us:
                  </p>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p><strong>Rahul Jindal</strong></p>
                    <p>Real Estate Sales Representative</p>
                    <p>RE/MAX Skyway Realty Inc. Brokerage</p>
                    <p>Phone: 416-903-8026</p>
                    <p>Email: info@rahuljindal.ca</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                    Changes to This Policy
                  </h2>
                  <p>
                    We may update this privacy policy from time to time. Any changes will be posted on this page 
                    with an updated revision date. We encourage you to review this policy periodically.
                  </p>
                </section>

                <section className="border-t pt-6 mt-8">
                  <p className="text-sm">
                    <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-CA')}
                  </p>
                  <p className="text-sm mt-2">
                    This privacy policy is designed to be compliant with Canadian privacy laws including PIPEDA 
                    (Personal Information Protection and Electronic Documents Act) and applicable provincial legislation.
                  </p>
                </section>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;