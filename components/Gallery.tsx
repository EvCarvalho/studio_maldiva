import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { CLIENT_GALLERY, COMPANY_INFO } from '../constants';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % CLIENT_GALLERY.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + CLIENT_GALLERY.length) % CLIENT_GALLERY.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-40 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-100 rounded-full blur-3xl opacity-40 -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold tracking-wider text-sm uppercase mb-2 block">
            Resultados Reais
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Transformações <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">Incríveis</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Veja os resultados reais das nossas clientes. Marquinhas perfeitas e bronzeados duradouros que falam por si só.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {CLIENT_GALLERY.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={image}
                  alt={`Resultado de cliente ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-sm">Clique para ampliar</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-amber-600 text-xs font-bold">✨ Resultado</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Quer fazer parte desta galeria? Agende sua sessão agora!
          </p>
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Quero agendar uma sessão de bronzeamento.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105"
          >
            Agendar Agora
          </a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg transition-colors"
                aria-label="Fechar"
              >
                <X size={24} />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg transition-colors"
                aria-label="Imagem anterior"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg transition-colors"
                aria-label="Próxima imagem"
              >
                <ChevronRight size={24} />
              </button>

              <img
                src={CLIENT_GALLERY[selectedImage]}
                alt={`Resultado de cliente ${selectedImage + 1}`}
                className="w-full h-full object-contain rounded-lg"
              />

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-gray-900 text-sm font-medium">
                  {selectedImage + 1} / {CLIENT_GALLERY.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;




