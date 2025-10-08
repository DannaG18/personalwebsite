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
      title: "Web Premium con Galería de Resultados",
      shortDescription: "Sitio web elegante que muestre tus mejores casos y permita agendar tratamientos estéticos online.",
      longDescription: "Una solución web premium diseñada específicamente para clínicas estéticas y odontologías que quieren atraer pacientes de alto valor. Incluye galería profesional de antes/después, sistema de citas para tratamientos, y una presencia digital que transmite lujo y profesionalismo desde el primer contacto.",
      image: "https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        {
          icon: <Calendar className="w-6 h-6" />,
          title: "Citas para Tratamientos Premium",
          description: "Sistema especializado para agendar consultas estéticas y tratamientos de alto valor"
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Transmite Lujo y Confianza",
          description: "Diseño premium que atrae pacientes dispuestos a invertir en tratamientos de calidad"
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Pacientes de Mayor Valor",
          description: "Atrae clientes interesados en tratamientos estéticos y procedimientos premium"
        }
      ],
      features: [
        "Galería profesional de antes y después",
        "Sistema de citas para tratamientos estéticos",
        "Perfiles de especialistas con certificaciones",
        "Información detallada de procedimientos",
        "Integración con WhatsApp Business",
        "Testimonios reales con fotos de resultados",
        "Certificaciones y acreditaciones estéticas",
        "Optimización para búsquedas locales (SEO)",
        "Diseño responsive para móviles",
        "Diseño premium que transmite confianza"
      ],
      price: "Desde $2,800,000 COP",
      ctaText: "Solicitar Web Premium",
      featured: true
    },
    {
      id: 2,
      icon: <Heart className="w-12 h-12" />,
      title: "Landing Page de Tratamiento Específico",
      shortDescription: "Página especializada para promocionar un tratamiento estético específico y generar citas calificadas.",
      longDescription: "Una landing page de alta conversión diseñada para promocionar tratamientos estéticos específicos como blanqueamiento dental, botox, rellenos, lifting facial, implantes dentales o cualquier procedimiento premium. Perfecta para campañas de Google Ads y redes sociales dirigidas a pacientes interesados en tratamientos de alto valor.",
      image: "https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        {
          icon: <UserCheck className="w-6 h-6" />,
          title: "Pacientes Interesados en el Tratamiento",
          description: "Atrae personas específicamente interesadas en el procedimiento que promocionas"
        },
        {
          icon: <Star className="w-6 h-6" />,
          title: "Posiciónate como Experto",
          description: "Demuestra tu especialización en el tratamiento específico que ofreces"
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Más Consultas Premium",
          description: "Diseño optimizado para convertir visitantes en citas para tratamientos de alto valor"
        }
      ],
      features: [
        "Enfoque específico en un tratamiento estético",
        "Casos de éxito con fotos de antes y después",
        "Galería de resultados reales del tratamiento",
        "Información detallada del procedimiento y beneficios",
        "Formulario de consulta para el tratamiento específico",
        "Integración con campañas de Google Ads",
        "Certificaciones y experiencia del especialista",
        "Preguntas frecuentes sobre el tratamiento"
      ],
      price: "Desde $1,100,000 COP",
      ctaText: "Solicitar Landing de Tratamiento"
    },
    {
      id: 3,
      icon: <Users className="w-12 h-12" />,
      title: "Perfiles de Especialistas Estéticos",
      shortDescription: "Sección dedicada a mostrar la experiencia y especialización de tu equipo en tratamientos estéticos.",
      longDescription: "Una plataforma digital que destaca la experiencia, formación especializada y casos de éxito de tu equipo en tratamientos estéticos y odontología cosmética. Incluye perfiles profesionales con certificaciones internacionales, especialidades específicas y galería de resultados, generando confianza en pacientes que buscan tratamientos premium.",
      image: "https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Credibilidad en Estética",
          description: "Muestra certificaciones internacionales y especialización en tratamientos estéticos"
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Confianza Antes del Tratamiento",
          description: "Los pacientes conocen al especialista y ven sus resultados antes de decidir"
        },
        {
          icon: <Star className="w-6 h-6" />,
          title: "Diferenciación Premium",
          description: "Destaca la especialización que justifica precios premium en tratamientos"
        }
      ],
      features: [
        "Perfiles con fotos profesionales y especialización",
        "Certificaciones internacionales en estética",
        "Especialidades específicas (botox, rellenos, etc.)",
        "Años de experiencia y casos exitosos",
        "Testimonios con fotos de resultados",
        "Horarios de consulta por especialista",
        "Reconocimientos y formación internacional",
        "Integración con sistema de citas"
      ],
      price: "Desde $1,500,000 COP",
      ctaText: "Solicitar Perfiles de Especialistas"
    }
  ];

  const whyChooseUs = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Especialización en Estética",
      description: "Conocemos las necesidades específicas de clínicas estéticas y odontología cosmética"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Implementación Rápida",
      description: "Tu clínica estará atrayendo pacientes premium en 3-4 semanas máximo"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Diseño Premium",
      description: "Creamos presencias digitales que justifican precios premium en tratamientos"
    }
  ];

  const successMetrics = [
    { number: "85%", label: "Más consultas estéticas" },
    { number: "60%", label: "Aumento en tratamientos premium" },
    { number: "24/7", label: "Atracción de pacientes" },
    { number: "15+", label: "Clínicas estéticas exitosas" }
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
            <span className="text-purple-700 dark:text-purple-300 font-medium">Especialistas en Clínicas Estéticas</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Haz crecer tu clínica estética y 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> atrae pacientes premium</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Desde webs que muestran tus mejores resultados hasta sistemas de citas para tratamientos premium. 
            Ayudamos a clínicas estéticas, odontologías y consultorios privados a atraer pacientes de mayor valor.
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
              Ver Soluciones para Clínicas
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
            ¿Por qué elegir nuestras soluciones para clínicas estéticas?
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
                ¿Listo para hacer crecer tu clínica estética?
              </h3>
              <p className="text-purple-100 mb-8 max-w-2xl mx-auto text-lg">
                No dejes que tus pacientes elijan a la competencia. Ofrece una experiencia digital 
                premium que atraiga pacientes dispuestos a invertir en tratamientos de calidad.
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
                  href="https://wa.me/573182010789?text=Hola Danna, quiero información sobre servicios web para mi clínica estética"
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