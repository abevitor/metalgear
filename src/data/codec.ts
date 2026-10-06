export interface CodecMessage {
  time: string
  sender: string
  message: string
}

export interface CodecContact {
  id: string
  name: string
  codename: string
  role: string
  frequency: string
  status: 'ONLINE' | 'STANDBY' | 'OFFLINE'
  clearance: 'OMEGA' | 'ALPHA' | 'BRAVO'
  messages: CodecMessage[]
}

export const codecContacts: CodecContact[] = [
  {
    id: 'COM-001',
    name: 'SOLID SNAKE',
    codename: 'SNAKE',
    role: 'FIELD OPERATIVE',
    frequency: '141.80',
    status: 'ONLINE',
    clearance: 'OMEGA',
    messages: [
      {
        time: '14:31:08',
        sender: 'FOXHOUND',
        message:
          'Snake, proceed to the designated infiltration point.',
      },
      {
        time: '14:31:26',
        sender: 'SNAKE',
        message:
          'Understood. Moving toward the target area.',
      },
      {
        time: '14:32:04',
        sender: 'FOXHOUND',
        message:
          'Enemy surveillance is active. Maintain caution.',
      },
    ],
  },

  {
    id: 'COM-002',
    name: 'OTACON',
    codename: 'HAL',
    role: 'TECHNICAL SPECIALIST',
    frequency: '141.12',
    status: 'ONLINE',
    clearance: 'ALPHA',
    messages: [
      {
        time: '13:47:10',
        sender: 'FOXHOUND',
        message:
          'Otacon, report tactical system status.',
      },
      {
        time: '13:47:28',
        sender: 'OTACON',
        message:
          'All systems are operating normally.',
      },
      {
        time: '13:48:02',
        sender: 'FOXHOUND',
        message:
          'Continue monitoring the network.',
      },
    ],
  },

  {
    id: 'COM-003',
    name: 'ROY CAMPBELL',
    codename: 'CAMPBELL',
    role: 'MISSION COMMAND',
    frequency: '140.85',
    status: 'ONLINE',
    clearance: 'OMEGA',
    messages: [
      {
        time: '12:20:15',
        sender: 'CAMPBELL',
        message:
          'All units maintain current positions.',
      },
      {
        time: '12:21:03',
        sender: 'FOXHOUND',
        message:
          'Command network confirms the directive.',
      },
      {
        time: '12:21:47',
        sender: 'CAMPBELL',
        message:
          'Keep the channel secure.',
      },
    ],
  },

  {
    id: 'COM-004',
    name: 'MEI LING',
    codename: 'MEI',
    role: 'TACTICAL SUPPORT',
    frequency: '140.96',
    status: 'ONLINE',
    clearance: 'ALPHA',
    messages: [
      {
        time: '11:04:31',
        sender: 'MEI LING',
        message:
          'Codec encryption is functioning normally.',
      },
      {
        time: '11:05:02',
        sender: 'FOXHOUND',
        message:
          'Maintain encryption protocols.',
      },
    ],
  },

  {
    id: 'COM-005',
    name: 'KAZUHIRA MILLER',
    codename: 'KAZ',
    role: 'TACTICAL ADVISOR',
    frequency: '141.22',
    status: 'ONLINE',
    clearance: 'OMEGA',
    messages: [
      {
        time: '10:16:22',
        sender: 'KAZ',
        message:
          'The tactical package has been uploaded.',
      },
      {
        time: '10:17:04',
        sender: 'FOXHOUND',
        message:
          'Package received and verified.',
      },
    ],
  },

  {
    id: 'COM-006',
    name: 'NAOMI HUNTER',
    codename: 'NAOMI',
    role: 'MEDICAL / GENETICS',
    frequency: '140.66',
    status: 'STANDBY',
    clearance: 'OMEGA',
    messages: [
      {
        time: '09:44:18',
        sender: 'NAOMI',
        message:
          'Medical analysis is complete.',
      },
      {
        time: '09:45:03',
        sender: 'FOXHOUND',
        message:
          'Transmit the report through the secure channel.',
      },
    ],
  },

  {
    id: 'COM-007',
    name: 'EVA',
    codename: 'EVA',
    role: 'INTELLIGENCE OPERATIVE',
    frequency: '141.37',
    status: 'STANDBY',
    clearance: 'OMEGA',
    messages: [
      {
        time: '08:21:11',
        sender: 'EVA',
        message:
          'Enemy movements detected in the southern sector.',
      },
      {
        time: '08:22:00',
        sender: 'FOXHOUND',
        message:
          'Continue observation.',
      },
    ],
  },

  {
    id: 'COM-008',
    name: 'ZERO',
    codename: 'MAJOR ZERO',
    role: 'STRATEGIC COMMAND',
    frequency: '140.20',
    status: 'OFFLINE',
    clearance: 'OMEGA',
    messages: [
      {
        time: '07:10:25',
        sender: 'ZERO',
        message:
          'The information network must remain operational.',
      },
      {
        time: '07:11:08',
        sender: 'FOXHOUND',
        message:
          'Connection terminated.',
      },
    ],
  },

  {
    id: 'COM-009',
    name: 'PARA-MEDIC',
    codename: 'PARA-MEDIC',
    role: 'MEDICAL SUPPORT',
    frequency: '140.76',
    status: 'STANDBY',
    clearance: 'ALPHA',
    messages: [
      {
        time: '06:48:11',
        sender: 'PARA-MEDIC',
        message:
          'Medical data is ready for analysis.',
      },
      {
        time: '06:49:02',
        sender: 'FOXHOUND',
        message:
          'Data received.',
      },
    ],
  },

  {
    id: 'COM-010',
    name: 'SIGINT',
    codename: 'SIGINT',
    role: 'TECHNICAL INTELLIGENCE',
    frequency: '140.74',
    status: 'OFFLINE',
    clearance: 'OMEGA',
    messages: [
      {
        time: '05:21:08',
        sender: 'SIGINT',
        message:
          'Enemy communication protocols have been intercepted.',
      },
      {
        time: '05:22:14',
        sender: 'FOXHOUND',
        message:
          'Archive the transmission.',
      },
    ],
  },

  {
    id: 'COM-011',
    name: 'ROSEMARY',
    codename: 'ROSE',
    role: 'DATA / PSYCHOLOGICAL SUPPORT',
    frequency: '140.95',
    status: 'STANDBY',
    clearance: 'ALPHA',
    messages: [
      {
        time: '04:12:18',
        sender: 'ROSE',
        message:
          'Your psychological profile has been updated.',
      },
      {
        time: '04:13:05',
        sender: 'RAIDEN',
        message:
          'Understood.',
      },
    ],
  },

  {
    id: 'COM-012',
    name: 'RAIDEN',
    codename: 'RAIDEN',
    role: 'SPECIAL OPERATIONS',
    frequency: '141.44',
    status: 'ONLINE',
    clearance: 'OMEGA',
    messages: [
      {
        time: '03:55:18',
        sender: 'RAIDEN',
        message:
          'Target location confirmed.',
      },
      {
        time: '03:56:02',
        sender: 'FOXHOUND',
        message:
          'Proceed with caution.',
      },
    ],
  },
]

export interface RadioStation {
  name: string
  frequency: string
  description: string
  audio: string
}

export const radioStation: RadioStation = {
  name: 'FOXHOUND RADIO',
  frequency: '87.50 FM',
  description: 'TACTICAL COMMAND BROADCAST',
  audio: '/audio/foxhound-radio.mp3',
}