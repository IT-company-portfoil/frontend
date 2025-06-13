import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Links = () => {
  const links = [
    { id: "/", label: "Home", title: "Go to homepage" },
    { id: "/about", label: "About", title: "Learn about Tech Global" },
    { id: "/services", label: "Services", title: "View our IT services" },
    { id: "/projects", label: "Portfolio", title: "See our work portfolio" },
    // { id: "testimony", label: "Testimony", title: "Read client testimonials" },
    // { id: "news", label: "News", title: "Latest news and updates" },
    { id: "/contact", label: "Contact", title: "Contact Tech Global" }
  ];
  
  const [linksVisibility, setLinksVisibility] = useState(false);

  const toggleVisibility = () => {
    setLinksVisibility(!linksVisibility);
  };

  return (
    <>
      <div className="links__button hide__button">
        <button 
          className="btn menu" 
          onClick={toggleVisibility}
          aria-label={linksVisibility ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={linksVisibility}
          aria-controls="main-navigation"
          type="button"
        >
          <RiMenu3Line aria-hidden="true" />
        </button>
      </div>
      
      <nav
        id="main-navigation"
        className={`links ${!linksVisibility ? "hide__links" : ""}`}
        aria-label="Main navigation menu"
        role="menubar"
      >
        {links.map((link, index) => {
          return (
            <Link
              key={link.id}
              className={!index ? "active" : ""}
              to={`${link.id}`}
              onClick={toggleVisibility}
              title={link.title}
              aria-label={link.title}
              role="menuitem"
              itemProp="url"
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Links;