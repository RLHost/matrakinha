import { Instagram, Phone, MapPin, Baby } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 bg-slate-900 text-slate-300">
      <div className="container px-6 mx-auto md:px-12">
        <div className="grid grid-cols-1 gap-12 mb-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-full bg-brand-rose/20">
                <Baby className="text-brand-rose" size={28} />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Matrak<span className="text-brand-rose">inha</span>
              </span>
            </div>
            <p className="mb-6 leading-relaxed text-slate-400">
              Especialistas em destravar a fala e o desenvolvimento na primeira infância com amor, ludicidade e ciência.
            </p>
          </div>

          {/* Contatos */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-white uppercase tracking-wider">Contato Direto</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://wa.me/5511978783723" className="flex items-center gap-3 transition-colors hover:text-brand-rose">
                  <Phone size={20} className="text-brand-teal" />
                  <span>(11) 97878-3723</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/clinica_matrakinha/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-brand-rose">
                  <Instagram size={20} className="text-brand-teal" />
                  <span>@clinica_matrakinha</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="shrink-0 text-brand-teal mt-1" />
                <span>São Paulo, SP<br/><span className="text-sm text-slate-500">(Atendimento presencial)</span></span>
              </li>
            </ul>
          </div>

          {/* CTA Urgente */}
          <div>
             <h4 className="mb-6 text-lg font-bold text-white uppercase tracking-wider">Não perca tempo</h4>
             <p className="mb-6 text-slate-400">
               Os primeiros anos são a janela de ouro do desenvolvimento cerebral. Proteja o futuro do seu filho hoje.
             </p>
             <a 
              href="https://wa.me/5511978783723"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 font-bold text-center text-white transition-colors rounded-lg bg-brand-teal hover:bg-teal-600"
            >
              Garantir Minha Vaga
            </a>
          </div>
        </div>

        <div className="pt-8 text-sm text-center border-t border-slate-800 text-slate-500">
          <p>&copy; {new Date().getFullYear()} Clínica Matrakinha. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}