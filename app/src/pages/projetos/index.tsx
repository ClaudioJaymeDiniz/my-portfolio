import { useEffect, useState } from 'react';
import imgApi1 from '../../assets/images/api.png';
import imgApi2 from '../../assets/images/api2.png';
import imgApi3 from '../../assets/images/fapg.jpg';
import useCardData from '../../hooks/useCardData';
import Detalhe from '../../components/detalhe';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import imgSmartPanel from '../../assets/images/api2.png';
import imgCapoeira from '../../assets/images/sitebenaias.png';

export default function Projetos() {
  const { cards, setCards } = useCardData();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'academic' | 'personal'>('academic');

  const handleBackClick = () => setSelectedIndex(null);

  // CORREÇÃO: Usamos esta variável no .map() lá embaixo
  const filteredCards = cards.filter(card => card.type === activeTab);

  useEffect(() => {
    const cardList = [
      { 
        imgSrc: imgApi1, 
        title: 'API 1º Semestre',
        type: 'academic' as const, 
        description: 'Plataforma de apoio para pacientes renais crônicos. Foco em UX e compartilhamento de experiências.',
        repositorio: 'https://github.com/TeamHiveAPI/API-2023.2'
      },
      { 
        imgSrc: imgApi2,
        title: 'API 2º Semestre',
        type: 'academic' as const,
        description: 'Sistema de Service Desk com gestão de chamados, chat integrado e níveis de acesso personalizados.',
        repositorio: 'https://github.com/TeamHiveAPI/API-2023.2'
      },
      { 
        imgSrc: imgApi3,
        title: 'API 3º Semestre',
        type: 'academic' as const,
        description: 'Portal de Transparência FAPG. Gestão de contratos, dashboards e conformidade com dados sensíveis.',
        repositorio: 'https://github.com/Sync-FATEC/API-2024.2-3SEM.git'
      },
      { 
        imgSrc: imgSmartPanel,
        title: 'SmartPanel', 
        type: 'personal' as const,
        description: 'App Mobile Full-stack para gestão de formulários. Sistema offline-first com sincronização via FastAPI.',
        repositorio: 'https://github.com/ClaudioJaymeDiniz/app-mobile.git' 
      },
      { 
        imgSrc: imgCapoeira,
        title: 'CEEC Benaias', 
        type: 'personal' as const,
        description: 'Site institucional moderno para escola de capoeira, otimizado para SEO e performance.',
        repositorio: 'https://www.ceecbenaias.com.br'
      }
    ];
    setCards(cardList);
  }, [setCards]);

  const handleSaibaMaisClick = (index: number) => {
    const realIndex = cards.findIndex(c => c.title === filteredCards[index].title);
    setSelectedIndex(realIndex);
  };

  return (
    <main className="flex-grow flex flex-col items-center py-10 px-6">
      {selectedIndex === null ? (
        <>
          <header className="text-center mb-12 flex flex-col items-center">
            {/* SELETOR DE ABAS */}
            <div className="flex gap-2 mb-10 bg-brand-card/30 p-1 rounded-xl border border-brand-white/10">
              <button 
                onClick={() => setActiveTab('academic')}
                className={`px-6 py-2 rounded-lg text-[10px] uppercase font-bold tracking-widest transition-all ${activeTab === 'academic' ? 'bg-brand-neon text-brand-dark' : 'text-brand-text hover:text-brand-white'}`}
              >
                FATEC (APIs)
              </button>
              <button 
                onClick={() => setActiveTab('personal')}
                className={`px-6 py-2 rounded-lg text-[10px] uppercase font-bold tracking-widest transition-all ${activeTab === 'personal' ? 'bg-brand-neon text-brand-dark' : 'text-brand-text hover:text-brand-white'}`}
              >
                Pessoais & Freelance
              </button>
            </div>

            <h2 className="font-heading text-3xl md:text-5xl font-bold text-brand-white uppercase tracking-tighter">
              Meus <span className="text-brand-neon">Projetos</span>
            </h2>
            <div className="h-1 w-20 bg-brand-neon/50 mx-auto mt-4 rounded-full"></div>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
            {/* MUDANÇA AQUI: Agora percorremos apenas os filtrados */}
            {filteredCards.map((card, index) => (
              <div key={index} className="card-maker flex flex-col overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    src={card.imgSrc} 
                    alt={card.title} 
                  />
                  <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>

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