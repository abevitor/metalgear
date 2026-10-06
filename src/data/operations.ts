export interface Operation {
  id: string
  name: string
  status: 'ACTIVE' | 'STANDBY' | 'CLASSIFIED'
  priority: 'OMEGA' | 'ALPHA' | 'BRAVO'
  location: string
  commander: string
  objective: string
  description: string
}

export const operations: Operation[] = [
  {
    id: 'OP-001',
    name: 'OPERATION INTRUDE N313',
    status: 'CLASSIFIED',
    priority: 'OMEGA',
    location: 'OUTER HEAVEN',
    commander: 'SOLID SNAKE',
    objective: 'INFILTRATION',
    description:
      'Primeira grande missão de infiltração de Solid Snake, envolvendo a entrada na fortaleza Outer Heaven e a investigação do projeto Metal Gear TX-55.',
  },

  {
    id: 'OP-002',
    name: 'OUTER HEAVEN UPRISING',
    status: 'ARCHIVED' as Operation['status'],
    priority: 'OMEGA',
    location: 'OUTER HEAVEN',
    commander: 'SOLID SNAKE',
    objective: 'NEUTRALIZATION',
    description:
      'Operação na qual Solid Snake infiltrou Outer Heaven e enfrentou a estrutura militar comandada por Big Boss.',
  },

  {
    id: 'OP-003',
    name: 'ZANZIBAR LAND DISTURBANCE',
    status: 'CLASSIFIED',
    priority: 'OMEGA',
    location: 'ZANZIBAR LAND',
    commander: 'SOLID SNAKE',
    objective: 'INFILTRATION',
    description:
      'Operação militar destinada a impedir a ameaça de Zanzibar Land e recuperar informações estratégicas relacionadas ao projeto Metal Gear.',
  },

  {
    id: 'OP-004',
    name: 'VIRTUOUS MISSION',
    status: 'ARCHIVED' as Operation['status'],
    priority: 'ALPHA',
    location: 'SOKOLOV FACILITY',
    commander: 'NAKED SNAKE',
    objective: 'EXTRACTION',
    description:
      'Missão inicial de Snake em território soviético para extrair o cientista Nikolai Sokolov.',
  },

  {
    id: 'OP-005',
    name: 'OPERATION SNAKE EATER',
    status: 'ARCHIVED' as Operation['status'],
    priority: 'OMEGA',
    location: 'TSELINoyarsk',
    commander: 'NAKED SNAKE',
    objective: 'SPECIAL OPERATIONS',
    description:
      'Missão que exigiu o resgate de Sokolov, a destruição do Shagohod e a eliminação de The Boss durante a Guerra Fria.',
  },

  {
    id: 'OP-006',
    name: 'SAN HIERONIMO PENINSULA',
    status: 'CLASSIFIED',
    priority: 'ALPHA',
    location: 'SAN HIERONIMO',
    commander: 'NAKED SNAKE',
    objective: 'MILITARY UPRISING',
    description:
      'Conflito envolvendo uma revolta militar e a formação de forças que posteriormente influenciariam a criação de organizações mercenárias de Big Boss.',
  },

  {
    id: 'OP-007',
    name: 'PEACE WALKER INCIDENT',
    status: 'ARCHIVED' as Operation['status'],
    priority: 'OMEGA',
    location: 'COSTA RICA',
    commander: 'BIG BOSS',
    objective: 'NEUTRALIZATION',
    description:
      'Conjunto de operações conduzidas por MSF para investigar forças militares e impedir o uso de sistemas nucleares automatizados.',
  },

  {
    id: 'OP-008',
    name: 'MOTHER BASE DEFENSE',
    status: 'CLASSIFIED',
    priority: 'OMEGA',
    location: 'MOTHER BASE',
    commander: 'BIG BOSS',
    objective: 'DEFENSE',
    description:
      'Defesa das instalações de MSF contra forças adversárias e organizações ligadas a Cipher.',
  },

  {
    id: 'OP-009',
    name: 'GROUND ZEROES',
    status: 'ARCHIVED' as Operation['status'],
    priority: 'OMEGA',
    location: 'CAMP OMEGA',
    commander: 'BIG BOSS',
    objective: 'RESCUE',
    description:
      'Operação de infiltração em Camp Omega para resgatar Paz e Chico e descobrir informações sobre atividades clandestinas.',
  },

  {
    id: 'OP-010',
    name: 'PHANTOM PAIN',
    status: 'CLASSIFIED',
    priority: 'OMEGA',
    location: 'AFGHANISTAN / AFRICA',
    commander: 'VENOM SNAKE',
    objective: 'REVENGE',
    description:
      'Campanha militar dos Diamond Dogs contra Cipher, Skull Face e outras forças envolvidas na destruição da antiga Mother Base.',
  },

  {
    id: 'OP-011',
    name: 'HUEY EXTRACTION',
    status: 'CLASSIFIED',
    priority: 'ALPHA',
    location: 'AFGHANISTAN',
    commander: 'VENOM SNAKE',
    objective: 'EXTRACTION',
    description:
      'Missão envolvendo a localização e extração do cientista Huey Emmerich para os Diamond Dogs.',
  },

  {
    id: 'OP-012',
    name: 'SAHELANTHROPUS',
    status: 'CLASSIFIED',
    priority: 'OMEGA',
    location: 'AFGHANISTAN',
    commander: 'VENOM SNAKE',
    objective: 'WEAPON NEUTRALIZATION',
    description:
      'Operação destinada a impedir o uso de Sahelanthropus, uma das mais avançadas plataformas Metal Gear do período.',
  },

  {
    id: 'OP-013',
    name: 'SHADOW MOSES INCIDENT',
    status: 'ARCHIVED' as Operation['status'],
    priority: 'OMEGA',
    location: 'SHADOW MOSES ISLAND',
    commander: 'SOLID SNAKE',
    objective: 'COUNTER-TERRORISM',
    description:
      'Infiltração de Solid Snake na instalação nuclear de Shadow Moses após a tomada do complexo pela unidade FOXHOUND liderada por Liquid Snake.',
  },

  {
    id: 'OP-014',
    name: 'TANKER INCIDENT',
    status: 'ARCHIVED' as Operation['status'],
    priority: 'ALPHA',
    location: 'HUDSON RIVER',
    commander: 'SOLID SNAKE',
    objective: 'RECONNAISSANCE',
    description:
      'Operação conduzida por Solid Snake para investigar a transferência de um novo Metal Gear a bordo de um navio-tanque.',
  },

  {
    id: 'OP-015',
    name: 'BIG SHELL INCIDENT',
    status: 'ARCHIVED' as Operation['status'],
    priority: 'OMEGA',
    location: 'BIG SHELL',
    commander: 'RAIDEN',
    objective: 'RESCUE / COUNTER-TERRORISM',
    description:
      'Operação de Raiden durante a tomada do complexo Big Shell, posteriormente revelada como parte do plano S3 dos Patriots.',
  },

  {
    id: 'OP-016',
    name: 'ARSENAL GEAR',
    status: 'CLASSIFIED',
    priority: 'OMEGA',
    location: 'BIG SHELL / ARSENAL GEAR',
    commander: 'RAIDEN',
    objective: 'SYSTEM NEUTRALIZATION',
    description:
      'Operação envolvendo o sistema Arsenal Gear, a inteligência artificial dos Patriots e o confronto entre Raiden e Solidus Snake.',
  },

  {
    id: 'OP-017',
    name: 'LIQUID OCELOT UPRISING',
    status: 'CLASSIFIED',
    priority: 'OMEGA',
    location: 'MIDDLE EAST',
    commander: 'SOLID SNAKE',
    objective: 'COUNTER-INSURGENCY',
    description:
      'Missão final de Solid Snake contra Liquid Ocelot, envolvendo o controle do sistema de guerra dos Patriots.',
  },

  {
    id: 'OP-018',
    name: 'OUTER HEAVEN NETWORK',
    status: 'CLASSIFIED',
    priority: 'OMEGA',
    location: 'GLOBAL',
    commander: 'FOXHOUND',
    objective: 'MILITARY INTELLIGENCE',
    description:
      'Conjunto de operações e atividades relacionadas à rede militar criada ao redor das ideias de Big Boss.',
  },
]