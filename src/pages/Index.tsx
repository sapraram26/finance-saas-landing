
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import PricingSection from '../components/PricingSection';
import TestimonialSection from '../components/TestimonialSection';
import FooterSection from '../components/FooterSection';

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
        <PricingSection />
        <TestimonialSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
