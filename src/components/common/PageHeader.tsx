
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <section className="bg-gradient-to-r from-atlas-blue to-atlas-darkblue py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        {subtitle && <p className="text-xl text-atlas-gold max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageHeader;
