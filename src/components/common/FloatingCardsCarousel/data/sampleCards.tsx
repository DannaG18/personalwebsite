import { CardData } from '../types';
import { UtensilsCrossed, ShoppingBag, Stethoscope, User, Palette, Heart } from 'lucide-react';

export const sampleCards: CardData[] = [
  {
    id: '1',
    title: "Marca Personal y Portafolios",
    description: "Destaca entre la competencia con un portafolio que abra puertas a mejores oportunidades",
    shortBenefit: "Atrae clientes premium y proyectos mejor pagados",
    icon: <User className="w-8 h-8" />,
    linkTo: "/services/personal-brand",
    gradient: "from-blue-700 to-indigo-700",
    callToActionText: "Construir mi marca",
    priceRange: "$600K - $1.8M COP",
    features: [
      "Portafolio visual impactante",
      "CV descargable profesional",
      "Casos de estudio detallados",
      "Testimonios de clientes",
      "Blog integrado"
    ]
  },
  {
    id: '2',
    title: "Diseño de Marca Web",
    description: "Diferénciate con una identidad visual memorable que conecte emocionalmente con tus clientes",
    shortBenefit: "Marca reconocible que genera confianza",
    icon: <Palette className="w-8 h-8" />,
    linkTo: "/services/web-brand",
    gradient: "from-indigo-700 to-purple-700",
    callToActionText: "Crear mi identidad",
    priceRange: "$1.8M - $2.5M COP",
    features: [
      "Logo profesional único",
      "Paleta de colores estratégica",
      "Manual de marca completo",
      "Aplicaciones digitales",
      "Landing page inicial"
    ]
  },
  {
    id: '3',
    title: 'Tienda Online',
    description: 'Convierte visitantes en compradores con una tienda online que vende mientras duermes',
    shortBenefit: "Ventas 24/7 sin límites geográficos",
    icon: <ShoppingBag className="w-8 h-8" />,
    linkTo: "/services/stores",
    gradient: "from-indigo-600 to-purple-600",
    callToActionText: "Explorar tienda online",
    priceRange: "$900K - $3.5M COP",
    features: [
      "Catálogo de productos completo",
      "Carrito de compras optimizado",
      "Pasarela de pagos segura",
      "Gestión de inventario",
      "Marketing por WhatsApp"
    ]
  },
  {
    id: '4',
    title: 'Restaurantes y Cafeterías',
    description: 'Atrae más clientes hambrientos con un sitio web que muestre tu deliciosa comida y facilite pedidos online',
    shortBenefit: "Hasta 40% más pedidos con delivery digital",
    icon: <UtensilsCrossed className="w-8 h-8" />,
    linkTo: "/services/restaurants",
    gradient: "from-blue-600 to-indigo-600",
    callToActionText: "Ver soluciones gastronómicas",
    priceRange: "$800K - $2.2M COP",
    features: [
      "Menú digital interactivo",
      "Sistema de pedidos WhatsApp",
      "Galería de platos profesional",
      "Integración con delivery",
      "Reservas online automáticas"
    ]
  },
  {
    id: '5',
    title: 'Centros Médicos y Odontologías',
    description: "Inspira confianza profesional y facilita que nuevos pacientes te encuentren y agenden citas",
    shortBenefit: "Más pacientes con citas automatizadas",
    icon: <Stethoscope className="w-8 h-8" />,
    linkTo: "/services/medical",
    gradient: "from-purple-600 to-blue-600",
    callToActionText: "Ver soluciones médicas",
    priceRange: "$1.1M - $2.8M COP",
    features: [
      "Sistema de citas online",
      "Perfiles médicos profesionales",
      "Testimonios de pacientes",
      "Información de servicios",
      "Formularios de contacto"
    ]
  },
  {
    id: '6',
    title: "Páginas Web para Bodas",
    description: "Crea el sitio web perfecto para tu boda con invitaciones digitales, confirmación de asistencia y toda la info para tus invitados",
    shortBenefit: "Organiza tu boda de forma elegante y digital",
    icon: <Heart className="w-8 h-8" />,
    linkTo: "/services/weddings",
    gradient: "from-pink-600 to-rose-600",
    callToActionText: "Ver soluciones para bodas",
    priceRange: "$700K - $2.0M COP",
    features: [
      "Invitaciones digitales elegantes",
      "Sistema de confirmación RSVP",
      "Galería de fotos de la pareja",
      "Información de ceremonia y recepción",
      "Lista de regalos integrada"
    ]
  }
];