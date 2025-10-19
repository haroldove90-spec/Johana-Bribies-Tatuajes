
import React from 'react';

const Hero: React.FC = () => {
  const scrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/hero-bg/1920/1080')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 p-6">
        <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4 text-amber-400 drop-shadow-lg">Johana Bribiesca Tatuajes</h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">Creating timeless art on skin. Your story, my ink.</p>
        <a href="#portfolio" onClick={scrollToPortfolio} className="bg-amber-400 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-amber-300 transition-all duration-300 text-lg transform hover:scale-105">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
