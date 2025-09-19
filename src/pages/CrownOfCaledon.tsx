import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import CrownHeroSection from '@/components/crown/CrownHeroSection';
import CrownOverviewSection from '@/components/crown/CrownOverviewSection';
import CrownLocationSection from '@/components/crown/CrownLocationSection';
import CrownHomeCollection from '@/components/crown/CrownHomeCollection';
import CrownAmenities from '@/components/crown/CrownAmenities';
import FAQSection from '@/components/FAQSection';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

const CrownOfCaledon = () => {
  return (
    <>
      <Helmet>
        <title>Crown of Caledon - Freehold Townhomes & Detached Homes from $730K | Fieldgate</title>
        <meta name="description" content="Crown of Caledon by Fieldgate Homes - Luxury freehold townhomes and 38' & 60' detached homes starting from $730K. Located at Hurontario St & Mayfield Rd, Caledon. Beat competitor prices by $20K+." />
        <meta name="keywords" content="Crown of Caledon, Fieldgate Homes, new homes Caledon, detached homes Brampton, freehold townhomes, Hurontario Mayfield, Indian community homes, Sikh community Caledon, Hindu families Brampton, Muslim community homes" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yoursite.com/" />
        <meta property="og:title" content="Crown of Caledon - Freehold Townhomes & Detached Homes from $730K" />
        <meta property="og:description" content="Discover luxury living at Crown of Caledon. Freehold townhomes and detached homes by Fieldgate Homes starting from $730K. Located at Hurontario & Mayfield." />
        <meta property="og:image" content="/crown-hero-rendering.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yoursite.com/" />
        <meta property="twitter:title" content="Crown of Caledon - Freehold Townhomes & Detached Homes from $730K" />
        <meta property="twitter:description" content="Discover luxury living at Crown of Caledon. Freehold townhomes and detached homes by Fieldgate Homes starting from $730K." />
        <meta property="twitter:image" content="/crown-hero-rendering.jpg" />
        
        {/* Structured Data - Real Estate */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Crown of Caledon by Fieldgate Homes",
            "description": "Luxury freehold townhomes and detached homes starting from $730K in Caledon, Ontario",
            "url": "https://yoursite.com/",
            "telephone": "+1-647-405-8383",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Hurontario St & Mayfield Rd",
              "addressLocality": "Caledon",
              "addressRegion": "ON",
              "addressCountry": "CA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "43.7315",
              "longitude": "-79.7624"
            },
            "priceRange": "Starting from $730,000",
            "areaServed": ["Caledon", "Brampton", "GTA"],
            "serviceType": ["New Home Sales", "Pre-Construction Homes"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Crown of Caledon Homes",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Freehold Townhomes",
                    "description": "Luxury freehold townhomes with modern amenities"
                  },
                  "price": "730000",
                  "priceCurrency": "CAD"
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Product",
                    "name": "38' & 60' Detached Homes",
                    "description": "Spacious single-family detached homes with premium finishes"
                  },
                  "price": "730000",
                  "priceCurrency": "CAD"
                }
              ]
            }
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
          <LeadForm />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CrownOfCaledon;