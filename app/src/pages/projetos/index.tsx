import { useEffect } from 'react';
import imgApi1 from '../../assets/images/api.png';
import imgPortfolio from '../../assets/images/portifolio.png';
import useCardData from '../../hooks/useCardData';

export default function Projetos() {
  const { cards, setCards } = useCardData(); // Agora setCards é acessível

  useEffect(() => {
    const cardList = [
      { imgSrc: imgApi1, 
        title: 'API-2023-1', 
        description: 'Description for the first card.' },
      { imgSrc: imgPortfolio,
        title: 'API-2023-2',
        description: 'Description for the second card.' },
        { imgSrc: imgPortfolio,
          title: 'API-2023-3',
          description: 'Description for the terceiro card.' }
    ];

    // Atualiza os cards diretamente usando setCards
    setCards(cardList);
  }, []); // O array vazio [] garante que o efeito seja executado apenas uma vez

  return (
    <main className="container gap-6">
      {cards.map((card, index) => (
        <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={card.imgSrc} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {card.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {card.description}
            </p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>
      ))}
    </main>
  );
}
