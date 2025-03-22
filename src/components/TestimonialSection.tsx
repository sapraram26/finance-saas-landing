
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Button from './Button';

const testimonials = [
  {
    id: 1,
    quote: "FinFlow has completely transformed how we manage our company finances. The predictive analytics have helped us avoid potential pitfalls and capitalize on market opportunities.",
    author: "Sarah Johnson",
    title: "CFO, TechVision Inc.",
    imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=250&h=250&auto=format&fit=crop"
  },
  {
    id: 2,
    quote: "As a financial advisor, I need tools that help me make data-driven decisions quickly. FinFlow provides everything I need in one intuitive platform. My clients have never been happier with the results.",
    author: "Michael Chen",
    title: "Senior Financial Advisor, Wealth Partners",
    imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&h=250&auto=format&fit=crop"
  },
  {
    id: 3,
    quote: "The level of detail in FinFlow's analytics is unmatched. We've increased our portfolio performance by 27% since implementing their platform. The ROI speaks for itself.",
    author: "Alexandra Rivera",
    title: "Investment Manager, Global Assets",
    imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&h=250&auto=format&fit=crop"
  },
  {
    id: 4,
    quote: "I've tried many financial tools over the years, but none have offered the combination of simplicity and power that FinFlow provides. It's become indispensable for our operations.",
    author: "David Park",
    title: "CEO, Startup Ventures",
    imageSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=250&h=250&auto=format&fit=crop"
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    // Auto-advance carousel
    intervalRef.current = setInterval(() => {
      goToNext();
    }, 8000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeIndex, isAnimating]);

  return (
    <section id="testimonials" className="py-24 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-25 -z-10" />
      
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-3 animate-fade-in">CUSTOMER STORIES</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up" style={{animationDelay: '100ms'}}>
            Trusted by financial professionals worldwide
          </h2>
          <p className="text-gray-600 dark:text-gray-300 animate-fade-in-up" style={{animationDelay: '200ms'}}>
            See how FinFlow has helped businesses of all sizes optimize their financial operations and achieve better results.
          </p>
        </div>
        
        <div className="relative overflow-hidden max-w-5xl mx-auto">
          <div className="relative">
            {/* Testimonial carousel */}
            <div className="relative flex overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`w-full shrink-0 transition-all duration-500 ease-in-out ${
                    activeIndex === index 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-full absolute'
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center glass-morphism p-8 rounded-xl shadow-md">
                    <div className="md:col-span-4 text-center">
                      <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-white dark:border-gray-800 shadow-md">
                        <img 
                          src={testimonial.imageSrc} 
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-bold">{testimonial.author}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.title}</p>
                    </div>
                    
                    <div className="md:col-span-8 relative">
                      <Quote className="absolute top-0 left-0 h-10 w-10 text-primary/20 -translate-x-1/4 -translate-y-1/4" />
                      <p className="text-lg italic mb-6 pl-6">{testimonial.quote}</p>
                      <div className="flex space-x-1 justify-end">
                        {testimonials.map((_, dotIndex) => (
                          <button
                            key={dotIndex}
                            onClick={() => setActiveIndex(dotIndex)}
                            className={`h-2 rounded-full transition-all ${
                              activeIndex === dotIndex ? 'w-6 bg-primary' : 'w-2 bg-gray-300 dark:bg-gray-700'
                            }`}
                            aria-label={`Go to testimonial ${dotIndex + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 px-4">
              <Button
                variant="ghost"
                className="rounded-full h-10 w-10 p-0 bg-white/80 dark:bg-gray-800/80 shadow-md"
                onClick={goToPrev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <Button
                variant="ghost"
                className="rounded-full h-10 w-10 p-0 bg-white/80 dark:bg-gray-800/80 shadow-md"
                onClick={goToNext}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8 animate-fade-in-up" style={{animationDelay: '300ms'}}>
            Trusted by leading companies
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {['Google', 'Microsoft', 'Adobe', 'Shopify', 'Slack'].map((company, index) => (
              <div 
                key={index} 
                className="animate-fade-in-up"
                style={{animationDelay: `${400 + index * 100}ms`}}
              >
                <p className="text-xl md:text-2xl font-bold tracking-tighter">{company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
