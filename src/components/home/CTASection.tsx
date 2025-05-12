
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const features = [
  "Access to 300+ expert-led courses",
  "Hands-on labs with real-world scenarios",
  "Full certification preparation materials",
  "Interactive quizzes & practice exams",
  "Community & instructor support",
  "Certificate of completion for each course"
];

const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-atlas-darkblue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Advance Your IT Career?
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Join thousands of IT professionals who are transforming their careers with ATLAS LEARN's expert-led training.
            </p>
            
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-atlas-gold mr-2 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup" className="btn-secondary">
                Start Your Free 7-Day Trial
              </Link>
              <Link to="/pricing" className="py-3 px-6 rounded-md border border-white text-white hover:bg-white hover:text-atlas-darkblue font-semibold text-center transition-colors">
                View Pricing Plans
              </Link>
            </div>
          </div>
          
          <div className="lg:block">
            <div className="bg-white p-8 rounded-xl shadow-2xl">
              <div className="text-center mb-8">
                <span className="inline-block bg-atlas-gold/20 text-atlas-gold text-sm font-semibold px-4 py-1 rounded-full mb-2">
                  MOST POPULAR
                </span>
                <h3 className="text-2xl font-bold text-atlas-darkblue">Pro Annual Plan</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-atlas-blue">$49</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">Billed annually ($588 total)</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Unlimited access to all courses & learning paths</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Full lab environment access</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Offline downloads & resources</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Certificate of completion</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Priority instructor support</span>
                </li>
              </ul>
              
              <Link 
                to="/signup?plan=pro-annual" 
                className="block w-full text-center py-3 rounded-md bg-atlas-blue text-white hover:bg-atlas-darkblue font-semibold transition-colors"
              >
                Start 7-Day Free Trial
              </Link>
              <p className="text-center text-sm text-gray-500 mt-4">
                No credit card required. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
