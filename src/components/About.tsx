import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Heart, Star } from 'lucide-react';

export const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-rose-50 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          {/* Deco */}
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Heart className="w-48 h-48 text-rose-500" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80" 
                alt="Equipe Clínica Matrakinha"
                className="rounded-[2.5rem] shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </motion.div>

            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6">
                Um ambiente seguro, projetado exclusivamente para a <span className="text-brand-rose">Primeira Infância</span>.
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                A Clínica Matrakinha nasceu de um propósito único: ser o braço direito de pais e mães no desenvolvimento da fala e linguagem infantil.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Sabemos que o consultório médico tradicional assusta as crianças. Por isso, criamos um universo lúdico, cheio de cores e afeto, onde cada sessão é esperada com alegria pelo seu pequeno.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-rose-100 flex items-start gap-3">
                  <ShieldCheck className="text-brand-teal w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-800">Profissionais Capacitados</h4>
                    <p className="text-sm text-slate-500">Fonoaudiólogos especializados em pediatria.</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-rose-100 flex items-start gap-3">
                  <Star className="text-yellow-500 w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-800">Método Lúdico</h4>
                    <p className="text-sm text-slate-500">Resultados mais rápidos através da brincadeira.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};