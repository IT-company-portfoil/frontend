import React from 'react';
import { Helmet } from 'react-helmet-async';

const EnhancedSEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url,
  type = 'website',
  author = 'Tech Global',
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  const siteUrl = 'https://techglobe-solutions.com';
  const defaultImage = `${siteUrl}/og-image.jpg`;
  const currentUrl = url || typeof window !== 'undefined' ? window.location.href : siteUrl;
  
  // Social media accounts
  const socialAccounts = {
    facebook: 'https://www.facebook.com/share/16n8DZaHxc/?mibextid=wwXlfr',
    instagram: '@techglobe.jo',
    linkedin: 'https://www.linkedin.com/company/tech-globe-solutions-jo',
    twitter: '@techglobal'
  };
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:site_name" content="Tech Global" />
      <meta property="og:locale" content="en_US" />
      
      {/* Facebook specific */}
      <meta property="article:author" content={socialAccounts.facebook} />
      <meta property="article:publisher" content={socialAccounts.facebook} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.length > 0 && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image || defaultImage} />
      <meta property="twitter:site" content={socialAccounts.twitter} />
      <meta property="twitter:creator" content={socialAccounts.twitter} />
      
      {/* LinkedIn */}
      <meta property="linkedin:owner" content={socialAccounts.linkedin} />
      
      {/* Instagram */}
      <meta property="instagram:creator" content={socialAccounts.instagram} />
      
      {/* Schema.org structured data for social profiles */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === 'article' ? 'Article' : 'WebPage',
          "headline": title,
          "description": description,
          "image": image || defaultImage,
          "url": currentUrl,
          "author": {
            "@type": "Organization",
            "name": "Tech Global",
            "url": siteUrl,
            "sameAs": Object.values(socialAccounts).filter(acc => acc.startsWith('http'))
          },
          "publisher": {
            "@type": "Organization",
            "name": "Tech Global",
            "logo": {
              "@type": "ImageObject",
              "url": `${siteUrl}/logo.png`
            }
          },
          ...(publishedTime && { "datePublished": publishedTime }),
          ...(modifiedTime && { "dateModified": modifiedTime }),
          ...(tags.length > 0 && { "keywords": tags.join(', ') })
        })}
      </script>
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Social Media Profiles */}
      <link rel="me" href={socialAccounts.facebook} />
      <link rel="me" href={`https://instagram.com/${socialAccounts.instagram.replace('@', '')}`} />
      <link rel="me" href={socialAccounts.linkedin} />
    </Helmet>
  );
};

export default EnhancedSEO;