
import React from 'react';
import { ArrowRight, Shield, LineChart, Clock } from 'lucide-react';
import Button from './Button';
import AnimatedCard from './AnimatedCard';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-finance-50/50 to-transparent dark:from-finance-950/30 dark:to-transparent -z-10" />

      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-25 -z-10" />

      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Text content */}
          <div className="max-w-xl space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Financial analytics reimagined
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in-up" style={{animationDelay: '100ms'}}>
              Smart finance <br />
              <span className="text-primary">intelligent decisions</span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in-up" style={{animationDelay: '200ms'}}>
              Transform your financial strategy with real-time analytics, AI-powered insights, and seamless portfolio management that adapts to your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{animationDelay: '300ms'}}>
              <Button size="lg" className="group">
                Start free trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                View demo
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-8 animate-fade-in-up" style={{animationDelay: '400ms'}}>
              <div className="flex flex-col">
                <span className="text-3xl font-bold">98%</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Accuracy rate</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold">2.5x</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Faster insights</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold">24/7</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Active support</span>
              </div>
            </div>
          </div>
          
          {/* Right column: Main card and floating elements */}
          <div className="relative">
            {/* Main dashboard preview */}
            <AnimatedCard 
              className="w-full aspect-[4/3] shadow-xl"
              animationDelay={300}
            >
              <div className="w-full h-full rounded-lg overflow-hidden bg-gradient-to-br from-finance-100 to-finance-200 dark:from-finance-900 dark:to-finance-800 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold text-lg">Financial Overview</h3>
                  <div className="flex gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-400"></div>
                    <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                    <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-lg">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Total Balance</p>
                    <p className="text-xl font-bold">$24,563.00</p>
                    <p className="text-xs text-green-500">+2.5% from last month</p>
                  </div>
                  <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-lg">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Monthly Spending</p>
                    <p className="text-xl font-bold">$3,261.50</p>
                    <p className="text-xs text-red-500">-4.3% from last month</p>
                  </div>
                </div>
                
                <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-lg mb-6">
                  <p className="text-sm font-medium mb-2">Investment Performance</p>
                  <div className="h-20 flex items-end gap-1">
                    {[40, 65, 50, 75, 60, 80, 75, 85, 90, 95, 75, 85].map((height, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-primary/80 rounded-t-sm" 
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" variant="primary" className="text-xs">View Details</Button>
                  <Button size="sm" variant="outline" className="text-xs">Export</Button>
                </div>
              </div>
            </AnimatedCard>
            
            {/* Floating cards */}
            <AnimatedCard 
              className="absolute -top-10 -right-10 md:-right-16 w-24 h-24 shadow-lg animate-float"
              animationDelay={600}
            >
              <Shield className="h-10 w-10 text-finance-600 mb-2" />
              <p className="text-xs font-medium">Bank-level security</p>
            </AnimatedCard>
            
            <AnimatedCard 
              className="absolute -bottom-6 -left-6 md:-left-12 w-32 h-32 shadow-lg animate-float"
              animationDelay={500}
              animateIn={true}
            >
              <LineChart className="h-10 w-10 text-finance-600 mb-2" />
              <p className="text-xs font-medium">AI-powered forecasting</p>
            </AnimatedCard>
            
            <AnimatedCard 
              className="absolute bottom-20 right-0 w-28 h-28 shadow-lg animate-float"
              animationDelay={700}
            >
              <Clock className="h-10 w-10 text-finance-600 mb-2" />
              <p className="text-xs font-medium">Real-time updates</p>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
