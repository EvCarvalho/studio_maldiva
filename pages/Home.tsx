import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Details from '../components/Details';
import Urgency from '../components/Urgency';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import { COMPANY_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-amber-200 selection:text-amber-900">
      <Navbar />
      <Hero />
      <Details />
      <Urgency />
      <Testimonials />
      <FAQ />
      <Pricing />
      <Footer />
      
      {/* Floating WhatsApp Button for Mobile */}
      <a 
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Vim pelo site.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:hidden z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl animate-bounce"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      </a>
    </div>
  );
};

export default Home;