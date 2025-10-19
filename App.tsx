
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import IdeaGenerator from './components/IdeaGenerator';
import BookingForm from './components/BookingForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

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
