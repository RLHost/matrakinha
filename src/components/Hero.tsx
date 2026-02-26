import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative flex items-center min-h-[90vh] pt-20 overflow-hidden">
      {/* Background with soft organic shapes */}
      <div className="absolute inset-0 z-0 bg-sky-50">
        <div className="absolute top-0 right-0 w-2/3 -translate-y-1/4 translate-x-1/4 h-2/3 bg-brand-rose/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 translate-y-1/4 -translate-x-1/4 h-1/2 bg-brand-teal/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 grid items-center grid-cols-1 gap-12 px-6 mx-auto md:px-12 lg:grid-cols-2">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold rounded-full bg-brand-teal/10 text-brand-teal">
            <Sparkles size={16} />
            <span>Especialistas em Primeira Infância</span>
          </div>
          
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-slate-800 md:text-5xl lg:text-6xl">
            Transforme a Comunicação do Seu Filho e Construa um <span className="text-brand-rose">Futuro Brilhante</span>.
          </h1>
          
          <p className="mb-8 text-lg leading-relaxed text-slate-600 md:text-xl">
            Não deixe o desenvolvimento do seu maior tesouro para depois. Nossa metodologia lúdica destrava a fala e estimula a linguagem de forma natural, acolhedora e divertida.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/5511978783723"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white transition-all rounded-full shadow-lg bg-brand-rose hover:bg-rose-600 hover:shadow-xl hover:-translate-y-1"
            >
              Quero Avaliar Meu Filho Agora
              <ArrowRight size={20} />
            </a>
          </div>
          
          <div className="flex items-center gap-4 mt-8">
            <div className="flex -space-x-3">
               {/* Fake avatars for social proof */}
              {[1, 2, 3].map((i) => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i + 30}`} alt="Mãe" className="w-10 h-10 border-2 border-white rounded-full" />
              ))}
            </div>
            <p className="text-sm text-slate-500">
              <span className="font-bold text-slate-700">+500 famílias</span> já transformaram suas vidas conosco.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 overflow-hidden shadow-2xl rounded-3xl">
            <img 
              src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&w=800&q=80"
              alt="Criança sorrindo enquanto brinca e aprende"
              className="object-cover w-full h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
          </div>
          
          {/* Floating Elements for Organic Feel */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute z-20 p-4 bg-white shadow-xl -bottom-6 -left-6 rounded-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-brand-yellow/20">
                <Sparkles className="text-brand-yellow" size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-800">Atendimento Lúdico</p>
                <p className="text-xs text-slate-500">Aprender brincando</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}