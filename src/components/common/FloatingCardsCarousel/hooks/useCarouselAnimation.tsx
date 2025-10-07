import { useState, useEffect, useCallback, useRef } from 'react';

interface UseCarouselAnimationProps {
  autoRotate: boolean;
  rotationSpeed: number;
  totalCards: number;
}

export const useCarouselAnimation = ({
  autoRotate,
  rotationSpeed,
  totalCards
}: UseCarouselAnimationProps) => {
  const [currentRotation, setCurrentRotation] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoRotate);
  const [activeIndex, setActiveIndex] = useState(0);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const animate = useCallback((timestamp: number) => {
    if (!lastTimeRef.current) lastTimeRef.current = timestamp;
    // const deltaTime = timestamp - lastTimeRef.current;

    // if (isPlaying) {
    //   setCurrentRotation(prev => {
    //     const newRotation = (prev + (rotationSpeed * deltaTime * 0.001)) % 360;
    //     const newActiveIndex = Math.round(newRotation / (360 / totalCards)) % totalCards;
    //     setActiveIndex(newActiveIndex);
    //     return newRotation;
    //   });
    // }

    lastTimeRef.current = timestamp;
    animationRef.current = requestAnimationFrame(animate);
  }, [isPlaying, rotationSpeed, totalCards]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  // const togglePlayPause = useCallback(() => {
  //   setIsPlaying(prev => !prev);
  // }, []);

  const goToCard = useCallback((index: number) => {
    const targetRotation = (360 / totalCards) * index;
    setCurrentRotation(targetRotation);
    setActiveIndex(index);
  }, [totalCards]);

  const nextCard = useCallback(() => {
    const nextIndex = (activeIndex + 1) % totalCards;
    goToCard(nextIndex);
  }, [activeIndex, totalCards, goToCard]);

  const prevCard = useCallback(() => {
    const prevIndex = (activeIndex - 1 + totalCards) % totalCards;
    goToCard(prevIndex);
  }, [activeIndex, totalCards, goToCard]);

  return {
    currentRotation,
    activeIndex,
    // isPlaying,
    // togglePlayPause,
    goToCard,
    nextCard,
    prevCard
  };
};