export interface intelligenceRecord {
   id:string
   title: string 
   category: 'PERSONNEL' | 'OPERATIONS' | 'LOCATIONS' | 'EVENTS'
   classification: 'OMEGA' | 'ALPHA'| 'BRAVO'
   subject: string
   date: string 
   status: 'ACTIVE' |'ARCHIVED' | 'CLASSIFED'
   summary: string
   document: string
}

export const intelligenceRecords: IntelligenceRecord[] = [
    {
    id: 'INTEL-001',
    title: 'PROJECT METAL GEAR',
    category: 'OPERATIONS',
    classification: 'OMEGA',
    subject: 'STRATEGIC WEAPON DEVELOPMENT',
    date: '████ / ██ / ██',
    status: 'CLASSIFIED',
    summary:
      'Investigation concerning the development and deployment of a strategic nuclear-capable weapons platform.',
    document:
      'FOXHOUND intelligence indicates the existence of a mobile weapons platform capable of launching nuclear warheads independently of traditional military infrastructure.',
  },

  {
    id: 'INTEL-002',
    title: 'SHADOW MOSES INCIDENT',
    category: 'EVENTS',
    classification: 'OMEGA',
    subject: 'TACTICAL INCIDENT',
    date: '2005 / ██ / ██',
    status: 'ARCHIVED',
    summary:
      'Classified incident involving a hostile takeover of the Shadow Moses Island facility.',
    document:
      'A special operations unit infiltrated the Shadow Moses facility following an armed occupation. The incident resulted in the exposure of several classified military projects.',
  },

  {
    id: 'INTEL-003',
    title: 'SOLID SNAKE',
    category: 'PERSONNEL',
    classification: 'ALPHA',
    subject: 'FOXHOUND OPERATIVE',
    date: 'CLASSIFIED',
    status: 'ACTIVE',
    summary:
      'Personnel intelligence concerning an elite infiltration specialist.',
    document:
      'Operative identified under the codename Solid Snake. Extensive field experience in covert infiltration, reconnaissance and high-risk tactical operations.',
  },

  {
    id: 'INTEL-004',
    title: 'OUTER HEAVEN',
    category: 'LOCATIONS',
    classification: 'ALPHA',
    subject: 'PRIVATE MILITARY NATION',
    date: 'CLASSIFIED',
    status: 'CLASSIFIED',
    summary:
      'Intelligence concerning a military organization operating independently from conventional states.',
    document:
      'Outer Heaven represents a major strategic concern due to its military infrastructure, independent command structure and access to advanced weapons technology.',
  },

  {
    id: 'INTEL-005',
    title: 'PATRIOTS NETWORK',
    category: 'EVENTS',
    classification: 'OMEGA',
    subject: 'CONTROL SYSTEM',
    date: 'CLASSIFIED',
    status: 'CLASSIFIED',
    summary:
      'Investigation into a global information and control network.',
    document:
      'Intelligence suggests the existence of a covert organization capable of manipulating information systems, military assets and global communications.',
  },

  {
    id: 'INTEL-006',
    title: 'ZANZIBAR LAND',
    category: 'LOCATIONS',
    classification: 'BRAVO',
    subject: 'MILITARY TERRITORY',
    date: 'CLASSIFIED',
    status: 'ARCHIVED',
    summary:
      'Strategic intelligence concerning a heavily fortified military territory.',
    document:
      'Zanzibar Land became a major point of interest due to its military infrastructure and the presence of advanced strategic assets.',
  },
]