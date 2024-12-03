import { useState } from 'react';

interface Detalhe {
  descricao: string;
  tecnologias: string[];
  contribuicao: string;
  hardskills: string[];
  softskills: string[];
}

const useDetalhes = () => {
  const [detalhes, setDetalhes] = useState<Detalhe[]>([
    {
      descricao: 'Descriçã',
      tecnologias: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
      contribuicao: 'Contribuição individual',
      hardskills: ['Programação', 'Design de Software'],
      softskills: ['Trabalho em equipe', 'Comunicação'],
    },
    {
        descricao: 'Descriçã',
        tecnologias: ['React', 'TypeScript', 'Node.js'],
        contribuicao: 'Contribuição individual',
        hardskills: ['Programação', 'Design de Software'],
        softskills: ['Trabalho em equipe', 'Comunicação'],
      },
      {
        descricao: 'Descriçã',
        tecnologias: ['React', 'TypeScript', 'Node.js'],
        contribuicao: 'Contribuição individual',
        hardskills: ['Programação', 'Design de Software'],
        softskills: ['Trabalho em equipe', 'Comunicação'],
      },
    // Adicione mais objetos conforme necessário
  ]);

  return { detalhes, setDetalhes };
};

export default useDetalhes;