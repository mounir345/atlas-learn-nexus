
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-atlas-cyberdark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/51f17e00-6640-4685-83e5-5d1514eb24ab.png" 
                alt="ATLAS LEARN Logo" 
                className="h-10 w-auto" 
              />
              <span className="ml-2 text-xl font-bold text-white">ATLAS LEARN</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your path to becoming a certified infrastructure & cybersecurity expert.
            </p>
            <div className="flex items-center bg-atlas-cyberblue/30 p-3 rounded-md mb-4 border-l-4 border-atlas-gold cyber-glow">
              <Shield className="h-5 w-5 text-atlas-gold mr-2" />
              <p className="text-atlas-gold font-semibold">
                Powered by ATLAS DEFENDERS
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-atlas-gold">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-atlas-gold">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-atlas-gold">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-atlas-gold">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-atlas-gold">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-atlas-gold">Learning Paths</h3>
            <ul className="space-y-2">
              <li><Link to="/learning-paths/firewall-engineer" className="text-gray-300 hover:text-white">Firewall Engineer Path</Link></li>
              <li><Link to="/learning-paths/network-engineer" className="text-gray-300 hover:text-white">Network Engineer Path</Link></li>
              <li><Link to="/learning-paths/cloud-security" className="text-gray-300 hover:text-white">Cloud Security Architect</Link></li>
              <li><Link to="/learning-paths/sysadmin" className="text-gray-300 hover:text-white">Windows/Linux Sysadmin</Link></li>
              <li><Link to="/learning-paths" className="text-gray-300 hover:text-white">View All Learning Paths</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-atlas-gold">Certifications</h3>
            <ul className="space-y-2">
              <li><Link to="/certifications/networking" className="text-gray-300 hover:text-white">Networking (Cisco)</Link></li>
              <li><Link to="/certifications/system-admin" className="text-gray-300 hover:text-white">System Administration</Link></li>
              <li><Link to="/certifications/cloud" className="text-gray-300 hover:text-white">Cloud Certifications</Link></li>
              <li><Link to="/certifications/security" className="text-gray-300 hover:text-white">Firewalls & Security</Link></li>
              <li><Link to="/certifications" className="text-gray-300 hover:text-white">View All Certifications</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-atlas-gold">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog & News</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              <li><Link to="/support" className="text-gray-300 hover:text-white">Support</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white">Careers</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-atlas-blue/30">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ATLAS LEARN. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
