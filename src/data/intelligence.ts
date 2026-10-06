export interface IntelligenceRecord {
  id: string
  title: string
  category: 'PERSONNEL' | 'OPERATIONS' | 'LOCATIONS' | 'EVENTS'
  classification: 'OMEGA' | 'ALPHA' | 'BRAVO'
  subject: string
  date: string
  status: 'ACTIVE' | 'ARCHIVED' | 'CLASSIFIED'
  summary: string
  document: string
}

export const intelligenceRecords: IntelligenceRecord[] = [
  {
    id: 'INTEL-001',
    title: 'LES ENFANTS TERRIBLES',
    category: 'EVENTS',
    classification: 'OMEGA',
    subject: 'CLONING PROGRAM',
    date: '1972',
    status: 'CLASSIFIED',
    summary:
      'Programa secreto criado a partir do material genético de Big Boss.',
    document:
      'Les Enfants Terribles foi um projeto de clonagem que utilizou o material genético de Big Boss para produzir descendentes geneticamente planejados. Solid Snake, Liquid Snake e Solidus estão ligados diretamente ao projeto.',
  },

  {
    id: 'INTEL-002',
    title: 'THE PATRIOTS',
    category: 'EVENTS',
    classification: 'OMEGA',
    subject: 'SECRET ORGANIZATION',
    date: '1950s+',
    status: 'CLASSIFIED',
    summary:
      'Organização secreta criada a partir do legado político deixado por The Boss.',
    document:
      'Os Patriots surgiram de uma rede de indivíduos associados a Zero. Seu objetivo inicial era preservar a vontade de The Boss, mas o sistema evoluiu para uma estrutura global de controle de informação e guerra.',
  },

  {
    id: 'INTEL-003',
    title: 'CIPHER',
    category: 'EVENTS',
    classification: 'OMEGA',
    subject: 'INTELLIGENCE NETWORK',
    date: '1970s',
    status: 'CLASSIFIED',
    summary:
      'Rede clandestina associada às operações de Zero.',
    document:
      'Cipher tornou-se uma enorme estrutura de inteligência responsável por manipular informações, organizações militares e operações clandestinas. A organização está diretamente relacionada aos eventos de Peace Walker e MGSV.',
  },

  {
    id: 'INTEL-004',
    title: 'FOX',
    category: 'OPERATIONS',
    classification: 'ALPHA',
    subject: 'SPECIAL FORCES UNIT',
    date: '1964',
    status: 'ARCHIVED',
    summary:
      'Unidade especial na qual Naked Snake atuou durante a Guerra Fria.',
    document:
      'FOX foi criada para operações altamente secretas. Naked Snake realizou a Virtuous Mission e a Snake Eater Mission como membro da organização.',
  },

  {
    id: 'INTEL-005',
    title: 'FOXHOUND',
    category: 'OPERATIONS',
    classification: 'OMEGA',
    subject: 'SPECIAL OPERATIONS UNIT',
    date: '1970s+',
    status: 'CLASSIFIED',
    summary:
      'Unidade militar de elite associada a várias das maiores operações da saga.',
    document:
      'FOXHOUND foi responsável por operações envolvendo Solid Snake, Liquid Snake e posteriormente missões de combate especial. A organização aparece repetidamente na história da família Snake.',
  },

  {
    id: 'INTEL-006',
    title: 'MILITAIRES SANS FRONTIERES',
    category: 'OPERATIONS',
    classification: 'ALPHA',
    subject: 'PRIVATE MILITARY ORGANIZATION',
    date: '1974',
    status: 'ARCHIVED',
    summary:
      'Força militar independente comandada por Big Boss.',
    document:
      'MSF foi fundada por Big Boss e Kazuhira Miller. A organização operava como força militar independente e serviu como precursora de estruturas posteriores ligadas a Big Boss.',
  },

  {
    id: 'INTEL-007',
    title: 'DIAMOND DOGS',
    category: 'OPERATIONS',
    classification: 'OMEGA',
    subject: 'PRIVATE MILITARY FORCE',
    date: '1984',
    status: 'ACTIVE',
    summary:
      'Nova força militar construída após a destruição da Mother Base.',
    document:
      'Diamond Dogs foi estabelecida durante The Phantom Pain como a nova força de Venom Snake e Kazuhira Miller.',
  },

  {
    id: 'INTEL-008',
    title: 'XOF',
    category: 'OPERATIONS',
    classification: 'OMEGA',
    subject: 'COVERT UNIT',
    date: '1970s+',
    status: 'CLASSIFIED',
    summary:
      'Unidade clandestina diretamente ligada a Cipher.',
    document:
      'XOF funcionava como uma unidade clandestina responsável por operações que exigiam alto nível de sigilo. Skull Face esteve no comando da organização durante MGSV.',
  },

  {
    id: 'INTEL-009',
    title: 'OUTER HEAVEN',
    category: 'LOCATIONS',
    classification: 'OMEGA',
    subject: 'MILITARY FORTRESS',
    date: '1995',
    status: 'ARCHIVED',
    summary:
      'Fortaleza militar fundada em torno das ideias de Big Boss.',
    document:
      'Outer Heaven tornou-se o centro de uma força militar independente que buscava construir um mundo no qual soldados não fossem descartados pelos Estados.',
  },

  {
    id: 'INTEL-010',
    title: 'ZANZIBAR LAND',
    category: 'LOCATIONS',
    classification: 'OMEGA',
    subject: 'MILITARY NATION',
    date: '1999',
    status: 'ARCHIVED',
    summary:
      'Território militar fortificado associado à visão de Big Boss.',
    document:
      'Zanzibar Land surgiu como uma potência militar independente na Ásia Central e tornou-se o cenário de uma das maiores operações de Solid Snake.',
  },

  {
    id: 'INTEL-011',
    title: 'SHADOW MOSES',
    category: 'LOCATIONS',
    classification: 'OMEGA',
    subject: 'NUCLEAR STORAGE FACILITY',
    date: '2005',
    status: 'ARCHIVED',
    summary:
      'Instalação militar localizada no Alasca.',
    document:
      'Shadow Moses abrigava instalações relacionadas a armas nucleares e ao Metal Gear REX. A ilha foi ocupada pela unidade FOXHOUND liderada por Liquid Snake.',
  },

  {
    id: 'INTEL-012',
    title: 'METAL GEAR REX',
    category: 'OPERATIONS',
    classification: 'OMEGA',
    subject: 'NUCLEAR WEAPON PLATFORM',
    date: '2005',
    status: 'ARCHIVED',
    summary:
      'Metal Gear desenvolvido pela ArmsTech e utilizado durante Shadow Moses.',
    document:
      'REX foi criado como uma plataforma móvel capaz de lançar armas nucleares e operar com alta mobilidade. Solid Snake enfrentou a unidade durante o incidente de Shadow Moses.',
  },

  {
    id: 'INTEL-013',
    title: 'METAL GEAR RAY',
    category: 'OPERATIONS',
    classification: 'OMEGA',
    subject: 'ANTI-METAL GEAR PLATFORM',
    date: '2007+',
    status: 'CLASSIFIED',
    summary:
      'Plataforma desenvolvida para combater outras máquinas Metal Gear.',
    document:
      'RAY foi criado como resposta à ameaça representada por Metal Gears anteriores. Variantes do sistema foram posteriormente utilizadas em grandes números.',
  },

  {
    id: 'INTEL-014',
    title: 'PEACE WALKER PROJECT',
    category: 'OPERATIONS',
    classification: 'OMEGA',
    subject: 'AI WEAPON SYSTEM',
    date: '1974',
    status: 'ARCHIVED',
    summary:
      'Sistema de armas automatizado desenvolvido durante o conflito da Costa Rica.',
    document:
      'O projeto Peace Walker buscava desenvolver uma plataforma de dissuasão nuclear utilizando inteligência artificial inspirada nos padrões mentais de The Boss.',
  },

  {
    id: 'INTEL-015',
    title: 'METAL GEAR ZEKE',
    category: 'OPERATIONS',
    classification: 'ALPHA',
    subject: 'MSF METAL GEAR',
    date: '1974',
    status: 'ARCHIVED',
    summary:
      'Metal Gear construído pelas forças de MSF.',
    document:
      'ZEKE foi desenvolvido pela equipe de MSF durante Peace Walker. O projeto servia como uma plataforma estratégica sob controle de Big Boss.',
  },

  {
    id: 'INTEL-016',
    title: 'SAHELANTHROPUS',
    category: 'OPERATIONS',
    classification: 'OMEGA',
    subject: 'BIPEDAL WEAPONS SYSTEM',
    date: '1984',
    status: 'CLASSIFIED',
    summary:
      'Uma das plataformas Metal Gear mais avançadas do período de MGSV.',
    document:
      'Sahelanthropus foi desenvolvido por Huey Emmerich sob influência de Skull Face e XOF. Seu design procurava criar uma máquina capaz de combate terrestre extremo.',
  },

  {
    id: 'INTEL-017',
    title: 'FOXDIE',
    category: 'EVENTS',
    classification: 'OMEGA',
    subject: 'BIOLOGICAL AGENT',
    date: '2005',
    status: 'CLASSIFIED',
    summary:
      'Agente biológico criado para atingir indivíduos geneticamente determinados.',
    document:
      'FOXDIE foi desenvolvido em conexão com o programa Genome Soldiers e o projeto de combate biológico de Shadow Moses. O vírus desempenha papel fundamental no destino de Solid Snake.',
  },

  {
    id: 'INTEL-018',
    title: 'S3 PLAN',
    category: 'EVENTS',
    classification: 'OMEGA',
    subject: 'CONTROL SIMULATION',
    date: '2009',
    status: 'CLASSIFIED',
    summary:
      'Programa utilizado pelos Patriots para estudar manipulação humana.',
    document:
      'O projeto S3 usou a crise de Big Shell como uma experiência para testar mecanismos de seleção, controle e condicionamento de comportamento.',
  },

  {
    id: 'INTEL-019',
    title: 'ARSENAL GEAR',
    category: 'LOCATIONS',
    classification: 'OMEGA',
    subject: 'MOBILE FORTRESS',
    date: '2009',
    status: 'CLASSIFIED',
    summary:
      'Grande plataforma militar relacionada ao sistema de controle dos Patriots.',
    document:
      'Arsenal Gear servia como uma fortaleza e plataforma de processamento estratégico. Sua existência estava relacionada aos planos de controle de informação dos Patriots.',
  },

  {
    id: 'INTEL-020',
    title: 'LIQUID OCELOT',
    category: 'PERSONNEL',
    classification: 'OMEGA',
    subject: 'MILITARY COMMANDER',
    date: '2014',
    status: 'CLASSIFIED',
    summary:
      'Identidade adotada por Revolver Ocelot durante sua rebelião contra os Patriots.',
    document:
      'Liquid Ocelot comandou grandes forças PMC e buscou utilizar o sistema dos Patriots contra eles próprios. Sua revolta levou Solid Snake à sua última missão.',
  },

  {
    id: 'INTEL-021',
    title: 'FOXALIVE',
    category: 'EVENTS',
    classification: 'OMEGA',
    subject: 'AI NEUTRALIZATION VIRUS',
    date: '2014',
    status: 'CLASSIFIED',
    summary:
      'Vírus utilizado para neutralizar o sistema dos Patriots.',
    document:
      'FOXALIVE foi desenvolvido como uma ferramenta capaz de alterar e desativar sistemas de controle utilizados pelos Patriots.',
  },

  {
    id: 'INTEL-022',
    title: 'LES ENFANTS TERRIBLES LEGACY',
    category: 'PERSONNEL',
    classification: 'OMEGA',
    subject: 'SNAKE GENETIC LINE',
    date: 'CLASSIFIED',
    status: 'CLASSIFIED',
    summary:
      'Registro genético envolvendo os principais membros da família Snake.',
    document:
      'O legado genético de Big Boss produziu indivíduos fundamentais para a história da saga, incluindo Solid Snake, Liquid Snake e Solidus Snake.',
  },
]