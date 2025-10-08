import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Calendar, 
  Camera, 
  CheckCircle, 
  TrendingUp, 
  Clock, 
  Users, 
  Star,
  ArrowRight,
  MessageCircle,
  Gift,
  MapPin,
  Music,
  Sparkles
} from 'lucide-react';

export const WeddingServices: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: <Heart className="w-12 h-12" />,
      title: "Invitación Digital Elegante",
      shortDescription: "Invitación web personalizada con toda la información de tu boda y confirmación de asistencia.",
      longDescription: "Una invitación digital elegante y personalizada que refleje el estilo único de tu boda. Incluye toda la información esencial para tus invitados: fecha, hora, ubicación, dress code y un sistema de confirmación de asistencia que te facilita la organización. Perfecta para parejas modernas que buscan una alternativa ecológica y práctica.",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        {
          icon: <Calendar className="w-6 h-6" />,
          title: "Organización Simplificada",
          description: "Sistema automático de confirmaciones que facilita la planificación"
        },
        {
          icon: <Sparkles className="w-6 h-6" />,
          title: "Diseño Personalizado",
          description: "Invitación única que refleja el estilo y personalidad de la pareja"
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: "Ahorra Tiempo y Dinero",
          description: "Sin costos de impresión ni envío, lista en días no semanas"
        }
      ],
      features: [
        "Diseño personalizado con colores de la boda",
        "Información completa de ceremonia y recepción",
        "Sistema de confirmación RSVP automático",
        "Contador regresivo hasta el gran día",
        "Mapa interactivo de ubicaciones",
        "Galería de fotos de la pareja",
        "Información de dress code y recomendaciones",
        "Optimizada para compartir en redes sociales"
      ],
      price: "Desde $700,000 COP",
      ctaText: "Solicitar Invitación Digital"
    },
    {
      id: 2,
      icon: <Gift className="w-12 h-12" />,
      title: "Web Completa con Lista de Regalos",
      shortDescription: "Sitio web integral con historia de la pareja, galería de fotos y lista de regalos integrada.",
      longDescription: "Una experiencia web completa que cuenta la historia de amor de la pareja y facilita todo el proceso de la boda. Incluye galería de fotos, cronograma del evento, lista de regalos integrada con opciones de compra online, y toda la información que los invitados necesitan para disfrutar al máximo de tu día especial.",
      image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        {
          icon: <Gift className="w-6 h-6" />,
          title: "Lista de Regalos Digital",
          description: "Sistema integrado que facilita a los invitados elegir y comprar regalos"
        },
        {
          icon: <Camera className="w-6 h-6" />,
          title: "Galería de Momentos",
          description: "Espacio para compartir la historia de amor y fotos especiales"
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Experiencia Completa",
          description: "Todo lo que los invitados necesitan saber en un solo lugar"
        }
      ],
      features: [
        "Historia de la pareja con timeline romántico",
        "Galería de fotos profesional y personal",
        "Lista de regalos con enlaces de compra",
        "Información detallada del evento",
        "Sistema RSVP con opciones de menú",
        "Sección de testimonios de familiares",
        "Playlist colaborativa para la fiesta",
        "Información de hospedaje para invitados",
        "Mapa con todas las ubicaciones importantes",
        "Blog de preparativos de boda"
      ],
      price: "Desde $1,500,000 COP",
      ctaText: "Solicitar Web Completa de Boda",
      featured: true
    },
    {
      id: 3,
      icon: <Camera className="w-12 h-12" />,
      title: "Sitio Post-Boda con Galería",
      shortDescription: "Página especial para compartir las fotos y videos de tu boda con familiares y amigos.",
      longDescription: "Un hermoso sitio web para preservar y compartir los recuerdos de tu día especial. Perfecto para subir todas las fotos y videos de la boda, crear álbumes organizados por momentos, y permitir que familiares y amigos descarguen sus fotos favoritas. Una forma elegante de mantener vivos los recuerdos más preciados.",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
      benefits: [
        {
          icon: <Camera className="w-6 h-6" />,
          title: "Recuerdos Organizados",
          description: "Todas las fotos y videos de la boda organizados por momentos"
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Fácil Compartir",
          description: "Familiares y amigos pueden ver y descargar sus fotos favoritas"
        },
        {
          icon: <Heart className="w-6 h-6" />,
          title: "Preserva la Magia",
          description: "Un lugar especial para revivir los mejores momentos para siempre"
        }
      ],
      features: [
        "Galería organizada por momentos del día",
        "Álbumes separados (ceremonia, recepción, fiesta)",
        "Sistema de descarga para invitados",
        "Comentarios y mensajes de felicitación",
        "Video destacado de la ceremonia",
        "Slideshow automático de mejores momentos",
        "Protección con contraseña para privacidad",
        "Optimizada para visualización en móviles"
      ],
      price: "Desde $1,200,000 COP",
      ctaText: "Solicitar Galería Post-Boda"
    }
  ];

  const whyChooseUs = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Especialistas en Bodas",
      description: "Entendemos la importancia de tu día especial y creamos experiencias únicas"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Entrega Rápida",
      description: "Tu sitio de boda estará listo en 1-2 semanas máximo"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Atención Personalizada",
      description: "Trabajamos contigo para capturar perfectamente el estilo de tu boda"
    }
  ];

  const successMetrics = [
    { number: "100+", label: "Parejas felices" },
    { number: "95%", label: "Confirmaciones RSVP digitales" },
    { number: "24/7", label: "Acceso para invitados" },
    { number: "0", label: "Papel desperdiciado" }
  ];

  return (
    <>
      <Helmet>
        <title>Páginas Web para Bodas - Invitaciones Digitales | Danna Álvarez</title>
        <meta name="description" content="Crea una experiencia digital inolvidable para tu boda con invitaciones elegantes, sitios web completos y galerías post-boda. Organiza tu boda de forma moderna." />
        <meta name="keywords" content="páginas web para bodas, invitaciones digitales, sitios web matrimonio, RSVP online, lista regalos boda" />
      </Helmet>
      <section className="py-24 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <Link to="/" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white">Páginas Web para Bodas</span>
          </nav>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 rounded-full mb-6">
            <Heart className="w-5 h-5 text-pink-600 dark:text-pink-400" aria-hidden="true" />
            <span className="text-pink-700 dark:text-pink-300 font-medium">Especialistas en Bodas Digitales</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Haz de tu boda una experiencia 
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent"> digital inolvidable</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Desde invitaciones digitales elegantes hasta sitios web completos con lista de regalos. 
            Creamos experiencias digitales únicas que hacen tu día especial aún más memorable.
          </p>
          
          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-1">
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
              className="px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-lg hover:from-pink-700 hover:to-rose-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
            >
              Ver Soluciones para Bodas
            </a>
            <Link
              to="/#contact"
              className="px-8 py-4 bg-white dark:bg-navy-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-navy-600 rounded-lg hover:border-pink-500 dark:hover:border-pink-400 transition-all duration-200 font-medium"
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
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {service.title}
                        </h2>
                        {service.featured && (
                          <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full">
                            <Star className="w-3 h-3 inline mr-1" />
                            Recomendado
                          </span>
                        )}
                      </div>
                      <p className="text-pink-600 dark:text-pink-400 font-semibold">
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
                      Beneficios para tu boda:
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
                          <CheckCircle className="w-5 h-5 text-pink-600 dark:text-pink-400 flex-shrink-0 mt-0.5" />
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
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-lg hover:from-pink-700 hover:to-rose-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
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
                        alt={`Ejemplo de ${service.title} - diseño elegante para bodas`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full opacity-20 blur-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
                  </div>
                </div>
              </div>

              {/* Separator */}
              {index < services.length - 1 && (
                <div className="mt-24 flex justify-center">
                  <div className="w-24 h-1 bg-gradient-to-r from-pink-300 to-rose-300 dark:from-pink-600 dark:to-rose-600 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-24 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-3xl p-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            ¿Por qué elegir nuestros servicios para bodas?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white">
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
          <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4">
                ¿Lista para hacer tu boda inolvidable?
              </h2>
              <p className="text-pink-100 mb-8 max-w-2xl mx-auto text-lg">
                No dejes que tu día especial pase desapercibido. Crea una experiencia digital 
                única que tus invitados recordarán para siempre y facilite la organización de tu boda soñada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-pink-700 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Solicitar Consulta Gratuita
                </Link>
                <a
                  href="https://wa.me/573182010789?text=Hola Danna, quiero información sobre páginas web para mi boda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Directo
                </a>
              </div>
              <p className="text-pink-200 text-sm mt-4">
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