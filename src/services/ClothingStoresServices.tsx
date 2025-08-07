import React from 'react';
import { ShoppingBag, MessageCircle, Sparkles } from 'lucide-react';

export const ClothingStoresServices: React.FC = () => {
  const services = [
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Tienda Online Completa",
      description: "E-commerce profesional con pasarela de pagos para vender tus productos las 24 horas.",
      features: [
        "Catálogo de productos completo",
        "Pasarela de pagos segura",
        "Gestión de inventario",
        "Panel de administración"
      ],
      price: "Desde $3,500,000 COP",
      popular: true
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Catálogo Digital con WhatsApp",
      description: "Muestra tus productos de forma atractiva y permite compras directas por WhatsApp.",
      features: [
        "Galería de productos",
        "Filtros por categoría",
        "Botón de compra WhatsApp",
        "Diseño responsive"
      ],
      price: "Desde $1,200,000 COP"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Landing Page de Producto",
      description: "Página especializada para promocionar una colección específica o producto estrella.",
      features: [
        "Diseño enfocado en conversión",
        "Galería de alta calidad",
        "Testimonios de clientes",
        "Call-to-action optimizado"
      ],
      price: "Desde $900,000 COP"
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Para Tiendas de Ropa
        </h3>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Impulsa tus ventas online con soluciones diseñadas para el sector moda
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-2xl transition-all duration-300 hover:shadow-xl ${
              service.popular
                ? 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 ring-2 ring-blue-500 dark:ring-blue-400'
                : 'bg-white dark:bg-navy-900 shadow-lg'
            }`}
          >
            {service.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-full">
                  Más popular
                </span>
              </div>
            )}

            <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center text-white ${
              service.popular
                ? 'bg-gradient-to-br from-blue-500 to-indigo-500'
                : 'bg-gradient-to-br from-indigo-500 to-purple-500'
            }`}>
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