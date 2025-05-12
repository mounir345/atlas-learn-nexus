
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Search } from 'lucide-react';

const DefensiveOverviewSection = () => {
  return (
    <section className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Modern SOC & Defensive Security</h2>
          <p className="text-xl text-atlas-gold">Comprehensive training for today's security operations challenges</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* SOC Analyst Card */}
          <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-atlas-gold hover:transform hover:scale-105 transition-all">
            <div className="h-12 w-12 rounded-full bg-atlas-gold bg-opacity-20 flex items-center justify-center mb-4">
              <Eye className="h-6 w-6 text-atlas-gold" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">SOC Analyst</h3>
            <p className="text-gray-300 mb-4">
              Learn to monitor, detect, and respond to security incidents within enterprise environments.
            </p>
            <Link to="/learning-paths/soc-analyst" className="text-atlas-gold hover:text-white transition-colors">
              View Training Path →
            </Link>
          </div>
          
          {/* Threat Hunter Card */}
          <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-atlas-gold hover:transform hover:scale-105 transition-all">
            <div className="h-12 w-12 rounded-full bg-atlas-gold bg-opacity-20 flex items-center justify-center mb-4">
              <Search className="h-6 w-6 text-atlas-gold" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Threat Hunter</h3>
            <p className="text-gray-300 mb-4">
              Master proactive threat detection techniques and threat intelligence analysis.
            </p>
            <Link to="/learning-paths/threat-hunter" className="text-atlas-gold hover:text-white transition-colors">
              View Training Path →
            </Link>
          </div>
          
          {/* Security Engineer Card */}
          <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-atlas-gold hover:transform hover:scale-105 transition-all">
            <div className="h-12 w-12 rounded-full bg-atlas-gold bg-opacity-20 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-atlas-gold" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Security Engineer</h3>
            <p className="text-gray-300 mb-4">
              Develop and implement security solutions to protect critical infrastructure.
            </p>
            <Link to="/learning-paths/security-engineer" className="text-atlas-gold hover:text-white transition-colors">
              View Training Path →
            </Link>
          </div>
          
          {/* Incident Responder Card */}
          <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-atlas-gold hover:transform hover:scale-105 transition-all">
            <div className="h-12 w-12 rounded-full bg-atlas-gold bg-opacity-20 flex items-center justify-center mb-4">
              <Lock className="h-6 w-6 text-atlas-gold" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Incident Responder</h3>
            <p className="text-gray-300 mb-4">
              Learn techniques for efficient incident response, containment, and recovery.
            </p>
            <Link to="/learning-paths/incident-responder" className="text-atlas-gold hover:text-white transition-colors">
              View Training Path →
            </Link>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/defensive-security" className="inline-flex items-center bg-atlas-gold text-atlas-darkblue font-semibold py-3 px-6 rounded-md hover:bg-atlas-lightgold transition-colors">
            Explore All Defensive Security Courses
            <Shield className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DefensiveOverviewSection;
