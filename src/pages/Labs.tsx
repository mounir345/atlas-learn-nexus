
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/common/PageHeader';
import { Link } from 'react-router-dom';
import { Download, Code, Server, Cloud, Info } from 'lucide-react';

const Labs = () => {
  const labTypes = [
    {
      id: 'browser-labs',
      title: 'Browser-Based Labs',
      description: 'Access your labs directly in your browser without any software installation.',
      icon: Code,
      labs: [
        {
          id: 1,
          title: 'Cisco CCNA Network Essentials',
          description: 'Practice routing and switching fundamentals in a simulated environment.',
          difficulty: 'Beginner',
          duration: '45 minutes'
        },
        {
          id: 2,
          title: 'Azure Security Fundamentals',
          description: 'Learn to configure security settings and identity management in Azure.',
          difficulty: 'Intermediate',
          duration: '60 minutes'
        },
        {
          id: 3,
          title: 'Fortinet FortiGate Basics',
          description: 'Configure basic firewall policies and security profiles.',
          difficulty: 'Beginner',
          duration: '45 minutes'
        },
      ]
    },
    {
      id: 'emulated-labs',
      title: 'Emulated Labs (EVE-NG/GNS3)',
      description: 'More complex lab environments using industry-standard emulation platforms.',
      icon: Server,
      labs: [
        {
          id: 4,
          title: 'Enterprise Network Design',
          description: 'Design and implement a full enterprise network with routing, switching and security.',
          difficulty: 'Advanced',
          duration: '120 minutes'
        },
        {
          id: 5,
          title: 'Multi-Vendor Firewall Integration',
          description: 'Configure and integrate firewalls from different vendors in a single environment.',
          difficulty: 'Advanced',
          duration: '150 minutes'
        },
        {
          id: 6,
          title: 'Network Automation with Ansible',
          description: 'Automate network configurations using Ansible playbooks.',
          difficulty: 'Intermediate',
          duration: '90 minutes'
        },
      ]
    },
    {
      id: 'vm-labs',
      title: 'Downloadable VM Labs',
      description: 'Pre-configured virtual machine environments for local execution.',
      icon: Download,
      labs: [
        {
          id: 7,
          title: 'Windows Server Active Directory',
          description: 'Complete Active Directory setup and user management in a Windows environment.',
          difficulty: 'Intermediate',
          duration: '75 minutes',
          download: 'OVA'
        },
        {
          id: 8,
          title: 'Linux Security Hardening',
          description: 'Learn to harden Linux systems against common vulnerabilities.',
          difficulty: 'Intermediate',
          duration: '60 minutes',
          download: 'OVA'
        },
        {
          id: 9,
          title: 'Palo Alto Firewall Configuration',
          description: 'Complete configuration lab for Palo Alto Networks firewalls.',
          difficulty: 'Advanced',
          duration: '105 minutes',
          download: 'OVA'
        },
      ]
    },
    {
      id: 'cloud-labs',
      title: 'Cloud Labs',
      description: 'Practice scenarios in actual cloud environments with temporary credentials.',
      icon: Cloud,
      labs: [
        {
          id: 10,
          title: 'AWS VPC & Security Groups',
          description: 'Build secure VPC architectures with proper security group configurations.',
          difficulty: 'Intermediate',
          duration: '75 minutes'
        },
        {
          id: 11,
          title: 'Azure Sentinel SIEM Setup',
          description: 'Deploy and configure Azure Sentinel for security monitoring.',
          difficulty: 'Advanced',
          duration: '90 minutes'
        },
        {
          id: 12,
          title: 'GCP Network Security',
          description: 'Implement Google Cloud Platform security best practices.',
          difficulty: 'Intermediate',
          duration: '60 minutes'
        },
      ]
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader 
        title="Hands-on Labs" 
        subtitle="Apply your knowledge in real-world scenarios with our interactive labs"
      />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-md p-2">
                <Info className="h-6 w-6 text-atlas-blue" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-atlas-darkblue">Lab Environment Information</h3>
                <p className="mt-1 text-gray-600">
                  Our labs are designed to give you hands-on experience with real-world scenarios. 
                  Browser-based labs run directly in your browser, while downloadable labs require virtualization 
                  software like VirtualBox or VMware. Cloud labs provide temporary access to actual cloud provider environments.
                </p>
                <div className="mt-3">
                  <Link to="/lab-setup-guide" className="text-atlas-blue hover:text-atlas-gold font-medium">
                    View Lab Setup Guide
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-12">
            {labTypes.map((labType) => (
              <div key={labType.id}>
                <div className="flex items-center mb-6">
                  <div className="h-10 w-10 rounded-md bg-atlas-gold flex items-center justify-center mr-3">
                    <labType.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-atlas-darkblue">{labType.title}</h2>
                    <p className="text-gray-600">{labType.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {labType.labs.map((lab) => (
                    <div key={lab.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-atlas-darkblue mb-2">{lab.title}</h3>
                        <p className="text-gray-600 mb-4">{lab.description}</p>
                        <div className="flex justify-between text-sm text-gray-500 mb-6">
                          <div>
                            <span className={`inline-block px-3 py-1 rounded-full ${
                              lab.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                              lab.difficulty === 'Intermediate' ? 'bg-blue-100 text-blue-800' :
                              'bg-purple-100 text-purple-800'
                            }`}>
                              {lab.difficulty}
                            </span>
                          </div>
                          <div>{lab.duration}</div>
                        </div>
                        <Link 
                          to={`/labs/${lab.id}`}
                          className="block w-full text-center py-2 rounded-md bg-atlas-blue text-white hover:bg-atlas-darkblue font-medium transition-colors"
                        >
                          {labType.id === 'vm-labs' ? `Download ${lab.download || 'Lab'}` : 'Start Lab'}
                        </Link>
                      </div>
                    </div>
                  ))}
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

export default Labs;
