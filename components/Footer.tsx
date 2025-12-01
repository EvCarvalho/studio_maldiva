import React from 'react';
import { Instagram, MessageCircle, MapPin } from 'lucide-react';
import { COMPANY_INFO, IMAGES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          
          {/* Info Column */}
          <div>
            <div className="mb-6">
                <img 
                    src={IMAGES.LOGO} 
                    alt={COMPANY_INFO.name} 
                    className="h-24 w-24 object-cover rounded-full border-4 border-gray-700 shadow-xl"
                />
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
              O lugar perfeito para você realçar sua beleza natural com segurança, conforto e exclusividade. Venha viver essa experiência.
            </p>
            
            <div className="space-y-4">
              <a href={COMPANY_INFO.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Instagram className="text-amber-500" />
                <span>@espaco_maldiva</span>
              </a>
              <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <MessageCircle className="text-amber-500" />
                <span>(21) 96693-4314</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="text-amber-500 mt-1 shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="h-64 md:h-full min-h-[250px] bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
             <iframe 
                src={COMPANY_INFO.mapUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Espaço Maldivas"
             ></iframe>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Espaço Maldivas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;