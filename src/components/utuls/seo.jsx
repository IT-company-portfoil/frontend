// utils/seo.js - SEO Utility Functions

/**
 * Generate meta tags for different page types
 */
export const generateMetaTags = (pageData = {}) => {
  const {
    title = "Tech Global - Advanced IT Solutions & Software Development",
    description = "Transform your business with Tech Global's cutting-edge IT solutions. We specialize in AI bots, custom portfolio websites, UI/UX design, mobile apps, and WordPress development.",
    keywords = "IT solutions, software development, AI bots, web development, UI/UX design, mobile apps, WordPress development",
    canonical = "https://www.techglobal.com/",
    ogImage = "https://www.techglobal.com/og-image.jpg",
    twitterImage = "https://www.techglobal.com/twitter-image.jpg",
    ogType = "website",
    article = null
  } = pageData;

  const metaTags = {
    // Primary Meta Tags
    title,
    description,
    keywords,
    canonical,
    
    // Open Graph
    "og:type": ogType,
    "og:url": canonical,
    "og:title": title,
    "og:description": description,
    "og:image": ogImage,
    "og:site_name": "Tech Global",
    "og:locale": "en_US",
    
    // Twitter
    "twitter:card": "summary_large_image",
    "twitter:url": canonical,
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": twitterImage,
    "twitter:site": "@techglobal",
    "twitter:creator": "@techglobal",
    
    // Additional Meta
    "robots": "index, follow",
    "language": "en-US",
    "author": "Tech Global",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#2563eb"
  };

  // Add article-specific meta tags
  if (article) {
    metaTags["article:author"] = article.author;
    metaTags["article:published_time"] = article.publishedTime;
    metaTags["article:modified_time"] = article.modifiedTime;
    metaTags["article:section"] = article.section;
    metaTags["article:tag"] = article.tags?.join(", ");
  }

  return metaTags;
};

/**
 * Generate structured data for different content types
 */
export const generateStructuredData = (type, data = {}) => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type
  };

  switch (type) {
    case "Organization":
      return {
        ...baseData,
        "@id": "https://www.techglobal.com/#organization",
        "name": "Tech Global",
        "url": "https://www.techglobal.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.techglobal.com/logo.png",
          "width": 200,
          "height": 60
        },
        "description": "Advanced IT solutions and software development company specializing in AI bots, web development, UI/UX design, and business automation systems.",
        "foundingDate": "2020",
        "numberOfEmployees": "10-50",
        "industry": "Information Technology",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "232 California Road Imperial",
          "addressLocality": "Imperial",
          "addressCountry": "US"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+212698584458",
          "email": "info@techglobe.com",
          "contactType": "customer service",
          "availableLanguage": "English"
        },
        "sameAs": [
          "https://www.facebook.com/techglobal",
          "https://www.instagram.com/techglobal",
          "https://www.twitter.com/techglobal"
        ],
        ...data
      };

    case "WebSite":
      return {
        ...baseData,
        "name": "Tech Global",
        "url": "https://www.techglobal.com",
        "description": "Advanced IT solutions including AI bots, web development, UI/UX design, and business automation systems",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.techglobal.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "publisher": {
          "@id": "https://www.techglobal.com/#organization"
        },
        ...data
      };

    case "Service":
      return {
        ...baseData,
        "provider": {
          "@id": "https://www.techglobal.com/#organization"
        },
        "areaServed": "Worldwide",
        "serviceType": "Information Technology Services",
        ...data
      };

    case "BlogPosting":
      return {
        ...baseData,
        "publisher": {
          "@id": "https://www.techglobal.com/#organization"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": data.url
        },
        "inLanguage": "en-US",
        ...data
      };

    case "Review":
      return {
        ...baseData,
        "itemReviewed": {
          "@type": "Service",
          "provider": {
            "@id": "https://www.techglobal.com/#organization"
          }
        },
        ...data
      };

    default:
      return { ...baseData, ...data };
  }
};

/**
 * Generate breadcrumb structured data
 */
export const generateBreadcrumbs = (breadcrumbs = []) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};

/**
 * Generate FAQ structured data
 */
export const generateFAQStructuredData = (faqs = []) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

/**
 * Create canonical URL
 */
export const createCanonicalUrl = (path = "") => {
  const baseUrl = "https://www.techglobal.com";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};

/**
 * Generate URL slug from title
 */
export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
};

/**
 * SEO-friendly image alt text generator
 */
export const generateImageAlt = (context, description = "") => {
  const company = "Tech Global";
  const services = "IT solutions, AI bots, web development, UI/UX design";
  
  if (description) {
    return `${description} - ${company} ${context}`;
  }
  
  return `${company} ${context} - ${services}`;
};

/**
 * Performance metrics tracking
 */
export const trackCoreWebVitals = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Track Largest Contentful Paint (LCP)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      if (typeof gtag !== 'undefined') {
        gtag('event', 'LCP', {
          event_category: 'Web Vitals',
          value: Math.round(lastEntry.startTime),
          custom_parameter: lastEntry.startTime
        });
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Track First Input Delay (FID)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'FID', {
            event_category: 'Web Vitals',
            value: Math.round(entry.processingStart - entry.startTime),
            custom_parameter: entry.processingStart - entry.startTime
          });
        }
      });
    }).observe({ entryTypes: ['first-input'] });

    // Track Cumulative Layout Shift (CLS)
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      
      if (typeof gtag !== 'undefined') {
        gtag('event', 'CLS', {
          event_category: 'Web Vitals',
          value: Math.round(clsValue * 1000),
          custom_parameter: clsValue
        });
      }
    }).observe({ entryTypes: ['layout-shift'] });
  }
};

/**
 * Social sharing utilities
 */
export const generateSocialShareUrls = (url, title, description) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  
  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%20${encodedUrl}`
  };
};

/**
 * SEO validation utilities
 */
export const validateSEO = (pageData) => {
  const issues = [];
  
  if (!pageData.title || pageData.title.length < 30 || pageData.title.length > 60) {
    issues.push("Title should be between 30-60 characters");
  }
  
  if (!pageData.description || pageData.description.length < 120 || pageData.description.length > 160) {
    issues.push("Meta description should be between 120-160 characters");
  }
  
  if (!pageData.canonical) {
    issues.push("Canonical URL is missing");
  }
  
  if (!pageData.ogImage) {
    issues.push("Open Graph image is missing");
  }
  
  return {
    isValid: issues.length === 0,
    issues
  };
};

export default {
  generateMetaTags,
  generateStructuredData,
  generateBreadcrumbs,
  generateFAQStructuredData,
  createCanonicalUrl,
  generateSlug,
  generateImageAlt,
  trackCoreWebVitals,
  generateSocialShareUrls,
  validateSEO
};