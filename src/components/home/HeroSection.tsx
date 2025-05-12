
import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-atlas-blue to-atlas-darkblue py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="flex items-center mb-4 bg-white bg-opacity-10 py-2 px-4 rounded-full inline-block">
              <Shield className="h-5 w-5 text-atlas-gold mr-2" />
              <span className="text-sm font-medium text-atlas-gold">Powered by ATLAS DEFENDERS</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Train to Become a Certified Infrastructure & Cybersecurity Expert
            </h1>
            <p className="text-xl mb-8 text-gray-200 max-w-lg animate-slide-in" style={{ animationDelay: "0.2s" }}>
              Master modern SOC operations and defensive security with hands-on labs, expert instruction, and real-world scenarios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in" style={{ animationDelay: "0.4s" }}>
              <Link to="/signup" className="btn-secondary">
                Start Free Trial
              </Link>
              <Link to="/courses" className="flex items-center justify-center py-3 px-6 rounded-md bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold transition-all">
                Browse Courses
              </Link>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-300">
              <Shield className="h-4 w-4 mr-2 text-atlas-gold" />
              <span>Industry-leading SOC and defensive security training</span>
            </div>
          </div>
          
          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="relative">
              <div className="aspect-video bg-atlas-darkgray rounded-xl overflow-hidden shadow-2xl border-2 border-atlas-lightgold/20">
                <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-40">
                  <button className="h-20 w-20 rounded-full bg-atlas-gold flex items-center justify-center shadow-lg transform transition hover:scale-110">
                    <Play className="h-10 w-10 text-white ml-1" />
                  </button>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-atlas-gold flex items-center justify-center text-white font-bold text-xl">
                    4.9
                  </div>
                  <div className="ml-3">
                    <div className="text-yellow-500 flex">
                      {"★★★★★".split("").map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>
                    <p className="text-sm font-medium text-gray-800">From 2,500+ reviews</p>
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

export default HeroSection;
