import { Helmet, HelmetProvider } from 'react-helmet-async';
import CrownNavigation from '@/components/crown/CrownNavigation';
import CrownHeroSection from '@/components/crown/CrownHeroSection';
import CrownOverviewSection from '@/components/crown/CrownOverviewSection';
import CrownLocationSection from '@/components/crown/CrownLocationSection';
import CrownHomeCollection from '@/components/crown/CrownHomeCollection';
import CrownAmenities from '@/components/crown/CrownAmenities';
import CrownFAQSection from '@/components/crown/CrownFAQSection';
import CrownLeadForm from '@/components/crown/CrownLeadForm';
import CrownFooter from '@/components/crown/CrownFooter';

const Index = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Crown of Caledon | Luxury New Homes in Caledon | Premium Estate Development</title>
        <meta name="description" content="Discover Crown of Caledon - luxury new homes and premium estate development in Caledon. Exceptional craftsmanship, modern designs, and natural beauty starting from $2M." />
        <meta name="keywords" content="crown of caledon, luxury homes caledon, new homes caledon, estate homes caledon, premium homes caledon, caledon real estate, luxury development caledon, fieldgate homes" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Crown of Caledon Sales Team" />
        
        {/* Geo-specific meta tags */}
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Caledon, Ontario" />
        <meta name="geo.position" content="43.8667;-79.9167" />
        <meta name="ICBM" content="43.8667, -79.9167" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Crown of Caledon | Luxury New Homes in Caledon | Premium Estate Development" />
        <meta property="og:description" content="Discover Crown of Caledon - luxury new homes and premium estate development in Caledon. Exceptional craftsmanship, modern designs, and natural beauty." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://crowncaledon.ca" />
        <meta property="og:image" content="/crown-hero-rendering.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Crown of Caledon | Luxury New Homes in Caledon" />
        <meta name="twitter:description" content="Discover Crown of Caledon - luxury new homes and premium estate development in Caledon with exceptional craftsmanship." />
        <meta name="twitter:image" content="/crown-hero-rendering.jpg" />
        
        <link rel="canonical" href="https://crowncaledon.ca" />
        
        {/* Structured Data - Local Business */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "RealEstateProject",
              "name": "Crown of Caledon",
              "description": "Luxury new homes and premium estate development in Caledon with exceptional craftsmanship and modern designs",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Caledon",
                "addressRegion": "Ontario",
                "addressCountry": "CA"
              },
              "developer": "Fieldgate Homes",
              "priceRange": "From $2,000,000 CAD",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "sales",
                "availableLanguage": ["English"]
              },
              "keywords": ["crown of caledon", "luxury homes caledon", "new homes caledon", "estate homes caledon"],
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "43.8667",
                "longitude": "-79.9167"
              }
            }
          `}
        </script>
        
        {/* FAQ Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Where is Crown of Caledon located?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Crown of Caledon is a premium residential development located in the prestigious town of Caledon, Ontario, offering luxury homes in a natural setting."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the starting price for homes at Crown of Caledon?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Luxury homes at Crown of Caledon start from $2 million, featuring exceptional craftsmanship and premium finishes."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Who is the developer of Crown of Caledon?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Crown of Caledon is developed by Fieldgate Homes, a renowned builder known for creating exceptional luxury residential communities."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <CrownNavigation />
        <CrownHeroSection />
        <CrownOverviewSection />
        <CrownLocationSection />
        <CrownHomeCollection />
        <CrownAmenities />
        <CrownFAQSection />
        <CrownLeadForm />
        <CrownFooter />
      </div>
    </HelmetProvider>
  );
};

export default Index;
