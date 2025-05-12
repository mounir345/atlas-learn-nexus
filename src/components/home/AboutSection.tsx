
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Users, Clock } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-atlas-blue mb-6">About ATLAS LEARN</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            ATLAS LEARN is a premier cybersecurity and infrastructure learning platform created by industry professionals for aspiring and established IT professionals.
            <span className="block mt-2 font-medium text-atlas-darkblue">Powered by ATLAS DEFENDERS</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-video bg-atlas-darkgray rounded-xl overflow-hidden shadow-lg">
              <div className="h-full w-full bg-gradient-to-br from-atlas-blue to-atlas-darkblue opacity-90 p-8 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/51f17e00-6640-4685-83e5-5d1514eb24ab.png" 
                  alt="ATLAS LEARN" 
                  className="h-20 mx-auto" 
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-atlas-blue font-semibold">
                "ATLAS LEARN provided me with the skills and confidence to advance my career in cybersecurity."
              </p>
              <div className="mt-4 flex items-center">
                <div className="h-10 w-10 rounded-full bg-atlas-gold"></div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Network Security Engineer</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-md bg-atlas-gold flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-atlas-darkblue mb-2">Expert-Led Training</h3>
                  <p className="text-gray-600">
                    Our courses are designed and taught by industry veterans with real-world experience in cybersecurity and infrastructure.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-md bg-atlas-gold flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-atlas-darkblue mb-2">Certification-Focused</h3>
                  <p className="text-gray-600">
                    All content is aligned with the latest certification requirements from Cisco, Microsoft, AWS, and more.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-md bg-atlas-gold flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-atlas-darkblue mb-2">Community Support</h3>
                  <p className="text-gray-600">
                    Join a thriving community of IT professionals and instructors ready to help you succeed.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-md bg-atlas-gold flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-atlas-darkblue mb-2">Flexible Learning</h3>
                  <p className="text-gray-600">
                    Learn at your own pace with on-demand videos, hands-on labs, and practice exams accessible 24/7.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Link to="/about" className="text-atlas-blue font-semibold hover:text-atlas-gold transition-colors">
                Learn more about our approach →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
