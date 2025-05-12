
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/common/PageHeader';
import CategoryFilters from '../components/courses/CategoryFilters';
import CourseCard, { CourseType } from '../components/courses/CourseCard';

// Sample course data
const allCourses: CourseType[] = [
  {
    id: 1,
    title: "CCNA Complete Course 2025",
    vendor: "Cisco",
    duration: "40 hours",
    instructor: "John Smith",
    tags: ["Video", "Lab", "Quiz", "Exam Prep"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    level: "Beginner"
  },
  {
    id: 2,
    title: "AWS Security Specialty",
    vendor: "AWS",
    duration: "35 hours",
    instructor: "Maria Garcia",
    tags: ["Video", "Lab", "Exam Prep"],
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    level: "Advanced"
  },
  {
    id: 3,
    title: "Fortinet NSE 4 - FortiOS",
    vendor: "Fortinet",
    duration: "30 hours",
    instructor: "Ahmed Hassan",
    tags: ["Video", "Lab", "Quiz"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=868&q=80",
    level: "Intermediate"
  },
  {
    id: 4,
    title: "Windows Server Administration",
    vendor: "Microsoft",
    duration: "45 hours",
    instructor: "Alex Johnson",
    tags: ["Video", "Lab", "Quiz", "Exam Prep"],
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80",
    level: "Intermediate"
  },
  {
    id: 5,
    title: "CCNP ENCOR (350-401)",
    vendor: "Cisco",
    duration: "60 hours",
    instructor: "David Wilson",
    tags: ["Video", "Lab", "Quiz", "Exam Prep"],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    level: "Advanced"
  },
  {
    id: 6,
    title: "Azure Administrator (AZ-104)",
    vendor: "Azure",
    duration: "50 hours",
    instructor: "Jennifer Chen",
    tags: ["Video", "Lab", "Quiz"],
    image: "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    level: "Intermediate"
  },
  {
    id: 7,
    title: "Linux System Administration",
    vendor: "RedHat",
    duration: "38 hours",
    instructor: "Michael Brown",
    tags: ["Video", "Lab", "Quiz"],
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80",
    level: "Beginner"
  },
  {
    id: 8,
    title: "Palo Alto Firewall Configuration",
    vendor: "Palo Alto",
    duration: "42 hours",
    instructor: "Sarah Johnson",
    tags: ["Video", "Lab", "Exam Prep"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    level: "Advanced"
  },
];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedVendor, setSelectedVendor] = useState('All Vendors');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');

  // Filter courses based on selected filters
  const filteredCourses = allCourses.filter(course => {
    const categoryMatch = selectedCategory === 'All Categories' || course.vendor === selectedCategory;
    const vendorMatch = selectedVendor === 'All Vendors' || course.vendor === selectedVendor;
    const levelMatch = selectedLevel === 'All Levels' || course.level === selectedLevel;
    
    return categoryMatch && vendorMatch && levelMatch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader 
        title="Course Catalog" 
        subtitle="Master in-demand skills with our comprehensive curriculum"
      />
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryFilters 
            onCategoryChange={setSelectedCategory}
            onVendorChange={setSelectedVendor}
            onLevelChange={setSelectedLevel}
            selectedCategory={selectedCategory}
            selectedVendor={selectedVendor}
            selectedLevel={selectedLevel}
          />
          
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">No courses match your filters.</h3>
              <p className="mt-2 text-gray-500">Try adjusting your filter criteria.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
