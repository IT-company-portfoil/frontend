import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Intro from "./Intro";
import ServicesComp from "./Services__Comp";
import SEO from "../SEO";
import "./style.css";

const Services = () => {
  const location = useLocation();
  const isStandalonePage = location.pathname === '/services';

  useEffect(() => {
    const servicesStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Tech Globe",
      "description": "Leading IT solutions provider offering comprehensive technology services",
      "url": "https://www.techglobe-solutions.com",
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
                "name": "Tech Globe"
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
                "name": "Tech Globe"
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
                "name": "Tech Globe"
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
                "name": "Tech Globe"
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
                "name": "Tech Globe"
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
    <>
      {isStandalonePage && (
        <SEO 
          title="IT Services - Tech Globe | AI Bots, Web Development & Custom Software"
          description="Explore Tech Globe's comprehensive IT services including AI bot development, custom portfolio websites, UI/UX design, mobile apps, and business automation solutions."
          keywords="IT services, AI bot development, web development services, UI/UX design, mobile app development, WordPress development, custom software solutions, business automation"
          url="/services"
          type="website"
        />
      )}
      <section 
        id="services" 
        className="container container__services"
        role="region"
        aria-labelledby="services-heading"
        itemScope
        itemType="https://schema.org/Service"
      >
        <header className="visually-hidden">
          <h2 id="services-heading">Tech Globe IT Solutions and Services</h2>
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
    </>
  );
};

export default Services;