import React, { useEffect } from "react";
import Work from "./Work_box";
import "./style.css";

const Portfolio = () => {
  const works = [
    {
      img: "https://miro.medium.com/max/1400/0*MYd28f8vpLiE34ij.jpeg",
      title: "Modern UI/UX Dashboard Design",
      text: "Advanced analytics dashboard with intuitive user interface, responsive design, and real-time data visualization for enhanced business insights.",
      category: "UI/UX Design",
      technologies: ["React", "D3.js", "Material-UI", "TypeScript"],
      url: "#portfolio-dashboard"
    },
    {
      img: "https://i.pinimg.com/originals/80/a1/17/80a1173fb50fe01bac507532338eb336.png",
      title: "Food and Consumption Web App",
      text: "Full-stack web application for food ordering and delivery management with payment integration and real-time tracking features.",
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      url: "#portfolio-food-app"
    },
    {
      img: "https://i.pinimg.com/originals/56/ae/76/56ae76f7bc1b3e0edc962cea1af7035f.png",
      title: "Future Social Media Web 3.0 dApp",
      text: "Decentralized social media platform built on blockchain technology with NFT integration and cryptocurrency rewards system.",
      category: "Blockchain Development",
      technologies: ["React", "Web3.js", "Solidity", "IPFS"],
      url: "#portfolio-social-dapp"
    }
  ];

  useEffect(() => {
    // Add structured data for portfolio/creative works
    const portfolioStructuredData = {
      "@context": "https://schema.org",
      "@type": "CreativeWorkSeries",
      "name": "Tech Global Portfolio",
      "description": "Collection of innovative IT solutions and software development projects by Tech Global",
      "creator": {
        "@type": "Organization",
        "name": "Tech Global",
        "url": "https://www.techglobe-solutions.com"
      },
      "hasPart": works.map((work, index) => ({
        "@type": "CreativeWork",
        "name": work.title,
        "description": work.text,
        "creator": {
          "@type": "Organization",
          "name": "Tech Global"
        },
        "image": work.img,
        "url": `https://www.techglobe-solutions.com${work.url}`,
        "genre": work.category,
        "keywords": work.technologies.join(", ")
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(portfolioStructuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [works]);

  return (
    <section 
      className="container container__portfolio" 
      id="portfolio"
      role="region"
      aria-labelledby="portfolio-heading"
      itemScope
      itemType="https://schema.org/CreativeWorkSeries"
    >
      <meta itemProp="name" content="Tech Global Portfolio" />
      <meta itemProp="description" content="Collection of innovative IT solutions and software development projects" />
      
      {works.map((work, index) => {
        if (index === 1) {
          return (
            <React.Fragment key={index}>
              <header className="portfolio__header">
                <h1 
                  id="portfolio-heading"
                  itemProp="name"
                >
                  See Our Works Or Portfolio
                </h1>
                <button 
                  className="btn btn-primary"
                  type="button"
                  aria-label="Learn more about Tech Global's portfolio and projects"
                >
                  More About
                </button>
              </header>
              <article
                itemScope
                itemType="https://schema.org/CreativeWork"
                itemProp="hasPart"
              >
                <Work 
                  img={work.img} 
                  title={work.title} 
                  text={work.text}
                  category={work.category}
                  technologies={work.technologies}
                  url={work.url}
                  workIndex={index}
                />
              </article>
            </React.Fragment>
          );
        }
        return (
          <article
            key={index}
            itemScope
            itemType="https://schema.org/CreativeWork"
            itemProp="hasPart"
          >
            <Work 
              img={work.img} 
              title={work.title} 
              text={work.text}
              category={work.category}
              technologies={work.technologies}
              url={work.url}
              workIndex={index}
            />
          </article>
        );
      })}
    </section>
  );
};

export default Portfolio;