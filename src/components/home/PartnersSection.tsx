
import React from 'react';

const PartnersSection = () => {
  const partners = [
    { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png' },
    { name: 'Fortinet', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Fortinet_logo.svg/2560px-Fortinet_logo.svg.png' },
    { name: 'Palo Alto', logo: 'https://www.paloaltonetworks.com/content/dam/pan/en_US/images/logos/brand/primary-company-logo/PANW_Parent_Brand_Primary_Logo_RGB.png' },
    { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png' },
    { name: 'Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png' },
  ];
  
  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-atlas-blue mb-12">
          Our Certification Partners
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`}
                className="max-h-12 opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
