
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Flag, ShieldCheck, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0D] border-t border-[#3A3F47] mt-24 relative overflow-hidden text-lg">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-[#D4AF37]/5 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        
        {/* Global Legal Positioning */}
        <div className="mb-16 pb-8 border-b border-[#3A3F47] text-center md:text-left">
           <p className="text-[#A0A0A0] text-base leading-relaxed max-w-4xl font-light">
             Rahvion provides best-effort, advisory technical support services for residential homes and home-office environments. Clients retain full responsibility for their systems, personal data, and backups. Rahvion is a technical support and education provider, not a contractor for structural work. We are not a cyber-insurance provider or legal entity. All pricing is subject to change without notice due to economic factors. Governing Law: State of Maryland | Venue: Harford County, Maryland.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & Mission */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <img 
              src="https://horizons-cdn.hostinger.com/520cc614-3085-4740-9c72-f6ea1082763e/6babe6046e3593dbd884dd2d5c0a85e8.png" 
              alt="Rahvion - America's Personal IT Department" 
              className="h-16 w-auto" 
            />
            <p className="text-xs text-[#A0A0A0] uppercase tracking-widest font-semibold">America's Personal IT Department</p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-start space-x-3 text-xs text-[#F5F5F5] bg-[#0B0B0D]/30 p-4 rounded-lg border border-[#3A3F47]">
                <Flag size={16} className="mt-0.5 text-[#D4AF37] flex-shrink-0" />
                <span className="leading-relaxed">Serving Maryland, Delaware, Pennsylvania, New Jersey, New York, Washington DC, Virginia, and West Virginia.</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-[#F5F5F5] mb-6 border-b border-[#D4AF37]/30 pb-2 inline-block">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-base text-[#A0A0A0] hover:text-[#D4AF37] transition-colors group">
                <Phone size={18} className="group-hover:text-[#D4AF37]" />
                <a href="tel:+14104298159" className="tracking-wide">Support Line: 410-429-8159</a>
              </div>
               <div className="flex items-center space-x-3 text-base text-[#A0A0A0] hover:text-[#D4AF37] transition-colors group">
                <Phone size={18} className="group-hover:text-[#D4AF37]" />
                <a href="tel:+14432197559" className="tracking-wide">Media: 443-219-7559</a>
              </div>
              <div className="flex items-center space-x-3 text-base text-[#A0A0A0] hover:text-[#D4AF37] transition-colors group">
                <Mail size={18} className="group-hover:text-[#D4AF37]" />
                <a href="mailto:helpdesk@rahvion.com?subject=Inquiry%20from%20Website">helpdesk@rahvion.com</a>
              </div>
              <div className="flex items-start space-x-3 text-base text-[#A0A0A0]">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="leading-relaxed">Mid-Atlantic & Northeast US</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-lg text-[#F5F5F5] mb-6 border-b border-[#D4AF37]/30 pb-2 inline-block">Company</h4>
            <nav className="space-y-3">
              <Link to="/about-us" className="block text-base text-[#A0A0A0] hover:text-[#D4AF37] transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-base text-[#A0A0A0] hover:text-[#D4AF37] transition-colors">
                Contact
              </Link>
              <Link to="/personal-it-toolkit" className="block text-base text-[#A0A0A0] hover:text-[#D4AF37] transition-colors">
                Personal IT Toolkit
              </Link>
              <Link to="/tools" className="block text-base text-[#A0A0A0] hover:text-[#D4AF37] transition-colors">
                Free Tools Hub
              </Link>
              <Link to="/raas" className="block text-base text-[#A0A0A0] hover:text-[#D4AF37] transition-colors">
                Robotics (RaaS)
              </Link>
              <Link to="/membership" className="block text-base text-[#A0A0A0] hover:text-[#D4AF37] transition-colors">
                Memberships
              </Link>
              <Link to="/pricing" className="block text-base text-[#A0A0A0] hover:text-[#D4AF37] transition-colors">
                Pricing
              </Link>
              <Link to="/careers" className="block text-base text-[#A0A0A0] hover:text-[#D4AF37] transition-colors">
                Careers
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif text-lg text-[#F5F5F5] mb-6 border-b border-[#D4AF37]/30 pb-2 inline-block">Legal</h4>
            <nav className="space-y-3">
              <Link to="/privacy-policy" className="block text-base text-[#A0A0A0] hover:text-[#D4AF37] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="block text-base text-[#A0A0A0] hover:text-[#D4AF37] transition-colors">
                Terms of Service
              </Link>
               <Link to="/service-terms" className="block text-base text-[#A0A0A0] hover:text-[#D4AF37] transition-colors">
                Service Terms
              </Link>
              <Link to="/privacy-rights" className="block text-base text-[#A0A0A0] hover:text-[#D4AF37] transition-colors">
                Privacy Rights (MODPA)
              </Link>
              <Link to="/terms" className="block text-base text-[#A0A0A0] hover:text-[#D4AF37] transition-colors">
                General Terms
              </Link>
              <Link to="/cookies" className="block text-base text-[#A0A0A0] hover:text-[#D4AF37] transition-colors">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#3A3F47] flex flex-col md:flex-row justify-between items-center text-sm text-[#A0A0A0]">
          <p className="font-light">&copy; {new Date().getFullYear()} Rahvion, LLC. All rights reserved.</p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0 font-light">
             <ShieldCheck size={16} className="text-[#D4AF37]" />
             <span>America's Personal IT Department</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
