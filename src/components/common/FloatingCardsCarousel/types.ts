export interface CardData {
  id: string;
  title: string;
  description: string;
  shortBenefit: string;
  icon?: React.ReactNode;
  linkTo: string;
  gradient?: string;
  callToActionText?: string;
  priceRange?: string;
  image?: string;
  features: string[];
} 

export interface FloatingCardsCarouselProps {
  cards: CardData[];
  autoRotate?: boolean;
  rotationSpeed?: number;
  radius?: number;
  cardWidth?: number;
  cardHeight?: number;
  className?: string;
}

export interface CardProps {
  card: CardData;
  index: number;
  totalCards: number;
  currentRotation: number;
  radius: number;
  cardWidth: number;
  cardHeight: number;
  isActive: boolean;
  onClick?: () => void;
    displayMode?: 'carousel' | 'front';
}