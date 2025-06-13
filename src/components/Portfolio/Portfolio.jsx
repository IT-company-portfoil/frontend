import React, { useEffect } from "react";
import Work from "./Work_box";
import Linda from '../../images/Linda.png';
import schOne from '../../images/sch1.png';
import ecommerce from '../../images/ecommorce.png';

import "./style.css";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const works = [
    {
      img: Linda,
      title: "Dr. Linda",
      text: "is a comprehensive Arabic platform led by Dr. Linda Abu Jaber, a board-certified pediatrician (American and Jordanian boards),",
      category: "Web Development",
      technologies: ["WordPress CMS", "Standard WP theme/layouts", "WP forms/plugins"],
      url: "https://askdrlinda.com"
    },
    {
      img: schOne,
      title: "School Management System",
      text: "is a comprehensive software solution designed to manage and automate daily school operations",
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB", "ُExpressJS"],
      url: "#portfolio-food-app"
    },
    {
      img: ecommerce,
      title: "Fleet Cart ecommerce",
      text: "Ecommerce is the buying/selling of goods or services on the Internet",
      category: "Web Development",
      technologies: ["React", "CSS"],
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
                <Link to={"/projects"}>
                <button
                  className="btn btn-primary"
                  type="button"
                  aria-label="Learn more about Tech Global's portfolio and projects"
                >
                  More About
                </button>
                </Link>
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