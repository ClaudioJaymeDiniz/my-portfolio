// Detalhe.tsx
import { FaArrowLeft } from 'react-icons/fa';
import useDetalhes from '../../hooks/Detalhes';

// interface DetalheProps {
//   index: number;
//   onBack: () => void;
// }

// export default function Detalhe({ index, onBack }: DetalheProps) {
//   const { detalhes } = useDetalhes();
//   const projeto = detalhes[index];

//   if (!projeto) return null;

//   return (
//     <div className="card-maker p-8 max-w-4xl mx-auto mb-10">
//       {/* Botão Voltar Estilizado */}
//       <button 
//         onClick={onBack}
//         className="flex items-center gap-2 text-brand-neon hover:text-brand-white transition-colors mb-8 text-xs uppercase tracking-widest font-bold"
//       >
//         <FaArrowLeft /> Voltar para Projetos
//       </button>

//       <div className="space-y-8">
//         {/* Descrição */}
//         <section>
//           <h3 className="text-brand-neon font-heading uppercase text-xs tracking-[0.2em] mb-3">Descrição</h3>
//           <p className="text-brand-white text-base leading-relaxed text-justify">
//             {projeto.descricao}
//           </p>
//         </section>

//         {/* Tecnologias (Onde entra o código que você enviou) */}
//         <section>
//           <h3 className="text-brand-neon font-heading uppercase text-xs tracking-[0.2em] mb-4">Stack Tecnológica</h3>
//           <div className="flex flex-wrap gap-2">
//             {projeto.tecnologias.map((tech, i) => (
//               <span 
//                 key={i}
//                 className="px-3 py-1 bg-brand-neon/10 border border-brand-neon/30 text-brand-neon text-[11px] font-bold rounded uppercase tracking-wider"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </section>

//         {/* Contribuição */}
//         <section>
//           <h3 className="text-brand-neon font-heading uppercase text-xs tracking-[0.2em] mb-3">Minha Contribuição</h3>
//           <p className="text-brand-text/90 text-sm leading-relaxed text-justify italic border-l-2 border-brand-neon/40 pl-4">
//             {projeto.contribuicao}
//           </p>
//         </section>

//         {/* Hard Skills & Soft Skills em Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
//           <div>
//             <h3 className="text-brand-neon font-heading uppercase text-xs tracking-[0.2em] mb-4">Hard Skills</h3>
//             <ul className="space-y-2">
//               {projeto.hardskills.map((skill, i) => (
//                 <li key={i} className="text-brand-text text-sm flex items-center gap-2">
//                   <span className="size-1 bg-brand-neon rounded-full"></span> {skill}
//                 </li>
//               ))}
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="text-brand-neon font-heading uppercase text-xs tracking-[0.2em] mb-4">Soft Skills</h3>
//             <div className="space-y-4">
//               {projeto.softskills.map((skill, i) => (
//                 <p key={i} className="text-brand-text/70 text-[13px] leading-snug text-justify">
//                   {skill}
//                 </p>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

interface DetalheProps {
  index: number;
  onBack: () => void;
}

export default function Detalhe({ index, onBack }: DetalheProps) {
  const { detalhes } = useDetalhes();
  const projeto = detalhes[index];

  if (!projeto) return null;

  return (
    <div className="card-maker p-8 max-w-4xl mx-auto mb-10">
      {/* Botão Voltar */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-brand-neon hover:text-brand-white transition-colors mb-8 text-xs uppercase tracking-widest font-bold"
      >
        <FaArrowLeft /> Voltar para Projetos
      </button>

      <div className="space-y-8">
        {/* Descrição - Usando Branco para leitura clara */}
        <section>
          <h3 className="text-brand-neon font-heading uppercase text-xs tracking-[0.2em] mb-3">Descrição</h3>
          <p className="text-brand-white text-base leading-relaxed text-justify font-body">
            {projeto.descricao}
          </p>
        </section>

        {/* Tecnologias - O código que você pediu para usar */}
        <section>
          <h3 className="text-brand-neon font-heading uppercase text-xs tracking-[0.2em] mb-4">Stack Tecnológica</h3>
          <div className="flex flex-wrap gap-2">
            {projeto.tecnologias.map((tech, i) => (
              <span 
                key={i}
                className="px-2 py-1 bg-brand-neon/10 border border-brand-neon/30 text-brand-neon text-[10px] font-bold rounded uppercase tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Contribuição */}
        <section>
          <h3 className="text-brand-neon font-heading uppercase text-xs tracking-[0.2em] mb-3">Minha Contribuição</h3>
          <p className="text-brand-text/90 text-sm leading-relaxed text-justify italic border-l-2 border-brand-neon/40 pl-4">
            {projeto.contribuicao}
          </p>
        </section>

        {/* Hard Skills & Soft Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div>
            <h3 className="text-brand-neon font-heading uppercase text-xs tracking-[0.2em] mb-4">Hard Skills</h3>
            <ul className="space-y-2">
              {projeto.hardskills.map((skill, i) => (
                <li key={i} className="text-brand-text text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-brand-neon rounded-full"></span> {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-brand-neon font-heading uppercase text-xs tracking-[0.2em] mb-4">Soft Skills</h3>
            <div className="space-y-4">
              {projeto.softskills.map((skill, i) => (
                <p key={i} className="text-brand-text/70 text-[13px] leading-snug text-justify">
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}