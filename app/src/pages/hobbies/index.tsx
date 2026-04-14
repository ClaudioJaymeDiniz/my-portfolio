import { FaMusic, FaGamepad, FaRobot, FaBookOpen } from 'react-icons/fa';
import { GiBigDiamondRing, GiElectric } from 'react-icons/gi'; 

export default function Hobbies() {
  const hobbies = [
    {
      title: "Dança de Salão",
      icon: <FaMusic className="text-brand-neon" />,
      text: "Desde 2010 explorando ritmos. Minha paixão é o West Coast Swing, com 11 anos de apresentações no grupo Sette Oitto."
    },
    {
      title: "Cultura Geek",
      icon: <GiBigDiamondRing className="text-brand-neon" />,
      text: "Fã fervoroso de Senhor dos Anéis. Levo a paixão tão a sério que minha aliança de casamento é o 'One Ring'."
    },
    {
      title: "Gaming",
      icon: <FaGamepad className="text-brand-neon" />,
      text: "Entre a FATEC e o trabalho, sempre há tempo para as masmorras de Diablo 4 e a imersão de Final Fantasy XIV."
    },
    {
      title: "Rock & J-Rock",
      icon: <GiElectric className="text-brand-neon" />,
      text: "Do peso de SOAD, Slipknot e Blink-182 ao estilo visual do J-Rock. Já estive no front do show do The Gazette!"
    },
    {
      title: "Animes & Mecha",
      icon: <FaRobot className="text-brand-neon" />,
      text: "Acompanho a jornada de One Piece e a estratégia de Code Geass. Cresci com Gundam Wing e a vibe de SAO."
    },
    {
      title: "Leitura Isekai",
      icon: <FaBookOpen className="text-brand-neon" />,
      text: "Entusiasta de Mangás, Manhwas e Manhuas. O gênero Isekai é meu refúgio favorito para novas perspectivas."
    }
  ];

  return (
    <main className="flex-grow flex flex-col items-center justify-center py-10 px-6">
      <header className="text-center mb-10">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-brand-white uppercase tracking-tighter">
          Vida Além do <span className="text-brand-neon">Código</span>
        </h2>
        <div className="h-1 w-24 bg-brand-neon/50 mx-auto mt-4 rounded-full blur-[1px]"></div>
      </header>

      {/* Grid responsivo: 1 coluna no celular, 2 em tablets, 3 no desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {hobbies.map((hobby, index) => (
          <div key={index} className="card-maker p-6 flex flex-col items-center text-center gap-4 group">
            <div className="text-4xl transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]">
              {hobby.icon}
            </div>
            
            <h3 className="font-heading text-lg font-bold text-brand-white tracking-wide">
              {hobby.title}
            </h3>
            
            <p className="font-body text-brand-text/70 text-xs leading-relaxed">
              {hobby.text}
            </p>
          </div>
        ))}
      </div>

      <footer className="mt-12 text-brand-text/30 font-body text-[10px] uppercase tracking-[0.3em]">
        Metal, Animes & Technology
      </footer>
    </main>
  );
}