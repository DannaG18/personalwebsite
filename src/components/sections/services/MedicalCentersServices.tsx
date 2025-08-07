import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  Calendar, 
  Users, 
  CheckCircle, 
  TrendingUp, 
  Clock, 
  Shield, 
  Star,
  ArrowRight,
  MessageCircle,
  Heart,
  UserCheck
} from 'lucide-react';

export const MedicalCentersServices: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: <Stethoscope className="w-12 h-12" />,
      title: "Web Institucional con Agendamiento",
      shortDescription: "Sitio web profesional que inspire confianza y permita a pacientes agendar citas online.",
      longDescription: "Una solución web completa que transforma la experiencia de tus pacientes y optimiza la gestión de tu centro médico. Incluye sistema de citas automatizado, información detallada de servicios médicos y una presencia digital que inspira confianza profesional desde el primer contacto.",
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        {
          icon: <Calendar className="w-6 h-6" />,
          title: "Citas Automatizadas",
          description: "Reduce llamadas telefónicas hasta un 70% con sistema de agendamiento online"
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Genera Confianza",
          description: "Presencia profesional que tranquiliza a pacientes antes de la consulta"
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Más Pacientes Nuevos",
          description: "Atrae pacientes que buscan servicios médicos online en tu zona"
        }
      ],
      features: [
        "Sistema de citas online con calendario integrado",
        "Perfiles detallados del equipo médico",
        "Información completa de servicios y especialidades",
        "Formularios de contacto seguros",
        "Integración con WhatsApp Business",
        "Testimonios y reseñas de pacientes",
        "Certificaciones y acreditaciones destacadas",
        "Optimización para búsquedas locales (SEO)",
        "Diseño responsive para móviles",
        "Cumplimiento de normativas de salud"
      ],
      price: "Desde $2,800,000 COP",
      ctaText: "Solicitar Web Institucional",
      featured: true
    },
    {
      id: 2,
      icon: <Heart className="w-12 h-12" />,
      title: "Landing Page de Servicios Especializados",
      shortDescription: "Página especializada para promocionar tratamientos específicos y generar leads calificados.",
      longDescription: "Una landing page de alta conversión diseñada para promocionar servicios médicos específicos como odontología estética, cirugías, tratamientos especializados o programas de salud. Perfecta para campañas dirigidas y generación de pacientes interesados en servicios premium.",
      image: "https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        {
          icon: <UserCheck className="w-6 h-6" />,
          title: "Pacientes Calificados",
          description: "Atrae pacientes específicamente interesados en tu especialidad"
        },
        {
          icon: <Star className="w-6 h-6" />,
          title: "Destaca tu Expertise",
          description: "Posiciona tu centro como líder en tratamientos especializados"
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Mayor Conversión",
          description: "Diseño optimizado para convertir visitantes en consultas"
        }
      ],
      features: [
        "Enfoque específico en un servicio médico",
        "Casos de éxito y testimonios reales",
        "Galería de antes y después (cuando aplique)",
        "Información detallada del procedimiento",
        "Formulario de consulta especializada",
        "Integración con campañas de Google Ads",
        "Certificaciones y experiencia del médico",
        "Preguntas frecuentes especializadas"
      ],
      price: "Desde $1,100,000 COP",
      ctaText: "Solicitar Landing Especializada"
    },
    {
      id: 3,
      icon: <Users className="w-12 h-12" />,
      title: "Perfil Completo del Equipo Médico",
      shortDescription: "Sección dedicada a mostrar la experiencia y credenciales de tu equipo profesional.",
      longDescription: "Una plataforma digital que destaca la experiencia, formación y especialidades de tu equipo médico. Incluye perfiles profesionales detallados, certificaciones, áreas de expertise y testimonios de pacientes, generando confianza y credibilidad en tu centro médico.",
      image: "https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Credibilidad Profesional",
          description: "Muestra las credenciales que tranquilizan a los pacientes"
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Conexión Humana",
          description: "Los pacientes conocen a su médico antes de la consulta"
        },
        {
          icon: <Star className="w-6 h-6" />,
          title: "Diferenciación",
          description: "Destaca la experiencia que te diferencia de la competencia"
        }
      ],
      features: [
        "Perfiles profesionales con foto y biografía",
        "Formación académica y certificaciones",
        "Especialidades y áreas de expertise",
        "Años de experiencia y casos tratados",
        "Testimonios específicos por médico",
        "Horarios de atención por especialista",
        "Publicaciones y reconocimientos",
        "Integración con sistema de citas"
      ],
      price: "Desde $1,500,000 COP",
      ctaText: "Solicitar Perfiles Médicos"
    }
  ];

  const whyChooseUs = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Especialización en Salud",
      description: "Conocemos las necesidades específicas del sector médico y odontológico"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Implementación Rápida",
      description: "Tu presencia digital estará lista en 3-4 semanas máximo"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cumplimiento Normativo",
      description: "Aseguramos el cumplimiento de regulaciones de salud y privacidad"
    }
  ];

  const successMetrics = [
    { number: "70%", label: "Reducción en llamadas" },
    { number: "45%", label: "Más citas online" },
    { number: "24/7", label: "Disponibilidad de agendamiento" },
    { number: "10+", label: "Centros médicos exitosos" }
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
            <span className="text-gray-900 dark:text-white">Centros Médicos y Odontologías</span>
          </nav>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-full mb-6">
            <Stethoscope className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-purple-700 dark:text-purple-300 font-medium">Especialistas en Salud Digital</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Moderniza tu centro médico y 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> atrae más pacientes</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Desde webs institucionales que inspiran confianza hasta sistemas de citas automatizados. 
            Ayudamos a centros médicos y odontologías a brindar una experiencia digital profesional.
          </p>
          
          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
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
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
            >
              Ver Soluciones Médicas
            </a>
            <Link
              to="/#contact"
              className="px-8 py-4 bg-white dark:bg-navy-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-navy-600 rounded-lg hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-200 font-medium"
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
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white">
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
                      <p className="text-purple-600 dark:text-purple-400 font-semibold">
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
                      Beneficios para tu centro médico:
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
                          <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
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
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
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
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-20 blur-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-20 blur-xl"></div>
                  </div>
                </div>
              </div>

              {/* Separator */}
              {index < services.length - 1 && (
                <div className="mt-24 flex justify-center">
                  <div className="w-24 h-1 bg-gradient-to-r from-purple-300 to-blue-300 dark:from-purple-600 dark:to-blue-600 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-24 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            ¿Por qué elegir nuestras soluciones médicas?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white">
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
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                ¿Listo para modernizar tu centro médico?
              </h3>
              <p className="text-purple-100 mb-8 max-w-2xl mx-auto text-lg">
                No dejes que tus pacientes busquen alternativas. Ofrece una experiencia digital 
                profesional que inspire confianza y facilite el acceso a tus servicios médicos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-700 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Solicitar Consulta Gratuita
                </Link>
                <a
                  href="https://wa.me/573182010789?text=Hola Danna, quiero información sobre servicios web para mi centro médico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Directo
                </a>
              </div>
              <p className="text-purple-200 text-sm mt-4">
                ⚡ Respuesta garantizada en menos de 24 horas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};