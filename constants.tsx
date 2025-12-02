import { Sun, ShieldCheck, Clock, Heart, Star, Sparkles } from 'lucide-react';
import { Benefit, FAQItem, Testimonial } from './types';
import React from 'react';

// Images - Todas as imagens devem estar na pasta public/images/
export const IMAGES = {
  LOGO: "/images/logo.png",
  GIULLY: "/images/giully.png",
  PRODUCT_DETAIL: "/images/product-detail.jpg",
  TANNING_RESULT: "/images/tanning-result.jpg",
};

// Galeria de resultados de clientes
export const CLIENT_GALLERY = [
  "/images/client-result-1.jpg",
  "/images/client-result-2.jpg",
  "/images/client-result-3.jpg",
  "/images/client-result-4.jpg",
  "/images/client-result-5.jpg",
  "/images/client-result-6.jpg",
];

// Content
export const COMPANY_INFO = {
  name: "Espaço Maldivas",
  whatsapp: "5521966934314",
  instagram: "https://instagram.com/espaco_maldiva",
  address: "Rua André Massena 188, Arsenal São Gonçalo, Rio de Janeiro",
  // Direct search query map for better accuracy
  mapUrl: "https://maps.google.com/maps?q=Rua%20Andr%C3%A9%20Massena%20188%2C%20Arsenal%20S%C3%A3o%20Gon%C3%A7alo%2C%20Rio%20de%20Janeiro&t=&z=16&ie=UTF8&iwloc=&output=embed",
  price: "R$ 99,00"
};

export const BENEFITS: Benefit[] = [
  {
    title: "Marquinha Perfeita",
    description: "Design anatômico que valoriza suas curvas e deixa aquela marquinha dos sonhos.",
    icon: <Sun className="w-6 h-6 text-amber-500" />
  },
  {
    title: "Produtos Premium",
    description: "Utilizamos aceleradores e óleos com registro na ANVISA, garantindo saúde e cor dourada.",
    icon: <ShieldCheck className="w-6 h-6 text-amber-500" />
  },
  {
    title: "Atendimento Rápido",
    description: "Técnica otimizada para você sair pronta e brilhando em menos tempo.",
    icon: <Clock className="w-6 h-6 text-amber-500" />
  },
  {
    title: "Ambiente Exclusivo",
    description: "Conforto total, privacidade e um espaço instagramável para você relaxar.",
    icon: <Heart className="w-6 h-6 text-amber-500" />
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Quais produtos vocês utilizam?",
    answer: "Trabalhamos exclusivamente com a linha premium Melanina Bronze, todos dermatologicamente testados e aprovados pela ANVISA, garantindo um bronzeado seguro, uniforme e duradouro, sem agredir sua pele."
  },
  {
    question: "Quanto tempo dura a sessão?",
    answer: "A sessão completa leva em média 1 hora e 30 minutos, incluindo a montagem do biquíni de fita, a exposição solar controlada e a finalização com banho de lua e hidratação."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos Pix, dinheiro e cartões de crédito. O valor promocional de R$ 99,00 pode ser parcelado em até 2x sem juros no cartão."
  },
  {
    question: "Preciso levar biquíni?",
    answer: "Não precisa! Nós montamos o biquíni de fita adesiva personalizado no seu corpo, o que garante a marquinha perfeita e super definida que é nossa assinatura."
  },
  {
    question: "Grávidas podem fazer?",
    answer: "Gestantes podem realizar o procedimento somente com autorização médica por escrito. Nossa prioridade é a saúde da mamãe e do bebê."
  }
];

export const URGENCY_TEXTS = [
  "Vagas limitadas para este fim de semana!",
  "Promoção válida para as próximas 10 clientes.",
  "Garanta sua marquinha para o evento especial."
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Fernanda Oliveira",
    role: "Cliente fiel",
    image: "/images/testimonial-fernanda.jpg",
    content: "Simplesmente apaixonada! O atendimento da Giully é impecável e a marquinha ficou perfeita na primeira sessão. O ambiente é super aconchegante.",
    rating: 5
  },
  {
    name: "Carla Mendes",
    role: "Modelo",
    image: "/images/testimonial-carla.jpg",
    content: "Já fiz bronze em vários lugares, mas nenhum chega aos pés do Espaço Maldivas. Os produtos são de alta qualidade e minha pele não descascou. Recomendo demais!",
    rating: 5
  },
  {
    name: "Juliana Costa",
    role: "Advogada",
    image: "/images/testimonial-juliana.jpg",
    content: "Amei a privacidade e o cuidado. Saí de lá me sentindo uma deusa! O biquíni de fita é feito com muito capricho, desenha super bem o corpo.",
    rating: 5
  }
];