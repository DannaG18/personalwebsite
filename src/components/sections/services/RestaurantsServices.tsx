import React from 'react';
import { Link } from 'react-router-dom';
import { 
  UtensilsCrossed, 
  Smartphone, 
  ShoppingCart, 
  CheckCircle, 
  TrendingUp, 
  Clock, 
  Users, 
  Star,
  ArrowRight,
  MessageCircle,
  Camera,
  MapPin
} from 'lucide-react';

export const RestaurantsServices: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: <UtensilsCrossed className="w-12 h-12" />,
      title: "Landing Page Promocional",
      shortDescription: "Página atractiva que destaque tu restaurante, ambiente y especialidades para atraer más clientes.",
      longDescription: "Una landing page profesional diseñada específicamente para mostrar la esencia de tu restaurante. Destacamos tu ambiente único, tus platos estrella y la experiencia gastronómica que ofreces, todo optimizado para convertir visitantes en clientes hambrientos.",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Más Reservas",
          description: "Aumenta las reservas hasta un 35% con una presencia digital atractiva"
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Atrae Nuevos Clientes",
          description: "Llega a clientes que buscan restaurantes online en tu zona"
        },
        {
          icon: <Star className="w-6 h-6" />,
          title: "Mejora tu Reputación",
          description: "Proyecta profesionalismo y calidad desde el primer contacto"
        }
      ],
      features: [
        "Diseño visual atractivo y profesional",
        "Galería de fotos del local y platos",
        "Información de contacto y ubicación optimizada",
        "Integración con redes sociales",
        "Formulario de reservas simple",
        "Optimización para móviles",
        "Carga rápida y SEO básico"
      ],
      price: "Desde $800,000 COP",
      ctaText: "Solicitar Landing Page"
    },
    {
      id: 2,
      icon: <UtensilsCrossed className="w-12 h-12" />,
      title: "Sitio Web Profesional con Menú Digital",
      shortDescription: "Web completa con menú interactivo, información del restaurante y sistema de reservas.",
      longDescription: "Una solución web completa que transforma la experiencia de tus clientes. Incluye un menú digital interactivo, sistema de reservas automatizado y toda la información que tus clientes necesitan para elegir tu restaurante una y otra vez.",
      image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        {
          icon: <Clock className="w-6 h-6" />,
          title: "Ahorra Tiempo",
          description: "Reduce llamadas para consultas básicas y reservas"
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Aumenta Ventas",
          description: "Menú digital atractivo que impulsa pedidos de mayor valor"
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Mejor Experiencia",
          description: "Clientes informados toman decisiones más rápidas"
        }
      ],
      features: [
        "Menú digital actualizable en tiempo real",
        "Sistema de reservas automatizado",
        "Galería profesional de platos",
        "Información nutricional y alérgenos",
        "Horarios y ubicación destacados",
        "Testimonios de clientes",
        "Blog para promociones especiales",
        "Panel de administración fácil de usar"
      ],
      price: "Desde $1,500,000 COP",
      ctaText: "Solicitar Sitio Web Completo"
    },
    {
      id: 3,
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "Web con Pedidos por WhatsApp",
      shortDescription: "Plataforma que permite a tus clientes hacer pedidos directamente por WhatsApp o integrar delivery.",
      longDescription: "La solución perfecta para restaurantes que quieren vender 24/7. Tus clientes pueden explorar tu menú, armar su pedido y enviarlo directamente a tu WhatsApp Business. Ideal para delivery, take away y pedidos especiales.",
      image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        {
          icon: <MessageCircle className="w-6 h-6" />,
          title: "Pedidos 24/7",
          description: "Recibe pedidos incluso cuando el restaurante está cerrado"
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Más Ventas de Delivery",
          description: "Incrementa pedidos de delivery hasta un 60%"
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: "Proceso Rápido",
          description: "Clientes ordenan en 3 clics, sin apps complicadas"
        }
      ],
      features: [
        "Catálogo de productos con fotos",
        "Carrito de compras intuitivo",
        "Integración directa con WhatsApp Business",
        "Cálculo automático de totales",
        "Sistema de delivery con zonas",
        "Gestión de horarios de atención",
        "Promociones y descuentos",
        "Reportes de ventas básicos"
      ],
      price: "Desde $2,200,000 COP",
      ctaText: "Solicitar Sistema de Pedidos"
    }
  ];

  const whyChooseUs = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Especialización en Restaurantes",
      description: "Entendemos las necesidades específicas del sector gastronómico"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Entrega Rápida",
      description: "Tu sitio web estará listo en 2-3 semanas máximo"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Soporte Continuo",
      description: "Te acompañamos después del lanzamiento para asegurar tu éxito"
    }
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
            <span className="text-gray-900 dark:text-white">Restaurantes y Cafeterías</span>
          </nav>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full mb-6">
            <UtensilsCrossed className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-700 dark:text-blue-300 font-medium">Especialistas en Restaurantes</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Haz que tu restaurante sea 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> irresistible online</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Transforma tu restaurante en un imán de clientes hambrientos. Desde landing pages que despiertan el apetito 
            hasta sistemas de pedidos que venden mientras duermes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#servicios"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
            >
              Ver Soluciones
            </a>
            <Link
              to="/#contact"
              className="px-8 py-4 bg-white dark:bg-navy-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-navy-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-200 font-medium"
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
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {service.title}
                      </h2>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">
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
                      Beneficios para tu restaurante:
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
                          <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
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
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
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
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-20 blur-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
                  </div>
                </div>
              </div>

              {/* Separator */}
              {index < services.length - 1 && (
                <div className="mt-24 flex justify-center">
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-indigo-300 dark:from-blue-600 dark:to-indigo-600 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            ¿Por qué elegir nuestros servicios?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white">
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
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                ¿Listo para hacer crecer tu restaurante?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                No dejes que tus competidores se adelanten. Solicita una consulta gratuita y descubre 
                cómo podemos ayudarte a atraer más clientes hambrientos y aumentar tus ventas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Solicitar Consulta Gratuita
                </Link>
                <a
                  href="https://wa.me/573182010789?text=Hola Danna, quiero información sobre servicios web para mi restaurante"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Directo
                </a>
              </div>
              <p className="text-blue-200 text-sm mt-4">
                ⚡ Respuesta garantizada en menos de 24 horas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};    