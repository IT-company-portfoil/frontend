// components/Analytics/GoogleAnalytics.jsx
import React, { useEffect } from 'react';

const GoogleAnalytics = ({ trackingId = "GA_MEASUREMENT_ID" }) => {
  useEffect(() => {
    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${trackingId}', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
    `;
    document.head.appendChild(script2);

    // Track Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => {
          gtag('event', metric.name, {
            event_category: 'Web Vitals',
            value: Math.round(metric.value * 1000),
            event_label: metric.id,
          });
        });

        getFID((metric) => {
          gtag('event', metric.name, {
            event_category: 'Web Vitals',
            value: Math.round(metric.value),
            event_label: metric.id,
          });
        });

        getFCP((metric) => {
          gtag('event', metric.name, {
            event_category: 'Web Vitals',
            value: Math.round(metric.value),
            event_label: metric.id,
          });
        });

        getLCP((metric) => {
          gtag('event', metric.name, {
            event_category: 'Web Vitals',
            value: Math.round(metric.value),
            event_label: metric.id,
          });
        });

        getTTFB((metric) => {
          gtag('event', metric.name, {
            event_category: 'Web Vitals',
            value: Math.round(metric.value),
            event_label: metric.id,
          });
        });
      });
    }

    return () => {
      // Cleanup scripts on unmount
      const scripts = document.querySelectorAll(`script[src*="${trackingId}"]`);
      scripts.forEach(script => script.remove());
    };
  }, [trackingId]);

  return null;
};

// components/Performance/LazyImage.jsx
export const LazyImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = "", 
  loading = "lazy",
  priority = false,
  ...props 
}) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [imageSrc, setImageSrc] = React.useState(priority ? src : null);
  const imgRef = React.useRef();

  React.useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src, priority]);

  return (
    <div 
      ref={imgRef}
      className={`lazy-image-container ${className}`}
      style={{ 
        backgroundColor: imageLoaded ? 'transparent' : '#f3f4f6',
        transition: 'background-color 0.3s ease'
      }}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          onLoad={() => setImageLoaded(true)}
          style={{
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
          {...props}
        />
      )}
      {!imageLoaded && (
        <div 
          className="image-placeholder"
          style={{
            width: width || '100%',
            height: height || '200px',
            backgroundColor: '#e5e7eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#9ca3af'
          }}
        >
          Loading...
        </div>
      )}
    </div>
  );
};

// components/Performance/CriticalCSS.jsx
export const CriticalCSS = () => {
  const criticalStyles = `
    /* Critical CSS for above-the-fold content */
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      margin: 0;
      padding: 0;
      line-height: 1.6;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    .btn {
      display: inline-block;
      padding: 12px 24px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    
    .btn-primary {
      background-color: #2563eb;
      color: white;
    }
    
    .btn-primary:hover {
      background-color: #1d4ed8;
    }
    
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }
    
    /* Navigation styles */
    nav {
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
    }
    
    .container__nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 20px;
    }
    
    /* Hero section styles */
    .about__container {
      padding: 80px 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    
    .about__container h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }
    
    @media (max-width: 768px) {
      .about__container h1 {
        font-size: 2rem;
      }
      
      .container__nav {
        padding: 0.5rem 20px;
      }
    }
  `;

  return (
    <style dangerouslySetInnerHTML={{ __html: criticalStyles }} />
  );
};

// components/Performance/ResourceHints.jsx
export const ResourceHints = () => {
  React.useEffect(() => {
    // Preload critical resources
    const preloadResources = [
      { href: '/fonts/main-font.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
      { href: '/images/hero-bg.jpg', as: 'image' },
      { href: '/css/critical.css', as: 'style' }
    ];

    preloadResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      Object.entries(resource).forEach(([key, value]) => {
        link.setAttribute(key, value);
      });
      document.head.appendChild(link);
    });

    // DNS prefetch for external resources
    const dnsPrefetch = [
      'https://www.googletagmanager.com',
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://cdnjs.cloudflare.com'
    ];

    dnsPrefetch.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = url;
      document.head.appendChild(link);
    });

    // Preconnect to critical third-party origins
    const preconnect = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    preconnect.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = url;
      link.crossOrigin = '';
      document.head.appendChild(link);
    });

  }, []);

  return null;
};

// components/SEO/StructuredDataManager.jsx
export const StructuredDataManager = ({ data }) => {
  const structuredDataScripts = Array.isArray(data) ? data : [data];

  return (
    <>
      {structuredDataScripts.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
    </>
  );
};

// Performance monitoring hook
export const usePerformanceMonitoring = () => {
  React.useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'performance_metric', {
            event_category: 'Performance',
            event_label: entry.name,
            value: Math.round(entry.duration || entry.value),
            custom_parameter: entry.entryType
          });
        }
      });
    });

    observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });

    return () => observer.disconnect();
  }, []);
};

export default GoogleAnalytics;