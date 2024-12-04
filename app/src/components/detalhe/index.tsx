import useDetalhes from '../../hooks/Detalhes';


interface DetalhesProps {
    index: number;
    onBack: () => void;
  }
  
  const Detalhes: React.FC<DetalhesProps> = ({ index, onBack }) => {
    const { detalhes } = useDetalhes();
    const detalhe = detalhes[index];
  
    return (
      <div className="text-lg text-blue-800 gap-2 flex flex-col">
        <div className="text-blue-900 font-bold">Descrição: </div> 
            <div className="text-justify">{detalhe.descricao}</div>

        <div className="text-blue-900 font-bold">Tecnologias:</div>
            <div>{detalhe.tecnologias.join(', ')}</div>

        <div className="text-blue-900 font-bold">Contribuição:</div>
            <div className="text-justify">{detalhe.contribuicao}</div>

        <div className="text-blue-900 font-bold">Hardskills: </div>
            <div>{detalhe.hardskills.join(', ')}</div>

        <div className="text-blue-900 font-bold">Softskills desenvolvidas: </div>
            <div className="text-justify">{detalhe.softskills.join(' - ')}</div>
        <button
          onClick={onBack}
          className="w-16 mt-4 inline-flex items-center px-3 py-2 text-sm font-medium 
          text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 
          focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 
        dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Voltar
        </button>
      </div>
    );
  };
  
  export default Detalhes;