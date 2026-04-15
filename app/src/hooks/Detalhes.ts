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
    // [0] API 1º Semestre
    {
      descricao: 'Trabalho acadêmico focado em criar uma rede de apoio para pacientes renais. Aplicamos Scrum para garantir entregas de valor em cada sprint.',
      tecnologias: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
      contribuicao: 'Atuei no desenvolvimento full-stack, com foco em modelagem de dados e refatoração para garantir um código limpo e responsivo.',
      hardskills: ['Python', 'Flask', 'HTML', 'CSS', 'MySQL'],
      softskills: ['Comunicação Interpessoal', 'Resolução de Conflitos', 'Proatividade em prazos críticos.'],
    },
    // [1] API 2º Semestre
    {
      descricao: 'Simulação de um sistema Service Desk para gestão de chamados. Foco em UX e diferentes níveis de permissão de usuário.',
      tecnologias: ['React', 'TypeScript', 'CSS', 'Node.js', 'MySQL'],
      contribuicao: 'Foco no desenvolvimento Frontend com componentes reutilizáveis em React e auxílio em rotas específicas do Backend.',
      hardskills: ['React', 'TypeScript', 'Node.js'],
      softskills: ['Trabalho em Equipe', 'Organização de Tasks', 'Ajuste de processos ágeis.'],
    },
    // [2] API 3º Semestre
    {
      descricao: 'Sistema de Transparência para a FAPG. Gestão complexa de contratos, bolsistas e dashboards de monitoramento.',
      tecnologias: ['React', 'TypeScript', 'Node.js', 'MySQL', 'TailwindCSS', 'Java'],
      contribuicao: 'Atuei como Scrum Master na primeira fase, mediando conflitos e garantindo a saúde do backlog. Na segunda fase, foquei em Tasks críticas de Frontend e Backend.',
      hardskills: ['React', 'TailwindCSS', 'Java', 'Jira'],
      softskills: ['Liderança (Scrum Master)', 'Mediação de Conflitos', 'Adaptabilidade em novas equipes.'],
    },
    // [3] SmartPanel (PROJETO PESSOAL / COMERCIAL)
    {
      descricao: 'O SmartPanel é um gerenciador de formulários dinâmicos que permite aos usuários organizar coletas de dados em projetos públicos ou privados. É uma solução robusta para coleta de informações em campo, onde a conectividade pode ser instável.',
      tecnologias: ['Python', 'FastAPI', 'PostgreSQL', 'React Native', 'TypeScript', 'SQLite'],
      contribuicao: 'Desenvolvimento integral da arquitetura Offline-first. Implementei a lógica de sincronização que utiliza SQLite localmente no mobile e faz o merge dos dados com o PostgreSQL via FastAPI quando há rede disponível.',
      hardskills: ['Mobile Development', 'Offline-first Architecture', 'API Assíncrona (FastAPI)', 'SQL avançado'],
      softskills: [
        'Visão de Produto: Identifiquei uma oportunidade de mercado e transformei um trabalho acadêmico em um MVP comercializável.',
        'Autonomia: Gestão completa do ciclo de vida do software, do levantamento de requisitos ao deploy.',
        'Negociação: Interface direta com possíveis clientes para validação de funcionalidades.'
      ],
    },
    // [4] CEEC Benaias (PROJETO FREELANCE)
    {
      descricao: 'Website institucional desenvolvido para a Escola de Capoeira Benaias. O objetivo principal foi modernizar a presença digital da instituição e facilitar o acesso de novos alunos às informações de treinos e eventos.',
      tecnologias: ['Next.js', 'TypeScript', 'TailwindCSS', 'Vercel'],
      contribuicao: 'Responsável por todo o ciclo de desenvolvimento, desde a reunião inicial de briefing com o mestre de capoeira até a configuração final de domínio e SEO para garantir visibilidade no Google.',
      hardskills: ['SEO', 'Next.js (SSR/SSG)', 'TailwindCSS', 'UI Design'],
      softskills: [
        'Gestão de Clientes: Condução de reuniões de alinhamento para transformar a visão cultural da capoeira em uma interface moderna.',
        'Foco em Resultados: Entrega de um site com alta performance (Lighthouse score alto), impactando diretamente na promoção da instituição.'
      ],
    }
  ]);

  return { detalhes, setDetalhes };
};

export default useDetalhes;