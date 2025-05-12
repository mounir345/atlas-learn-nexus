
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, Network, Cloud, MonitorSmartphone } from 'lucide-react';

const paths = [
  {
    id: "firewall-engineer",
    title: "Firewall Engineer Path",
    description: "Master firewall technologies, security policies, and threat prevention systems.",
    courses: 12,
    hours: 75,
    icon: Shield
  },
  {
    id: "network-engineer",
    title: "Network Engineer Path",
    description: "From routing & switching fundamentals to advanced network design and implementation.",
    courses: 15,
    hours: 90,
    icon: Network
  },
  {
    id: "cloud-security",
    title: "Cloud Security Architect",
    description: "Secure cloud infrastructure across AWS, Azure, and GCP environments.",
    courses: 14,
    hours: 85,
    icon: Cloud
  },
  {
    id: "sysadmin",
    title: "Windows/Linux Sysadmin",
    description: "Build expertise in managing both Windows and Linux systems in enterprise environments.",
    courses: 16,
    hours: 95,
    icon: MonitorSmartphone
  }
];

const LearningPathsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-atlas-blue mb-4">
              Learning Paths
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl">
              Structured training tracks to guide you from beginner to expert in your chosen career path
            </p>
          </div>
          <Link to="/learning-paths" className="mt-4 md:mt-0 text-atlas-blue hover:text-atlas-gold font-semibold flex items-center">
            View All Paths <ChevronRight className="ml-1 h-5 w-5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {paths.map((path) => (
            <div key={path.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-atlas-gold bg-opacity-20 flex items-center justify-center mb-4">
                  <path.icon className="h-6 w-6 text-atlas-gold" />
                </div>
                <h3 className="text-xl font-bold text-atlas-darkblue mb-2">{path.title}</h3>
                <p className="text-gray-600 mb-4">{path.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <span>{path.courses} Courses</span>
                  <span className="mx-2">•</span>
                  <span>{path.hours} Hours</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div className="bg-atlas-gold h-2 rounded-full" style={{ width: "0%" }}></div>
                </div>
                <Link 
                  to={`/learning-paths/${path.id}`}
                  className="block w-full text-center py-2 rounded-md border border-atlas-blue text-atlas-blue hover:bg-atlas-blue hover:text-white font-medium transition-colors"
                >
                  Start Path
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPathsSection;
