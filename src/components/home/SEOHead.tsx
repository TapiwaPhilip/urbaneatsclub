
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = () => {
  return (
    <Helmet>
      <title>Urban Eats Club - Office Lunch Program for Employers | Boost Workplace Culture</title>
      <meta name="description" content="Urban Eats Club offers a seamless lunch benefits program that boosts office attendance and employee satisfaction. Increase productivity with our flexible employee lunch solution." />
      <meta name="keywords" content="employee lunch benefits, office lunch program, corporate lunch solutions, workplace meals, employee perks" />
      <link rel="canonical" href="https://urbaneatsclub.com/" />
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Urban Eats Club",
            "url": "https://urbaneatsclub.com",
            "logo": "/lovable-uploads/9ccd2f66-3358-48c0-beb8-dcbfd399ac22.png",
            "description": "Urban Eats Club offers a seamless lunch benefits program that boosts office attendance and employee satisfaction.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-123-4567",
              "contactType": "customer service"
            }
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEOHead;
