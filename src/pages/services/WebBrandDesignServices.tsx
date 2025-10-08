import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  Sparkles, 
  FileText, 
  CheckCircle, 
  TrendingUp, 
  Clock, 
  Users, 
  Star,
  ArrowRight,
  MessageCircle,
  Eye,
  Award,
  Target,
  Heart,
  Zap
} from 'lucide-react';

export const WebBrandDesignServices: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: <Palette className="w-12 h-12" />,
      title: "Identidad Visual Completa",
      shortDescription: "Diseño de logo, paleta de colores y tipografía que represente la esencia de tu marca.",
      longDescription: "Una identidad visual completa que capture la esencia de tu marca y conecte emocionalmente con tu audiencia. Incluye diseño de logo profesional, paleta de colores estratégica, selección tipográfica y todas las aplicaciones necesarias para establecer una presencia visual coherente y memorable.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        {
          icon: <Eye className="w-6 h-6" />,
          title: "Reconocimiento Inmediato",
          description: "Logo y colores únicos que hacen tu marca memorable y fácil de reconocer"
        },
        {
          icon: <Heart className="w-6 h-6" />,
          title: "Conexión Emocional",
          description: "Diseño que transmite los valores de tu marca y conecta con tu audiencia"
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Diferenciación Competitiva",
          description: "Identidad única que te distingue claramente de la competencia"
        }
      ],
      features: [
        "Diseño de logo profesional único",
        "Paleta de colores estratégica (primarios y secundarios)",
        "Selección tipográfica coherente",
        "Aplicaciones en diferentes formatos (PNG, SVG, PDF)",
        "Versiones del logo (horizontal, vertical, isotipo)",
        "Guía básica de uso de colores",
        "Mockups de aplicación en productos",
        "Archivos fuente editables"
      ],
      price: "Desde $1,800,000 COP",
      ctaText: "Solicitar Identidad Visual"
    },
    {
      id: 2,
      icon: <FileText className="w-12 h-12" />,
      title: "Manual de Marca + Landing Page",
      shortDescription: "Guía completa de uso de marca más landing page inicial para establecer tu presencia digital.",
      longDescription: "La solución completa para establecer tu marca digitalmente. Incluye un manual de marca profesional con todas las guías de uso, aplicaciones y especificaciones técnicas, más una landing page inicial que refleje perfectamente tu nueva identidad visual y comience a generar resultados desde el primer día.",
      image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        {
          icon: <Award className="w-6 h-6" />,
          title: "Consistencia Profesional",
          description: "Manual detallado que asegura el uso correcto de tu marca en todos los medios"
        },
        {
          icon: <Zap className="w-6 h-6" />,
          title: "Presencia Digital Inmediata",
          description: "Landing page que pone tu marca en acción desde el primer día"
        },
        {
          icon: <Target className="w-6 h-6" />,
          title: "Estrategia Integral",
          description: "Combinación perfecta de identidad visual y presencia digital efectiva"
        }
      ],
      features: [
        "Manual de identidad visual completo",
        "Guías de uso y aplicación detalladas",
        "Especificaciones técnicas para impresión",
        "Landing page profesional responsive",
        "Integración perfecta de la identidad visual",
        "Optimización SEO básica",
        "Formulario de contacto integrado",
        "Hosting y dominio incluido por 1 año"
      ],
      price: "Desde $2,500,000 COP",
      ctaText: "Solicitar Paquete Completo",
      featured: true
    },
    {
      id: 3,
      icon: <Sparkles className="w-12 h-12" />,
      title: "Rediseño de Marca Existente",
      shortDescription: "Modernización y mejora de tu identidad visual actual para mayor impacto y relevancia.",
      longDescription: "Transformación estratégica de tu marca existente para adaptarla a las tendencias actuales y mejorar su impacto en el mercado. Analizamos tu identidad actual, identificamos oportunidades de mejora y creamos una versión renovada que mantenga el reconocimiento pero con mayor fuerza visual y comercial.",
      image: "https://images.pexels.com/photos/196666/pexels-photo-196666.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Modernización Estratégica",
          description: "Actualiza tu imagen sin perder el reconocimiento ya construido"
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Mayor Conexión",
          description: "Diseño renovado que conecta mejor con tu audiencia actual"
        },
        {
          icon: <Star className="w-6 h-6" />,
          title: "Impacto Mejorado",
          description: "Identidad más fuerte que genera mayor recordación y preferencia"
        }
      ],
      features: [
        "Análisis de la marca actual",
        "Propuesta de mejoras estratégicas",
        "Rediseño de logo y elementos visuales",
        "Paleta de colores actualizada",
        "Comparativa antes/después",
        "Guía de transición gradual",
        "Aplicaciones en nuevos formatos",
        "Soporte durante la implementación"
      ],
      price: "Desde $2,200,000 COP",
      ctaText: "Solicitar Rediseño de Marca"
    }
  ];

  const whyChooseUs = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Especialistas en Branding",
      description: "Entendemos cómo crear marcas que conecten emocionalmente y generen resultados"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Proceso Eficiente",
      description: "Tu nueva identidad visual estará lista en 3-4 semanas máximo"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Enfoque Estratégico",
      description: "No solo diseñamos bonito, creamos marcas que venden y perduran"
    }
  ];

  const successMetrics = [
    { number: "95%", label: "Clientes satisfechos con su nueva marca" },
    { number: "3x", label: "Aumento en reconocimiento de marca" },
    { number: "24/7", label: "Tu marca trabajando por ti" },
    { number: "25+", label: "Marcas exitosas creadas" }
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
            <span className="text-gray-900 dark:text-white">Diseño de Marca Web</span>
          </nav>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full mb-6">
            <Palette className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span className="text-indigo-700 dark:text-indigo-300 font-medium">Especialistas en Branding Digital</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Crea una marca que 
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> conecte, inspire y venda</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Desde identidades visuales completas hasta rediseños estratégicos. Creamos marcas memorables 
            que generan conexión emocional con tu audiencia y impulsan el crecimiento de tu negocio.
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
              Ver Soluciones de Branding
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
                        {service.featured && (
                          <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full">
                            <Star className="w-3 h-3 inline mr-1" />
                            Recomendado
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
                      Beneficios para tu marca:
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
            ¿Por qué elegir nuestros servicios de branding?
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
                ¿Listo para crear una marca memorable?
              </h3>
              <p className="text-indigo-100 mb-8 max-w-2xl mx-auto text-lg">
                No dejes que tu negocio pase desapercibido. Crea una identidad visual que conecte 
                emocionalmente con tu audiencia y diferencie tu marca de la competencia.
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
                  href="https://wa.me/573182010789?text=Hola Danna, quiero información sobre servicios de diseño de marca y branding"
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