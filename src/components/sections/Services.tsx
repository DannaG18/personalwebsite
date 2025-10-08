import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceCard } from '../common/ServiceCard';
import { UtensilsCrossed, ShoppingBag, Stethoscope, User, Palette, Heart } from 'lucide-react';

export const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: "Restaurantes y Cafeterías",
      description: "Atrae más clientes hambrientos con un sitio web que muestre tu deliciosa comida y facilite pedidos online",
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
      title: "Tiendas de Ropa",
      description: "Convierte visitantes en compradores con una tienda online que vende mientras duermes",
      shortBenefit: "Ventas 24/7 sin límites geográficos",
      icon: <ShoppingBag className="w-8 h-8" />,
      linkTo: "/services/clothing",
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
      title: "Centros Médicos y Odontologías",
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
      title: "Páginas Web para Bodas",
      description: "Crea el sitio web perfecto para tu boda con invitaciones digitales, confirmación de asistencia y toda la información para tus invitados",
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

  const process = [
    {
      step: "01",
      title: "Análisis de tu Negocio",
      description: "Entiendo tu industria, competencia y objetivos comerciales específicos"
    },
    {
      step: "02",
      title: "Estrategia Digital",
      description: "Diseño la solución web que mejor se adapte a tu modelo de negocio"
    },
    {
      step: "03",
      title: "Desarrollo",
      description: "Desarrollo tu sitio web enfocado en conversión y experiencia de usuario"
    },
    {
      step: "04",
      title: "Optimización",
      description: "Ajusto y optimizo para maximizar conversiones y resultados"
    },
    {
      step: "05",
      title: "Lanzamiento y Soporte",
      description: "Lanzo tu sitio y te acompaño para asegurar el éxito de tu inversión"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Qué tipo de negocio tienes?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Selecciona tu industria para ver las soluciones web específicas que pueden
            transformar tu negocio y multiplicar tus ventas.
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {serviceCategories.map((category, index) => (
            <ServiceCard
              key={index}
              title={category.title}
              description={category.description}
              //   shortBenefit={category.shortBenefit}
              icon={category.icon}
              linkTo={category.linkTo}
              gradient={category.gradient}
              // callToActionText={category.callToActionText}
              // priceRange={category.priceRange}
            //   features={category.features}
            />
          ))}
        </div>

        {/* Process */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Cómo trabajamos juntos
          </h3>
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-300 to-indigo-300 dark:from-blue-600 dark:to-indigo-600"></div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-lg relative z-10">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
          >
            Solicita tu consulta gratuita
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};