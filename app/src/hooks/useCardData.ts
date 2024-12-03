import { useState } from 'react';

const useCardData = () => {
  const [cards, setCards] = useState<{ imgSrc: string; title: string; description: string, repositorio: string }[]>([]);

  const addCard = (imgSrc: string, title: string, description: string, repositorio: string) => {
    setCards(prevCards => [...prevCards, { imgSrc, title, description, repositorio }]);
  };

  // Retorna cards, addCard e setCards para o componente
  return { cards, addCard, setCards };
};

export default useCardData;
