import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import News from "./components/News/News";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

const App = () => {
  useEffect(() => {
    // Add structured data for organization
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Tech Global",
      "url": "https://www.techglobal.com",
      "logo": "https://www.techglobal.com/logo.png",
      "description": "Leading IT solutions provider specializing in AI bots, custom software development, UI/UX design, and business automation systems.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "232 California Road Imperial",
        "addressLocality": "Imperial",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+212698584458",
        "contactType": "customer service",
        "email": "info@techglobe.com"
      },
      "sameAs": [
        "https://www.facebook.com/techglobal",
        "https://www.twitter.com/techglobal",
        "https://www.instagram.com/techglobal"
      ]
    };

    // Add breadcrumb structured data
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.techglobal.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.techglobal.com#services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Portfolio",
          "item": "https://www.techglobal.com#portfolio"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Contact",
          "item": "https://www.techglobal.com#contact"
        }
      ]
    };

    // Create and append structured data scripts
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.text = JSON.stringify(structuredData);
    document.head.appendChild(orgScript);

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify(breadcrumbData);
    document.head.appendChild(breadcrumbScript);

    return () => {
      // Cleanup scripts on unmount
      document.head.removeChild(orgScript);
      document.head.removeChild(breadcrumbScript);
    };
  }, []);

  return (
    <div itemScope itemType="https://schema.org/Organization">
      <meta itemProp="name" content="Tech Global" />
      <meta itemProp="description" content="Leading IT solutions provider specializing in AI bots, custom software development, UI/UX design, and business automation systems." />
      <meta itemProp="url" content="https://www.techglobal.com" />
      
      <Header />
      <Nav role="navigation" aria-label="Main navigation" />
      
      <main role="main">
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        {/* <News /> */}
        <Banner />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;