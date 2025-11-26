import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { IMAGES, COMPANY_INFO } from '../constants';

const Hero: React.FC = () => {
  const whatsappLink = `https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Vim pelo site e gostaria de agendar meu bronzeamento.`;

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-amber-50 to-white overflow-hidden pt-20 md:pt-0">
      
      {/* Decorative Circle */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Desperte sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">Autoestima</span> com o Bronze Perfeito
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            No Espaço Maldivas, cuidamos de você com técnicas exclusivas e produtos premium para garantir aquela cor dourada o ano todo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <MessageCircle className="group-hover:animate-bounce" />
              Chame no WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
            <div className="relative w-full max-w-md aspect-[3/4]">
                {/* Background Shape */}
                <div className="absolute inset-0 bg-amber-400 rounded-[2rem] rotate-3 transform translate-x-2 translate-y-2 opacity-20"></div>
                
                {/* Main Image Container */}
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-amber-100">
                    <img 
                        src={IMAGES.GIULLY} 
                        alt="Especialista Giully Espaço Maldivas" 
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Floating Badge */}
                    <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg border-l-4 border-amber-500">
                        <p className="text-gray-500 text-xs uppercase tracking-wide">Especialista</p>
                        <p className="text-gray-900 font-bold text-lg">Giully</p>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;