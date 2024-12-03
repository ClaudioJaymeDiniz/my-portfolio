import useDetalhes from '../../hooks/Detalhes';

// export default function Detalhes() {
//   const { detalhes } = useDetalhes();

//   return (
//     <div>
//       {detalhes.map((detalhe, index) => (
//         <div key={index}>
//           <h2>Descrição: {detalhe.descricao}</h2>
//           <p>Tecnologias: {detalhe.tecnologias.join(', ')}</p>
//           <p>Contribuição: {detalhe.contribuicao}</p>
//           <p>Hardskills: {detalhe.hardskills.join(', ')}</p>
//           <p>Softskills: {detalhe.softskills.join(', ')}</p>
//         </div>
//       ))}
//     </div>
//   );
// }


interface DetalhesProps {
    index: number;
    onBack: () => void;
  }
  
  const Detalhes: React.FC<DetalhesProps> = ({ index, onBack }) => {
    const { detalhes } = useDetalhes();
    const detalhe = detalhes[index];
  
    return (
      <div className="text-lg text-blue-700">
        <div className="text-blue-900 font-bold">Descrição: </div> 
            <div className="text-justify">{detalhe.descricao}</div>

        <div className="text-blue-900 font-bold">Tecnologias:</div>
            <div>{detalhe.tecnologias.join(', ')}</div>

        <div className="text-blue-900 font-bold">Contribuição:</div>
            <div className="text-justify">{detalhe.contribuicao}</div>

        <div className="text-blue-900 font-bold">Hardskills: </div>
            <div>{detalhe.hardskills.join(', ')}</div>

        <div className="text-blue-900 font-bold">Softskills: </div>
            <div>{detalhe.softskills.join(', ')}</div>
        <button
          onClick={onBack}
          className="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium 
          text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 
          focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 
        dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Voltar
        </button>
      </div>
    );
  };
  
  export default Detalhes;