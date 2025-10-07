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
  cardWidth = 500,
  cardHeight = 450,
  className = ''
}) => {
  const {
    currentRotation,
    activeIndex,
    goToCard,
    nextCard,
    prevCard
  } = useCarouselAnimation({
    autoRotate,
    rotationSpeed,
    totalCards: cards.length
  });

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

  const handlePrevCard = React.useCallback(() => {
    prevCard();
  }, [prevCard]);

  const handleNextCard = React.useCallback(() => {
    nextCard();
  }, [nextCard]);

  const handleGoToCard = React.useCallback((index: number) => {
    goToCard(index);
  }, [goToCard]);

  if (!cards || cards.length === 0) {
    return (
      <div className={`relative w-full overflow-hidden ${className}`}>
        <div className="text-center text-white">No cards to display</div>
      </div>
    );
  }

  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4">
            ¿Qué tipo de web necesitas?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Selecciona el servicio que más se adapte a tu empresa y así juntos podremos
            transformar tu negocio y multiplicar tus ventas
          </p>
        </div>

        <div className={`relative w-full ${className}`}>
          {/* Background particles effect - Hidden on mobile */}
          <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse" />
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-pulse delay-1000" />
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-50 animate-pulse delay-500" />
            <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-cyan-300 rounded-full opacity-30 animate-pulse delay-1500" />
          </div>

          {/* Carrusel 3D de fondo - Hidden on mobile and tablet */}
          <div style={containerStyle} className="hidden lg:block absolute inset-0 pointer-events-none">
            {/* <div style={carouselStyle}>
              {cards.map((card, index) => (
                <Card
                  key={`bg-${card.id}`}
                  card={card}
                  index={index}
                  totalCards={cards.length}
                  currentRotation={currentRotation}
                  radius={adjustedRadius}
                  cardWidth={cardWidth * 0.8  }
                  cardHeight={cardHeight * 0.8}
                  isActive={false}
                  onClick={() => {}}
                  displayMode="carousel"
                />
              ))}
            </div> */}
          </div>

          {/* Contenedor con botones a los lados - Desktop */}
          <div className="hidden lg:flex relative z-10 items-center justify-center gap-2 xl:gap-4 px-2">
            {/* Botón izquierdo */}
            <button
              onClick={handlePrevCard}
              className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 group flex-shrink-0 self-center"
              aria-label="Previous cards"
              type="button"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-white group-hover:text-cyan-400 transition-colors duration-300" />
            </button>

            {/* Tarjetas frontales principales */}
            <div className="flex-1 w-full max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-4 lg:gap-6">
                {visibleCards.map((card, displayIndex) => (
                  <div
                    key={`front-${card.id}-${activeIndex}-${displayIndex}`}
                    className="flex justify-center"
                  >
                    <Card
                      card={card}
                      index={card.originalIndex}
                      totalCards={cards.length}
                      currentRotation={0}
                      radius={0}
                      cardWidth={360}
                      cardHeight={420}
                      isActive={displayIndex === 1}
                      onClick={() => handleGoToCard(card.originalIndex)}
                      displayMode="front"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Botón derecho */}
            <button
              onClick={handleNextCard}
              className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 group flex-shrink-0 self-center"
              aria-label="Next cards"
              type="button"
            >
              <ChevronRight className="w-6 h-6 text-gray-700 dark:text-white group-hover:text-cyan-400 transition-colors duration-300" />
            </button>
          </div>

          {/* Vista móvil y tablet - Una sola tarjeta con controles abajo */}
          <div className="lg:hidden relative z-10">
            <div className="w-full px-4">
              <div className="w-full max-w-sm mx-auto">
                <Card
                  card={cards[activeIndex]}
                  index={activeIndex}
                  totalCards={cards.length}
                  currentRotation={0}
                  radius={0}
                  cardWidth={340}
                  cardHeight={500}
                  isActive={true}
                  onClick={() => handleGoToCard(activeIndex)}
                  displayMode="front"
                />
              </div>
            </div>

            {/* Controls - Mobile/Tablet */}
            <div className="flex justify-center items-center mt-6 sm:mt-8 space-x-4 px-4">
              {/* Previous button */}
              <button
                onClick={handlePrevCard}
                className="p-2.5 sm:p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
                aria-label="Previous cards"
                type="button"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-white group-hover:text-cyan-400 transition-colors duration-300" />
              </button>

              {/* Next button */}
              <button
                onClick={handleNextCard}
                className="p-2.5 sm:p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
                aria-label="Next cards"
                type="button"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-white group-hover:text-cyan-400 transition-colors duration-300" />
              </button>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2 px-4 relative z-10">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => handleGoToCard(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex
                    ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50 scale-125'
                    : 'bg-gray-400 dark:bg-white/30 hover:bg-gray-600 dark:hover:bg-white/50'
                  }`}
                aria-label={`Go to card ${index + 1}`}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloatingCardsCarousel;