
import React from 'react';
import { ChevronRight, BarChart3, PieChart, LineChart, TrendingUp, Eye, Settings, CircleDollarSign, BarChart2, Wallet, Users, Lock, ArrowUpRight, ExternalLink } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: 'Advanced Analytics',
    description: 'Gain comprehensive insights with interactive charts and customizable dashboards.',
    link: '/analytics'
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'Predictive Forecasting',
    description: 'Leverage AI to predict market trends and optimize your investment strategy.',
    link: '/forecasting'
  },
  {
    icon: <CircleDollarSign className="h-6 w-6" />,
    title: 'Expense Tracking',
    description: 'Automatically categorize and monitor expenses to maintain financial discipline.',
    link: '/expenses'
  },
  {
    icon: <Wallet className="h-6 w-6" />,
    title: 'Portfolio Management',
    description: 'Manage all your investments in one place with real-time performance monitoring.',
    link: '/portfolio'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Team Collaboration',
    description: 'Work together with team members through shared dashboards and reports.',
    link: '/collaboration'
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: 'Bank-Level Security',
    description: 'Rest easy with encrypted data storage and multi-factor authentication.',
    link: '/security'
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-finance-50/50 dark:from-gray-900 dark:to-finance-950/30 -z-10" />
      
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-3 animate-fade-in">POWERFUL CAPABILITIES</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up" style={{animationDelay: '100ms'}}>
            Transform your financial management
          </h2>
          <p className="text-gray-600 dark:text-gray-300 animate-fade-in-up" style={{animationDelay: '200ms'}}>
            Our comprehensive suite of tools gives you unprecedented control and insight into your finances, empowering better decision-making.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <AnimatedCard 
              key={index}
              className="group"
              animationDelay={300 + index * 100}
            >
              <div className="rounded-full bg-primary/10 p-3 w-fit mb-5">
                <div className="text-primary">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {feature.description}
              </p>
              <Link 
                to={feature.link} 
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
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
              <AnimatedCard 
                className="relative overflow-hidden rounded-xl"
                hoverEffect={false}
                animationDelay={400}
              >
                <div className="bg-gradient-to-br from-finance-100 to-finance-200 dark:from-finance-900 dark:to-finance-800 p-6 rounded-xl h-[400px]">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-semibold text-lg">Performance Analytics</h3>
                    <div className="flex gap-3">
                      <button className="p-1.5 bg-white/30 rounded-md hover:bg-white/50 transition-colors">
                        <BarChart2 className="h-4 w-4" />
                      </button>
                      <button className="p-1.5 bg-white/30 rounded-md hover:bg-white/50 transition-colors">
                        <LineChart className="h-4 w-4" />
                      </button>
                      <button className="p-1.5 bg-white/30 rounded-md hover:bg-white/50 transition-colors">
                        <PieChart className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="relative h-64">
                    {/* Simulated chart */}
                    <div className="absolute bottom-0 left-0 right-0 h-48 flex items-end gap-1">
                      {[35, 45, 30, 60, 40, 50, 70, 55, 65, 80, 75, 90].map((height, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-primary rounded-t-sm animate-scale-in"
                          style={{ 
                            height: `${height}%`,
                            animationDelay: `${i * 50}ms`,
                            opacity: 0.7 + (i * 0.025)
                          }}
                        ></div>
                      ))}
                    </div>
                    
                    {/* Trend line */}
                    <svg className="absolute bottom-0 left-0 right-0 h-48 w-full" viewBox="0 0 12 10" preserveAspectRatio="none">
                      <path 
                        d="M0,7 L1,5.5 L2,7 L3,4 L4,6 L5,5 L6,3 L7,4.5 L8,3.5 L9,2 L10,2.5 L11,1"
                        stroke="currentColor"
                        className="text-finance-600 dark:text-finance-400"
                        strokeWidth="0.15"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  </div>
                  
                  <div className="flex justify-between text-xs text-gray-600 dark:text-gray-300 mt-2">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>
              </AnimatedCard>
            </div>
            
            <div className="order-1 lg:order-2 space-y-8 max-w-lg">
              <p className="text-primary font-medium animate-fade-in">DETAILED INSIGHTS</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up" style={{animationDelay: '100ms'}}>
                Make data-driven decisions with confidence
              </h2>
              <p className="text-gray-600 dark:text-gray-300 animate-fade-in-up" style={{animationDelay: '200ms'}}>
                Our analytics platform provides deep insights into your financial data, helping you identify trends, spot opportunities, and mitigate risks before they impact your bottom line.
              </p>
              
              <div className="space-y-4 animate-fade-in-up" style={{animationDelay: '300ms'}}>
                <div className="flex gap-3">
                  <div className="rounded-full bg-primary/10 p-2 h-fit">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">360° Financial Visibility</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Get a complete view of your finances across all accounts and investments.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="rounded-full bg-primary/10 p-2 h-fit">
                    <Settings className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Custom Report Builder</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Create personalized reports tailored to your specific financial goals.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="rounded-full bg-primary/10 p-2 h-fit">
                    <ArrowUpRight className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Predictive Analytics</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Utilize AI-powered forecasting to anticipate market changes and optimize strategies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
