import React, { useEffect } from "react";
import "./style.css";

const Banner = () => {
  useEffect(() => {
    // Add structured data for the call-to-action section
    const ctaStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Tech Globe - Business Technology Solutions",
      "description": "Boost your business with the latest technology solutions from Tech Globe. Contact us for AI bots, custom software, and business automation.",
      "url": "https://www.techglobe-solutions.com",
      "mainEntity": {
        "@type": "Organization",
        "name": "Tech Globe",
        "offers": {
          "@type": "Offer",
          "name": "IT Solutions Consultation",
          "description": "Free consultation for business technology solutions",
          "category": "IT Services"
        }
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(ctaStructuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section 
      id="banner" 
      className="banner__container"
      role="region"
      aria-labelledby="banner-heading"
      itemScope
      itemType="https://schema.org/WebPageElement"
    >
      <div className="container">
        <header>
          <h1 
            id="banner-heading"
            itemProp="name"
          >
            Let's Boost Your Business
            <br /> With The Latest Technology
          </h1>
        </header>
        
        <div className="banner-cta" role="group" aria-label="Contact us call to action">
          <button 
            className="btn btn-primary"
            type="button"
            aria-label="Contact Tech Globe to discuss your business technology needs"
            itemScope
            itemType="https://schema.org/ContactPoint"
          >
            Get In Touch
            <meta itemProp="contactType" content="sales" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;