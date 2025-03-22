
import React, { useEffect, useRef } from 'react';
import { ExternalLink, FileText, BrainCircuit, TrendingUp, Database, Wallet, Cloud, FileSpreadsheet, ArrowUpRight, Eye, Settings } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <FileText className="h-6 w-6" />,
    title: 'Financial Data Extraction',
    description: 'Extract key financial data from PDFs, spreadsheets, and scanned documents with high accuracy.',
    link: '/extraction'
  },
  {
    icon: <BrainCircuit className="h-6 w-6" />,
    title: 'NLP Analysis',
    description: 'Advanced natural language processing to interpret accounting terms and financial policies.',
    link: '/nlp-analysis'
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'AI Financial Insights',
    description: 'AI-generated insights on profitability, liquidity, solvency, and trend analysis.',
    link: '/ai-insights'
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: 'API Integration',
    description: 'Seamless integration with financial databases and accounting software through APIs.',
    link: '/api'
  },
  {
    icon: <Wallet className="h-6 w-6" />,
    title: 'Financial Metrics',
    description: 'Automated calculation of key financial ratios and performance indicators.',
    link: '/metrics'
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: 'Customized Reports',
    description: 'Generate fully customizable report templates based on your specific needs.',
    link: '/reports'
  }
];

const FeatureSection = () => {
  const sectionRef = useRef(null);
  const featuresRef = useRef(null);
  const chartRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.from('.gsap-section-title', {
        scrollTrigger: {
          trigger: '.gsap-section-title',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
      
      // Animate features
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 75%',
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out'
      });
      
      // Animate chart
      gsap.from('.gsap-chart', {
        scrollTrigger: {
          trigger: chartRef.current,
          start: 'top 70%',
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)'
      });
      
      // Animate chart bars with stagger
      gsap.from('.chart-bar', {
        scrollTrigger: {
          trigger: chartRef.current,
          start: 'top 65%',
        },
        scaleY: 0,
        transformOrigin: 'bottom',
        stagger: 0.05,
        duration: 1,
        ease: 'elastic.out(1, 0.3)',
        delay: 0.2
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <section id="features" ref={sectionRef} className="py-24 relative bg-[#0e1624]">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(24,58,139,0.1)_1px,transparent_1px)] [background-size:30px_30px] opacity-30 -z-10" />
      
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blue-400 font-medium mb-3"
          >
            INTELLIGENT FINANCIAL ANALYSIS
          </motion.p>
          <h2 className="gsap-section-title text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Revolutionize your financial analysis
          </h2>
          <p className="text-gray-300">
            Our AI-driven platform transforms how investment bankers and financial analysts work with financial statements, saving time and improving accuracy.
          </p>
        </div>
        
        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <AnimatedCard 
              key={index}
              className="feature-card group glass-morphism"
              animationDelay={300 + index * 100}
            >
              <div className="rounded-full bg-blue-900/20 p-3 w-fit mb-5">
                <div className="text-blue-400">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {feature.description}
              </p>
              <Link 
                to={feature.link} 
                className="inline-flex items-center text-sm font-medium text-blue-400 hover:underline"
              >
                Learn more <ExternalLink className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedCard>
          ))}
        </div>
        
        {/* Advanced features showcase */}
        <div className="mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div ref={chartRef} className="gsap-chart relative overflow-hidden rounded-xl glass-morphism">
                <div className="p-6 rounded-xl h-[400px]">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-semibold text-lg text-gray-200">Financial Analysis Performance</h3>
                    <div className="flex gap-3">
                      <button className="p-1.5 bg-gray-800/50 rounded-md hover:bg-gray-700/50 transition-colors">
                        <TrendingUp className="h-4 w-4" />
                      </button>
                      <button className="p-1.5 bg-gray-800/50 rounded-md hover:bg-gray-700/50 transition-colors">
                        <FileSpreadsheet className="h-4 w-4" />
                      </button>
                      <button className="p-1.5 bg-gray-800/50 rounded-md hover:bg-gray-700/50 transition-colors">
                        <Settings className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="relative h-64">
                    {/* Simulated chart */}
                    <div className="absolute bottom-0 left-0 right-0 h-48 flex items-end gap-1">
                      {[35, 45, 30, 60, 40, 50, 70, 55, 65, 80, 75, 90].map((height, i) => (
                        <div 
                          key={i} 
                          className="chart-bar flex-1 bg-blue-500 rounded-t-sm"
                          style={{ height: `${height}%`, opacity: 0.7 + (i * 0.025) }}
                        ></div>
                      ))}
                    </div>
                    
                    {/* Trend line */}
                    <svg className="absolute bottom-0 left-0 right-0 h-48 w-full" viewBox="0 0 12 10" preserveAspectRatio="none">
                      <path 
                        d="M0,7 L1,5.5 L2,7 L3,4 L4,6 L5,5 L6,3 L7,4.5 L8,3.5 L9,2 L10,2.5 L11,1"
                        stroke="currentColor"
                        className="text-blue-300"
                        strokeWidth="0.15"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  </div>
                  
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>Q1</span>
                    <span>Q2</span>
                    <span>Q3</span>
                    <span>Q4</span>
                    <span>Q1</span>
                    <span>Q2</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-8 max-w-lg">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-blue-400 font-medium"
              >
                POWERED BY ADVANCED AI
              </motion.p>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold mb-6 text-gradient"
              >
                Make data-driven financial decisions with confidence
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-300"
              >
                Our platform uses state-of-the-art NLP and machine learning algorithms to analyze financial statements with unparalleled accuracy, helping investment bankers and analysts identify key insights and trends instantly.
              </motion.p>
              
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex gap-3"
                >
                  <div className="rounded-full bg-blue-900/20 p-2 h-fit">
                    <Eye className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Complete Financial Visibility</h4>
                    <p className="text-sm text-gray-300">Extract and analyze data from all types of financial documents in seconds.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex gap-3"
                >
                  <div className="rounded-full bg-blue-900/20 p-2 h-fit">
                    <FileText className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Customizable Financial Reports</h4>
                    <p className="text-sm text-gray-300">Generate tailored reports that align with your specific analysis needs.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex gap-3"
                >
                  <div className="rounded-full bg-blue-900/20 p-2 h-fit">
                    <ArrowUpRight className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Predictive Financial Analysis</h4>
                    <p className="text-sm text-gray-300">Use AI-powered forecasting to anticipate financial trends and identify opportunities.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
