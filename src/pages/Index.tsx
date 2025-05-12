
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import PartnersSection from '../components/home/PartnersSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FeaturedCoursesSection from '../components/home/FeaturedCoursesSection';
import LearningPathsSection from '../components/home/LearningPathsSection';
import CTASection from '../components/home/CTASection';
import DefensiveOverviewSection from '../components/home/DefensiveOverviewSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <DefensiveOverviewSection />
        <AboutSection />
        <PartnersSection />
        <FeaturedCoursesSection />
        <TestimonialsSection />
        <LearningPathsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
