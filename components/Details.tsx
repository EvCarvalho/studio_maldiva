import React from 'react';
import { motion } from 'framer-motion';
import { BENEFITS, IMAGES } from '../constants';

const Details: React.FC = () => {
  return (
    <section id="details" className="py-20 bg-white">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Por que escolher o <span className="text-amber-600">Espaço Maldivas</span>?</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg">
            Muito mais que um bronzeamento, uma experiência de autocuidado e beleza pensada nos mínimos detalhes para você.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-amber-50 p-8 rounded-2xl border border-amber-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                {React.cloneElement(benefit.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8 text-amber-600 group-hover:text-white" })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Visual Showcase (Simple Carousel/Grid) */}
        <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-transparent z-10 pointer-events-none"></div>
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-12 relative z-20 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-6">Qualidade que você vê na pele</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-amber-100">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Biquíni de fita com alinhamento perfeito
                </li>
                <li className="flex items-center text-amber-100">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Hidratação profunda pós-sol
                </li>
                <li className="flex items-center text-amber-100">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Resultado visível na primeira sessão
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-2 p-2 bg-white/5">
              <img src={IMAGES.SKIN_QUALITY_1} alt="Qualidade na Pele 1" className="w-full h-48 md:h-64 object-cover rounded-xl" />
              <img src={IMAGES.SKIN_QUALITY_2} alt="Qualidade na Pele 2" className="w-full h-48 md:h-64 object-cover rounded-xl" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Details;