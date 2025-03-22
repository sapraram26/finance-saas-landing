
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Shield, BrainCircuit, FileSpreadsheet, Database, Wallet } from 'lucide-react';
import Button from './Button';
import AnimatedCard from './AnimatedCard';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { SignUpButton } from '@clerk/clerk-react';

const HeroSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    const ctx = gsap.context(() => {
      gsap.from('.gsap-hero-title', {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
      });

      gsap.from('.gsap-hero-description', {
        duration: 1,
        y: 30,
        opacity: 0,
        delay: 0.4,
        ease: 'power3.out'
      });

      gsap.from('.gsap-dashboard', {
        duration: 1.2,
        y: 40,
        opacity: 0,
        delay: 0.6,
        ease: 'power3.out'
      });

      gsap.from('.gsap-floating-card', {
        duration: 0.8,
        scale: 0.8,
        opacity: 0,
        stagger: 0.15,
        delay: 0.9,
        ease: 'back.out(1.7)'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative pt-32 pb-24 overflow-hidden bg-[#111827]">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(24,58,139,0.2)_1px,transparent_1px)] [background-size:30px_30px] opacity-25 -z-10" />
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111827] via-[#131c31] to-[#111827] opacity-90 -z-20" />

      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Text content */}
          <div ref={textRef} className="max-w-xl space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-sm font-medium"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              AI-Powered Financial Analysis
            </motion.div>
            
            <h1 className="gsap-hero-title text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Transform <span className="text-gradient">financial analysis</span> with artificial intelligence
            </h1>
            
            <p className="gsap-hero-description text-lg text-gray-300 leading-relaxed">
              Our AI platform automates the extraction and analysis of financial statements, delivering real-time insights that would take analysts hours to compile manually.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <SignUpButton mode="modal">
                <Button size="lg" className="group">
                  Start free trial
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </SignUpButton>
              <Button variant="outline" size="lg" onClick={() => window.location.href = "/demo"}>
                View demo
              </Button>
            </div>
            
            <div ref={statsRef} className="grid grid-cols-3 gap-4 pt-8">
              <motion.div 
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <span className="text-3xl font-bold">96%</span>
                <span className="text-sm text-gray-400">Analysis accuracy</span>
              </motion.div>
              <motion.div 
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <span className="text-3xl font-bold">10x</span>
                <span className="text-sm text-gray-400">Faster than manual</span>
              </motion.div>
              <motion.div 
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <span className="text-3xl font-bold">24/7</span>
                <span className="text-sm text-gray-400">Automated analysis</span>
              </motion.div>
            </div>
          </div>
          
          {/* Right column: Main card and floating elements */}
          <div className="relative">
            {/* Main dashboard preview */}
            <div className="gsap-dashboard w-full aspect-[4/3] shadow-xl">
              <div className="w-full h-full rounded-lg overflow-hidden glass-morphism p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold text-lg text-gray-200">Financial Analysis Dashboard</h3>
                  <div className="flex gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-400"></div>
                    <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                    <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-800/80 p-4 rounded-lg">
                    <p className="text-xs text-gray-400">Key Ratio Analysis</p>
                    <p className="text-xl font-bold text-blue-400">24.5%</p>
                    <p className="text-xs text-green-500">+2.5% from previous period</p>
                  </div>
                  <div className="bg-gray-800/80 p-4 rounded-lg">
                    <p className="text-xs text-gray-400">Documents Processed</p>
                    <p className="text-xl font-bold">1,243</p>
                    <p className="text-xs text-blue-400">Last 30 days</p>
                  </div>
                </div>
                
                <div className="bg-gray-800/80 p-4 rounded-lg mb-6">
                  <p className="text-sm font-medium mb-2">Financial Health Trend</p>
                  <div className="h-20 flex items-end gap-1">
                    {[40, 65, 50, 75, 60, 80, 75, 85, 90, 95, 75, 85].map((height, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-blue-500/80 rounded-t-sm" 
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" variant="primary" className="text-xs">Full Report</Button>
                  <Button size="sm" variant="outline" className="text-xs">Export Data</Button>
                </div>
              </div>
            </div>
            
            {/* Floating cards */}
            <AnimatedCard 
              className="gsap-floating-card absolute -top-10 -right-10 md:-right-16 w-28 h-28 shadow-lg animate-float glass-morphism"
              animationDelay={600}
              hoverEffect={true}
            >
              <BrainCircuit className="h-10 w-10 text-blue-400 mb-2" />
              <p className="text-xs font-medium">AI-powered analysis</p>
            </AnimatedCard>
            
            <AnimatedCard 
              className="gsap-floating-card absolute -bottom-6 -left-6 md:-left-12 w-32 h-32 shadow-lg animate-float glass-morphism"
              animationDelay={500}
              animateIn={true}
              hoverEffect={true}
            >
              <FileSpreadsheet className="h-10 w-10 text-blue-400 mb-2" />
              <p className="text-xs font-medium">Financial document extraction</p>
            </AnimatedCard>
            
            <AnimatedCard 
              className="gsap-floating-card absolute bottom-20 right-0 w-28 h-28 shadow-lg animate-float glass-morphism"
              animationDelay={700}
              hoverEffect={true}
            >
              <Database className="h-10 w-10 text-blue-400 mb-2" />
              <p className="text-xs font-medium">Integration ready</p>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
