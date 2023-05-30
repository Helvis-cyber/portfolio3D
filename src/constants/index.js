import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mim",
  },
  {
    id: "work",
    title: "Experiências",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "JavaScript",
    icon: javascript,
  },
  {
    title: "React.JS",
    icon: reactjs,
  },
  {
    title: "CSS",
    icon: css,
  },
  {
    title: "HTML",
    icon: html,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
];

const experiences = [
  {
    title: "Gerente Geral",
    company_name: "Bros Com. de Alimentos",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Dezembro 2021 - Novembro 2022",
    points: [
      "Realizava a gestão de pessoas, incluindo treinamento de equipe e coordenação de equipes.",
      "Supervisionava abertura e fechamento de caixa, controle de estoque e contato com fornecedores.",
      "Zelava pelo bom funcionamento do ambiente e garantia de um ambiente de trabalho adequado.",
      "Apresentava balancetes aos superiores e desempenhava outras funções pertinentes ao cargo.",
    ],
  },
  {
    title: "Assistente Financeiro",
    company_name: "Mr. Baker Superfoods Panificadora",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Outubro 2018 - Março 2020",
    points: [
      "Responsável por organizar documentos e elaborar relatórios financeiros.",
      "Planejava os orçamentos mensais e acompanhava o fluxo de caixa da empresa.",
      "Monitorava e acompanhava os casos de inadimplência.",
      "Validava operações bancárias e desempenhava outras funções relacionadas ao cargo.",
    ],
  },
  {
    title: "Operador de caixa",
    company_name: "Microcervejaria Nacional",
    icon: shopify,
    iconBg: "#383E56",
    date: "Abril 2012 - Março 2018",
    points: [
      "Realizava o primeiro contato com o cliente ao entrar no estabelecimento, recepcionando-o e oferecendo assistência.",
      "Responsável pela abertura e fechamento de comandas e pelo controle do caixa.",
      "Zelava pela organização e limpeza da área da recepção, incluindo mesas e utensílios.",
      "Realizava o controle de estoque dos souvenires vendidos na área da recepção.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Como gerente, Helvis foi uma fonte constante de orientação e inspiração. Sua liderança habilidosa e habilidades organizacionais foram fundamentais para o sucesso de nossos projetos. Foi uma experiência enriquecedora trabalhar ao lado dele.",
    name: "Elena S.",
  },
  {
    testimonial:
      "Helvis foi essencial para o sucesso do projeto de Previsão do Tempo. Sua experiência em React e habilidade em integrar APIs se destacaram. Estou extremamente satisfeito com o resultado.",
    name: "Ricardo U.",
  },
  {
    testimonial:
      "Helvis é um líder excepcional, proporcionando orientação inspiradora e organização para a equipe. Sua capacidade de tomar decisões estratégicas e alcançar resultados é impressionante.",
    name: "Frank B.",
  },
];

const projects = [
  {
    name: "Calculadora do amor",
    description:
      "O projeto Calculadora do amor  é uma aplicação web simples que utiliza HTML, CSS e JavaScript para calcular a compatibilidade entre dois nomes. Ao inserir dois nomes na aplicação, ela gera um número aleatório que representa a compatibilidade entre os nomes. Esse número é exibido juntamente com uma mensagem que indica se existe compatibilidade e se há obstáculos na relação. O projeto demonstra o uso do JavaScript para gerar números aleatórios e exibir resultados dinâmicos na página. É uma forma divertida de explorar a compatibilidade entre nomes e proporcionar insights sobre relacionamentos.",
    tags: [
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
    ],

    source_code_link: "https://github.com/Helvis-cyber/calculadoradoamor",
  },
  {
    name: "Previsão do tempo",
    description:
      "A aplicação de previsão do tempo é uma ferramenta web desenvolvida com HTML, CSS e JavaScript. Ela consome uma API de previsão meteorológica e permite ao usuário obter informações sobre a temperatura, umidade e descrição do tempo para qualquer cidade que digitar. É uma forma simples e prática de ficar atualizado sobre as condições climáticas de diferentes localidades.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],

    source_code_link: "https://github.com/Helvis-cyber/previsaodotempo",
  },
  {
    name: "ToDo List",
    description:
      "A aplicação de Lista de Tarefas é desenvolvida utilizando React, uma biblioteca JavaScript popular para construção de interfaces de usuário. Com essa aplicação, os usuários podem criar e gerenciar suas listas de tarefas de forma simples e organizada. Através do React, é possível adicionar, marcar como concluído, editar e excluir tarefas, proporcionando uma experiência interativa e intuitiva. A aplicação de Lista de Tarefas é uma maneira eficiente de aumentar a produtividade e manter-se organizado no dia a dia.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],

    source_code_link: "https://github.com/Helvis-cyber/ToDo-List",
  },
];

export { services, technologies, experiences, testimonials, projects };
