
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-amber-400 font-serif tracking-wider" onClick={(e) => scrollToSection(e, '#hero')}>
          Johana Bribiesca
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map(link => (
            <a key={link.name} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium">
              {link.name}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-amber-400 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
            </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/90 backdrop-blur-sm pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {NAV_LINKS.map(link => (
              <a key={link.name} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium">
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
