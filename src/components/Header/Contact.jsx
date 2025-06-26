import React from "react";
import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";

const Contact = () => {
  return (
    <div 
      className="contact"
      itemScope
      itemType="https://schema.org/ContactPoint"
      role="group"
      aria-label="Contact information"
    >
      <a 
        href="mailto:info@techglobe.com"
        itemProp="email"
        aria-label="Send email to Tech Globe at info@techglobe.com"
        title="Email us for inquiries and support"
      >
        <AiFillMail aria-hidden="true" />
        <span>info@techglobe.com</span>
      </a>

      <a 
        href="tel:+212698584458"
        itemProp="telephone"
        aria-label="Call Tech Globe at +212698584458"
        title="Call us for immediate assistance"
      >
        <AiFillPhone aria-hidden="true" />
        <span>+212698584458</span>
      </a>
      
      <meta itemProp="contactType" content="customer service" />
      <meta itemProp="availableLanguage" content="English" />
      <meta itemProp="areaServed" content="Worldwide" />
    </div>
  );
};

export default Contact;