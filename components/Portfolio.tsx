
import React from 'react';
import { PORTFOLIO_IMAGES } from '../constants.ts';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-2 text-amber-400">My Work</h2>
        <p className="text-lg text-gray-400 mb-12">A selection of my recent tattoos.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PORTFOLIO_IMAGES.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
              <img 
                src={src} 
                alt={`Tattoo example ${index + 1}`} 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;