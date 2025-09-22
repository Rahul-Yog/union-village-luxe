import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const CrownFAQSection = () => {
  const faqs = [
    {
      question: "Where is Crown of Caledon located?",
      answer: "Crown of Caledon is a premium residential development located in the prestigious town of Caledon, Ontario. The community offers luxury homes in a beautiful natural setting with easy access to urban amenities."
    },
    {
      question: "What is the starting price for homes at Crown of Caledon?",
      answer: "Luxury homes at Crown of Caledon start from $2 million. Each home features exceptional craftsmanship, premium finishes, and thoughtful design elements that reflect the highest standards of luxury living."
    },
    {
      question: "Who is the developer of Crown of Caledon?",
      answer: "Crown of Caledon is developed by Fieldgate Homes, a renowned builder with over 35 years of experience creating exceptional luxury residential communities throughout the Greater Toronto Area."
    },
    {
      question: "What home types are available?",
      answer: "Crown of Caledon offers a variety of luxury home types including estate homes, compact luxury homes, and traditional townhomes. Each home type features multiple architectural elevations and premium customization options."
    },
    {
      question: "What amenities are included in the community?",
      answer: "The community features extensive green spaces, walking trails, parks, recreational facilities, and sustainable living initiatives. Residents enjoy access to premium amenities designed to enhance their quality of life."
    },
    {
      question: "When is the expected completion date?",
      answer: "Construction timelines vary by home type and phase. Please contact our sales team for specific completion dates and availability for your preferred home type and location within the community."
    },
    {
      question: "Are there financing options available?",
      answer: "Yes, we work with preferred lenders and financial partners to offer competitive financing options for qualified buyers. Our sales team can provide detailed information about available financing programs."
    },
    {
      question: "Can I customize my home?",
      answer: "Absolutely! Crown of Caledon offers extensive customization options including finishes, fixtures, flooring, and structural modifications (where applicable). Our design centre provides a wide range of premium selections."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Crown of Caledon and our luxury homes
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
};

export default CrownFAQSection;