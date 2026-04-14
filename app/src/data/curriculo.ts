export interface Experiencia {
  id: number;
  data: string;
  empresa: string;
  cargo: string;
  descricao: string;
}

export interface Formacao {
  id: number;
  titulo: string;
  instituicao: string;
  status: string;
}


export const experiencias: Experiencia[] = [
  {
    id: 1,
    data: "2024 - Atual",
    empresa: "Celebreiros",
    cargo: "Arte Educador",
    descricao: "Aulas de produção audiovisual e cidadania. Foco em dar voz aos educandos através de roteirização e edição crítica."
  },
  {
    id: 2,
    data: "2022 - 2024",
    empresa: "Ajas",
    cargo: "Educador Maker",
    descricao: "Ensino de robótica, eletrônica e programação em blocos. Desenvolvimento de autonomia e trabalho em equipe."
  },
  {
    id: 3,
    data: "2019 - 2020",
    empresa: "SuperGeeks",
    cargo: "Instrutor de Informática",
    descricao: "Criação de material didático tecnológico e planejamento de aulas voltadas para o público jovem."
  }
];

export const formacoes: Formacao[] = [
  { id: 1, titulo: "Sistemas Multiplataforma", instituicao: "FATEC SJC", status: "Cursando" },
  { id: 2, titulo: "Produção Audiovisual", instituicao: "Fundação Cultural", status: "Concluído (2018)" },
  { id: 3, titulo: "Técnico em Informática", instituicao: "Faculdade Bilac", status: "Concluído (2015)" }
];

export const idiomas = ["Inglês - Básico", "Espanhol - Básico"];