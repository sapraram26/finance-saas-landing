
import React from 'react';
import { ArrowRight, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import Button from './Button';

const FooterSection = () => {
  return (
    <footer id="contact" className="relative bg-finance-950 text-white pt-16 pb-8">
      {/* Background gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-finance-500/50 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="space-y-6">
            <a href="#" className="flex items-center">
              <span className="font-bold text-2xl text-white">FinFlow</span>
            </a>
            <p className="text-gray-400 text-sm">
              Empowering financial professionals with smart analytics and AI-driven insights for better decision making.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-6">Products</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Analytics Dashboard</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Wealth Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Portfolio Tracker</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Risk Assessment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Market Intelligence</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-6">Subscribe</h4>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with our latest features and releases.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-finance-900 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary text-sm w-full"
              />
              <Button variant="primary" className="rounded-l-none">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} FinFlow. All rights reserved.</p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
