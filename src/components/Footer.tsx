import React from 'react';
import { HeartPulse, Instagram, MapPin, Phone, ExternalLink } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export const Footer = () => {
  const whatsappNumber = "5511978783723";
  const whatsappMsg = encodeURIComponent("Olá! Vim pelo site e gostaria de agendar uma avaliação para o meu filho.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

  return (
    <footer id="contato" className="bg-slate-900 text-slate-300 pt-20 pb-10 rounded-t-[3rem] mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-rose p-2 rounded-2xl">
                <HeartPulse className="text-white w-6 h-6" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Matrakinha<span className="text-brand-rose">.</span>
              </span>
            </div>
            <p className="text-slate-400 mb-6">
              Especialistas em desenvolvimento da fala, linguagem e primeira infância. Transformando o futuro das nossas crianças com amor e ciência.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/clinica_matrakinha/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-rose hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Navegação</h3>
            <ul className="space-y-4">
              <li><button onClick={() => scrollToSection('hero')} className="hover:text-brand-rose transition-colors">Início</button></li>
              <li><button onClick={() => scrollToSection('dores')} className="hover:text-brand-rose transition-colors">Identifique os Sintomas</button></li>
              <li><button onClick={() => scrollToSection('solucoes')} className="hover:text-brand-rose transition-colors">Como Ajudamos</button></li>
              <li><button onClick={() => scrollToSection('sobre')} className="hover:text-brand-rose transition-colors">A Clínica</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Fale Conosco</h3>
            <ul className="space-y-4">
              <li>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:text-brand-rose transition-colors group">
                  <Phone className="w-5 h-5 mt-1 text-brand-teal group-hover:text-brand-rose" />
                  <div>
                    <p className="font-bold text-white group-hover:text-brand-rose transition-colors">(11) 97878-3723</p>
                    <p className="text-sm text-slate-400">Agende via WhatsApp</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://share.google/ODdcKQAsXse5F40R4" target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:text-brand-rose transition-colors group">
                  <MapPin className="w-5 h-5 mt-1 text-brand-teal group-hover:text-brand-rose" />
                  <div>
                    <p className="font-bold text-white flex items-center gap-2 group-hover:text-brand-rose transition-colors">
                      Nossa Localização <ExternalLink className="w-3 h-3" />
                    </p>
                    <p className="text-sm text-slate-400">Clique para ver no Google Maps</p>
                  </div>
                </a>
              </li>
            </ul>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-8 bg-brand-rose hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-full transition-colors w-full text-center"
            >
              Agendar Avaliação Agora
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Clínica Matrakinha. Todos os direitos reservados.</p>
          <p>Feito com ❤️ para o desenvolvimento infantil.</p>
        </div>
      </div>
    </footer>
  );
};