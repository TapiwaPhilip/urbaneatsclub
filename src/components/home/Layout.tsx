
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    // This simulates setting HTTP cache control headers
    // In production, these should be set by the server
    const metaTag = document.querySelector('meta[http-equiv="Cache-Control"]');
    if (!metaTag) {
      const newMeta = document.createElement('meta');
      newMeta.setAttribute('http-equiv', 'Cache-Control');
      newMeta.setAttribute('content', 'max-age=86400'); // 24 hours
      document.head.appendChild(newMeta);
    }
    
    // Force assets to be cached by service worker if available
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      // Send message to service worker to cache critical assets
      navigator.serviceWorker.controller.postMessage({
        type: 'CACHE_CRITICAL_ASSETS',
        payload: {
          urls: [
            window.location.pathname,
            '/src/index.css',
            '/lovable-uploads/9ccd2f66-3358-48c0-beb8-dcbfd399ac22.png'
          ]
        }
      });
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
