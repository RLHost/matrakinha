import { motion } from 'framer-motion';
import { HeartPulse, CheckCircle2 } from 'lucide-react';

export default function About() {
  const features = [
    "Avaliação detalhada e acolhedora",
    "Plano terapêutico individualizado",
    "Orientação constante aos pais",
    "Ambiente 100% adaptado para crianças"
  ];

  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container px-6 mx-auto md:px-12">
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-rose/10 translate-x-4 translate-y-4 rounded-[3rem] -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&w=800&q=80"
              alt="Fonoaudióloga brincando com criança"
              className="object-cover w-full h-[600px] rounded-[3rem] shadow-xl"
            />
            <div className="absolute p-6 bg-white shadow-2xl -bottom-8 -right-8 rounded-3xl">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-brand-teal/10">
                  <HeartPulse className="text-brand-teal" size={32} />
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-800">Amor &</p>
                  <p className="font-medium text-slate-500">Ciência Juntos</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-extrabold md:text-4xl text-slate-800">
              Anos transformando pequenos silêncios em <span className="text-brand-rose">grandes diálogos</span>.
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-600">
              A Clínica Matrakinha nasceu de um sonho: criar um espaço onde a intervenção fonoaudiológica deixasse de ser monótona e se tornasse o momento mais aguardado da semana pelas crianças.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              Nossa equipe de especialistas respira o universo da primeira infância. Entendemos a angústia dos pais e pegamos na sua mão durante toda a jornada de desenvolvimento do seu filho.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="text-brand-teal" size={24} />
                  <span className="text-lg font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <a 
              href="https://wa.me/5511978783723"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 font-bold text-white transition-all rounded-full bg-brand-rose hover:bg-rose-600 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Agendar a Primeira Consulta
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}