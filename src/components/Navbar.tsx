
import React, { useState, useEffect } from 'react';
import { Menu, X, Database, FileText, BrainCircuit, Terminal, LineChart } from 'lucide-react';
import Button from './Button';
import { motion } from 'framer-motion';
import { SignInButton, SignUpButton, useAuth } from "@clerk/clerk-react";

const navLinks = [
  { name: 'Financial Extraction', href: '/extraction', icon: <Database className="h-4 w-4" /> },
  { name: 'NLP Analysis', href: '/nlp-analysis', icon: <FileText className="h-4 w-4" /> },
  { name: 'AI Insights', href: '/ai-insights', icon: <BrainCircuit className="h-4 w-4" /> },
  { name: 'API Integration', href: '/api', icon: <Terminal className="h-4 w-4" /> },
  { name: 'Financial Metrics', href: '/metrics', icon: <LineChart className="h-4 w-4" /> }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isSignedIn } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-gray-900/80 backdrop-blur-md shadow-md' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
        <motion.a 
          href="#" 
          whileHover={{ scale: 1.05 }}
          className="flex items-center"
        >
          <span className="font-bold text-2xl text-gradient">FinSight AI</span>
        </motion.a>

        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:flex items-center space-x-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-2"
              variants={item}
              whileHover={{ scale: 1.05, color: "hsl(217, 91%, 60%)" }}
            >
              {link.icon}
              {link.name}
            </motion.a>
          ))}
        </motion.nav>

        <div className="hidden md:flex items-center gap-4">
          {isSignedIn ? (
            <Button variant="primary" size="sm" onClick={() => window.location.href = "/dashboard"}>Dashboard</Button>
          ) : (
            <>
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm">Log in</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button variant="primary" size="sm">Get Started</Button>
              </SignUpButton>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
          whileTap={{ scale: 0.95 }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden absolute top-full left-0 right-0 bg-gray-900 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-base font-medium py-2 transition-colors hover:text-primary flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ x: 5, color: "hsl(217, 91%, 60%)" }}
              >
                {link.icon}
                {link.name}
              </motion.a>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-gray-800">
              {isSignedIn ? (
                <Button variant="primary" size="sm" onClick={() => window.location.href = "/dashboard"}>Dashboard</Button>
              ) : (
                <>
                  <SignInButton mode="modal">
                    <Button variant="ghost" size="sm" className="justify-start">Log in</Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button variant="primary" size="sm">Get Started</Button>
                  </SignUpButton>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
