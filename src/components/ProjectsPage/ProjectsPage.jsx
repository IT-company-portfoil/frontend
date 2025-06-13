import './ProjectsPage.css';
import Linda from '../../images/Linda.png';
import schOne from '../../images/sch1.png';
import ecommerce from '../../images/ecommorce.png';
import SEO from '../SEO';
import { useEffect } from 'react';
const ProjectsPage = () => {
useEffect(() => {
    const projectsStructuredData = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Tech Global Projects Portfolio",
      "description": "Explore our portfolio of successful IT solutions and digital transformations",
      "url": "https://techglobe-solutions.com/projects",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": projects.map((project, index) => ({
          "@type": "CreativeWork",
          "position": index + 1,
          "name": project.title,
          "description": project.description,
          "dateCreated": project.year,
          "creator": {
            "@type": "Organization",
            "name": "Tech Global"
          },
          "keywords": project.technologies.join(", ")
        }))
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(projectsStructuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  const projects = [
    {
      id: 1,
      title: "Dr. Linda",
      category: "Web Development",
      image: Linda,
      description: "is a comprehensive Arabic platform led by Dr. Linda Abu Jaber, a board-certified pediatrician (American and Jordanian boards).",
      technologies: ["WordPress CMS", "Standard WP theme/layouts", "WP forms/plugins"],
      client: "Dr. Linda",
      year: "2025",
      link: "https://askdrlinda.com"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "Web Development",
      image: ecommerce,
      description: "ecommerce is the buying/selling of goods or services on the Internet",
      technologies: ["React", "Redux", "CSS", "JSX"],
      client: "Fleet Cart ecommerce.",
      year: "2024",
      link: "#"
    },
    {
      id: 3,
      title: "School Management System",
      category: "Web Development",
      image: schOne,
      description: "is a comprehensive software solution designed to manage and automate daily school operations",
      technologies: ["React", "Node.js", "MongoDB", "ُExpressJS"],
      client: "Manufacturing Co.",
      year: "2025",
      link: "#"
    },

  ];


  return (
    <>
    <SEO 
        title="Our Projects - Tech Global IT Solutions Portfolio"
        description="Discover our portfolio of successful digital solutions including AI bots, e-commerce platforms, and custom software that have transformed businesses across various industries."
        keywords="portfolio, IT projects, web development projects, AI bot examples, e-commerce solutions, school management system, custom software showcase"
        url="https://techglobe-solutions.com/projects"
      />
    <div className="projects-page">
      <div className="projects-hero">
        <div className="container">
          <h1 className="hero-title">Our Projects</h1>
          <p className="hero-subtitle">
            Discover our portfolio of successful digital solutions that have transformed businesses across various industries.
          </p>
        </div>
      </div>

      <div className="projects-content">
        <div className="container">



          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                  
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-meta">
                    <span className="project-year">{project.year}</span>
                    <span className="project-client">{project.client}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="projects-cta">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss how we can bring your ideas to life with cutting-edge technology solutions.</p>
          <a href="/contact" className="cta-button">Get In Touch</a>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProjectsPage;