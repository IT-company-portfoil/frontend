import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import ContactPage from "./components/ContactPage/ContactPage";
import HomePage from "./components/HomePage/HomePage";
import { HelmetProvider } from 'react-helmet-async';

const App = () => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Tech Globe",
      "url": "https://www.techglobe-solutions.com",
      "logo": "https://www.techglobe-solutions.com/logo.png",
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
        "https://www.facebook.com/share/16n8DZaHxc/?mibextid=wwXlfr",
        "https://www.instagram.com/techglobe.jo",
        "https://www.linkedin.com/company/tech-globe-solutions.jo"
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
          "item": "https://www.techglobe-solutions.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.techglobe-solutions.com#services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Projects",
          "item": "https://www.techglobe-solutions.com/projects"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Contact",
          "item": "https://www.techglobe-solutions.com/contact"
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
      if (document.head.contains(orgScript)) {
        document.head.removeChild(orgScript);
      }
      if (document.head.contains(breadcrumbScript)) {
        document.head.removeChild(breadcrumbScript);
      }
    };
  }, []);

  return (
    <HelmetProvider>
    <Router>
      <div itemScope itemType="https://schema.org/Organization">
        <meta itemProp="name" content="Tech Globe" />
        <meta itemProp="description" content="Leading IT solutions provider specializing in AI bots, custom software development, UI/UX design, and business automation systems." />
        <meta itemProp="url" content="https://www.techglobe-solutions.com" />
        
        <Header />
        <Nav role="navigation" aria-label="Main navigation" />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
    </HelmetProvider>
  );
};

export default App;