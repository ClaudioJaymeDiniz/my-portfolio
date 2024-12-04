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
      descricao: 'Este é um trabalho de natureza acadêmica e não publicado, consistiu na simulação da criação de um site para um grupo de mães. Foi utilizada a metodologia Scrum, que incluiu a divisão de tarefas entre a equipe, entregas de MVP (produto mínimo viável) a cada sprint e reuniões periódicas com o cliente e a equipe para compreender e solucionar suas necessidades.',
      tecnologias: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
      contribuicao: 'Fiz parte da equipe de desenvolvimento, auxiliando na modelagem do banco de dados e na estilização do site, principalmente na responsividade e refatoração do código. Tambem participei ativamente no levantamento de requisitos e entendimento do projeto, sempre disponivel para ajudar os membros da equipe.',
      hardskills: ['Python', 'Flask', 'HTML', 'CSS', 'MySQL'],
      softskills: ['Comunicação: Como formamos uma equipe composta, em sua maioria, por pessoas que não se conheciam, foi necessário estabelecer meios e regras para alinhar as informações. Apesar disso, enfrentamos alguns problemas relacionados à comunicação. Um membro, em particular, apresentava dificuldades nesse aspecto. Para resolver a questão, conversei com ele em particular, buscando entender e melhorar a situação. Felizmente, a abordagem funcionou, e conseguimos avanços nesse ponto.',
         'Trabalho em equipe: Por se tratar de uma equipe grande, dividimos as tarefas de forma que cada membro ficou responsável por uma parte do projeto. Como a nota era para grupo, monitorávamos mutuamente o progresso para garantir que os objetivos fossem alcançados e as entregas mantivessem um alto padrão de qualidade. Em algumas ocasiões, quando um integrante não conseguia concluir sua tarefa, a equipe se reorganizava para ajudar. Sempre me colocava à disposição para apoiar os colegas, contribuindo para o sucesso coletivo.',
         'Proatividade: Nas primeiras entregas, tive dificuldades para concluir minha parte dentro do prazo. Informei ao grupo sobre os desafios que estava enfrentando e pedi ajuda. No entanto, alguns membros não acompanharam as mensagens e acabaram assumindo que eu não havia contribuído. Para resolver o mal-entendido, realizamos uma última reunião, onde esclarecemos a situação e conseguimos solucionar o problema de forma colaborativa.'],
    },
    {
        descricao: 'Este é um trabalho de natureza acadêmica e não publicado, consistiu na simulação da criação de um sistema service desk. O cliente era um professor e foi utilizada a metodologia Scrum, que incluiu a divisão de tarefas entre a equipe, entregas de MVP (produto mínimo viável) a cada sprint e reuniões periódicas com o cliente e a equipe para compreender e solucionar suas necessidades.',
        tecnologias: ['React', 'TypeScript', 'CSS', 'Node.js', 'MySQL'],
        contribuicao: 'Fiz parte da equipe de desenvolvimento, como estava começando a aprender React, algumas tarefas foram mais dificieis, porém, facilitou utilizar componentes já pensando em responsividade e reutilização de código. Fiz algumas tarefas do backend, mas a maior parte foi no frontend.',
        hardskills: ['React', 'TypeScript', 'CSS'],
        softskills: ['Trabalho em equipe: Ao ingressar em um novo grupo, meu objetivo era desenvolver a habilidade de colaborar com pessoas diferentes, aprendendo a manter uma comunicação eficaz mesmo diante de divergências de pensamento.',
           'Organização: Este grupo se destacou pela organização. No início, o master distribuiu as tarefas de forma igualitária para agilizar o processo, embora tivéssemos a liberdade de escolher nossas atividades. No entanto, essa prática foi aplicada apenas nas primeiras entregas, pois percebemos que isso se assemelhava a um trabalho de chefia, o que fugia dos princípios da metodologia Scrum. Essa experiência nos ajudou a ajustar nossa abordagem e seguir os valores ágeis de maneira mais adequada.',
           'Não ocorreu problemas ao decorrer do projeto e conseguimos fazer um excelente trabalho.'],
      },
      {
        descricao: 'Este é um trabalho de natureza acadêmica e não publicado, consistiu na criação de um sistema para a empresa parceira FAPG para gerenciar o portal da transparência, projetos, parceiros e bolsistas. Foi utilizada a metodologia Scrum, que incluiu a divisão de tarefas entre a equipe, entregas de MVP (produto mínimo viável) a cada sprint e reuniões periódicas com o cliente e a equipe para compreender e solucionar suas necessidades.',
        tecnologias: ['React', 'TypeScript', 'Node.js', 'MySQL', 'TailwindCSS','Java'],
        contribuicao: 'Durante o semestre, fiz parte de duas equipes. Na primeira, atuei como Master, sendo responsável por intermediar a comunicação entre o P.O. e a equipe. Meu papel incluía promover transparência, monitorar processos, garantir a conformidade das entregas e assegurar uma comunicação eficaz entre os membros. Na segunda equipe, integrei o dev team, contribuindo para tarefas de frontend e backend. Essa experiência me proporcionou a oportunidade de aprender Java, aprimorar minhas habilidades com React e TailwindCSS, além de desenvolver a capacidade de identificar e corrigir erros de forma mais eficiente.',
        hardskills: ['React', 'TypeScript', 'TailwindCSS','Java', 'Jira'],
        softskills: ['Como master, aprofundei meu entendimento sobre processos, mediação de conflitos e a importância de conhecer os membros da equipe para distribuir tarefas de forma eficiente, sem comprometer a autonomia de cada um. Além disso, compreendi melhor o funcionamento e as melhores práticas para conduzir reuniões e planejamentos. Apesar dos meus esforços para manter a equipe unida, ela acabou se desfazendo devido ao não cumprimento das regras de permanência por parte de alguns membros, o que prejudicou o desenvolvimento e o andamento do trabalho. Diante dessa situação, fui realocado para uma nova equipe. Atuando como parte do dev team e seguindo rigorosamente as regras de permanência, assumi tasks nas quais inicialmente não me sentia confiante. No entanto, sempre busquei ajuda dos colegas e notifiquei possíveis dificuldades com antecedência, o que garantiu a entrega no prazo. Essa experiência me mostrou que trabalhar com pessoas mais experientes contribui significativamente para o aprendizado e a confiança na resolução de problemas. Mesmo sem ocupar o papel de master nessa nova equipe, continuei atento ao fluxo de trabalho, o que me permitiu substituir o master nas reuniões quando necessário, graças ao meu acompanhamento e entendimento das tasks.'],
      },
    // Adicione mais objetos conforme necessário
  ]);

  return { detalhes, setDetalhes };
};

export default useDetalhes;