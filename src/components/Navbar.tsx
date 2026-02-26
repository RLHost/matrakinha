import React, { useState, useEffect } from 'react';
import { Menu, X, Baby } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    setTimeout(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100); // Pequeno delay para mobile fechar o menu antes de rolar
  };

  const navLinks = [
    { name: 'O Desafio', id: 'dores' },
    { name: 'Nossa Solução', id: 'servicos' },
    { name: 'Especialistas', id: 'sobre' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}
    >
      <div className="container px-6 mx-auto md:px-12">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            onClick={(e) => handleSmoothScroll(e, 'hero')} 
            className="flex items-center gap-2 group"
          >
            <div className="p-2 transition-colors rounded-full bg-brand-rose/10 group-hover:bg-brand-rose/20">
              <Baby className="text-brand-rose" size={28} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-800">
              Matrak<span className="text-brand-rose">inha</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="items-center hidden gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className="font-medium text-slate-600 hover:text-brand-rose transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5511978783723"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 font-bold text-white transition-transform rounded-full shadow-lg bg-brand-rose hover:bg-rose-600 hover:-translate-y-1"
            >
              Agendar Agora
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="p-2 md:hidden text-slate-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-0 w-full bg-white shadow-xl top-full rounded-b-3xl md:hidden"
        >
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className="pb-2 text-lg font-medium border-b border-slate-100 text-slate-600"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5511978783723"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 mt-4 font-bold text-center text-white rounded-full bg-brand-rose"
            >
              Agendar Avaliação
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}