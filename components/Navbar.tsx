import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { COMPANY_INFO, IMAGES } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navClass = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
  }`;

  const linkClass = `cursor-pointer font-medium hover:text-amber-500 transition-colors ${
    isScrolled ? 'text-gray-800' : 'text-gray-900 md:text-gray-800 md:font-semibold'
  }`;

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Brand */}
        <div 
          onClick={() => scrollToSection('hero')} 
          className="cursor-pointer"
        >
          <img 
            src={IMAGES.LOGO} 
            alt={COMPANY_INFO.name} 
            className="h-14 w-14 object-cover rounded-full shadow-md border-2 border-amber-50 hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <span onClick={() => scrollToSection('details')} className={linkClass}>Detalhes</span>
          <span onClick={() => scrollToSection('faq')} className={linkClass}>Dúvidas</span>
          <span onClick={() => scrollToSection('booking')} className={linkClass}>Agendar</span>
          <a 
            href={COMPANY_INFO.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-transform hover:scale-105 shadow-lg"
          >
            <Instagram size={18} />
            <span>Siga-nos</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-amber-600">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center space-y-6 animate-fade-in">
          <span onClick={() => scrollToSection('details')} className="text-lg text-gray-800 font-medium">Detalhes</span>
          <span onClick={() => scrollToSection('faq')} className="text-lg text-gray-800 font-medium">Dúvidas</span>
          <span onClick={() => scrollToSection('booking')} className="text-lg text-gray-800 font-medium text-amber-600">Agendar Agora</span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;