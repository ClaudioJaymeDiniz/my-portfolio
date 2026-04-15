import imgProfile from '../../assets/images/profile.png';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    
    <main className="h-full flex items-center justify-center py-6 px-6">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-8 lg:gap-12">
        
        {/* LADO DA FOTO */}
        <div className="relative">
          <div className="absolute -inset-1 bg-brand-neon opacity-20 blur-2xl"></div>
          
          <div className="relative">
            <img 
              className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-2 border-brand-neon/40 shadow-2xl" 
              src={imgProfile} 
              alt="foto claudio jayme"
            />
            <div className="absolute -bottom-1 -right-1 bg-brand-dark border border-brand-neon text-brand-neon text-[9px] font-bold px-2 py-0.5 uppercase tracking-tighter">
              EM CONSTRUÇÃO
            </div>
          </div>
        </div>

        {/* LADO DA INFORMAÇÃO */}
        <div className="flex-1 text-center md:text-left">
          <header className="space-y-3 mb-6">
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-brand-white leading-tight">
              Claudio <span className="text-brand-neon">Jayme</span>
            </h1>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {['Professor', 'Art Educador', 'Futuro Dev'].map((job) => (
                <span key={job} className="px-2 py-0.5 border border-brand-white/10 bg-brand-white/5 rounded text-brand-text text-[10px] uppercase tracking-widest">
                  {job}
                </span>
              ))}
            </div>
          </header>

          <div className="max-w-xl">
            <p className="font-body text-base md:text-lg text-brand-text leading-relaxed mb-6">
              Atualmente cursando <span className="text-brand-white font-medium italic">Desenvolvimento Multiplataforma</span> na FATEC SJC. 
              Transformo a educação através da tecnologia em São José dos Campos, atuando como ponte entre o código e o protagonismo jovem.
            </p>
          </div>

          {/* Chamada para ação (CTA) */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            {/* Link para a página interna de Projetos */}
            <Link to="/projetos">
              <button className="px-6 py-2.5 bg-brand-neon text-brand-dark font-bold uppercase text-[10px] tracking-widest hover:brightness-110 transition-all">
                Ver Projetos
              </button>
            </Link>

            {/* Link para o seu Currículo (PDF) */}
            <a 
              href="/curriculo-claudio-jayme.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="px-6 py-2.5 border border-brand-white/20 text-brand-white font-bold uppercase text-[10px] tracking-widest hover:border-brand-neon transition-all">
                Currículo
              </button>
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}