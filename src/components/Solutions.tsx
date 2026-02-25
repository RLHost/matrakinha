import React from 'react';
import { motion } from 'motion/react';
import { Smile, Brain, Baby, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

const solutions = [
  {
    icon: Baby,
    title: "Estimulação Precoce",
    desc: "Acelere o desenvolvimento na janela mais crucial da infância. Intervenções lúdicas que transformam o aprendizado em brincadeira."
  },
  {
    icon: Smile,
    title: "Desenvolvimento da Fala",
    desc: "Corrija trocas de letras e garanta que seu filho se expresse com clareza, aumentando a autoestima e facilitando amizades."
  },
  {
    icon: Brain,
    title: "Linguagem e Cognição",
    desc: "Construa uma base sólida para a alfabetização e compreensão do mundo, preparando seu filho para brilhar na escola."
  }
];

export const Solutions = () => {
  return (
    <section id="solucoes" className="py-20 bg-teal-50 relative overflow-hidden">
      {/* Soft rounded shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6">
              Nós sabemos como ajudar. Transformamos frustração em <span className="text-brand-teal">sorrisos e palavras.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Na Clínica Matrakinha, não fazemos apenas "terapia". Nós construímos pontes para que seu filho possa se conectar com o mundo. Usamos abordagens validadas cientificamente, aplicadas com o máximo de carinho.
            </p>
            
            <div className="space-y-6 mb-10">
              {solutions.map((sol, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-teal shadow-sm">
                      <sol.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{sol.title}</h3>
                    <p className="text-slate-600">{sol.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button 
              onClick={() => scrollToSection('contato')}
              className="bg-brand-teal hover:bg-teal-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg shadow-teal-200 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Garantir a Vaga do Meu Filho
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.img 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1544367567-0f2fcb046eb9?auto=format&fit=crop&w=400&q=80"
                alt="Criança aprendendo"
                className="rounded-[2rem] w-full h-64 object-cover shadow-lg"
              />
              <motion.img 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                src="https://images.unsplash.com/photo-1576444356170-66073046b1bc?auto=format&fit=crop&w=400&q=80"
                alt="Profissional acolhedora"
                className="rounded-[2rem] w-full h-64 object-cover shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};