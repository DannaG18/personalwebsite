import React from 'react';
import { ServiceCard } from './ServiceCard';
import { UtensilsCrossed, ShoppingBag, Stethoscope, User, Palette } from 'lucide-react';
import { RestaurantsServices } from './services/RestaurantsServices';
import { ClothingStoresServices } from './services/ClothingStoresServices';
import { MedicalCentersServices } from './services/MedicalCentersServices';
import { PersonalBrandServices } from './services/PersonalBrandServices';
import { WebBrandDesignServices } from './services/WebBrandDesignServices';

export const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: "Restaurantes y Cafeterías",
      description: "Soluciones digitales que aumentan tus ventas y mejoran la experiencia de tus clientes",
      icon: <UtensilsCrossed className="w-8 h-8" />,
      linkTo: "restaurants-services",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      title: "Tiendas de Ropa",
      description: "Impulsa tus ventas online con soluciones diseñadas para el sector moda",
      icon: <ShoppingBag className="w-8 h-8" />,
      linkTo: "clothing-services",
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      title: "Centros Médicos y Odontologías",
      description: "Genera confianza y facilita el acceso a tus servicios médicos",
      icon: <Stethoscope className="w-8 h-8" />,
      linkTo: "medical-services",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "Marca Personal y Portafolios",
      description: "Construye tu presencia digital profesional y atrae mejores oportunidades",
      icon: <User className="w-8 h-8" />,
      linkTo: "personal-brand-services",
      gradient: "from-blue-700 to-indigo-700"
    },
    {
      title: "Diseño de Marca Web",
      description: "Crea una identidad visual sólida que conecte con tu audiencia",
      icon: <Palette className="w-8 h-8" />,
      linkTo: "web-brand-services",
      gradient: "from-indigo-700 to-purple-700"
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
              icon={category.icon}
              linkTo={category.linkTo}
              gradient={category.gradient}
            />
          ))}
        </div>

        {/* Detailed Services Sections (Hidden by default, shown when clicked) */}
        <div className="space-y-20">
          <div id="restaurants-services">
            <RestaurantsServices />
          </div>
          <div id="clothing-services">
            <ClothingStoresServices />
          </div>
          <div id="medical-services">
            <MedicalCentersServices />
          </div>
          <div id="personal-brand-services">
            <PersonalBrandServices />
          </div>
          <div id="web-brand-services">
            <WebBrandDesignServices />
          </div>
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