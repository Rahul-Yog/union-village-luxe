import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "Where are Union Village homes located?",
      answer: "Union Village is located at 16th Avenue and Kennedy Road in Markham, Ontario. This prestigious location offers easy access to Unionville's historic charm and metropolitan conveniences, making it one of the most sought-after areas for new homes in Markham."
    },
    {
      question: "What is the price range for Unionville houses for sale at Union Village?",
      answer: "Union Village luxury homes start from $1.4 million. These are premium new homes in Markham featuring modern design, feng shui principles, and high-end finishes with expected completion in late 2026."
    },
    {
      question: "Who are the developers of Union Village?",
      answer: "Union Village is developed by The Minto Group and Metropia, two renowned builders known for creating exceptional master-planned communities across the Greater Toronto Area. Both developers have decades of experience in luxury home construction."
    },
    {
      question: "When will the new homes in Markham be ready for occupancy?",
      answer: "The new homes at Union Village are expected to be move-in ready by late 2026. Phase 2 is currently available for pre-construction sales, offering buyers the opportunity to secure their dream Unionville home at pre-construction pricing."
    },
    {
      question: "What makes these Unionville houses for sale unique?",
      answer: "Our Union Village homes feature feng shui design principles by international master Paul Ng, premium finishes, modern layouts, and are situated in a master-planned community with preserved wetlands, walking trails, and proximity to Unionville's historic Main Street."
    },
    {
      question: "What schools are near the Union Village community?",
      answer: "The area offers access to highly-rated public and private schools within walking distance. Families choosing homes for sale in Unionville benefit from excellent educational opportunities in the York Region District School Board system."
    },
    {
      question: "How do I get more information about available homes?",
      answer: "Contact Rahul Jindal, your dedicated real estate sales representative, at 416-903-8026 or info@rahuljindal.ca. Get exclusive floor plans, pricing information, and schedule a consultation to learn more about these luxury Markham new homes."
    },
    {
      question: "What transportation options are available?",
      answer: "Union Village offers excellent connectivity with GO Transit access just 5 minutes away, Highway 407 nearby, and easy access to downtown Toronto. The location provides the perfect balance of suburban living with urban accessibility."
    }
  ];

  return (
    <section id="faq" className="section-spacing bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <HelpCircle className="h-16 w-16 text-accent mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 luxury-gradient mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about Union Village and our Unionville houses for sale
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Card className="luxury-card">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border last:border-b-0">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                    <span className="text-primary font-semibold group-hover:text-accent transition-colors duration-200">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="luxury-card bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20 max-w-2xl mx-auto">
            <div className="p-8">
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Rahul Jindal is here to help you find your perfect Unionville home. 
                Get personalized answers and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:416-903-8026"
                  className="inline-flex items-center justify-center px-6 py-3 luxury-gradient text-primary font-semibold rounded-md hover:scale-105 transition-transform duration-200"
                >
                  Call: 416-903-8026
                </a>
                <a 
                  href="mailto:info@rahuljindal.ca"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-primary rounded-md transition-all duration-200"
                >
                  Email: info@rahuljindal.ca
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;