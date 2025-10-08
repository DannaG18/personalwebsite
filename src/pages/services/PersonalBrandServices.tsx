import { Link } from 'react-router-dom';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  CheckCircle, 
  TrendingUp, 
  Clock, 
  Users, 
  Star,
  ArrowRight,
  MessageCircle,
  Eye,
  Award,
  Target
} from 'lucide-react';

export const PersonalBrandServices: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: <User className="w-12 h-12" />,
      title: "Sitio Tipo CV o Bio Link",
      shortDescription: "Página personal profesional que destaque tu experiencia y facilite el contacto.",
      longDescription: "Una presencia digital profesional que funciona como tu tarjeta de presentación 24/7. Perfecta para profesionales que necesitan una plataforma simple pero efectiva para mostrar su experiencia, habilidades y facilitar el contacto con potenciales empleadores o clientes.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        {
          icon: <Eye className="w-6 h-6" />,
          title: "Primera Impresión Profesional",
          description: "Causa una excelente primera impresión con un diseño limpio y profesional"
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: "Disponible 24/7",
          description: "Tu información profesional accesible en cualquier momento y lugar"
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Fácil de Compartir",
          description: "Un solo enlace para compartir toda tu información profesional"
        }
      ],
      features: [
        "Diseño profesional y moderno responsive",
        "Información personal y profesional destacada",
        "Enlaces directos a redes sociales",
        "Botón de descarga de CV en PDF",
        "Formulario de contacto integrado",
        "Optimización SEO básica",
        "Carga rápida y navegación intuitiva"
      ],
      price: "Desde $600,000 COP",
      ctaText: "Solicitar CV Digital"
    },
    {
      id: 2,
      icon: <Briefcase className="w-12 h-12" />,
      title: "Portafolio Visual con Proyectos",
      shortDescription: "Muestra tu trabajo de forma impactante con galerías y descripciones detalladas.",
      longDescription: "Una plataforma visual completa que demuestra tu expertise a través de casos de estudio detallados. Ideal para creativos, desarrolladores, diseñadores y consultores que necesitan mostrar resultados tangibles y atraer clientes de mayor valor.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        {
          icon: <Award className="w-6 h-6" />,
          title: "Demuestra tu Expertise",
          description: "Casos de estudio que prueban tu capacidad y resultados obtenidos"
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Atrae Mejores Proyectos",
          description: "Clientes premium que valoran la calidad y pagan mejor"
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Genera Confianza",
          description: "Testimonios reales que validan tu trabajo y profesionalismo"
        }
      ],
      features: [
        "Galería de proyectos con filtros por categoría",
        "Casos de estudio detallados con resultados",
        "Testimonios y reseñas de clientes",
        "Blog integrado para compartir conocimiento",
        "Sistema de contacto para nuevos proyectos",
        "Integración con redes sociales profesionales",
        "Optimización SEO avanzada",
        "Analytics para medir el impacto"
      ],
      price: "Desde $1,800,000 COP",
      ctaText: "Solicitar Portafolio Profesional",
      featured: true
    },
    {
      id: 3,
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Landing Page de Servicios",
      shortDescription: "Página optimizada para promocionar tus mentorías, cursos o servicios profesionales.",
      longDescription: "Una landing page de alta conversión diseñada específicamente para promocionar y vender tus servicios profesionales. Perfecta para coaches, mentores, consultores y profesionales que ofrecen cursos, asesorías o servicios especializados.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        {
          icon: <Target className="w-6 h-6" />,
          title: "Conversión Optimizada",
          description: "Diseño enfocado 100% en convertir visitantes en clientes"
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Genera Leads Calificados",
          description: "Atrae personas realmente interesadas en tus servicios"
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: "Automatiza Ventas",
          description: "Sistema que vende tus servicios incluso mientras duermes"
        }
      ],
      features: [
        "Descripción persuasiva de servicios",
        "Sistema de reservas y agendamiento",
        "Testimonios y casos de éxito",
        "Integración con pasarelas de pago",
        "Formularios de contacto especializados",
        "Preguntas frecuentes optimizadas",
        "Llamadas a la acción estratégicas",
        "Tracking de conversiones"
      ],
      price: "Desde $1,400,000 COP",
      ctaText: "Solicitar Landing de Servicios"
    }
  ];

  const whyChooseUs = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Especialistas en Marca Personal",
      description: "Entendemos cómo posicionar profesionales y destacar su valor único"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Resultados Rápidos",
      description: "Tu presencia digital estará lista en 2-3 semanas máximo"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Enfoque en Conversión",
      description: "Diseñamos para atraer oportunidades y generar contactos de valor"
    }
  ];

  const successMetrics = [
    { number: "85%", label: "Más oportunidades profesionales" },
    { number: "3x", label: "Aumento en contactos de calidad" },
    { number: "24/7", label: "Presencia digital activa" },
    { number: "20+", label: "Profesionales posicionados" }
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
            <span className="text-gray-900 dark:text-white">Marca Personal y Portafolios</span>
          </nav>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full mb-6">
            <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-700 dark:text-blue-300 font-medium">Especialistas en Marca Personal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Construye una marca personal que 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> abra puertas y genere oportunidades</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Desde CVs digitales profesionales hasta portafolios que impresionan. Ayudamos a profesionales 
            como tú a destacar, atraer mejores oportunidades y posicionarse como expertos en su área.
          </p>
          
          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
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
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
            >
              Ver Soluciones de Marca Personal
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
                      Beneficios para tu carrera profesional:
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
            ¿Por qué elegir nuestros servicios de marca personal?
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
                ¿Listo para destacar profesionalmente?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                No dejes que tu talento pase desapercibido. Construye una presencia digital 
                que abra puertas, genere oportunidades y te posicione como el experto que eres.
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
                  href="https://wa.me/573182010789?text=Hola Danna, quiero información sobre servicios de marca personal y portafolios"
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