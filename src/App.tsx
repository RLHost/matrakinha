import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { Solutions } from './components/Solutions';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-brand-soft">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Solutions />
        <About />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;