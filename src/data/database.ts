export interface DatabaseRecord {
  id: string
  type: 'PERSONNEL' | 'OPERATIONS' | 'EQUIPMENT' | 'LOCATION'
  subject: string
  status: 'ACTIVE' | 'CLASSIFIED' | 'ARCHIVED'
  classification: 'OMEGA' | 'ALPHA' | 'BRAVO'
  date: string
  summary: string
  data: string[]
}

export const databaseRecords: DatabaseRecord[] = [
  {
    id: 'DB-001',
    type: 'PERSONNEL',
    subject: 'SOLID SNAKE',
    status: 'ACTIVE',
    classification: 'OMEGA',
    date: 'CLASSIFIED',
    summary:
      'Elite infiltration specialist and former FOXHOUND operative.',
    data: [
      'CODE NAME: SNAKE',
      'AFFILIATION: FOXHOUND',
      'SPECIALTY: INFILTRATION',
      'STATUS: ACTIVE',
      'LEGACY: LES ENFANTS TERRIBLES',
    ],
  },

  {
    id: 'DB-002',
    type: 'PERSONNEL',
    subject: 'BIG BOSS',
    status: 'CLASSIFIED',
    classification: 'OMEGA',
    date: 'CLASSIFIED',
    summary:
      'Legendary soldier and founder of multiple private military organizations.',
    data: [
      'CODE NAME: NAKED SNAKE',
      'AFFILIATION: FOX / MSF',
      'SPECIALTY: SPECIAL OPERATIONS',
      'TITLE: BIG BOSS',
      'STATUS: HISTORICAL',
    ],
  },

  {
    id: 'DB-003',
    type: 'PERSONNEL',
    subject: 'VENOM SNAKE',
    status: 'ACTIVE',
    classification: 'OMEGA',
    date: '1984',
    summary:
      'Commander of Diamond Dogs during the events of The Phantom Pain.',
    data: [
      'CODE NAME: VENOM SNAKE',
      'AFFILIATION: DIAMOND DOGS',
      'SPECIALTY: COMMAND',
      'THEATER: AFGHANISTAN / AFRICA',
      'STATUS: CLASSIFIED',
    ],
  },

  {
    id: 'DB-004',
    type: 'PERSONNEL',
    subject: 'LIQUID SNAKE',
    status: 'CLASSIFIED',
    classification: 'OMEGA',
    date: '2005',
    summary:
      'FOXHOUND commander responsible for the Shadow Moses uprising.',
    data: [
      'CODE NAME: LIQUID',
      'AFFILIATION: FOXHOUND',
      'SPECIALTY: COMMAND',
      'THEATER: SHADOW MOSES',
      'STATUS: DECEASED',
    ],
  },

  {
    id: 'DB-005',
    type: 'PERSONNEL',
    subject: 'RAIDEN',
    status: 'ACTIVE',
    classification: 'OMEGA',
    date: 'CLASSIFIED',
    summary:
      'Former child soldier who became a highly advanced cyborg operative.',
    data: [
      'CODE NAME: RAIDEN',
      'AFFILIATION: FOXHOUND / PMC',
      'SPECIALTY: CQC',
      'WEAPON: HF BLADE',
      'STATUS: ACTIVE',
    ],
  },

  {
    id: 'DB-006',
    type: 'PERSONNEL',
    subject: 'REVOLVER OCELOT',
    status: 'CLASSIFIED',
    classification: 'OMEGA',
    date: 'CLASSIFIED',
    summary:
      'Long-term intelligence operative connected to nearly every major faction.',
    data: [
      'CODE NAME: OCELOT',
      'AFFILIATIONS: GRU / FOXHOUND / PATRIOTS',
      'SPECIALTY: ESPIONAGE',
      'ROLE: MANIPULATION',
      'STATUS: DECEASED',
    ],
  },

  {
    id: 'DB-007',
    type: 'PERSONNEL',
    subject: 'THE BOSS',
    status: 'ARCHIVED',
    classification: 'OMEGA',
    date: '1964',
    summary:
      'Legendary soldier and mentor of Naked Snake.',
    data: [
      'CODE NAME: THE BOSS',
      'ALIAS: THE JOY',
      'SPECIALTY: CQC',
      'UNIT: COBRA UNIT',
      'STATUS: DECEASED',
    ],
  },

  {
    id: 'DB-008',
    type: 'PERSONNEL',
    subject: 'OTACON',
    status: 'ACTIVE',
    classification: 'ALPHA',
    date: 'CLASSIFIED',
    summary:
      'Engineering specialist and ally of Solid Snake.',
    data: [
      'NAME: HAL EMMERICH',
      'CODE NAME: OTACON',
      'SPECIALTY: ENGINEERING',
      'PROJECT: METAL GEAR REX',
      'STATUS: ACTIVE',
    ],
  },

  {
    id: 'DB-009',
    type: 'OPERATIONS',
    subject: 'OPERATION SNAKE EATER',
    status: 'ARCHIVED',
    classification: 'OMEGA',
    date: '1964',
    summary:
      'Critical mission that led to the birth of the Big Boss legend.',
    data: [
      'COMMANDER: NAKED SNAKE',
      'LOCATION: TSELINoyarsk',
      'OBJECTIVE: SOKOLOV / SHAGOHOD',
      'ENEMY: VOLGIN',
      'FINAL TARGET: THE BOSS',
    ],
  },

  {
    id: 'DB-010',
    type: 'OPERATIONS',
    subject: 'SHADOW MOSES INCIDENT',
    status: 'ARCHIVED',
    classification: 'OMEGA',
    date: '2005',
    summary:
      'FOXHOUND uprising involving Metal Gear REX.',
    data: [
      'LOCATION: SHADOW MOSES',
      'COMMANDER: LIQUID SNAKE',
      'OPERATIVE: SOLID SNAKE',
      'WEAPON: METAL GEAR REX',
      'OUTCOME: FOXHOUND DEFEATED',
    ],
  },

  {
    id: 'DB-011',
    type: 'OPERATIONS',
    subject: 'BIG SHELL INCIDENT',
    status: 'ARCHIVED',
    classification: 'OMEGA',
    date: '2009',
    summary:
      'Terrorist occupation used as a simulation for the S3 Plan.',
    data: [
      'LOCATION: BIG SHELL',
      'OPERATIVE: RAIDEN',
      'ANTAGONIST: SOLIDUS SNAKE',
      'SYSTEM: ARSENAL GEAR',
      'PROGRAM: S3',
    ],
  },

  {
    id: 'DB-012',
    type: 'OPERATIONS',
    subject: 'GROUND ZEROES',
    status: 'ARCHIVED',
    classification: 'OMEGA',
    date: '1975',
    summary:
      'Infiltration of Camp Omega to rescue Paz and Chico.',
    data: [
      'COMMANDER: BIG BOSS',
      'LOCATION: CAMP OMEGA',
      'OBJECTIVE: RESCUE',
      'TARGETS: PAZ / CHICO',
      'OUTCOME: MOTHER BASE DESTROYED',
    ],
  },

  {
    id: 'DB-013',
    type: 'OPERATIONS',
    subject: 'THE PHANTOM PAIN',
    status: 'CLASSIFIED',
    classification: 'OMEGA',
    date: '1984',
    summary:
      'Diamond Dogs campaign against Cipher and Skull Face.',
    data: [
      'COMMANDER: VENOM SNAKE',
      'AFFILIATION: DIAMOND DOGS',
      'ENEMY: XOF',
      'PRIMARY TARGET: SKULL FACE',
      'THEATER: AFGHANISTAN / AFRICA',
    ],
  },

  {
    id: 'DB-014',
    type: 'OPERATIONS',
    subject: 'LIQUID OCELOT UPRISING',
    status: 'CLASSIFIED',
    classification: 'OMEGA',
    date: '2014',
    summary:
      'Final large-scale conflict involving Solid Snake and Liquid Ocelot.',
    data: [
      'LOCATION: GLOBAL',
      'COMMANDER: LIQUID OCELOT',
      'OPERATIVE: SOLID SNAKE',
      'TARGET: PATRIOTS SYSTEM',
      'OUTCOME: SYSTEM NEUTRALIZED',
    ],
  },

  {
    id: 'DB-015',
    type: 'EQUIPMENT',
    subject: 'METAL GEAR REX',
    status: 'CLASSIFIED',
    classification: 'OMEGA',
    date: '2005',
    summary:
      'Nuclear-capable bipedal weapons system.',
    data: [
      'TYPE: METAL GEAR',
      'LOCATION: SHADOW MOSES',
      'DESIGNER: OTACON',
      'ROLE: NUCLEAR DETERRENCE',
      'STATUS: DESTROYED',
    ],
  },

  {
    id: 'DB-016',
    type: 'EQUIPMENT',
    subject: 'METAL GEAR RAY',
    status: 'CLASSIFIED',
    classification: 'OMEGA',
    date: '2007',
    summary:
      'Anti-Metal Gear platform.',
    data: [
      'TYPE: METAL GEAR',
      'ROLE: ANTI-METAL GEAR',
      'ERA: MGS2',
      'OPERATOR: PATRIOTS',
      'STATUS: CLASSIFIED',
    ],
  },

  {
    id: 'DB-017',
    type: 'EQUIPMENT',
    subject: 'PEACE WALKER',
    status: 'ARCHIVED',
    classification: 'OMEGA',
    date: '1974',
    summary:
      'AI-controlled strategic weapons platform.',
    data: [
      'TYPE: AI WEAPON',
      'PROJECT: PEACE WALKER',
      'THEATER: COSTA RICA',
      'RELATED: STRANGELOVE',
      'STATUS: DESTROYED',
    ],
  },

  {
    id: 'DB-018',
    type: 'EQUIPMENT',
    subject: 'SAHELANTHROPUS',
    status: 'CLASSIFIED',
    classification: 'OMEGA',
    date: '1984',
    summary:
      'Advanced Metal Gear developed by XOF.',
    data: [
      'TYPE: METAL GEAR',
      'DEVELOPER: HUEY EMMERICH',
      'FACTION: XOF',
      'THEATER: AFGHANISTAN',
      'STATUS: DESTROYED',
    ],
  },

  {
    id: 'DB-019',
    type: 'LOCATION',
    subject: 'OUTER HEAVEN',
    status: 'ARCHIVED',
    classification: 'OMEGA',
    date: '1995',
    summary:
      'Military fortress associated with Big Boss.',
    data: [
      'TYPE: MILITARY FORTRESS',
      'REGION: SOUTH AFRICA',
      'ASSOCIATED: BIG BOSS',
      'THREAT: METAL GEAR TX-55',
      'STATUS: DESTROYED',
    ],
  },

  {
    id: 'DB-020',
    type: 'LOCATION',
    subject: 'ZANZIBAR LAND',
    status: 'ARCHIVED',
    classification: 'OMEGA',
    date: '1999',
    summary:
      'Military territory involved in a major confrontation with Solid Snake.',
    data: [
      'TYPE: MILITARY NATION',
      'REGION: CENTRAL ASIA',
      'OPERATOR: BIG BOSS FACTION',
      'THREAT: METAL GEAR D',
      'STATUS: DEFEATED',
    ],
  },

  {
    id: 'DB-021',
    type: 'LOCATION',
    subject: 'SHADOW MOSES',
    status: 'ARCHIVED',
    classification: 'OMEGA',
    date: '2005',
    summary:
      'Nuclear weapons disposal facility in Alaska.',
    data: [
      'TYPE: MILITARY FACILITY',
      'REGION: ALASKA',
      'WEAPON: METAL GEAR REX',
      'FACTION: FOXHOUND',
      'STATUS: INCIDENT CLOSED',
    ],
  },

  {
    id: 'DB-022',
    type: 'LOCATION',
    subject: 'BIG SHELL',
    status: 'ARCHIVED',
    classification: 'OMEGA',
    date: '2009',
    summary:
      'Offshore environmental facility concealing Arsenal Gear.',
    data: [
      'TYPE: OFFSHORE FACILITY',
      'REGION: HUDSON BAY',
      'HIDDEN SYSTEM: ARSENAL GEAR',
      'EVENT: TERRORIST OCCUPATION',
      'STATUS: DESTROYED',
    ],
  },
]