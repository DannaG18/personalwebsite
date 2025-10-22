import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  Users, 
  Clock, 
  Star,
  ArrowRight,
  MessageCircle,
  BarChart3,
  Smartphone,
  Eye,
  Award,
  Heart,
  Sparkles
} from 'lucide-react';

export const LandingPagesServices: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: <Target className="w-12 h-12" />,
      title: "Landing Page para Influencers",
      shortDescription: "Página optimizada para influencers que buscan monetizar su audiencia y generar ingresos constantes.",
      longDescription: "Una landing page diseñada específicamente para influencers, creadores de contenido y personalidades digitales que quieren convertir su audiencia en ingresos reales. Incluye secciones para promocionar cursos, mentorías, productos digitales o colaboraciones, con un diseño que refleje tu marca personal y maximice las conversiones.",
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Monetiza tu Audiencia",
          description: "Convierte seguidores en clientes pagos con ofertas irresistibles"
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Captura Leads Calificados",
          description: "Construye una lista de email de personas realmente interesadas"
        },
        {
          icon: <Sparkles className="w-6 h-6" />,
          title: "Refleja tu Marca Personal",
          description: "Diseño único que representa tu estilo y personalidad"
        }
      ],
      features: [
        "Diseño personalizado que refleje tu marca",
        "Sección de servicios/productos destacados",
        "Formularios de captura de leads optimizados",
        "Integración con herramientas de email marketing",
        "Testimonios y casos de éxito",
        "Call-to-actions estratégicamente ubicados",
        "Optimización para móviles (donde está tu audiencia)",
        "Integración con redes sociales",
        "Analytics para medir conversiones",
        "Sección de colaboraciones y partnerships"
      ],
      price: "Desde $1,200,000 COP",
      ctaText: "Solicitar Landing para Influencer"
    },
    {
      id: 2,
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Landing Page de Producto/Servicio",
      shortDescription: "Página de alta conversión para promocionar un producto o servicio específico y generar ventas directas.",
      longDescription: "Una landing page laser-enfocada en vender un producto o servicio específico. Diseñada con técnicas de copywriting persuasivo, prueba social y elementos de urgencia para maximizar las conversiones. Perfecta para lanzamientos de productos, cursos online, servicios de consultoría o cualquier oferta que necesite su propia página dedicada.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        {
          icon: <Target className="w-6 h-6" />,
          title: "Conversión Maximizada",
          description: "Diseño y copy optimizados específicamente para vender tu oferta"
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: "Resultados Rápidos",
          description: "Empieza a generar ventas desde el primer día de lanzamiento"
        },
        {
          icon: <BarChart3 className="w-6 h-6" />,
          title: "ROI Medible",
          description: "Tracking completo para medir el retorno de tu inversión"
        }
      ],
      features: [
        "Headline irresistible que capture atención",
        "Descripción persuasiva del producto/servicio",
        "Beneficios claros y orientados al cliente",
        "Testimonios reales y casos de éxito",
        "Elementos de urgencia y escasez",
        "Formulario de compra/contacto optimizado",
        "Garantías y políticas de devolución",
        "FAQ para resolver objeciones comunes",
        "Integración con pasarelas de pago",
        "Pixel de Facebook y Google Analytics",
        "Optimización para campañas de ads",
        "A/B testing de elementos clave"
      ],
      price: "Desde $1,800,000 COP",
      ctaText: "Solicitar Landing de Producto",
      featured: true
    },
    {
      id: 3,
      icon: <Users className="w-12 h-12" />,
      title: "Landing Page de Captura de Leads",
      shortDescription: "Página especializada en construir tu lista de email y generar leads calificados para tu negocio.",
      longDescription: "Una landing page diseñada específicamente para capturar información de contacto de prospectos interesados en tu negocio. Incluye lead magnets irresistibles, formularios optimizados y secuencias de seguimiento automatizadas. Perfecta para coaches, consultores, agencias y cualquier negocio que necesite generar leads de calidad de forma constante.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        {
          icon: <Users className="w-6 h-6" />,
          title: "Lista de Prospectos Calificados",
          description: "Construye una base de datos de personas interesadas en tu negocio"
        },
        {
          icon: <Eye className="w-6 h-6" />,
          title: "Lead Magnets Irresistibles",
          description: "Ofertas de valor que motivan a las personas a dejar sus datos"
        },
        {
          icon: <Zap className="w-6 h-6" />,
          title: "Automatización Integrada",
          description: "Secuencias de email automáticas para nutrir tus leads"
        }
      ],
      features: [
        "Lead magnet estratégicamente diseñado",
        "Formulario de captura optimizado",
        "Página de agradecimiento personalizada",
        "Integración con autoresponders (Mailchimp, etc.)",
        "Secuencia de emails de bienvenida",
        "Segmentación automática de leads",
        "Tracking de fuentes de tráfico",
        "Optimización de tasa de conversión",
        "Diseño mobile-first",
        "Integración con CRM",
        "Reportes de performance detallados",
        "Pruebas A/B de formularios"
      ],
      price: "Desde $1,000,000 COP",
      ctaText: "Solicitar Landing de Leads"
    },
    {
      id: 4,
      icon: <Award className="w-12 h-12" />,
      title: "Landing Page para Eventos/Webinars",
      shortDescription: "Página especializada para promocionar y registrar asistentes a eventos, webinars o masterclasses.",
      longDescription: "Una landing page diseñada para maximizar registros a tus eventos digitales o presenciales. Incluye elementos de urgencia, agenda atractiva, información del speaker y formulario de registro optimizado. Perfecta para webinars, masterclasses, workshops, conferencias o cualquier evento que necesite promoción y registro de asistentes.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        {
          icon: <Users className="w-6 h-6" />,
          title: "Más Registros",
          description: "Diseño optimizado para maximizar inscripciones a tu evento"
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: "Información Clara",
          description: "Agenda, beneficios y detalles presentados de forma atractiva"
        },
        {
          icon: <Star className="w-6 h-6" />,
          title: "Credibilidad del Speaker",
          description: "Sección dedicada a establecer tu autoridad y experiencia"
        }
      ],
      features: [
        "Título del evento impactante",
        "Agenda detallada y beneficios claros",
        "Perfil del speaker con credenciales",
        "Contador regresivo hasta el evento",
        "Formulario de registro simple",
        "Testimonios de eventos anteriores",
        "Información técnica (plataforma, requisitos)",
        "Recordatorios automáticos por email",
        "Integración con plataformas de webinar",
        "Página de confirmación de registro",
        "Seguimiento post-evento",
        "Opción de replay o grabación"
      ],
      price: "Desde $1,400,000 COP",
      ctaText: "Solicitar Landing de Evento"
    }
  ];

  const whyChooseUs = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Especialistas en Conversión",
      description: "Conocemos las técnicas psicológicas y de diseño que realmente convierten"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Resultados Rápidos",
      description: "Tu landing page estará generando leads/ventas en 2-3 semanas"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Optimización Continua",
      description: "Incluimos A/B testing y optimizaciones basadas en datos reales"
    }
  ];

  const successMetrics = [
    { number: "5x", label: "Más conversiones vs redes sociales" },
    { number: "25%", label: "Tasa de conversión promedio" },
    { number: "48h", label: "Tiempo de implementación" },
    { number: "30+", label: "Landing pages exitosas" }
  ];

  return (
    <>
        <title>Landing Pages de Alto Impacto - Conversión Optimizada | Danna Álvarez</title>
        <meta name="description" content="Landing pages de alta conversión para influencers, coaches y negocios. Diseños optimizados que convierten visitantes en clientes y generan leads calificados." />
        <meta name="keywords" content="landing pages, páginas de conversión, influencers, lead generation, marketing digital, conversión optimizada" />
      <section className="py-24 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <Link to="/" className="hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white">Landing Pages de Alto Impacto</span>
          </nav>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-full mb-6">
            <Zap className="w-5 h-5 text-yellow-600 dark:text-yellow-400" aria-hidden="true" />
            <span className="text-yellow-700 dark:text-yellow-300 font-medium">Especialistas en Conversión</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Landing pages que 
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent"> convierten visitantes en clientes</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Desde páginas para influencers hasta landing pages de productos específicos. Creamos experiencias 
            de conversión optimizadas que transforman tu tráfico en leads calificados y ventas reales.
          </p>
          
          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-1">
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
              className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-lg hover:from-yellow-700 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
            >
              Ver Soluciones de Conversión
            </a>
            <Link
              to="/#contact"
              className="px-8 py-4 bg-white dark:bg-navy-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-navy-600 rounded-lg hover:border-yellow-500 dark:hover:border-yellow-400 transition-all duration-200 font-medium"
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
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-2xl flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                          {service.title}
                        </h2>
                        {service.featured && (
                          <span className="px-3 py-1 bg-gradient-to-r from-green-400 to-blue-400 text-white text-xs font-bold rounded-full">
                            <Star className="w-3 h-3 inline mr-1" />
                            Más Popular
                          </span>
                        )}
                      </div>
                      <p className="text-yellow-600 dark:text-yellow-400 font-semibold">
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
                          <CheckCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
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
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-lg hover:from-yellow-700 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
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
                        alt={`Ejemplo de ${service.title} - diseño optimizado para conversión`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 blur-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-20 blur-xl"></div>
                  </div>
                </div>
              </div>

              {/* Separator */}
              {index < services.length - 1 && (
                <div className="mt-24 flex justify-center">
                  <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-orange-300 dark:from-yellow-600 dark:to-orange-600 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-24 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-3xl p-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            ¿Por qué elegir nuestras landing pages?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
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
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4">
                ¿Listo para multiplicar tus conversiones?
              </h2>
              <p className="text-yellow-100 mb-8 max-w-2xl mx-auto text-lg">
                No dejes que tu tráfico se desperdicie. Crea una landing page que convierta 
                cada visitante en una oportunidad real de negocio y haga crecer tus ingresos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-yellow-700 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Solicitar Consulta Gratuita
                </Link>
                <a
                  href="https://wa.me/573182010789?text=Hola Danna, quiero información sobre landing pages de alta conversión"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Directo
                </a>
              </div>
              <p className="text-yellow-200 text-sm mt-4">
                ⚡ Respuesta garantizada en menos de 24 horas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};