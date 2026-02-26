import { motion } from 'framer-motion';
import { Frown, EarOff, MessageSquareOff } from 'lucide-react';

export default function PainPoints() {
  const pains = [
    {
      icon: <MessageSquareOff size={32} />,
      title: "Atraso na Fala?",
      desc: "Seu filho tem 2 anos e ainda não fala pequenas frases? O silêncio ou a dificuldade de se expressar causa frustração nele e em você?"
    },
    {
      icon: <EarOff size={32} />,
      title: "Dificuldade de Interação?",
      desc: "Ele não responde quando chamado pelo nome ou parece ter dificuldade em interagir e brincar com outras crianças da mesma idade?"
    },
    {
      icon: <Frown size={32} />,
      title: "Trocas na Pronúncia?",
      desc: "As pessoas têm dificuldade em entender o que ele diz por causa de trocas frequentes de sons na hora de falar?"
    }
  ];

  return (
    <section id="dores" className="py-24 bg-white">
      <div className="container px-6 mx-auto md:px-12">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-6 text-3xl font-extrabold md:text-4xl text-slate-800">
            Você sente o coração apertar ao ver seu filho <span className="text-brand-teal">lutando para se comunicar</span>?
          </h2>
          <p className="text-lg text-slate-600">
            Sabemos que cada criança tem seu tempo, mas ignorar os sinais de atraso pode comprometer o desenvolvimento social e cognitivo dela. Reconhece alguma dessas situações?
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pains.map((pain, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="p-8 transition-shadow border bg-slate-50 rounded-3xl border-slate-100 hover:shadow-xl"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-brand-rose/10 text-brand-rose">
                {pain.icon}
              </div>
              <h3 className="mb-4 text-xl font-bold text-slate-800">{pain.title}</h3>
              <p className="leading-relaxed text-slate-600">
                {pain.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 text-lg font-medium text-slate-700">
            O diagnóstico precoce é a chave. Não espere o problema se agravar.
          </p>
          <a 
            href="https://wa.me/5511978783723"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 font-bold text-white transition-all rounded-full bg-brand-teal hover:bg-teal-700 hover:-translate-y-1"
          >
            Falar com uma Especialista Agora
          </a>
        </div>
      </div>
    </section>
  );
}