
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/51f17e00-6640-4685-83e5-5d1514eb24ab.png" 
                alt="ATLAS LEARN Logo" 
                className="h-12 w-auto" 
              />
              <span className="ml-2 text-2xl font-bold text-atlas-blue">ATLAS LEARN</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="space-x-6">
              <Link 
                to="/courses" 
                className="text-atlas-blue hover:text-atlas-gold font-medium transition-colors"
              >
                Courses
              </Link>
              <Link 
                to="/learning-paths" 
                className="text-atlas-blue hover:text-atlas-gold font-medium transition-colors"
              >
                Learning Paths
              </Link>
              <Link 
                to="/certifications" 
                className="text-atlas-blue hover:text-atlas-gold font-medium transition-colors"
              >
                Certifications
              </Link>
              <Link 
                to="/labs" 
                className="text-atlas-blue hover:text-atlas-gold font-medium transition-colors"
              >
                Labs
              </Link>
              <Link 
                to="/pricing" 
                className="text-atlas-blue hover:text-atlas-gold font-medium transition-colors"
              >
                Pricing
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Search className="h-5 w-5 text-atlas-blue" />
              </button>
              <Link to="/login">
                <Button variant="outline" className="border-atlas-blue text-atlas-blue hover:bg-atlas-blue hover:text-white transition-all duration-300">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-atlas-blue text-white hover:bg-atlas-darkblue transition-all shadow-md hover:shadow-lg duration-300">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-atlas-blue" />
              ) : (
                <Menu className="h-6 w-6 text-atlas-blue" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/courses" 
              className="block px-3 py-2 text-base font-medium text-atlas-blue hover:bg-gray-100 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
            <Link 
              to="/learning-paths" 
              className="block px-3 py-2 text-base font-medium text-atlas-blue hover:bg-gray-100 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Learning Paths
            </Link>
            <Link 
              to="/certifications" 
              className="block px-3 py-2 text-base font-medium text-atlas-blue hover:bg-gray-100 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Certifications
            </Link>
            <Link 
              to="/labs" 
              className="block px-3 py-2 text-base font-medium text-atlas-blue hover:bg-gray-100 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Labs
            </Link>
            <Link 
              to="/pricing" 
              className="block px-3 py-2 text-base font-medium text-atlas-blue hover:bg-gray-100 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/login" 
              className="block px-3 py-2 text-base font-medium text-white bg-atlas-blue hover:bg-atlas-darkblue rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="block px-3 py-2 text-base font-medium bg-atlas-gold text-atlas-darkblue hover:bg-atlas-lightgold rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
