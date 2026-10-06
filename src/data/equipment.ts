export interface EquipmentItem {
  id: string
  name: string
  category:
    | 'WEAPONS'
    | 'GEAR'
    | 'COMMUNICATION'
    | 'TECHNOLOGY'
  status: 'ACTIVE' | 'STANDBY' | 'CLASSIFIED'
  classification: 'OMEGA' | 'ALPHA' | 'BRAVO'
  operator: string
  condition: string
  description: string
  specifications: string[]
}

export const equipment: EquipmentItem[] = [
  {
    id: 'EQ-001',
    name: 'SOCOM',
    category: 'WEAPONS',
    status: 'ACTIVE',
    classification: 'ALPHA',
    operator: 'SOLID SNAKE',
    condition: 'OPERATIONAL',
    description:
      'Pistola tática utilizada por Solid Snake durante operações de infiltração.',
    specifications: [
      'TYPE: HANDGUN',
      'ROLE: SIDEARM',
      'OPERATOR: SOLID SNAKE',
      'STATUS: OPERATIONAL',
    ],
  },

  {
    id: 'EQ-002',
    name: 'FAMAS',
    category: 'WEAPONS',
    status: 'ACTIVE',
    classification: 'ALPHA',
    operator: 'FOXHOUND',
    condition: 'OPERATIONAL',
    description:
      'Fuzil de assalto utilizado durante operações militares em Shadow Moses.',
    specifications: [
      'TYPE: ASSAULT RIFLE',
      'ROLE: PRIMARY WEAPON',
      'STATUS: OPERATIONAL',
      'THEATER: SHADOW MOSES',
    ],
  },

  {
    id: 'EQ-003',
    name: 'PSG-1',
    category: 'WEAPONS',
    status: 'CLASSIFIED',
    classification: 'ALPHA',
    operator: 'SNIPER WOLF',
    condition: 'RESTRICTED',
    description:
      'Rifle de precisão associado às operações de Sniper Wolf.',
    specifications: [
      'TYPE: SNIPER RIFLE',
      'ROLE: LONG RANGE',
      'OPERATOR: FOXHOUND',
      'STATUS: RESTRICTED',
    ],
  },

  {
    id: 'EQ-004',
    name: 'NIKITA',
    category: 'WEAPONS',
    status: 'STANDBY',
    classification: 'ALPHA',
    operator: 'FOXHOUND',
    condition: 'READY',
    description:
      'Sistema de armamento portátil com projéteis controlados remotamente.',
    specifications: [
      'TYPE: GUIDED MISSILE',
      'ROLE: REMOTE ATTACK',
      'CONTROL: REMOTE',
      'STATUS: READY',
    ],
  },

  {
    id: 'EQ-005',
    name: 'STINGER',
    category: 'WEAPONS',
    status: 'ACTIVE',
    classification: 'OMEGA',
    operator: 'SOLID SNAKE',
    condition: 'OPERATIONAL',
    description:
      'Sistema portátil utilizado contra alvos aéreos e grandes unidades mecânicas.',
    specifications: [
      'TYPE: MISSILE SYSTEM',
      'ROLE: ANTI-AIR / ANTI-METAL GEAR',
      'STATUS: OPERATIONAL',
      'ACCESS: OMEGA',
    ],
  },

  {
    id: 'EQ-006',
    name: 'PATRIOT',
    category: 'WEAPONS',
    status: 'CLASSIFIED',
    classification: 'OMEGA',
    operator: 'PATRIOTS',
    condition: 'RESTRICTED',
    description:
      'Arma associada ao legado de Big Boss e posteriormente aos Patriots.',
    specifications: [
      'TYPE: HANDGUN',
      'ROLE: SPECIAL WEAPON',
      'STATUS: RESTRICTED',
      'ACCESS: OMEGA',
    ],
  },

  {
    id: 'EQ-007',
    name: 'HIGH-FREQUENCY BLADE',
    category: 'WEAPONS',
    status: 'CLASSIFIED',
    classification: 'OMEGA',
    operator: 'RAIDEN',
    condition: 'OPERATIONAL',
    description:
      'Lâmina capaz de produzir efeitos de corte extremamente avançados.',
    specifications: [
      'TYPE: HIGH-FREQUENCY WEAPON',
      'ROLE: CQC',
      'OPERATOR: RAIDEN',
      'ACCESS: OMEGA',
    ],
  },

  {
    id: 'EQ-008',
    name: 'CARDBOARD BOX',
    category: 'GEAR',
    status: 'ACTIVE',
    classification: 'BRAVO',
    operator: 'FOXHOUND',
    condition: 'OPERATIONAL',
    description:
      'Equipamento de infiltração clássico utilizado para ocultação e transporte.',
    specifications: [
      'TYPE: CAMOUFLAGE',
      'ROLE: STEALTH',
      'STATUS: OPERATIONAL',
      'ACCESS: FIELD',
    ],
  },

  {
    id: 'EQ-009',
    name: 'STEALTH CAMOUFLAGE',
    category: 'GEAR',
    status: 'CLASSIFIED',
    classification: 'OMEGA',
    operator: 'SPECIAL OPERATIONS',
    condition: 'RESTRICTED',
    description:
      'Tecnologia de camuflagem utilizada para reduzir drasticamente a detecção visual do usuário.',
    specifications: [
      'TYPE: CAMOUFLAGE',
      'ROLE: STEALTH',
      'STATUS: RESTRICTED',
      'ACCESS: OMEGA',
    ],
  },

  {
    id: 'EQ-010',
    name: 'OCTOCAM',
    category: 'GEAR',
    status: 'ACTIVE',
    classification: 'OMEGA',
    operator: 'SOLID SNAKE',
    condition: 'OPERATIONAL',
    description:
      'Sistema de camuflagem avançado utilizado por Solid Snake em MGS4.',
    specifications: [
      'TYPE: ADAPTIVE CAMOUFLAGE',
      'ROLE: INFILTRATION',
      'OPERATOR: SOLID SNAKE',
      'STATUS: OPERATIONAL',
    ],
  },

  {
    id: 'EQ-011',
    name: 'SOLID EYE',
    category: 'TECHNOLOGY',
    status: 'ACTIVE',
    classification: 'OMEGA',
    operator: 'SOLID SNAKE',
    condition: 'OPERATIONAL',
    description:
      'Sistema de visão e análise tática avançada.',
    specifications: [
      'TYPE: OPTICAL SYSTEM',
      'ROLE: RECON',
      'OPERATOR: SOLID SNAKE',
      'ACCESS: OMEGA',
    ],
  },

  {
    id: 'EQ-012',
    name: 'SOLITON RADAR',
    category: 'TECHNOLOGY',
    status: 'ACTIVE',
    classification: 'ALPHA',
    operator: 'FOXHOUND',
    condition: 'OPERATIONAL',
    description:
      'Sistema de radar desenvolvido por Mei Ling para detecção de unidades próximas.',
    specifications: [
      'TYPE: RADAR',
      'ROLE: RECONNAISSANCE',
      'DEVELOPER: MEI LING',
      'STATUS: OPERATIONAL',
    ],
  },

  {
    id: 'EQ-013',
    name: 'CODEC TERMINAL',
    category: 'COMMUNICATION',
    status: 'ACTIVE',
    classification: 'OMEGA',
    operator: 'FOXHOUND NETWORK',
    condition: 'SECURE',
    description:
      'Sistema de comunicação utilizado por agentes para transmissão segura de informações.',
    specifications: [
      'TYPE: COMMUNICATION',
      'ROLE: TACTICAL SUPPORT',
      'CHANNEL: ENCRYPTED',
      'STATUS: SECURE',
    ],
  },

  {
    id: 'EQ-014',
    name: 'NANOMACHINES',
    category: 'TECHNOLOGY',
    status: 'CLASSIFIED',
    classification: 'OMEGA',
    operator: 'PATRIOTS',
    condition: 'RESTRICTED',
    description:
      'Tecnologia utilizada para monitoramento, controle físico e manutenção de soldados.',
    specifications: [
      'TYPE: NANOTECHNOLOGY',
      'ROLE: MONITORING / CONTROL',
      'OPERATOR: PATRIOTS',
      'ACCESS: OMEGA',
    ],
  },

  {
    id: 'EQ-015',
    name: 'FULTON RECOVERY SYSTEM',
    category: 'TECHNOLOGY',
    status: 'ACTIVE',
    classification: 'ALPHA',
    operator: 'DIAMOND DOGS',
    condition: 'OPERATIONAL',
    description:
      'Sistema utilizado para extrair pessoas, animais e equipamentos do campo de batalha.',
    specifications: [
      'TYPE: EXTRACTION SYSTEM',
      'ROLE: RECOVERY',
      'OPERATOR: DIAMOND DOGS',
      'STATUS: OPERATIONAL',
    ],
  },

  {
    id: 'EQ-016',
    name: 'iDROID',
    category: 'TECHNOLOGY',
    status: 'ACTIVE',
    classification: 'OMEGA',
    operator: 'VENOM SNAKE',
    condition: 'OPERATIONAL',
    description:
      'Terminal digital utilizado por Venom Snake para planejamento de missões e comunicação.',
    specifications: [
      'TYPE: TACTICAL COMPUTER',
      'ROLE: COMMAND',
      'OPERATOR: VENOM SNAKE',
      'STATUS: OPERATIONAL',
    ],
  },

  {
    id: 'EQ-017',
    name: 'METAL GEAR REX',
    category: 'TECHNOLOGY',
    status: 'CLASSIFIED',
    classification: 'OMEGA',
    operator: 'ARMS TECH',
    condition: 'DESTROYED',
    description:
      'Plataforma nuclear bípede desenvolvida para lançamento de armas estratégicas.',
    specifications: [
      'TYPE: METAL GEAR',
      'ROLE: NUCLEAR DETERRENCE',
      'LOCATION: SHADOW MOSES',
      'STATUS: DESTROYED',
    ],
  },

  {
    id: 'EQ-018',
    name: 'METAL GEAR RAY',
    category: 'TECHNOLOGY',
    status: 'CLASSIFIED',
    classification: 'OMEGA',
    operator: 'US GOVERNMENT / PATRIOTS',
    condition: 'RESTRICTED',
    description:
      'Metal Gear projetado para combater outras plataformas Metal Gear.',
    specifications: [
      'TYPE: METAL GEAR',
      'ROLE: ANTI-METAL GEAR',
      'STATUS: RESTRICTED',
      'ACCESS: OMEGA',
    ],
  },

  {
    id: 'EQ-019',
    name: 'SHAGOHOD',
    category: 'TECHNOLOGY',
    status: 'CLASSIFIED',
    classification: 'OMEGA',
    operator: 'VOLGIN',
    condition: 'DESTROYED',
    description:
      'Veículo blindado experimental desenvolvido por Sokolov durante a Guerra Fria.',
    specifications: [
      'TYPE: STRATEGIC VEHICLE',
      'ROLE: NUCLEAR PLATFORM',
      'ERA: 1964',
      'STATUS: DESTROYED',
    ],
  },

  {
    id: 'EQ-020',
    name: 'PEACE WALKER',
    category: 'TECHNOLOGY',
    status: 'CLASSIFIED',
    classification: 'OMEGA',
    operator: 'HOT COLDMAN',
    condition: 'DESTROYED',
    description:
      'Sistema Metal Gear controlado por inteligência artificial.',
    specifications: [
      'TYPE: AI WEAPON',
      'ROLE: NUCLEAR DETERRENCE',
      'ERA: 1974',
      'STATUS: DESTROYED',
    ],
  },

  {
    id: 'EQ-021',
    name: 'METAL GEAR ZEKE',
    category: 'TECHNOLOGY',
    status: 'CLASSIFIED',
    classification: 'OMEGA',
    operator: 'MSF',
    condition: 'UNKNOWN',
    description:
      'Metal Gear desenvolvido pelas forças de Militaires Sans Frontières.',
    specifications: [
      'TYPE: METAL GEAR',
      'ROLE: STRATEGIC WEAPON',
      'OPERATOR: MSF',
      'STATUS: UNKNOWN',
    ],
  },

  {
    id: 'EQ-022',
    name: 'SAHELANTHROPUS',
    category: 'TECHNOLOGY',
    status: 'CLASSIFIED',
    classification: 'OMEGA',
    operator: 'XOF',
    condition: 'DESTROYED',
    description:
      'Plataforma experimental extremamente avançada desenvolvida durante os acontecimentos de MGSV.',
    specifications: [
      'TYPE: METAL GEAR',
      'ROLE: BATTLE PLATFORM',
      'OPERATOR: XOF',
      'STATUS: DESTROYED',
    ],
  },

  {
    id: 'EQ-023',
    name: 'D-WALKER',
    category: 'GEAR',
    status: 'ACTIVE',
    classification: 'ALPHA',
    operator: 'DIAMOND DOGS',
    condition: 'OPERATIONAL',
    description:
      'Plataforma robótica quadrúpede usada pelos Diamond Dogs para combate e transporte.',
    specifications: [
      'TYPE: DUAL-PURPOSE ROBOT',
      'ROLE: SUPPORT / COMBAT',
      'OPERATOR: DIAMOND DOGS',
      'STATUS: OPERATIONAL',
    ],
  },

  {
    id: 'EQ-024',
    name: 'D-HORSE',
    category: 'GEAR',
    status: 'ACTIVE',
    classification: 'BRAVO',
    operator: 'VENOM SNAKE',
    condition: 'OPERATIONAL',
    description:
      'Animal de transporte utilizado por Venom Snake em operações de campo.',
    specifications: [
      'TYPE: TRANSPORT',
      'ROLE: MOBILITY',
      'OPERATOR: VENOM SNAKE',
      'STATUS: OPERATIONAL',
    ],
  },
]


