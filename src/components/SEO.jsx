import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({
  title = "Tech Global - Advanced IT Solutions & Software Development",
  description = "Transform your business with Tech Global's cutting-edge IT solutions. We specialize in AI bots, custom portfolio websites, UI/UX design, mobile apps, and WordPress development.",
  keywords = "IT solutions, software development, AI bots, web development, UI/UX design, mobile apps, WordPress development",
  canonical = "https://www.techglobe-solutions.com/",
  ogImage = "https://www.techglobe-solutions.com/og-image.jpg",
  twitterImage = "https://www.techglobe-solutions.com/twitter-image.jpg",
  schemaMarkup = null
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Tech Global" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={twitterImage} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="en-US" />
      <meta name="author" content="Tech Global" />
      
      {/* Structured Data */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;