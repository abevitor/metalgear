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
   name: 'OPERATION INTRUDE',
   status: 'ACTIVE',
   priority: 'OMEGA',
   location: 'UNKNOWN',
   commander: 'SOLID SNAKE',
   objective: 'INFILTRATION',
   description: 'Covert infiltration operation involving reconnaissance, intelligence gathering and neutralization of strategic threats.'
   },
    {
    id: 'OP-002',
    name: 'OPERATION SNAKE EATER',
    status: 'STANDBY',
    priority: 'ALPHA',
    location: 'TSELINoyarsk',
    commander: 'NAKED SNAKE',
    objective: 'SPECIAL OPERATIONS',
    description:
      'Special operation involving deep infiltration into hostile territory under extreme conditions.',
  },
  {
    id: 'OP-003',
    name: 'SHADOW MOSES RECON',
    status: 'CLASSIFIED',
    priority: 'OMEGA',
    location: 'SHADOW MOSES',
    commander: 'FOXHOUND',
    objective: 'RECONNAISSANCE',
    description:
      'Reconnaissance operation concerning a classified military facility and unknown strategic assets.',
  },
  {
    id: 'OP-004',
    name: 'PATRIOT SURVEILLANCE',
    status: 'STANDBY',
    priority: 'BRAVO',
    location: 'CLASSIFIED',
    commander: 'UNKNOWN',
    objective: 'SURVEILLANCE',
    description:
      'Long-range intelligence operation focused on monitoring classified communication networks.',
  },
  {
    id: 'OP-005',
    name: 'OUTER HEAVEN',
    status: 'ACTIVE',
    priority: 'OMEGA',
    location: 'OUTER HEAVEN',
    commander: 'FOXHOUND',
    objective: 'INFILTRATION',
    description:
      'Strategic operation involving infiltration and intelligence collection inside enemy-controlled territory.',
  },
  {
    id: 'OP-006',
    name: 'ZANZIBAR LAND',
    status: 'CLASSIFIED',
    priority: 'ALPHA',
    location: 'ZANZIBAR LAND',
    commander: 'CLASSIFIED',
    objective: 'TACTICAL OPERATION',
    description:
      'High-level operation with restricted intelligence concerning military infrastructure and strategic assets.',
  },
]