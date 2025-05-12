
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/common/PageHeader';
import { Award, ChevronDown } from 'lucide-react';

const certifications = {
  networking: [
    {
      vendor: "Cisco",
      certifications: [
        {
          name: "CCNA",
          exam: "200-301",
          description: "Entry-level networking certification covering networking fundamentals, IP services, security, automation and programmability."
        },
        {
          name: "CCNP ENCOR",
          exam: "350-401",
          description: "Professional level certification for implementing and operating enterprise network core technologies."
        },
        {
          name: "CCNP ENARSI",
          exam: "300-410",
          description: "Advanced routing solutions for enterprise networks."
        },
        {
          name: "CCIE Enterprise Infrastructure",
          exam: "Lab + Written 400-101",
          description: "Expert level certification for enterprise networking professionals."
        },
        {
          name: "CCNP Data Center",
          exam: "350-601",
          description: "Professional certification covering data center technologies."
        }
      ]
    }
  ],
  sysadmin: [
    {
      vendor: "Windows Server",
      certifications: [
        {
          name: "MCSA 70-740",
          exam: "70-740",
          description: "Installation, Storage, and Compute with Windows Server 2016"
        },
        {
          name: "MCSA 70-741",
          exam: "70-741",
          description: "Networking with Windows Server 2016"
        },
        {
          name: "MCSA 70-742",
          exam: "70-742",
          description: "Identity with Windows Server 2016"
        },
        {
          name: "AZ-800",
          exam: "AZ-800",
          description: "Administering Windows Server Hybrid Core Infrastructure"
        },
        {
          name: "AZ-801",
          exam: "AZ-801",
          description: "Configuring Windows Server Hybrid Advanced Services"
        }
      ]
    },
    {
      vendor: "Linux",
      certifications: [
        {
          name: "LPIC-1",
          exam: "101-500, 102-500",
          description: "Linux administrator certification covering system architecture, Linux installation, package management, and more."
        },
        {
          name: "LPIC-2",
          exam: "201-450, 202-450",
          description: "Advanced Linux administrator certification covering system maintenance, networking, security, and troubleshooting."
        },
        {
          name: "LPIC-3",
          exam: "300/303/304 depending on specialization",
          description: "Enterprise-level Linux certification with various specializations."
        },
        {
          name: "RHCSA",
          exam: "EX200",
          description: "Red Hat Certified System Administrator - foundational skills in Red Hat Enterprise Linux."
        },
        {
          name: "RHCE",
          exam: "EX294",
          description: "Red Hat Certified Engineer - advanced skills in Red Hat Enterprise Linux."
        }
      ]
    }
  ],
  cloud: [
    {
      vendor: "Microsoft Azure",
      certifications: [
        {
          name: "AZ-900",
          exam: "AZ-900",
          description: "Azure Fundamentals - basic cloud concepts and Azure services."
        },
        {
          name: "AZ-104",
          exam: "AZ-104",
          description: "Azure Administrator Associate - managing Azure subscriptions and resources."
        },
        {
          name: "AZ-204",
          exam: "AZ-204",
          description: "Developer Associate - designing, building, testing, and maintaining cloud applications."
        },
        {
          name: "AZ-500",
          exam: "AZ-500",
          description: "Security Engineer Associate - implementing security controls and threat protection."
        }
      ]
    },
    {
      vendor: "AWS",
      certifications: [
        {
          name: "AWS Certified Cloud Practitioner",
          exam: "CLF-C01",
          description: "Foundational understanding of AWS Cloud services."
        },
        {
          name: "AWS Solutions Architect Associate",
          exam: "SAA-C03",
          description: "Designing available, cost-efficient, fault-tolerant systems on AWS."
        },
        {
          name: "AWS Developer Associate",
          exam: "DVA-C01",
          description: "Developing and maintaining applications on AWS."
        },
        {
          name: "AWS Security Specialty",
          exam: "SCS-C01",
          description: "Specialized expertise in AWS security."
        }
      ]
    },
    {
      vendor: "GCP",
      certifications: [
        {
          name: "Google Cloud Digital Leader",
          exam: "Digital Leader",
          description: "Foundational knowledge of Google Cloud products and services."
        },
        {
          name: "Google Associate Cloud Engineer",
          exam: "Associate Engineer",
          description: "Deploying applications and managing Google Cloud projects."
        },
        {
          name: "Google Cloud Security Engineer",
          exam: "Security Engineer",
          description: "Configuring access control and security policies in Google Cloud."
        }
      ]
    },
    {
      vendor: "OCI (Oracle Cloud)",
      certifications: [
        {
          name: "OCI Foundations Associate",
          exam: "1Z0-1085-21",
          description: "Foundational knowledge of Oracle Cloud Infrastructure services."
        },
        {
          name: "OCI Architect Associate",
          exam: "1Z0-1072-21",
          description: "Designing and implementing Oracle Cloud Infrastructure solutions."
        },
        {
          name: "OCI Architect Professional",
          exam: "1Z0-997-21",
          description: "Advanced architectural principles and practices in Oracle Cloud."
        }
      ]
    }
  ],
  security: [
    {
      vendor: "Fortinet",
      certifications: [
        {
          name: "NSE 1–8",
          exam: "Various",
          description: "Eight-level certification program covering network security concepts and Fortinet products."
        },
        {
          name: "NSE 4 - FortiOS",
          exam: "NSE4_FGT-7.0",
          description: "Managing FortiGate devices to support security policies."
        },
        {
          name: "NSE 5 - FortiManager/FortiAnalyzer",
          exam: "NSE5_FAZ-7.0 & NSE5_FMG-7.0",
          description: "Managing Fortinet management and analysis tools."
        }
      ]
    },
    {
      vendor: "Palo Alto",
      certifications: [
        {
          name: "PCNSA",
          exam: "PCNSA",
          description: "Network Security Administrator - fundamental knowledge of the Palo Alto Networks platform."
        },
        {
          name: "PCCSA",
          exam: "PCCSA",
          description: "Cybersecurity Associate - entry-level knowledge of cybersecurity concepts."
        },
        {
          name: "PCNSE",
          exam: "PCNSE",
          description: "Network Security Engineer - advanced knowledge of Palo Alto Networks products."
        }
      ]
    },
    {
      vendor: "Cisco",
      certifications: [
        {
          name: "Cisco ASA",
          exam: "300-735 SAUTO",
          description: "Security automation and orchestration with Cisco security technologies."
        },
        {
          name: "Cisco Firepower Threat Defense",
          exam: "300-710 SNCF",
          description: "Implementing and configuring Cisco Firepower Threat Defense."
        }
      ]
    },
    {
      vendor: "Other Vendors",
      certifications: [
        {
          name: "Sophos Certified Engineer",
          exam: "Various",
          description: "Management and administration of Sophos security products."
        },
        {
          name: "pfSense Certified Professional",
          exam: "PCPP",
          description: "Deploying, configuring, and managing pfSense firewalls."
        },
        {
          name: "OPNsense",
          exam: "Community-Driven",
          description: "Community-driven lab training for OPNsense firewalls."
        }
      ]
    }
  ]
};

