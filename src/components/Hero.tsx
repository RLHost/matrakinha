import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 -right-20 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-40 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-brand-teal font-bold text-sm shadow-sm mb-6 border border-teal-50">
              <Sparkles className="w-4 h-4" />
              <span>Especialistas em Primeira Infância</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight mb-6">
              Desbloqueie o Potencial da <span className="text-brand-rose relative">
                Comunicação
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-teal opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent"/>
                </svg>
              </span> do Seu Filho.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Não espere o "tempo dele". Acelere o desenvolvimento da fala e da linguagem com nossa fonoaudiologia lúdica, acolhedora e especializada na primeira infância.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contato')}
                className="bg-brand-rose hover:bg-rose-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl shadow-rose-200 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Quero Agendar Avaliação 
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-slate-500 font-medium">
              <div className="flex -space-x-2">
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=100&q=80" alt="Mãe feliz" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1542044896530-05d85be9b11a?auto=format&fit=crop&w=100&q=80" alt="Criança" />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-teal-100 flex items-center justify-center text-brand-teal font-bold">+5k</div>
              </div>
              <p>Famílias transformadas por nossos especialistas.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-rose-100/50 aspect-square lg:aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=80" 
                alt="Criança sorrindo em terapia" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-3xl shadow-xl flex items-center gap-4 border border-rose-50"
            >
              <div className="bg-rose-100 p-3 rounded-full text-brand-rose">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-slate-800">Abordagem Lúdica</p>
                <p className="text-sm text-slate-500">Aprender brincando</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};