import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, Ear, MessageSquareWarning } from 'lucide-react';

const problems = [
  {
    icon: MessageSquareWarning,
    title: "Demora para falar",
    desc: "Seu filho tem mais de 2 anos, mas ainda não forma frases ou usa poucas palavras? O 'tempo dele' pode ser um atraso que precisa de estímulo."
  },
  {
    icon: Ear,
    title: "Troca de letras e sons",
    desc: "Outras pessoas não entendem o que seu filho diz? Trocar o 'R' pelo 'L' ou omitir sons após certa idade prejudica a alfabetização."
  },
  {
    icon: AlertCircle,
    title: "Frustração e Isolamento",
    desc: "Ele chora, grita ou se isola por não conseguir se expressar? A dificuldade de comunicação gera angústia tanto para a criança quanto para a família."
  }
];

export const Problems = () => {
  return (
    <section id="dores" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6">
            Você se sente <span className="text-rose-500">angustiado</span> ao ver seu filho com dificuldade para se comunicar?
          </h2>
          <p className="text-lg text-slate-600">
            É doloroso ver quem mais amamos lutando para expressar necessidades básicas, sentimentos ou simplesmente interagir com outras crianças.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((prob, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-soft p-8 rounded-[2rem] border border-rose-100 hover:shadow-xl hover:shadow-rose-100/50 transition-all"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-rose-500 mb-6 shadow-sm">
                <prob.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{prob.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {prob.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};