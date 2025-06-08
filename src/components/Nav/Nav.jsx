import React from "react";
import Logo from "./Logo";
import Links from "./Links";
import Quote from "./Quote";
import Search from "./Search";
import "./style.css";

const Nav = () => {
  return (
    <nav 
      role="navigation"
      aria-label="Main navigation"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      <div className="container container__nav">
        <div 
          className="nav-brand"
          itemProp="url"
          itemScope
          itemType="https://schema.org/Organization"
        >
          <Logo />
          <meta itemProp="name" content="Tech Global" />
        </div>
        
        <div 
          className="nav-links"
          itemProp="hasPart"
          itemScope
          itemType="https://schema.org/WebPage"
        >
          <Links />
        </div>
        
        <div className="nav-actions" role="group" aria-label="Navigation actions">
          <Quote />
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default Nav;