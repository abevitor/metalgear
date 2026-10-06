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
      'Personnel record concerning a FOXHOUND infiltration specialist with extensive field experience.',
    data: [
      'CODE NAME: SNAKE',
      'AFFILIATION: FOXHOUND',
      'SPECIALTY: INFILTRATION',
      'STATUS: ACTIVE',
      'CLEARANCE: OMEGA',
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
      'Historical personnel record concerning one of the most influential soldiers in modern military history.',
    data: [
      'CODE NAME: NAKED SNAKE',
      'AFFILIATION: FOX',
      'SPECIALTY: SPECIAL OPERATIONS',
      'STATUS: CLASSIFIED',
      'CLEARANCE: OMEGA',
    ],
  },

  {
    id: 'DB-003',
    type: 'OPERATIONS',
    subject: 'SHADOW MOSES',
    status: 'CLASSIFIED',
    classification: 'OMEGA',
    date: '2005',
    summary:
      'Database record related to the Shadow Moses incident and the tactical operations conducted on the island.',
    data: [
      'OPERATION: SHADOW MOSES RECON',
      'LOCATION: SHADOW MOSES',
      'THREAT LEVEL: OMEGA',
      'STATUS: CLASSIFIED',
      'COMMAND: FOXHOUND',
    ],
  },

  {
    id: 'DB-004',
    type: 'OPERATIONS',
    subject: 'OPERATION INTRUDE',
    status: 'ACTIVE',
    classification: 'ALPHA',
    date: 'CLASSIFIED',
    summary:
      'Active tactical infiltration operation involving covert reconnaissance and neutralization of strategic threats.',
    data: [
      'OPERATION ID: OP-001',
      'COMMANDER: SOLID SNAKE',
      'OBJECTIVE: INFILTRATION',
      'STATUS: ACTIVE',
      'PRIORITY: ALPHA',
    ],
  },

  {
    id: 'DB-005',
    type: 'EQUIPMENT',
    subject: 'SOCOM',
    status: 'ACTIVE',
    classification: 'ALPHA',
    date: 'CLASSIFIED',
    summary:
      'Compact tactical sidearm designated for covert field operations.',
    data: [
      'TYPE: HANDGUN',
      'ROLE: SIDEARM',
      'OPERATOR: FOXHOUND',
      'STATUS: OPERATIONAL',
      'ACCESS: ALPHA',
    ],
  },

  {
    id: 'DB-006',
    type: 'EQUIPMENT',
    subject: 'SOLITON RADAR',
    status: 'ACTIVE',
    classification: 'OMEGA',
    date: 'CLASSIFIED',
    summary:
      'Portable tactical sensor system used for battlefield reconnaissance and threat detection.',
    data: [
      'TYPE: SENSOR',
      'ROLE: RECONNAISSANCE',
      'RANGE: CLASSIFIED',
      'STATUS: OPERATIONAL',
      'ACCESS: OMEGA',
    ],
  },

  {
    id: 'DB-007',
    type: 'LOCATION',
    subject: 'OUTER HEAVEN',
    status: 'CLASSIFIED',
    classification: 'ALPHA',
    date: 'CLASSIFIED',
    summary:
      'Strategic military territory operated independently from conventional state structures.',
    data: [
      'TYPE: MILITARY TERRITORY',
      'THREAT LEVEL: ALPHA',
      'REGION: CLASSIFIED',
      'STATUS: CLASSIFIED',
      'ACCESS: ALPHA',
    ],
  },

  {
    id: 'DB-008',
    type: 'LOCATION',
    subject: 'ZANZIBAR LAND',
    status: 'ARCHIVED',
    classification: 'BRAVO',
    date: '1999',
    summary:
      'Archived strategic location associated with military operations and advanced weapons research.',
    data: [
      'TYPE: MILITARY TERRITORY',
      'REGION: CENTRAL ASIA',
      'STATUS: ARCHIVED',
      'THREAT LEVEL: BRAVO',
      'ACCESS: RESTRICTED',
    ],
  },
]