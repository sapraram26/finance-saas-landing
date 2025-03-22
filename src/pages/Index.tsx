import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import FooterSection from '../components/FooterSection';
import { useAuth } from '@clerk/clerk-react';

const Index = () => {
  useEffect(() => {
    // Implement lazy loading for images
    const lazyImages = document.querySelectorAll('[data-src]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const image = entry.target as HTMLImageElement;
            image.src = image.dataset.src || '';
            image.removeAttribute('data-src');
            imageObserver.unobserve(image);
          }
        });
      });
      
      lazyImages.forEach((image) => {
        imageObserver.observe(image);
      });
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      lazyImages.forEach((image) => {
        const img = image as HTMLImageElement;
        img.src = img.dataset.src || '';
      });
    }
  }, []);

  const { isSignedIn } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-[#0a101f]">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
