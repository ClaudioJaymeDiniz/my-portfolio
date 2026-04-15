import { useState } from 'react';

// Criamos um molde (Interface)
export interface CardProps {
  imgSrc: string;
  title: string;
  type: 'academic' | 'personal';
  description: string;
  repositorio: string;
}

const useCardData = () => {
  const [cards, setCards] = useState<CardProps[]>([]);

  const addCard = (newCard: CardProps) => {
    setCards(prevCards => [...prevCards, newCard]);
  };

  return { cards, addCard, setCards };
};

export default useCardData;