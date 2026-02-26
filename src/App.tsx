import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative overflow-hidden font-sans bg-[#fdfbfb]">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <About />
      </main>
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5511978783723?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20meu%20filho."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 text-white transition-transform duration-300 bg-green-500 rounded-full shadow-2xl hover:scale-110 hover:bg-green-600 animate-bounce"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}