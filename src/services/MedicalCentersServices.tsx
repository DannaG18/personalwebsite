import React from 'react';
import { Stethoscope, Calendar, Users } from 'lucide-react';

export const MedicalCentersServices: React.FC = () => {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Web Institucional con Agendamiento",
      description: "Sitio web profesional que inspire confianza y permita a pacientes agendar citas online.",
      features: [
        "Sistema de citas online",
        "Información de servicios médicos",
        "Formularios de contacto",
        "Integración con calendario"
      ],
      price: "Desde $2,800,000 COP"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Landing Page de Servicios",
      description: "Página especializada para promocionar tratamientos específicos y generar leads calificados.",
      features: [
        "Enfoque en servicio específico",
        "Testimonios de pacientes",
        "Antes y después",
        "Formulario de consulta"
      ],
      price: "Desde $1,100,000 COP"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Perfil del Equipo Médico",
      description: "Sección dedicada a mostrar la experiencia y credenciales de tu equipo profesional.",
      features: [
        "Perfiles profesionales detallados",
        "Certificaciones y experiencia",
        "Reseñas de pacientes",
        "Especialidades médicas"
      ],
      price: "Desde $1,500,000 COP"
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Para Centros Médicos y Odontologías
        </h3>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Genera confianza y facilita el acceso a tus servicios médicos
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-navy-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl mb-6 flex items-center justify-center text-white">
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