import { useEffect, useState } from 'react';
import imgApi1 from '../../assets/images/api.png';
import imgApi2 from '../../assets/images/api2.png';
import imgApi3 from '../../assets/images/fapg.jpg';
import useCardData from '../../hooks/useCardData';
import Detalhe from '../../components/detalhe';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projetos() {
  const { cards, setCards } = useCardData();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleBackClick = () => setSelectedIndex(null);

  useEffect(() => {
    const cardList = [
      { 
        imgSrc: imgApi1, 
        title: 'API 1º Semestre', 
        description: 'Plataforma de apoio para pacientes renais crônicos. Foco em UX e compartilhamento de experiências.',
        repositorio: 'https://github.com/TeamHiveAPI/API-2023.2'
      },
      { 
        imgSrc: imgApi2,
        title: 'API 2º Semestre',
        description: 'Sistema de Service Desk com gestão de chamados, chat integrado e níveis de acesso personalizados.',
        repositorio: 'https://github.com/TeamHiveAPI/API-2023.2'
      },
      { 
        imgSrc: imgApi3,
        title: 'API 3º Semestre',
        description: 'Portal de Transparência FAPG. Gestão de contratos, dashboards e conformidade com dados sensíveis.',
        repositorio: 'https://github.com/Sync-FATEC/API-2024.2-3SEM.git'
      },
    ];
    setCards(cardList);
  }, [setCards]);

  const handleSaibaMaisClick = (index: number) => setSelectedIndex(index);

  return (
    <main className="flex-grow flex flex-col items-center py-10 px-6">
      {selectedIndex === null ? (
        <>
          <header className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-brand-white uppercase tracking-tighter">
              Meus <span className="text-brand-neon">Projetos</span>
            </h2>
            <div className="h-1 w-20 bg-brand-neon/50 mx-auto mt-4 rounded-full"></div>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
            {cards.map((card, index) => (
              <div key={index} className="card-maker flex flex-col overflow-hidden group">
                {/* Overlay da Imagem */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    src={card.imgSrc} 
                    alt={card.title} 
                  />
                  <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 flex flex-col flex-grow gap-4">
                  <h3 className="text-xl font-bold text-brand-white font-heading tracking-wide">
                    {card.title}
                  </h3>
                  <p className="text-brand-text/70 text-sm font-body leading-relaxed flex-grow">
                    {card.description}
                  </p>
                  
                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={() => handleSaibaMaisClick(index)}
                      className="flex-1 px-4 py-2 bg-brand-neon text-brand-dark font-bold text-[10px] uppercase tracking-widest hover:bg-brand-white transition-all flex items-center justify-center gap-2"
                    >
                      <FaExternalLinkAlt /> Detalhes
                    </button>
                    <a 
                      href={card.repositorio} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-brand-white/20 text-brand-white hover:border-brand-neon transition-all flex items-center justify-center"
                      title="Repositório"
                    >
                      <FaGithub size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="w-full max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Detalhe index={selectedIndex} onBack={handleBackClick} />
        </div>
      )}
    </main>
  );
}