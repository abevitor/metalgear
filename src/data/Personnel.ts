export interface Character {
  id: string
  name: string
  codename: string
  affiliation: string
  status: string
  specialty: string
  cardImage: string
  modalImage: string
  history: string
}

export const characters: Character[] = [
  {
    id: 'PF-001',
    name: 'SOLID SNAKE',
    codename: 'SNAKE',
    affiliation: 'FOXHOUND',
    status: 'ACTIVE',
    specialty: 'INFILTRATION',
    cardImage: '/images/solid-snake.jpg',
    modalImage: '/images/solid-snake.jpg',
    history:
      'Elite infiltration operative known for his missions behind enemy lines and his involvement in several major military operations.',
  },
  {
    id: 'PF-002',
    name: 'DAVID',
    codename: 'SOLID SNAKE',
    affiliation: 'FOX',
    status: 'CLASSIFIED',
    specialty: 'SPECIAL OPERATIONS',
    cardImage: '/images/solid-snake.gif',
    modalImage: '/images/solid-snake.gif',
    history:
      'Legendary soldier whose career shaped much of the modern history surrounding private military organizations and covert operations.',
  },
  {
    id: 'PF-003',
    name: 'OTACON',
    codename: 'HAL EMMERICH',
    affiliation: 'CIVILIAN',
    status: 'ACTIVE',
    specialty: 'ENGINEERING',
    cardImage: '',
    modalImage:'/images/otacon.gif',
    history:
      'Engineer and technical specialist who became an important ally during multiple operations involving advanced weapons systems.',
  },
]