import React from 'react';
import { User, Briefcase, GraduationCap } from 'lucide-react';

export const PersonalBrandServices: React.FC = () => {
  const services = [
    {
      icon: <User className="w-8 h-8" />,
      title: "Sitio Tipo CV o Bio Link",
      description: "Página personal profesional que destaque tu experiencia y facilite el contacto.",
      features: [
        "Diseño profesional y moderno",
        "Enlaces a redes sociales",
        "Información de contacto",
        "Descarga de CV"
      ],
      price: "Desde $600,000 COP"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Portafolio Visual con Proyectos",
      description: "Muestra tu trabajo de forma impactante con galerías y descripciones detalladas.",
      features: [
        "Galería de proyectos",
        "Casos de estudio detallados",
        "Testimonios de clientes",
        "Blog integrado"
      ],
      price: "Desde $1,800,000 COP"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Landing de Servicios",
      description: "Página optimizada para promocionar tus mentorías, cursos o servicios profesionales.",
      features: [
        "Descripción de servicios",
        "Sistema de reservas",
        "Testimonios y reseñas",
        "Integración de pagos"
      ],
      price: "Desde $1,400,000 COP"
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Para Marca Personal y Portafolios
        </h3>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Construye tu presencia digital profesional y atrae mejores oportunidades
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-navy-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl mb-6 flex items-center justify-center text-white">
              {service.icon}
            </div>

            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {service.title}
            </h4>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {service.description}
            </p>

            <ul className="space-y-2 mb-8">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {service.price}
              </span>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 text-sm font-medium">
                Cotizar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};