
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAuth } from '@clerk/clerk-react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import FooterSection from '../components/FooterSection';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If user is signed in, redirect to dashboard (uncomment when ready)
    // if (isSignedIn) {
    //  navigate('/dashboard');
    // }

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

    // GSAP animations
    if (mainRef.current) {
      // Fade in main content
      gsap.from(mainRef.current, {
        opacity: 0, 
        duration: 1.5,
        ease: "power2.out"
      });

      // Animate sections on scroll
      const sections = mainRef.current.querySelectorAll('section');
      sections.forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out"
        });
      });

      // Animate text elements
      const textElements = mainRef.current.querySelectorAll('.animate-text');
      textElements.forEach((text, index) => {
        gsap.from(text, {
          scrollTrigger: {
            trigger: text,
            start: "top 90%",
            toggleActions: "play none none none"
          },
          x: index % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "back.out(1.7)"
        });
      });
    }
  }, [isSignedIn, navigate]);

  return (
    <div ref={mainRef} className="min-h-screen flex flex-col bg-[#0F172A] overflow-x-hidden">
      {/* Animated radial gradient background */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-[#0F172A]"></div>
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-transparent opacity-60"></div>
        <div className="absolute inset-0 grid-bg"></div>
      </div>

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
