import React from 'react';
import { CardProps } from './types';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp } from 'lucide-react';

const Card: React.FC<CardProps> = ({
  card,
  index,
  totalCards,
  currentRotation,
  radius,
  cardWidth,
  cardHeight,
  isActive,
  onClick,
  displayMode = 'carousel' // 'carousel' o 'front'
}) => {
  const {
    title,
    description,
    shortBenefit,
    icon,
    linkTo,
    gradient,
    callToActionText,
    priceRange,
    features
  } = card;

  // Si es modo frontal, no aplicar transformaciones 3D
  if (displayMode === 'front') {
    return (
      <div
        onClick={onClick}
        className={`
          relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5
          backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-cyan-500/25
          transition-all duration-500 ease-out hover:scale-105 hover:border-cyan-400/50 group
          ${isActive ? 'ring-2 ring-cyan-400 shadow-cyan-400/50' : ''}
          cursor-pointer h-[650px] flex flex-col
        `}
        style={{ 
          width: '380px', 
          minWidth: '380px', 
          maxWidth: '380px',
          height: '650px',
        }} // Forzar ancho exacto
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 p-6 h-full flex flex-col"> {/* Más padding para aprovechar el espacio */}
          {title.includes('Tiendas de Ropa') && (
            <div className="absolute top-3 right-3">
              <span className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full">
                <Star className="w-3 h-3" />
                Popular
              </span>
            </div>
          )}

          {/* Header - Icono y título */}
          <div className="flex items-center mb-3">
            <div className={`w-20 h-20 bg-gradient-to-br mr-5 ${gradient} rounded-2xl mb-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
              {icon}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
              {title}
            </h3>

          </div>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <p className="text-green-600 dark:text-green-400 font-semibold text-base">
                {shortBenefit}
              </p>
            </div>

          {/* Content - Descripción y características */}
          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex-1">
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-base">
                {description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Incluye:</h4>
                <ul className="space-y-1.5">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer - Precio y botón */}
            <div className="flex-shrink-0 space-y-3 mt-auto">
              <div className="p-4 bg-gray-50 dark:bg-navy-800 rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Desde:</span>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {priceRange}
                  </span>
                </div>
              </div>

              <Link
                to={linkTo}
                className={`w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r ${gradient} text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 group/button text-base`}
              >
                <span>{callToActionText}</span>
                <ArrowRight className="w-5 h-5 group-hover/button:translate-x-1 transition-transform duration-300" />
              </Link>

              <div className="text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  ✓ Consulta gratuita • ✓ Garantía de satisfacción
                </p>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
      </div>
    );
  }

  // Modo carrusel 3D (para las tarjetas de fondo)
  const spacingMultiplier = 2.1;
  const angle = (360 / (totalCards * spacingMultiplier)) * index;
  const rotateY = angle - currentRotation;
  const dynamicRadius = Math.max(250, 1000 / totalCards);
  const translateZ = dynamicRadius;

  const normalizedRotation = ((rotateY % 360) + 360) % 360;

  let opacity = 0.3;
  if (normalizedRotation > 120 && normalizedRotation < 240) {
    opacity = 0.1 + 0.2 * Math.cos((normalizedRotation - 180) * Math.PI / 180);
  }

  let scale = 0.6;
  if (normalizedRotation > 40 && normalizedRotation < 270) {
    scale = 0.5 + 0.1 * Math.cos((normalizedRotation - 180) * Math.PI / 180);
  }

  const cardStyle: React.CSSProperties = {
    position: 'absolute',
    width: `${cardWidth}px`,
    height: `${cardHeight}px`,
    left: '50%',
    top: '30%',
    marginLeft: `-${cardWidth / 2}px`,
    marginTop: `-${cardHeight / 2}px`,
    transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
    opacity,
    transition: 'transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1), opacity 0.4s ease',
    cursor: 'pointer',
    transformStyle: 'preserve-3d',
    willChange: 'transform, opacity',
    pointerEvents: 'none'
  };

  return (
    <div
      style={cardStyle}
      className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 shadow-lg"
    >
      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        <div className="relative z-10">
          <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl mb-4 flex items-center justify-center text-white shadow-lg`}>
            {icon}
          </div>
          <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
          <p className="text-white/70 text-sm leading-relaxed line-clamp-3">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;