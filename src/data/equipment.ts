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
    operator: 'FOXHOUND',
    condition: 'OPERATIONAL',
    description:
      'Compact tactical sidearm designed for covert operations and close-quarter engagements.',
    specifications: [
      'TYPE: HANDGUN',
      'ROLE: SIDEARM',
      'STATUS: OPERATIONAL',
      'ACCESS: ALPHA',
    ],
  },
  {
    id: 'EQ-002',
    name: 'HIGH-FREQUENCY BLADE',
    category: 'WEAPONS',
    status: 'CLASSIFIED',
    classification: 'OMEGA',
    operator: 'SPECIAL OPERATIONS',
    condition: 'RESTRICTED',
    description:
      'Experimental close-combat weapon based on advanced energy-frequency technology.',
    specifications: [
      'TYPE: MELEE',
      'ROLE: CQC',
      'STATUS: RESTRICTED',
      'ACCESS: OMEGA',
    ],
  },
  {
    id: 'EQ-003',
    name: 'SOLITON RADAR',
    category: 'TECHNOLOGY',
    status: 'ACTIVE',
    classification: 'OMEGA',
    operator: 'FOXHOUND',
    condition: 'OPERATIONAL',
    description:
      'Portable tactical sensor system designed to detect hostile activity and provide battlefield awareness.',
    specifications: [
      'TYPE: SENSOR',
      'ROLE: RECON',
      'STATUS: OPERATIONAL',
      'RANGE: CLASSIFIED',
    ],
  },
  {
    id: 'EQ-004',
    name: 'CODEC TERMINAL',
    category: 'COMMUNICATION',
    status: 'ACTIVE',
    classification: 'ALPHA',
    operator: 'COMMAND NETWORK',
    condition: 'SECURE',
    description:
      'Encrypted communication terminal used to maintain contact between field operatives and command personnel.',
    specifications: [
      'TYPE: COMMUNICATION',
      'CHANNEL: ENCRYPTED',
      'STATUS: SECURE',
      'NETWORK: FOXHOUND',
    ],
  },
  {
    id: 'EQ-005',
    name: 'STEALTH CAMOUFLAGE',
    category: 'GEAR',
    status: 'STANDBY',
    classification: 'OMEGA',
    operator: 'INFILTRATION UNIT',
    condition: 'READY',
    description:
      'Advanced camouflage system designed to reduce visual detection during infiltration operations.',
    specifications: [
      'TYPE: CAMOUFLAGE',
      'ROLE: STEALTH',
      'STATUS: READY',
      'ACCESS: OMEGA',
    ],
  },
  {
    id: 'EQ-006',
    name: 'NIGHT VISION SYSTEM',
    category: 'GEAR',
    status: 'ACTIVE',
    classification: 'BRAVO',
    operator: 'FIELD OPERATIVES',
    condition: 'OPERATIONAL',
    description:
      'Optical enhancement system designed for low-light and nighttime tactical operations.',
    specifications: [
      'TYPE: OPTICS',
      'ROLE: NIGHT OPERATION',
      'STATUS: OPERATIONAL',
      'ACCESS: BRAVO',
    ],
  },
  {
    id: 'EQ-007',
    name: 'REMOTE CONTROL UNIT',
    category: 'TECHNOLOGY',
    status: 'STANDBY',
    classification: 'ALPHA',
    operator: 'TECHNICAL DIVISION',
    condition: 'READY',
    description:
      'Remote tactical control interface used to operate compatible systems from a secure distance.',
    specifications: [
      'TYPE: CONTROL SYSTEM',
      'ROLE: REMOTE OPERATION',
      'STATUS: READY',
      'ACCESS: ALPHA',
    ],
  },
  {
    id: 'EQ-008',
    name: 'FOXHOUND FIELD KIT',
    category: 'GEAR',
    status: 'ACTIVE',
    classification: 'BRAVO',
    operator: 'FIELD OPERATIVES',
    condition: 'OPERATIONAL',
    description:
      'Standardized field equipment package containing essential tools for extended tactical operations.',
    specifications: [
      'TYPE: FIELD KIT',
      'ROLE: SUPPORT',
      'STATUS: OPERATIONAL',
      'ACCESS: BRAVO',
    ],
  },
]


