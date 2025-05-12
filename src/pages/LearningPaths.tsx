
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/common/PageHeader';
import { Link } from 'react-router-dom';
import { Shield, Network, Cloud, MonitorSmartphone, BadgeCheck, Clock, BookOpen, Eye, Lock, Search } from 'lucide-react';

const paths = [
  {
    id: "soc-analyst",
    title: "SOC Analyst Path",
    description: "Learn to effectively monitor, detect, and respond to security threats in real-time within a modern Security Operations Center.",
    icon: Eye,
    courses: [
      "SOC Fundamentals",
      "SIEM Implementation",
      "Threat Detection Techniques",
      "Incident Response Basics",
    ],
    duration: "4-6 months",
    courseCount: 14,
    totalHours: 85,
    level: "Intermediate",
    certifications: ["CompTIA CySA+", "EC-Council CSOC", "GIAC SOC Analyst"],
    highlighted: true
  },
  {
    id: "threat-hunter",
    title: "Threat Hunter Path",
    description: "Master the skills needed to proactively search for advanced threats that evade existing security solutions.",
    icon: Search,
    courses: [
      "Advanced Threat Hunting",
      "Threat Intelligence Analysis",
      "Malware Analysis Fundamentals",
      "Advanced Persistent Threats",
    ],
    duration: "5-7 months",
    courseCount: 16,
    totalHours: 95,
    level: "Advanced",
    certifications: ["SANS GIAC CTI", "Certified Threat Hunter", "MITRE ATT&CK"],
    highlighted: true
  },
  {
    id: "firewall-engineer",
    title: "Firewall Engineer Path",
    description: "Become an expert in designing, implementing, and managing network security infrastructure using modern firewall technologies.",
    icon: Shield,
    courses: [
      "Firewall Fundamentals",
      "Advanced Security Policies",
      "Threat Detection & Prevention",
      "Next-Generation Firewall Features",
    ],
    duration: "4-6 months",
    courseCount: 12,
    totalHours: 75,
    level: "Intermediate to Advanced",
    certifications: ["Fortinet NSE 4", "Palo Alto PCNSA", "Cisco CCNP Security"]
  },
  {
    id: "network-engineer",
    title: "Network Engineer Path",
    description: "Master the skills needed to design, implement and manage enterprise networks in modern IT environments.",
    icon: Network,
    courses: [
      "Routing & Switching Fundamentals",
      "Advanced Routing Protocols",
      "Network Design Principles",
      "Network Automation & Programmability"
    ],
    duration: "5-7 months",
    courseCount: 15,
    totalHours: 90,
    level: "Beginner to Advanced",
    certifications: ["CCNA", "CCNP Enterprise", "CCIE Enterprise Infrastructure"]
  },
  {
    id: "incident-responder",
    title: "Incident Responder Path",
    description: "Develop expertise in responding to security breaches, containing threats, and recovering systems efficiently.",
    icon: Lock,
    courses: [
      "Incident Response Frameworks",
      "Digital Forensics",
      "Malware Incident Handling",
      "Crisis Communication"
    ],
    duration: "4-6 months",
    courseCount: 13,
    totalHours: 80,
    level: "Intermediate to Advanced",
    certifications: ["GIAC GCIH", "EC-Council ECIR", "CERT-Certified IR"],
    highlighted: true
  },
  {
    id: "cloud-security",
    title: "Cloud Security Architect",
    description: "Develop expertise in securing cloud infrastructure across multiple platforms with advanced security frameworks.",
    icon: Cloud,
    courses: [
      "Cloud Security Fundamentals",
      "AWS Security Services",
      "Azure Security Services",
      "Multi-Cloud Security Architecture"
    ],
    duration: "4-6 months",
    courseCount: 14,
    totalHours: 85,
    level: "Intermediate to Advanced",
    certifications: ["AWS Security Specialty", "AZ-500", "GCP Security Engineer"]
  },
  {
    id: "sysadmin",
    title: "Windows/Linux Sysadmin",
    description: "Build deep expertise in managing both Windows and Linux systems in modern enterprise environments.",
    icon: MonitorSmartphone,
    courses: [
      "Windows Server Administration",
      "Linux System Administration",
      "Active Directory Management",
      "System Automation & Scripting"
    ],
    duration: "5-7 months",
    courseCount: 16,
    totalHours: 95,
    level: "Beginner to Advanced",
    certifications: ["MCSA", "RHCSA", "LPIC-1", "LPIC-2"]
  }
];

const LearningPaths = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader 
        title="Learning Paths" 
        subtitle="Structured training tracks to take you from beginner to expert"
        showDefensiveBadge={true}
      />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center bg-gray-900 text-white p-6 rounded-lg mb-8">
              <Shield className="h-10 w-10 text-atlas-gold mr-4" />
              <div>
                <h2 className="text-2xl font-bold mb-2">SOC & Defensive Security Focus</h2>
                <p className="text-gray-300">
                  Our learning paths are designed by security professionals from ATLAS DEFENDERS to ensure you master the latest defensive security techniques and SOC operations.
                </p>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-atlas-darkblue mb-4">Choose Your Career Path</h2>
            <p className="text-lg text-gray-700">
              Our learning paths are carefully structured programs that combine multiple courses to help you achieve specific career goals.
              Each path is designed by industry experts to ensure you master all the necessary skills in the optimal order.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12">
            {paths.map((path, index) => (
              <div key={path.id} className={`bg-white rounded-xl shadow-md overflow-hidden ${path.highlighted ? 'border-2 border-atlas-gold' : ''}`}>
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className={`lg:col-span-2 bg-gradient-to-br from-atlas-blue to-atlas-darkblue p-8 flex flex-col justify-between ${path.highlighted ? 'relative' : ''}`}>
                    {path.highlighted && (
                      <div className="absolute top-0 left-0 bg-atlas-gold text-atlas-darkblue px-4 py-1 text-sm font-bold">
                        SOC DEFENDER FOCUS
                      </div>
                    )}
                    <div>
                      <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center mb-6">
                        <path.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{path.title}</h3>
                      <p className="text-gray-200 mb-6">{path.description}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center text-atlas-gold mb-2">
                        <BadgeCheck className="h-5 w-5 mr-2" />
                        <span className="font-semibold">Certifications:</span>
                      </div>
                      <ul className="text-white">
                        {path.certifications.map((cert, i) => (
                          <li key={i} className="mb-1">• {cert}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-3 p-8">
                    <div className="mb-6">
                      <div className="flex items-center gap-8 mb-6">
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-atlas-blue mr-2" />
                          <span className="text-gray-700">{path.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="h-5 w-5 text-atlas-blue mr-2" />
                          <span className="text-gray-700">{path.courseCount} Courses</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-700">{path.totalHours} Hours</span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-atlas-darkblue mb-4">Key Courses:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {path.courses.map((course, i) => (
                            <li key={i} className="flex items-start">
                              <div className="h-5 w-5 rounded-full bg-atlas-gold flex items-center justify-center text-white text-xs flex-shrink-0 mt-1 mr-2">
                                {i + 1}
                              </div>
                              <span className="text-gray-700">{course}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                          <div>
                            <span className="block text-sm text-gray-500">Difficulty Level:</span>
                            <span className="font-medium text-atlas-darkblue">{path.level}</span>
                          </div>
                          
                          <Link 
                            to={`/learning-paths/${path.id}`}
                            className={`${path.highlighted ? 'bg-atlas-gold hover:bg-atlas-lightgold text-atlas-darkblue' : 'btn-primary'} py-2 px-4 rounded font-medium`}
                          >
                            View Path Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LearningPaths;
