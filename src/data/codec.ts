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
          'Snake, the mission parameters have been updated. Proceed to the designated infiltration point.',
      },
      {
        time: '14:31:26',
        sender: 'SNAKE',
        message:
          'Understood. I am moving toward the target area now.',
      },
      {
        time: '14:32:04',
        sender: 'FOXHOUND',
        message:
          'Keep a low profile. Enemy surveillance is active.',
      },
      {
        time: '14:32:19',
        sender: 'SNAKE',
        message:
          'Copy that. I will maintain radio silence unless necessary.',
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
          'Otacon, status report on the tactical systems.',
      },
      {
        time: '13:47:28',
        sender: 'OTACON',
        message:
          'The systems are online. I am monitoring the network continuously.',
      },
      {
        time: '13:48:02',
        sender: 'FOXHOUND',
        message:
          'Maintain surveillance and report any unusual activity.',
      },
    ],
  },

  {
    id: 'COM-003',
    name: 'COLONEL',
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
          'All units maintain current positions until further orders.',
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
          'Understood. Keep the channel secure.',
      },
    ],
  },

  {
    id: 'COM-004',
    name: 'MEI LING',
    codename: 'MEI',
    role: 'TACTICAL SUPPORT',
    frequency: '140.96',
    status: 'STANDBY',
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
          'Maintain encryption protocols while the operation remains active.',
      },
    ],
  },

  {
    id: 'COM-005',
    name: 'MILLER',
    codename: 'MASTER',
    role: 'TACTICAL ADVISOR',
    frequency: '141.22',
    status: 'STANDBY',
    clearance: 'BRAVO',
    messages: [
      {
        time: '10:16:22',
        sender: 'MILLER',
        message:
          'The tactical package has been uploaded to the command database.',
      },
      {
        time: '10:17:04',
        sender: 'FOXHOUND',
        message:
          'Package received and verified.',
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