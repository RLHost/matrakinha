import { motion } from 'framer-motion';
import { Brain, Baby, Puzzle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Baby size={40} />,
      title: "Estimulação Precoce",
      desc: "Intervenções lúdicas para bebês e crianças pequenas, focadas em despertar a intenção comunicativa e o contato visual desde os primeiros meses.",
      color: "bg-sky-100 text-sky-600"
    },
    {
      icon: <Puzzle size={40} />,
      title: "Terapia de Fala e Linguagem",
      desc: "Tratamento personalizado para corrigir trocas fonêmicas, melhorar o vocabulário e estruturar frases, garantindo uma fala clara e confiante.",
      color: "bg-brand-rose/10 text-brand-rose"
    },
    {
      icon: <Brain size={40} />,
      title: "Desenvolvimento Cognitivo",
      desc: "Atividades que vão além da fala, estimulando a compreensão, a atenção, a memória e as habilidades sociais necessárias para o dia a dia.",
      color: "bg-brand-yellow/20 text-yellow-700"
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-sky-50">
      <div className="container px-6 mx-auto md:px-12">
        <div className="flex flex-col items-center justify-between gap-8 mb-16 md:flex-row">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-3xl font-extrabold md:text-4xl text-slate-800">
              A Cura através da <span className="text-brand-rose">Brincadeira Direcionada</span>
            </h2>
            <p className="text-lg text-slate-600">
              Na Matrakinha, a clínica não parece um hospital. Usamos brinquedos, jogos e muita afetividade como ferramentas científicas para destravar o potencial do seu filho.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-8 bg-white shadow-lg rounded-[2rem]"
            >
              <div className={`w-20 h-20 mb-6 rounded-full flex items-center justify-center ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="mb-4 text-2xl font-bold text-slate-800">{service.title}</h3>
              <p className="leading-relaxed text-slate-600">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}