import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  MessageCircle, 
  Sparkles, 
  CheckCircle, 
  TrendingUp, 
  Clock, 
  Users, 
  Star,
  ArrowRight,
  CreditCard,
  Smartphone,
  BarChart3
} from 'lucide-react';

export const OnlineStoresServices: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: <ShoppingBag className="w-12 h-12" />,
      title: "Tienda Online Completa",
      shortDescription: "E-commerce profesional con pasarela de pagos para vender tus productos las 24 horas.",
      longDescription: "Una solución e-commerce completa que transforma tu negocio en una máquina de ventas 24/7. Incluye catálogo profesional, carrito de compras optimizado, pasarela de pagos segura y panel de administración intuitivo para gestionar tu inventario y pedidos desde cualquier lugar.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Ventas Sin Límites",
          description: "Vende 24/7 a clientes de cualquier parte del mundo, multiplicando tu alcance"
        },
        {
          icon: <CreditCard className="w-6 h-6" />,
          title: "Pagos Seguros",
          description: "Acepta tarjetas, PSE y otros métodos de pago con total seguridad"
        },
        {
          icon: <BarChart3 className="w-6 h-6" />,
          title: "Control Total",
          description: "Gestiona inventario, pedidos y clientes desde un panel intuitivo"
        }
      ],
      features: [
        "Catálogo de productos ilimitado con fotos HD",
        "Carrito de compras optimizado para conversión",
        "Pasarela de pagos segura (Wompi, PayU, Stripe)",
        "Gestión automática de inventario",
        "Panel de administración completo",
        "Reportes de ventas y analytics",
        "Integración con redes sociales",
        "SEO optimizado para Google",
        "Diseño responsive para móviles",
        "Sistema de cupones y descuentos"
      ],
      price: "Desde $3,500,000 COP",
      ctaText: "Solicitar Tienda Online Completa",
      popular: true
    },
    {
      id: 2,
      icon: <MessageCircle className="w-12 h-12" />,
      title: "Catálogo Digital con WhatsApp",
      shortDescription: "Muestra tus productos de forma atractiva y permite compras directas por WhatsApp.",
      longDescription: "La solución perfecta para negocios que quieren vender online de forma simple y efectiva. Tus clientes pueden explorar tu catálogo completo, ver detalles de productos y realizar pedidos directamente por WhatsApp Business, sin complicaciones ni apps adicionales.",
      image: "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        {
          icon: <Smartphone className="w-6 h-6" />,
          title: "Compras Simples",
          description: "Clientes compran en 3 clics sin registros ni apps complicadas"
        },
        {
          icon: <MessageCircle className="w-6 h-6" />,
          title: "Comunicación Directa",
          description: "Atención personalizada por WhatsApp para cerrar más ventas"
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: "Implementación Rápida",
          description: "Tu catálogo estará listo en menos de 2 semanas"
        }
      ],
      features: [
        "Galería de productos con filtros por categoría",
        "Fichas detalladas con múltiples fotos",
        "Botón de compra directo a WhatsApp",
        "Carrito de compras básico",
        "Cálculo automático de envíos",
        "Diseño optimizado para móviles",
        "Integración con Instagram y Facebook",
        "Sistema de favoritos para clientes"
      ],
      price: "Desde $1,200,000 COP",
      ctaText: "Solicitar Catálogo WhatsApp"
    },
    {
      id: 3,
      icon: <Sparkles className="w-12 h-12" />,
      title: "Landing Page de Producto",
      shortDescription: "Página especializada para promocionar una colección específica o producto estrella.",
      longDescription: "Una landing page de alta conversión diseñada para promocionar un producto o colección específica. Perfecta para lanzamientos, ofertas especiales o productos premium que necesitan una presentación dedicada para maximizar las ventas.",
      image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        {
          icon: <Star className="w-6 h-6" />,
          title: "Conversión Optimizada",
          description: "Diseño enfocado 100% en vender tu producto estrella"
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Genera Expectativa",
          description: "Perfecto para pre-lanzamientos y campañas especiales"
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "ROI Medible",
          description: "Trackea exactamente qué tan efectiva es tu campaña"
        }
      ],
      features: [
        "Diseño enfocado en conversión",
        "Galería de fotos profesional",
        "Video de producto integrado",
        "Testimonios y reseñas de clientes",
        "Contador de urgencia y escasez",
        "Formulario de pre-orden",
        "Integración con pixel de Facebook",
        "A/B testing para optimización"
      ],
      price: "Desde $900,000 COP",
      ctaText: "Solicitar Landing de Producto"
    }
  ];

  const whyChooseUs = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Especialistas en E-commerce",
      description: "Conocemos las mejores prácticas para vender online en Colombia"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Resultados Rápidos",
      description: "Tu tienda online estará generando ventas en 3-4 semanas"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Soporte Post-Venta",
      description: "Te acompañamos para optimizar y hacer crecer tu negocio"
    }
  ];

  const successMetrics = [
    { number: "300%", label: "Aumento promedio en ventas" },
    { number: "24/7", label: "Ventas automáticas" },
    { number: "60%", label: "Clientes compran desde móvil" },
    { number: "15+", label: "Tiendas online exitosas" }
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white">Tienda Online</span>
          </nav>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full mb-6">
            <ShoppingBag className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span className="text-indigo-700 dark:text-indigo-300 font-medium">Especialistas en E-commerce</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Convierte tu negocio en una 
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> máquina de ventas 24/7</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Desde catálogos simples hasta tiendas online completas. Ayudamos a cualquier negocio a vender más 
            con soluciones e-commerce que realmente funcionan en el mercado colombiano.
          </p>
          
          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                  {metric.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#servicios"
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
            >
              Ver Soluciones E-commerce
            </a>
            <Link
              to="/#contact"
              className="px-8 py-4 bg-white dark:bg-navy-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-navy-600 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-200 font-medium"
            >
              Consulta Gratuita
            </Link>
          </div>
        </div>

        {/* Services Detailed Sections */}
        <div id="servicios" className="space-y-24">
          {services.map((service, index) => (
            <div key={service.id} className="relative">
              {/* Service Section */}
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          {service.title}
                        </h2>
                        {service.popular && (
                          <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full">
                            <Star className="w-3 h-3 inline mr-1" />
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-indigo-600 dark:text-indigo-400 font-semibold">
                        {service.price}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {service.longDescription}
                  </p>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Beneficios para tu negocio:
                    </h3>
                    <div className="space-y-4">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 flex-shrink-0">
                            {benefit.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                              {benefit.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Lo que incluye:
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to="/#contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
                  >
                    {service.ctaText}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
                  </div>
                </div>
              </div>

              {/* Separator */}
              {index < services.length - 1 && (
                <div className="mt-24 flex justify-center">
                  <div className="w-24 h-1 bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-600 dark:to-purple-600 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-24 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            ¿Por qué elegir nuestras soluciones e-commerce?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                ¿Listo para multiplicar tus ventas online?
              </h3>
              <p className="text-indigo-100 mb-8 max-w-2xl mx-auto text-lg">
                No importa si vendes ropa, productos digitales, artesanías o servicios. 
                Tenemos la solución e-commerce perfecta para hacer crecer tu negocio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-700 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Solicitar Consulta Gratuita
                </Link>
                <a
                  href="https://wa.me/573182010789?text=Hola Danna, quiero información sobre soluciones e-commerce para mi negocio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Directo
                </a>
              </div>
              <p className="text-indigo-200 text-sm mt-4">
                ⚡ Respuesta garantizada en menos de 24 horas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};