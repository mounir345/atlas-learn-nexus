
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, ChevronRight } from 'lucide-react';

const courses = [
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
];

const FeaturedCoursesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-atlas-blue mb-4">
              Featured Courses
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl">
              Start your certification journey with our most popular and in-demand courses
            </p>
          </div>
          <Link to="/courses" className="mt-4 md:mt-0 text-atlas-blue hover:text-atlas-gold font-semibold flex items-center">
            Browse All Courses <ChevronRight className="ml-1 h-5 w-5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <span className={`absolute top-4 right-4 py-1 px-3 rounded-full text-xs font-semibold ${
                  course.level === "Beginner" ? "bg-green-100 text-green-800" :
                  course.level === "Intermediate" ? "bg-blue-100 text-blue-800" :
                  "bg-purple-100 text-purple-800"
                }`}>
                  {course.level}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center mb-2">
                  <span className="bg-atlas-blue/10 text-atlas-blue text-xs font-semibold py-1 px-2 rounded">
                    {course.vendor}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-atlas-darkblue mb-2">{course.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{course.duration}</span>
                  <User className="h-4 w-4 ml-4 mr-1" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-600 text-xs py-1 px-2 rounded-full flex items-center"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  to={`/courses/${course.id}`}
                  className="block w-full text-center py-2 rounded-md bg-atlas-gold hover:bg-atlas-lightgold text-atlas-darkblue font-medium transition-colors"
                >
                  View Course
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;
