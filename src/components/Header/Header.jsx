import React from "react";
import Contact from "./Contact";
import Socials from "./Socials";
import "./style.css";

const Header = () => {
  return (
    <header 
      role="banner"
      aria-label="Tech Globe main header with contact information and social links"
      itemScope 
      itemType="https://schema.org/Organization"
    >
      <div className="container container__header">
        <section 
          aria-label="Contact information"
          itemProp="contactPoint"
          itemScope
          itemType="https://schema.org/ContactPoint"
        >
          <Contact />
          <meta itemProp="contactType" content="customer service" />
          <meta itemProp="availableLanguage" content="English" />
        </section>
        
        <nav 
          aria-label="Social media links"
          itemProp="sameAs"
        >
          <Socials />
        </nav>
      </div>
      
      <meta itemProp="name" content="Tech Globe" />
      <meta itemProp="description" content="Leading IT solutions provider specializing in AI development and business automation" />
    </header>
  );
};

export default Header;