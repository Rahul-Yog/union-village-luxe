import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import CrownHeroSection from '@/components/crown/CrownHeroSection';
import CrownOverviewSection from '@/components/crown/CrownOverviewSection';
import CrownLocationSection from '@/components/crown/CrownLocationSection';
import CrownHomeCollection from '@/components/crown/CrownHomeCollection';
import CrownAmenities from '@/components/crown/CrownAmenities';
import FAQSection from '@/components/FAQSection';
import CrownLeadForm from '@/components/crown/CrownLeadForm';
import CrownFooter from '@/components/crown/CrownFooter';

const CrownOfCaledon = () => {
  return (
    <>
      <Helmet>
        <title>Crown of Caledon New Homes | Fieldgate Caledon Townhomes & Detached Homes from $730K</title>
        <meta name="description" content="Crown of Caledon by Fieldgate Homes - Premium freehold townhomes and 38' detached homes in Caledon starting from $730K. Located at Hurontario St & Mayfield Rd. Modern living on the Brampton border with family-friendly amenities." />
        <meta name="keywords" content="Crown of Caledon, Fieldgate Homes, new homes Caledon, detached homes Brampton, freehold townhomes, Hurontario Mayfield, new construction Caledon, luxury homes GTA, family homes Brampton, real estate Caledon, Caledon new homes, Brampton border homes, townhomes for sale" />
        
        {/* Geo-specific Meta Tags */}
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Caledon, Ontario" />
        <meta name="geo.position" content="43.7315;-79.7624" />
        <meta name="ICBM" content="43.7315, -79.7624" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yoursite.com/" />
        <meta property="og:title" content="Crown of Caledon New Homes | Fieldgate Caledon Townhomes & Detached Homes from $730K" />
        <meta property="og:description" content="Discover premium living at Crown of Caledon. Freehold townhomes and detached homes by Fieldgate Homes starting from $730K. Modern family community on the Brampton border." />
        <meta property="og:image" content="/crown-hero-rendering.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yoursite.com/" />
        <meta property="twitter:title" content="Crown of Caledon New Homes | Fieldgate Caledon Townhomes & Detached Homes from $730K" />
        <meta property="twitter:description" content="Discover premium living at Crown of Caledon. Freehold townhomes and detached homes by Fieldgate Homes starting from $730K." />
        <meta property="twitter:image" content="/crown-hero-rendering.jpg" />
        
        {/* Structured Data - Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Crown of Caledon by Fieldgate Homes",
            "description": "Premium freehold townhomes and detached homes in Caledon, Ontario. Family-friendly community with modern amenities on the Brampton border.",
            "url": "https://yoursite.com/crown-of-caledon",
            "telephone": "+1-647-405-8383",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Hurontario St & Mayfield Rd",
              "addressLocality": "Caledon",
              "addressRegion": "ON",
              "postalCode": "L7C",
              "addressCountry": "CA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "43.7315",
              "longitude": "-79.7624"
            },
            "priceRange": "Starting from $730,000",
            "areaServed": [
              {
                "@type": "City",
                "name": "Caledon",
                "sameAs": "https://en.wikipedia.org/wiki/Caledon,_Ontario"
              },
              {
                "@type": "City", 
                "name": "Brampton",
                "sameAs": "https://en.wikipedia.org/wiki/Brampton"
              }
            ],
            "serviceType": ["New Home Sales", "Pre-Construction Homes", "Real Estate Development"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Crown of Caledon New Homes Collection",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Freehold Townhomes",
                    "description": "Premium freehold townhomes with modern amenities and family-friendly design"
                  },
                  "price": "730000",
                  "priceCurrency": "CAD"
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Product",
                    "name": "38' Detached Homes",
                    "description": "Spacious single-family detached homes with premium finishes and modern layouts"
                  },
                  "price": "730000",
                  "priceCurrency": "CAD"
                }
              ]
            },
            "sameAs": [
              "https://www.fieldgatehomes.com"
            ]
          })}
        </script>
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What types of homes are available at Crown of Caledon?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Crown of Caledon offers premium freehold townhomes and 38' detached homes. All homes feature modern designs, quality finishes, and are built by Fieldgate Homes, a trusted GTA builder."
                }
              },
              {
                "@type": "Question",
                "name": "Where is Crown of Caledon located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Crown of Caledon is strategically located at Hurontario Street and Mayfield Road in Caledon, Ontario, right on the border with Brampton. This prime location offers easy access to highways, shopping, schools, and recreational amenities."
                }
              },
              {
                "@type": "Question",
                "name": "What is the starting price for homes at Crown of Caledon?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "Homes at Crown of Caledon start from $730,000. We offer competitive pricing and various home types to suit different family needs and budgets."
                }
              },
              {
                "@type": "Question",
                "name": "When will Crown of Caledon be completed?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Crown of Caledon is scheduled for completion in 2026. This gives you time to plan your move while securing your dream home at today's pricing."
                }
              }
            ]
          })}
        </script>
        
        <link rel="canonical" href="https://yoursite.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <CrownHeroSection />
          <CrownOverviewSection />
          <CrownLocationSection />
          <CrownHomeCollection />
          <CrownAmenities />
          <FAQSection />
          <CrownLeadForm />
        </main>
        <CrownFooter />
      </div>
    </>
  );
};

export default CrownOfCaledon;