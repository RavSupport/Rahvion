import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Memberships', path: '/membership' },
    { name: 'Services', path: '/services' },
    { name: 'RaaS', path: '/raas' }, // Robotics-as-a-Service
    { name: 'IT Toolkit', path: '/personal-it-toolkit' }, 
    { name: 'AI Automations', path: '/ai-automations' },
    { name: 'Safety Academy', path: '/safety-academy' },
    { name: 'Warranty Help', path: '/warranty-concierge' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#0B0B0D]/95 backdrop-blur-md border-b border-[#3A3F47] shadow-sm shadow-black/40">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center z-50">
            <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-3">
              <img 
                src="https://horizons-cdn.hostinger.com/520cc614-3085-4740-9c72-f6ea1082763e/6babe6046e3593dbd884dd2d5c0a85e8.png" 
                alt="Rahvion - America's Personal IT Department" 
                className="h-16 w-auto" 
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium tracking-wide transition-colors hover:text-[#D4AF37] ${
                  isActive(link.path) ? 'text-[#D4AF37]' : 'text-[#F5F5F5]'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-[#D4AF37]"
                  />
                )}
              </Link>
            ))}
            {/* Phone number for desktop */}
            <div className="flex flex-col items-end">
                <a href="tel:+14104298159" className="flex items-center space-x-2 ml-4 text-[#0B0B0D] hover:text-[#0B0B0D]/80 transition-colors text-sm font-bold bg-[#D4AF37] px-4 py-2 rounded-full shadow-lg tracking-wide mb-1 border border-[#D4AF37]">
                  <Phone size={16} fill="currentColor" />
                  <span>Call Support: 410-429-8159</span>
                </a>
                <span className="text-xs text-[#A0A0A0] pr-4">Media: 443-219-7559</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden text-[#F5F5F5] z-50 hover:text-[#D4AF37] transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-16 z-40 bg-[#0B0B0D] border-t border-[#3A3F47] p-4 h-screen overflow-y-auto pb-20"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-4 px-4 rounded-lg text-xl font-medium transition-colors ${
                    isActive(link.path) ? 'text-[#D4AF37] bg-[#0B0B0D]/50 border-l-2 border-[#D4AF37]' : 'text-[#F5F5F5] border-l-2 border-transparent'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {/* Phone numbers for mobile */}
              <div className="mt-6 border-t border-[#3A3F47] pt-4 px-4 space-y-4">
                  <a href="tel:+14104298159" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-3 py-4 text-xl font-bold text-[#0B0B0D] bg-[#D4AF37] rounded-full justify-center shadow-lg transition-transform hover:scale-105">
                    <Phone size={24} fill="currentColor" />
                    <span>Call Support: 410-429-8159</span>
                  </a>
                   <a href="tel:+14432197559" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center space-x-3 py-2 text-base font-medium text-[#A0A0A0] hover:bg-[#0B0B0D]/50 transition-colors">
                    <Phone size={20} />
                    <span>Media Relations: 443-219-7559</span>
                  </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;