
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Portfolio from './components/Portfolio.tsx';
import IdeaGenerator from './components/IdeaGenerator.tsx';
import BookingForm from './components/BookingForm.tsx';
import FAQ from './components/FAQ.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <IdeaGenerator />
        <BookingForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;