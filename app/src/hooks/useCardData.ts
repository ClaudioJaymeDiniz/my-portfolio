import { useState } from 'react';

const useCardData = () => {
  const [cards, setCards] = useState<{ imgSrc: string; title: string; description: string }[]>([]);

  const addCard = (imgSrc: string, title: string, description: string) => {
    setCards(prevCards => [...prevCards, { imgSrc, title, description }]);
  };

  // Retorna cards, addCard e setCards para o componente
  return { cards, addCard, setCards };
};

export default useCardData;
