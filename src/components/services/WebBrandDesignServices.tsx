import React from 'react';
import { Palette, FileText } from 'lucide-react';

export const WebBrandDesignServices: React.FC = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Identidad Visual Completa",
      description: "Diseño de logo, paleta de colores y tipografía que represente la esencia de tu marca.",
      features: [
        "Diseño de logo profesional",
        "Paleta de colores estratégica",
        "Selección tipográfica",
        "Aplicaciones en diferentes formatos"
      ],
      price: "Desde $1,800,000 COP"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Manual de Marca + Landing",
      description: "Guía completa de uso de marca más landing page inicial para establecer tu presencia digital.",
      features: [
        "Manual de identidad visual",
        "Guías de uso y aplicación",
        "Landing page inicial",
        "Elementos gráficos básicos"
      ],
      price: "Desde $2,500,000 COP"
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Para Diseño de Marca Web
        </h3>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Crea una identidad visual sólida que conecte con tu audiencia
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-navy-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl mb-6 flex items-center justify-center text-white">
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