type CategoryKey = "networking" | "sysadmin" | "cloud" | "security";

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("networking");
  const [expandedVendors, setExpandedVendors] = useState<Record<string, boolean>>({});

  const toggleVendor = (vendor: string) => {
    setExpandedVendors(prev => ({
      ...prev,
      [vendor]: !prev[vendor]
    }));
  };

  const categories = [
    { id: "networking", name: "Networking", icon: "🌐" },
    { id: "sysadmin", name: "System Administration", icon: "🖥️" },
    { id: "cloud", name: "Cloud", icon: "☁️" },
    { id: "security", name: "Security & Firewalls", icon: "🔥" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader 
        title="Certifications" 
        subtitle="Prepare for industry-recognized certifications with our comprehensive courses"
      />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-24">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-atlas-darkblue mb-4">Categories</h2>
                  <nav className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id as CategoryKey)}
                        className={`flex items-center w-full p-3 rounded-md transition-colors ${
                          activeCategory === category.id 
                            ? 'bg-atlas-blue text-white' 
                            : 'hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        <span className="mr-2">{category.icon}</span>
                        <span>{category.name}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-atlas-darkblue mb-6">
                    {categories.find(c => c.id === activeCategory)?.name} Certifications
                  </h2>
                  
                  <div className="space-y-6">
                    {certifications[activeCategory].map((vendorGroup, index) => (
                      <div key={index} className="border rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleVendor(vendorGroup.vendor)}
                          className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center">
                            <Award className="h-5 w-5 text-atlas-gold mr-2" />
                            <span className="font-semibold text-atlas-darkblue">{vendorGroup.vendor}</span>
                          </div>
                          <ChevronDown className={`h-5 w-5 transform transition-transform ${expandedVendors[vendorGroup.vendor] ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {(expandedVendors[vendorGroup.vendor] || false) && (
                          <div className="p-4 space-y-4">
                            {vendorGroup.certifications.map((cert, certIndex) => (
                              <div key={certIndex} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                                <h3 className="font-semibold text-atlas-blue text-lg">{cert.name}</h3>
                                <p className="text-sm text-gray-500 mb-2">Exam: {cert.exam}</p>
                                <p className="text-gray-700">{cert.description}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Certifications;
