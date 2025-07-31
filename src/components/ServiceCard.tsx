import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkTo: string;
  gradient: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  linkTo,
  gradient
}) => {
  const handleClick = () => {
    // Por ahora, scroll hacia la sección específica
    // En el futuro, esto se reemplazará con react-router-dom
    const element = document.getElementById(linkTo);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`group cursor-pointer bg-white dark:bg-navy-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-navy-700`}
    >
      <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium group-hover:gap-4 transition-all duration-300">
        <span>Ver servicios</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </div>
  );
};