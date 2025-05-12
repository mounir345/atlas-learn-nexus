
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/common/PageHeader';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Basic access to selected content',
      features: [
        { included: true, text: 'Access to free courses' },
        { included: true, text: 'Community forum access' },
        { included: true, text: 'Basic quizzes' },
        { included: false, text: 'Hands-on labs' },
        { included: false, text: 'Certificate of completion' },
        { included: false, text: 'Practice exams' },
        { included: false, text: 'Downloadable resources' },
        { included: false, text: 'Instructor support' },
      ],
      buttonText: 'Sign Up Free',
      buttonLink: '/signup?plan=free',
      highlighted: false
    },
    {
      name: 'Standard',
      price: '$29',
      period: 'per month',
      description: 'Full access to most content',
      features: [
        { included: true, text: 'Access to all standard courses' },
        { included: true, text: 'Community forum access' },
        { included: true, text: 'All quizzes' },
        { included: true, text: 'Basic hands-on labs' },
        { included: true, text: 'Certificate of completion' },
        { included: true, text: 'Practice exams' },
        { included: false, text: 'Downloadable resources' },
        { included: false, text: 'Instructor support' },
      ],
      buttonText: 'Start 7-Day Free Trial',
      buttonLink: '/signup?plan=standard',
      highlighted: false
    },
    {
      name: 'Pro',
      price: '$49',
      period: 'per month',
      description: 'Complete access to all content',
      features: [
        { included: true, text: 'Access to all courses & learning paths' },
        { included: true, text: 'Community forum access' },
        { included: true, text: 'All quizzes' },
        { included: true, text: 'All hands-on labs' },
        { included: true, text: 'Certificate of completion' },
        { included: true, text: 'Practice exams' },
        { included: true, text: 'Downloadable resources' },
        { included: true, text: 'Instructor support' },
      ],
      buttonText: 'Start 7-Day Free Trial',
      buttonLink: '/signup?plan=pro',
      highlighted: true
    }
  ];

  const annualDiscount = 16; // 16% discount for annual plans

  const [billingPeriod, setBillingPeriod] = useState('monthly');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader 
        title="Pricing Plans" 
        subtitle="Choose the plan that fits your learning needs"
      />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center p-1 bg-gray-200 rounded-lg">
              <button 
                className={`py-2 px-4 rounded-md transition-colors ${
                  billingPeriod === 'monthly' 
                    ? 'bg-white shadow-sm' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setBillingPeriod('monthly')}
              >
                Monthly
              </button>
              <button 
                className={`py-2 px-4 rounded-md transition-colors ${
                  billingPeriod === 'annual' 
                    ? 'bg-white shadow-sm' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setBillingPeriod('annual')}
              >
                Annual <span className="text-green-600 text-sm font-medium">Save {annualDiscount}%</span>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              // Calculate the price for annual billing
              const monthlyPrice = parseInt(plan.price.replace('$', ''));
              const annualPrice = monthlyPrice * (1 - annualDiscount / 100);
              const displayPrice = billingPeriod === 'annual' && plan.price !== '$0' 
                ? `$${annualPrice}` 
                : plan.price;
              const displayPeriod = billingPeriod === 'annual' && plan.price !== '$0' 
                ? 'per month, billed annually' 
                : plan.period;
              
              return (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl shadow-md overflow-hidden ${
                    plan.highlighted ? 'ring-2 ring-atlas-gold relative' : ''
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute top-0 inset-x-0 transform translate-y-px">
                      <div className="bg-atlas-gold text-white text-xs font-semibold py-1 text-center uppercase tracking-wider">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-atlas-darkblue mb-2">{plan.name}</h2>
                    <div className="mt-4 mb-6">
                      <span className="text-4xl font-bold text-atlas-blue">{displayPrice}</span>
                      <span className="text-gray-600 ml-1">{displayPeriod}</span>
                      {billingPeriod === 'annual' && plan.price !== '$0' && (
                        <p className="text-sm text-gray-500 mt-1">
                          ${(annualPrice * 12).toFixed(0)} billed annually
                        </p>
                      )}
                    </div>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          {feature.included ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          ) : (
                            <XCircle className="h-5 w-5 text-gray-300 mt-0.5 mr-2 flex-shrink-0" />
                          )}
                          <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      to={plan.buttonLink + (billingPeriod === 'annual' ? '&billing=annual' : '')}
                      className={`block w-full text-center py-3 rounded-md font-semibold transition-colors ${
                        plan.highlighted 
                          ? 'bg-atlas-gold hover:bg-atlas-lightgold text-atlas-darkblue' 
                          : 'bg-atlas-blue hover:bg-atlas-darkblue text-white'
                      }`}
                    >
                      {plan.buttonText}
                    </Link>
                    <p className="text-center text-sm text-gray-500 mt-4">
                      No credit card required. Cancel anytime.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-16 bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-atlas-darkblue mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-atlas-blue mb-2">Can I switch plans?</h3>
                <p className="text-gray-700">
                  Yes, you can upgrade or downgrade your plan at any time. If you upgrade, 
                  you'll be charged the prorated difference. If you downgrade, the new rate 
                  will apply at the start of your next billing cycle.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-atlas-blue mb-2">Are there team or enterprise plans?</h3>
                <p className="text-gray-700">
                  Yes, we offer special pricing for teams of 5 or more. Contact our sales team 
                  for information about team and enterprise plans.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-atlas-blue mb-2">How does the 7-day free trial work?</h3>
                <p className="text-gray-700">
                  You'll get full access to all features of your selected plan for 7 days. 
                  No credit card is required to start. You can cancel anytime before the end 
                  of the trial and you won't be charged.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-atlas-blue mb-2">Can I cancel my subscription?</h3>
                <p className="text-gray-700">
                  Yes, you can cancel your subscription at any time from your account page. 
                  After cancellation, you'll still have access until the end of your current 
                  billing period.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-700 mb-4">Still have questions?</p>
              <Link to="/contact" className="text-atlas-blue hover:text-atlas-gold font-semibold">
                Contact our support team
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
