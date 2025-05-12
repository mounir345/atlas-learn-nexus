
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Michael Roberts",
    role: "Network Security Administrator",
    company: "Global Financial Corp",
    content: "ATLAS LEARN helped me pass my CCNP certification on the first attempt. The labs are incredibly well-designed and the instructors explain complex concepts clearly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
  },
  {
    id: 2,
    name: "Jennifer Chen",
    role: "Cloud Security Architect",
    company: "Tech Innovations Inc",
    content: "The Azure Security learning path was exactly what I needed to transition from on-prem to cloud security. Worth every penny for the hands-on labs alone.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
  },
  {
    id: 3,
    name: "David Wilson",
    role: "Systems Administrator",
    company: "Healthcare Solutions",
    content: "I've tried several learning platforms, but ATLAS LEARN stands out for its detailed explanations and real-world scenarios. The forums are also incredibly helpful.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-atlas-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted By IT Professionals
          </h2>
          <p className="text-lg text-atlas-gold">
            Hear what our students have to say about their learning journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-atlas-darkblue">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-white text-atlas-blue hover:bg-atlas-gold hover:text-atlas-darkblue font-semibold py-3 px-8 rounded-md transition-colors">
            Read All Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
