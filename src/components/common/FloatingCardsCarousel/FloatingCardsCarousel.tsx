import React from 'react';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import Card from './Card';
import { FloatingCardsCarouselProps } from './types';
import { useCarouselAnimation } from './hooks/useCarouselAnimation';

const FloatingCardsCarousel: React.FC<FloatingCardsCarouselProps> = ({
  cards,
  autoRotate = true,
  rotationSpeed = 15,
  radius = 480,
  cardWidth = 500, // Mucho más ancho
  cardHeight = 450, // Más alto también
  className = ''
}) => {
  const {
    currentRotation,
    activeIndex,
    isPlaying,
    togglePlayPause,
    goToCard,
    nextCard,
    prevCard
  } = useCarouselAnimation({
    autoRotate,
    rotationSpeed,
    totalCards: cards.length
  });

  // Calculamos qué tarjetas mostrar frontalmente (3 visibles a la vez)
  const getVisibleCards = () => {
    const visibleCards = [];
    const totalCards = cards.length;
    
    for (let i = 0; i < 3; i++) {
      const cardIndex = (activeIndex + i) % totalCards;
      visibleCards.push({
        ...cards[cardIndex],
        originalIndex: cardIndex
      });
    }
    
    return visibleCards;
  };

  const visibleCards = getVisibleCards();

  // Memoized styles for better performance
  const containerStyle = React.useMemo((): React.CSSProperties => ({
    perspective: '1100px',
    perspectiveOrigin: '50% 45%'
  }), []);

  const visibleCardsCount = 3;
  const spacingFactor = 1.35;
  const adjustedRadius = Math.max(220, (cardWidth * visibleCardsCount * spacingFactor) / (2 * Math.PI));

  const carouselStyle = React.useMemo((): React.CSSProperties => ({
    position: 'relative',
    width: `${adjustedRadius * 2 + cardWidth * 2}px`,
    height: `${adjustedRadius * 1 + cardHeight}px`,
    transformStyle: 'preserve-3d',
    margin: '0 auto',
    maxWidth: '95vw'
  }), [adjustedRadius, cardWidth, cardHeight]);

  // Memoized handlers to prevent unnecessary re-renders
  const handlePrevCard = React.useCallback(() => {
    prevCard();
  }, [prevCard]);

  const handleNextCard = React.useCallback(() => {
    nextCard();
  }, [nextCard]);

  const handleTogglePlayPause = React.useCallback(() => {
    togglePlayPause();
  }, [togglePlayPause]);

  const handleGoToCard = React.useCallback((index: number) => {
    goToCard(index);
  }, [goToCard]);

  // Early return if no cards
  if (!cards || cards.length === 0) {
    return (
      <div className={`relative w-full overflow-hidden ${className}`}>
        <div className="text-center text-white">No cards to display</div>
      </div>
    );
  }

  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Qué tipo de negocio tienes?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Selecciona tu industria para ver las soluciones web específicas que pueden
            transformar tu negocio y multiplicar tus ventas.
          </p>
        </div>
        
        <div className={`relative w-full ${className}`}>
          {/* Background particles effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse" />
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-pulse delay-1000" />
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-50 animate-pulse delay-500" />
            <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-cyan-300 rounded-full opacity-30 animate-pulse delay-1500" />
          </div>

          {/* Carrusel 3D de fondo */}
          <div style={containerStyle} className="absolute inset-0 pointer-events-none">
            <div style={carouselStyle}>
              {cards.map((card, index) => (
                <Card
                  key={`bg-${card.id}`}
                  card={card}
                  index={index}
                  totalCards={cards.length}
                  currentRotation={currentRotation}
                  radius={adjustedRadius}
                  cardWidth={cardWidth * 0.8}
                  cardHeight={cardHeight * 0.8}
                  isActive={false}
                  onClick={() => {}}
                  displayMode="carousel"
                />
              ))}
            </div>
          </div>

          {/* Tarjetas frontales principales */}
          <div className="relative z-10 mx-auto max-w-7xl"> {/* Contenedor más amplio */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-10 lg:gap-20 px-8"> {/* Solo 2 columnas en desktop, 3 en pantallas muy grandes */}
              {visibleCards.map((card, displayIndex) => (
                <div
                  key={`front-${card.id}-${activeIndex}-${displayIndex}`}
                  className="flex-shrink-0" // No permitir que se encoja
                >
                  <Card
                    card={card}
                    index={card.originalIndex}
                    totalCards={cards.length}
                    currentRotation={0}
                    radius={0}
                    cardWidth={cardWidth}
                    cardHeight={cardHeight}
                    isActive={displayIndex === 1}
                    onClick={() => handleGoToCard(card.originalIndex)}
                    displayMode="front"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4 px-4 relative z-10">
            {/* Previous button */}
            <button
              onClick={handlePrevCard}
              className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
              aria-label="Previous cards"
              type="button"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-white group-hover:text-cyan-400 transition-colors duration-300" />
            </button>

            {/* Play/Pause button */}
            {/* <button
              onClick={handleTogglePlayPause}
              className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 group"
              aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
              type="button"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              ) : (
                <Play className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              )}
            </button> */}

            {/* Next button */}
            <button
              onClick={handleNextCard}
              className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
              aria-label="Next cards"
              type="button"
            >
              <ChevronRight className="w-6 h-6 text-gray-700 dark:text-white group-hover:text-cyan-400 transition-colors duration-300" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2 px-4 relative z-10">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => handleGoToCard(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50 scale-125'
                    : 'bg-gray-400 dark:bg-white/30 hover:bg-gray-600 dark:hover:bg-white/50'
                }`}
                aria-label={`Go to card ${index + 1}`}
                type="button"
              />
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl mt-16 p-8 lg:p-12 border border-white/10 relative z-10">
            <div className="text-center space-y-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                Cómo trabajamos juntos
              </h3>

              <div className="grid md:grid-cols-5 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Análisis de tu Negocio',
                    description: 'Entiendo tu industria, competencia y objetivos comerciales específicos'
                  },
                  {
                    step: '02',
                    title: 'Estrategia Digital',
                    description: 'Diseño la solución web que mejor se adapte a tu modelo de negocio'
                  },
                  {
                    step: '03',
                    title: 'Desarrollo',
                    description: 'Desarrollo tu sitio web enfocado en conversión y experiencia de usuario'
                  },
                  {
                    step: '04',
                    title: 'Optimización',
                    description: 'Ajusto y optimizo para maximizar conversiones y resultados'
                  },
                  {
                    step: '05',
                    title: 'Lanzamiento y Soporte',
                    description: 'Lanzo tu sitio y te acompaño para asegurar el éxito de tu inversión'
                  }
                ].map((phase) => (
                  <div key={phase.step} className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#4A4AE6] to-[#14136A] rounded-full flex items-center justify-center mx-auto">
                      <span className="text-xl font-bold text-white">{phase.step}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{phase.title}</h4>
                    <p className="text-gray-600 dark:text-white/70 text-sm leading-relaxed">{phase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16 relative z-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
            >
              Solicita tu consulta gratuita
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloatingCardsCarousel;