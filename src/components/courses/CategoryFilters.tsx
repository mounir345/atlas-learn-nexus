
import React, { useState } from 'react';
import { Filter } from 'lucide-react';

interface CategoryFiltersProps {
  onCategoryChange: (category: string) => void;
  onVendorChange: (vendor: string) => void;
  onLevelChange: (level: string) => void;
  selectedCategory: string;
  selectedVendor: string;
  selectedLevel: string;
}

const CategoryFilters = ({
  onCategoryChange,
  onVendorChange,
  onLevelChange,
  selectedCategory,
  selectedVendor,
  selectedLevel,
}: CategoryFiltersProps) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  const categories = [
    'All Categories',
    'Networking',
    'Firewalls',
    'System Admin',
    'Cloud',
    'Linux',
    'Cybersecurity',
  ];
  
  const vendors = [
    'All Vendors',
    'Cisco',
    'Microsoft',
    'Fortinet',
    'RedHat',
    'AWS',
    'Azure',
    'Palo Alto',
  ];
  
  const levels = [
    'All Levels',
    'Beginner',
    'Intermediate',
    'Expert',
  ];
  
  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <h2 className="text-2xl font-bold text-atlas-darkblue">Course Catalog</h2>
        
        <button
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          className="md:hidden flex items-center bg-atlas-blue text-white px-4 py-2 rounded-md"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </button>
      </div>
      
      <div className={`${mobileFiltersOpen ? 'block' : 'hidden'} md:block bg-white p-4 rounded-lg shadow-md`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-atlas-blue mb-2">Category</h3>
            <div className="space-y-2">
              {categories.map((category, index) => (
                <label key={index} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === category}
                    onChange={() => onCategoryChange(category)}
                    className="h-4 w-4 text-atlas-gold border-gray-300 focus:ring-atlas-gold"
                  />
                  <span className="ml-2 text-gray-700">{category}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-atlas-blue mb-2">Vendor</h3>
            <div className="space-y-2">
              {vendors.map((vendor, index) => (
                <label key={index} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="vendor"
                    checked={selectedVendor === vendor}
                    onChange={() => onVendorChange(vendor)}
                    className="h-4 w-4 text-atlas-gold border-gray-300 focus:ring-atlas-gold"
                  />
                  <span className="ml-2 text-gray-700">{vendor}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-atlas-blue mb-2">Level</h3>
            <div className="space-y-2">
              {levels.map((level, index) => (
                <label key={index} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="level"
                    checked={selectedLevel === level}
                    onChange={() => onLevelChange(level)}
                    className="h-4 w-4 text-atlas-gold border-gray-300 focus:ring-atlas-gold"
                  />
                  <span className="ml-2 text-gray-700">{level}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilters;
