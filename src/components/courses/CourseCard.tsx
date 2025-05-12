
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag } from 'lucide-react';

export interface CourseType {
  id: number;
  title: string;
  vendor: string;
  duration: string;
  instructor: string;
  tags: string[];
  image: string;
  level: string;
}

const CourseCard: React.FC<{ course: CourseType }> = ({ course }) => {
  return (
    <div className="course-card">
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
  );
};

export default CourseCard;
