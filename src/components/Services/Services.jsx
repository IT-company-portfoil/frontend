import React, { useEffect } from "react";
import Intro from "./Intro";
import ServicesComp from "./Services__Comp";
import "./style.css";

const Services = () => {
  useEffect(() => {
    // Add structured data for services section
    const servicesStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Tech Global",
      "description": "Leading IT solutions provider offering comprehensive technology services",
      "url": "https://www.techglobal.com",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "IT Solutions and Services",
        "description": "Comprehensive technology solutions for modern businesses",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Portfolio Websites",
              "description": "Custom portfolio sites that showcase your work and convert visitors into paying clients",
              "serviceType": "Web Development",
              "provider": {
                "@type": "Organization",
                "name": "Tech Global"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Bots & Agents",
              "description": "Intelligent chatbots and AI agents that handle customer inquiries and automate business processes",
              "serviceType": "Artificial Intelligence",
              "provider": {
                "@type": "Organization",
                "name": "Tech Global"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "UI/UX Design",
              "description": "Modern, user-centered design solutions that create exceptional digital experiences and boost conversions",
              "serviceType": "Design Services",
              "provider": {
                "@type": "Organization",
                "name": "Tech Global"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Business Systems",
              "description": "Custom software systems that streamline operations and boost your team's productivity",
              "serviceType": "Software Development",
              "provider": {
                "@type": "Organization",
                "name": "Tech Global"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Software Solutions",
              "description": "Advanced web applications and enterprise software tailored to your specific business needs",
              "serviceType": "Custom Software Development",
              "provider": {
                "@type": "Organization",
                "name": "Tech Global"
              }
            }
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(servicesStructuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section 
      id="services" 
      className="container container__services"
      role="region"
      aria-labelledby="services-heading"
      itemScope
      itemType="https://schema.org/Service"
    >
      <header className="visually-hidden">
        <h2 id="services-heading">Tech Global IT Solutions and Services</h2>
      </header>
      
      <section 
        aria-labelledby="services-intro"
        role="region"
      >
        <Intro />
      </section>
      
      <section 
        aria-labelledby="services-offerings"
        role="region"
        itemProp="hasOfferCatalog"
        itemScope
        itemType="https://schema.org/OfferCatalog"
      >
        <ServicesComp />
      </section>
    </section>
  );
};

export default Services;