import { useEffect, useState } from 'react';
import imgApi1 from '../../assets/images/api.png';
import imgPortfolio from '../../assets/images/portifolio.png';
import useCardData from '../../hooks/useCardData';
import Detalhes from '../../hooks/Detalhes';
import Detalhe from '../../components/detalhe';


export default function Projetos() {
  const { cards, setCards } = useCardData(); // Agora setCards é acessível
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const handleBackClick = () => {
    setSelectedIndex(null);
  };
  useEffect(() => {
    const cardList = [
      { imgSrc: imgApi1, 
        title: 'API-2023-1', 
        description: 'Site dedicado a apoiar pessoas com doenças renais crônicas e aqueles que convivem com elas, oferecendo um espaço para compartilhar histórias, trocar experiências e encontrar informações úteis.' },
      { imgSrc: imgPortfolio,
        title: 'API-2024-2 Equipe Sync',
        description: 'Sistema de Service Desk personalizável, que permite a criação e gestão de chamados com diferentes níveis de acesso. Conta com chat integrado, cadastro de usuários e funcionalidades de monitoramento de chamados, oferecendo uma experiência mais eficiente e controlada para a equipe de suporte.' },
      { imgSrc: imgPortfolio,
        title: 'API-2024-2 Equipe A-Sync',
        description: 'Portal de Transparência da empresa FAPG, que permite a visualização e gestão de contratos, além de possibilitar a inserção e modificação de informações. O sistema inclui um dashboard para gerenciamento de projetos, backup de dados, registro de alterações, alertas de prazos e tratamento adequado de dados sensíveis, garantindo segurança, eficiência e conformidade.' },
      { imgSrc: imgPortfolio,
        title: 'API-2024-3 Equipe Sync',
        description: 'Portal de Transparência da empresa FAPG, que permite a visualização e gestão de contratos, além de possibilitar a inserção e modificação de informações. O sistema inclui um dashboard para gerenciamento de projetos, backup de dados, registro de alterações, alertas de prazos e tratamento adequado de dados sensíveis, garantindo segurança, eficiência e conformidade.' }
    ];

    // Atualiza os cards diretamente usando setCards
    setCards(cardList);
  }, []); // O array vazio [] garante que o efeito seja executado apenas uma vez
  const handleSaibaMaisClick = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <main className="container gap-6 pt-5 pb-5">
    {selectedIndex === null ? (
        cards.map((card, index) => (
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
              <button
                onClick={() => handleSaibaMaisClick(index)}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Saiba mais
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </button>
            </div>
          </div>
        ))
      ) : (
        <Detalhe index={selectedIndex} onBack={handleBackClick} />
      )}
    </main>
  );
}
