import React, { useState, useEffect } from 'react';
import { Menu, X, HeartPulse } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';
import { motion } from 'motion/react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => scrollToSection(id), 100);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('hero')}>
            <div className="bg-brand-rose p-2 rounded-2xl">
              <HeartPulse className="text-white w-6 h-6" />
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-slate-800">
              Matrakinha<span className="text-brand-rose">.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-semibold text-slate-600">
            <button onClick={() => handleNavClick('dores')} className="hover:text-brand-rose transition-colors">Sintomas</button>
            <button onClick={() => handleNavClick('solucoes')} className="hover:text-brand-rose transition-colors">Tratamentos</button>
            <button onClick={() => handleNavClick('sobre')} className="hover:text-brand-rose transition-colors">A Clínica</button>
            <button 
              onClick={() => handleNavClick('contato')}
              className="bg-brand-rose hover:bg-rose-600 text-white px-6 py-2.5 rounded-full shadow-md shadow-rose-200 transition-all transform hover:scale-105 active:scale-95"
            >
              Agendar Avaliação
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-slate-800 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-rose-50 p-4 flex flex-col gap-4 rounded-b-3xl"
        >
          <button onClick={() => handleNavClick('dores')} className="text-left text-lg font-semibold p-2 text-slate-700">Sintomas</button>
          <button onClick={() => handleNavClick('solucoes')} className="text-left text-lg font-semibold p-2 text-slate-700">Tratamentos</button>
          <button onClick={() => handleNavClick('sobre')} className="text-left text-lg font-semibold p-2 text-slate-700">A Clínica</button>
          <button 
            onClick={() => handleNavClick('contato')}
            className="bg-brand-rose text-white text-center text-lg font-bold px-6 py-3 rounded-full mt-2 shadow-lg"
          >
            Agendar Avaliação Agora
          </button>
        </motion.div>
      )}
    </header>
  );
};