
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Button from './Button';
import AnimatedCard from './AnimatedCard';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for individuals and small projects',
    price: '$29',
    period: 'per month',
    features: [
      'Basic financial analytics',
      'Up to 3 financial accounts',
      'Monthly reports',
      'Email support',
      '7-day data history'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses and teams',
    price: '$89',
    period: 'per month',
    features: [
      'Advanced financial analytics',
      'Unlimited financial accounts',
      'Weekly reports & forecasting',
      'Priority email & chat support',
      '30-day data history',
      'Team collaboration tools',
      'Custom dashboard'
    ],
    cta: 'Get Started',
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'For larger organizations with complex needs',
    price: 'Custom',
    period: 'tailored pricing',
    features: [
      'All Professional features',
      'Dedicated account manager',
      'Custom API integration',
      'Phone, email & chat support',
      'Unlimited data history',
      'Advanced security controls',
      'On-premise deployment option'
    ],
    cta: 'Contact Us',
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-finance-50/50 to-white dark:from-finance-950/30 dark:to-gray-900 -z-10" />
      
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-3 animate-fade-in">FLEXIBLE PRICING</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up" style={{animationDelay: '100ms'}}>
            Choose the perfect plan for your needs
          </h2>
          <p className="text-gray-600 dark:text-gray-300 animate-fade-in-up" style={{animationDelay: '200ms'}}>
            Whether you're an individual investor or a large enterprise, we have pricing options designed to scale with your financial goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <AnimatedCard
              key={index}
              className={`${plan.popular ? 'border-2 border-primary relative shadow-xl' : 'border border-gray-200 dark:border-gray-800'}`}
              glassEffect={!plan.popular}
              animationDelay={300 + index * 100}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm"> {plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.popular ? 'primary' : 'outline'} 
                className="w-full"
              >
                {plan.cta}
              </Button>
            </AnimatedCard>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fade-in-up" style={{animationDelay: '600ms'}}>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            All plans come with a 14-day free trial. No credit card required.
          </p>
          <a href="#" className="text-primary font-medium underline underline-offset-4">
            View full feature comparison
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
