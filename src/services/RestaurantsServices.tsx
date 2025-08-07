import React from 'react';
import { UtensilsCrossed, Smartphone, ShoppingCart } from 'lucide-react';

export const RestaurantsServices: React.FC = () => {
  const services = [
    {
      icon: <UtensilsCrossed className="w-8 h-8" />,
      title: "Landing Page Promocional",
      description: "Página atractiva que destaque tu restaurante, ambiente y especialidades para atraer más clientes.",
      features: [
        "Diseño visual atractivo",
        "Galería de fotos del local",
        "Información de contacto y ubicación",
        "Integración con redes sociales"
      ],
      price: "Desde $800,000 COP"
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8" />,
      title: "Sitio Web Profesional con Menú Digital",
      description: "Web completa con menú interactivo, información del restaurante y sistema de reservas.",
      features: [
        "Menú digital actualizable",
        "Sistema de reservas",
        "Galería de platos",
        "Información nutricional"
      ],
      price: "Desde $1,500,000 COP"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Web con Pedidos por WhatsApp",
      description: "Plataforma que permite a tus clientes hacer pedidos directamente por WhatsApp o integrar delivery.",
      features: [
        "Catálogo de productos",
        "Carrito de compras",
        "Integración WhatsApp Business",
        "Sistema de delivery"
      ],
      price: "Desde $2,200,000 COP"
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Para Restaurantes y Cafeterías
        </h3>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Soluciones digitales que aumentan tus ventas y mejoran la experiencia de tus clientes
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-navy-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl mb-6 flex items-center justify-center text-white">
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