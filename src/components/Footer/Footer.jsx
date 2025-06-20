import React, { useEffect } from "react";
import { CgInstagram } from "react-icons/cg";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import "./style.css";
import Logo from "../Nav/Logo";

const Footer = () => {
  useEffect(() => {
    const contactStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Tech Global",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+212698584458",
        "contactType": "customer service",
        "email": "info@techglobe.com",
        "availableLanguage": ["English"],
        "areaServed": "Worldwide"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "232 California Road Imperial",
        "addressLocality": "Imperial",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://www.facebook.com/share/16n8DZaHxc/?mibextid=wwXlfr",
        "https://www.instagram.com/techglobe.jo",
        "https://www.linkedin.com/company/tech-globe-solutions.jo"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(contactStructuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <footer 
      id="contact" 
      className="container footer__container"
      itemScope 
      itemType="https://schema.org/Organization"
      role="contentinfo"
      aria-label="Footer with company information and contact details"
    >
      <section className="about" aria-labelledby="footer-about-heading">
        <Logo />
        <h3 id="footer-about-heading" className="visually-hidden">About Tech Global</h3>
        <p 
          className="text"
          itemProp="description"
        >
          We specialize in creating intelligent software solutions including AI bots, custom portfolio websites,
          UI/UX design, and business automation systems. Our mission is making advanced technology
          accessible and practical for businesses of all sizes.
        </p>
        
        <nav aria-label="Social media links">
          <ul className="footer__socials" role="list">
            <li>
              <a 
                href="https://www.facebook.com/share/16n8DZaHxc/?mibextid=wwXlfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Tech Global on Facebook"
                itemProp="sameAs"
              >
                <AiFillFacebook aria-hidden="true" />
                <span className="visually-hidden">Facebook</span>
              </a>
            </li>
            <li>
              <a 
                href="https://www.instagram.com/techglobe.jo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Tech Global on Instagram"
                itemProp="sameAs"
              >
                <CgInstagram aria-hidden="true" />
                <span className="visually-hidden">Instagram</span>
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/company/tech-globe-solutions-jo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Tech Global on Twitter"
                itemProp="sameAs"
              >
                <AiFillLinkedin aria-hidden="true" />
                <span className="visually-hidden">Linkedin</span>
              </a>
            </li>
          </ul>
        </nav>
      </section>

      <section className="services" aria-labelledby="footer-services-heading">
        <h3 id="footer-services-heading">Services</h3>
        <nav aria-label="Services navigation">
          <ul role="list" itemScope itemType="https://schema.org/Service">
            <li>
              <a 
                href="#services" 
                className="text"
                aria-label="Learn about our portfolio website development services"
                itemProp="serviceType"
              >
                Portfolio Websites
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className="text"
                aria-label="Discover our AI bots and agents development services"
                itemProp="serviceType"
              >
                AI Bots & Agents
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className="text"
                aria-label="Explore our business systems solutions"
                itemProp="serviceType"
              >
                Business Systems
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className="text"
                aria-label="View our UI/UX design services"
                itemProp="serviceType"
              >
                UI/UX Design
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className="text"
                aria-label="Learn about our custom software solutions"
                itemProp="serviceType"
              >
                Software Solutions
              </a>
            </li>
          </ul>
        </nav>
      </section>

      <section 
        className="contact"
        aria-labelledby="footer-contact-heading"
        itemScope 
        itemType="https://schema.org/ContactPoint"
      >
        <h3 id="footer-contact-heading">Contact</h3>
        <ul role="list">
          <li>
            <address 
              className="text"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <span className="visually-hidden">Office address:</span>
              <span itemProp="streetAddress">232 California Road Imperial</span>
              <meta itemProp="addressLocality" content="Imperial" />
              <meta itemProp="addressCountry" content="US" />
            </address>
          </li>
          <li>
            <a 
              href="tel:+212698584458" 
              className="text"
              itemProp="telephone"
              aria-label="Call Tech Global at +212698584458"
            >
              <span aria-hidden="true">Tel : </span>+212698584458
            </a>
          </li>
          <li>
            <a 
              href="mailto:info@techglobe.com" 
              className="text"
              itemProp="email"
              aria-label="Email Tech Global at info@techglobe.com"
            >
              <span aria-hidden="true">Email: </span>info@techglobe.com
            </a>
          </li>
        </ul>
        <meta itemProp="contactType" content="customer service" />
        <meta itemProp="availableLanguage" content="English" />
      </section>
    </footer>
  );
};

export default Footer;