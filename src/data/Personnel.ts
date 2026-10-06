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
    name: 'DAVID',
    codename: ' SOLID SNAKE',
    affiliation: 'FOXHOUND / PHILANTHROPY',
    status: 'ACTIVE',
    specialty: 'INFILTRATION / CQC',
    cardImage: '/images/',
    modalImage: '/images/solid-snake.gif',
    history:
      'David, conhecido como Solid Snake, é um dos maiores soldados e especialistas em infiltração da saga. Filho clonado de Big Boss através do projeto Les Enfants Terribles, participou de operações como Outer Heaven, Zanzibar Land, Shadow Moses, Big Shell e sua última missão contra Liquid Ocelot. Tornou-se conhecido por enfrentar repetidamente a tecnologia Metal Gear e por sua oposição aos sistemas militares e políticos que tentavam controlar o campo de batalha.',
  },

  {
    id: 'PF-002',
    name: 'BIG BOSS',
    codename: 'NAKED SNAKE',
    affiliation: 'FOX / MSF / DIAMOND DOGS',
    status: 'HISTORICAL',
    specialty: 'SPECIAL OPERATIONS / CQC',
    cardImage: '/images/bigboss.jfif',
    modalImage: '/images/bigboss.jfif',
    history:
      'John, conhecido como Naked Snake e posteriormente Big Boss, foi um dos soldados mais influentes da história da saga. Discípulo direto de The Boss, participou da Operação Snake Eater em 1964 e recebeu o título de Big Boss após derrotá-la. Mais tarde fundou e comandou organizações militares como Militaires Sans Frontières e estabeleceu as bases ideológicas que levariam ao surgimento de Outer Heaven e Zanzibar Land.',
  },

  {
    id: 'PF-003',
    name: 'VENOM SNAKE',
    codename: 'VENOM SNAKE',
    affiliation: 'DIAMOND DOGS',
    status: 'ACTIVE',
    specialty: 'INFILTRATION / COMMAND',
    cardImage: '/images/venom.gif',
    modalImage: '',
    history:
      'Venom Snake é o personagem central de Metal Gear Solid V: The Phantom Pain. Ele assume a identidade de Big Boss após o ataque à Mother Base, tornando-se o líder dos Diamond Dogs. Sua trajetória está ligada à criação do mito de Big Boss e ao processo de transformação de um soldado em símbolo político e militar.',
  },

  {
    id: 'PF-004',
    name: 'LIQUID SNAKE',
    codename: 'LIQUID',
    affiliation: 'FOXHOUND',
    status: 'DECEASED',
    specialty: 'COMMAND / MILITARY OPERATIONS',
    cardImage: '/images/liquid-snake-metal-gear-solid.gif',
    modalImage: '/images/liquid-snake-metal-gear-solid.gif',
    history:
      'Eli, conhecido como Liquid Snake, é o irmão genético de Solid Snake. Comandou a unidade FOXHOUND durante a revolta de Shadow Moses e buscava obter o legado genético e militar associado a Big Boss. Sua rivalidade com Solid Snake é uma das relações centrais de Metal Gear Solid.',
  },

  {
    id: 'PF-005',
    name: 'SOLIDUS SNAKE',
    codename: 'SOLIDUS',
    affiliation: 'PATRIOTS / DEAD CELL',
    status: 'DECEASED',
    specialty: 'COMMAND / CQC',
    cardImage: '/images/personnel/solidus-snake.gif',
    modalImage: '/images/personnel/solidus-snake.gif',
    history:
      'George Sears, conhecido como Solidus Snake, foi criado pelos Patriots como uma cópia genética de Big Boss. Tornou-se presidente dos Estados Unidos e posteriormente liderou a tomada do Big Shell. Procurava descobrir a verdadeira estrutura dos Patriots e libertar o país do controle exercido pela organização.',
  },

  {
    id: 'PF-006',
    name: 'RAIDEN',
    codename: 'RAIDEN',
    affiliation: 'FOXHOUND / PMC / ARSENAL',
    status: 'ACTIVE',
    specialty: 'CQC / SWORD COMBAT',
    cardImage: '/images/personnel/raiden.gif',
    modalImage: '/images/personnel/raiden.gif',
    history:
      'Jack, conhecido como Raiden, foi utilizado pelos Patriots no programa S3 durante o incidente de Big Shell. Após descobrir que sua missão fazia parte de uma simulação destinada a manipular seu comportamento, passou a confrontar diretamente o sistema. Mais tarde tornou-se um combatente cibernético altamente especializado.',
  },

  {
    id: 'PF-007',
    name: 'REVOLVER OCELOT',
    codename: 'OCELOT',
    affiliation: 'GRU / FOXHOUND / PATRIOTS',
    status: 'DECEASED',
    specialty: 'INTERROGATION / GUNFIGHTING',
    cardImage: '/images/personnel/ocelot.gif',
    modalImage: '/images/personnel/ocelot.gif',
    history:
      'Adamska, conhecido como Revolver Ocelot, é um dos principais articuladores políticos e militares da saga. Inicialmente membro da unidade Ocelot Unit, manteve relações com Big Boss, Zero, Patriots, Liquid Snake e outras organizações. Durante anos operou por trás de diferentes facções e desempenhou papel fundamental nos planos envolvendo o legado de Big Boss.',
  },

  {
    id: 'PF-008',
    name: 'THE BOSS',
    codename: 'THE JOY',
    affiliation: 'COBRA UNIT / USA',
    status: 'DECEASED',
    specialty: 'CQC / ESPIONAGE',
    cardImage: '/images/personnel/the-boss.gif',
    modalImage: '/images/personnel/the-boss.gif',
    history:
      'The Boss foi uma lendária soldado da Segunda Guerra Mundial e mentora de Naked Snake. Ela criou e desenvolveu com Snake a técnica CQC e liderou a Cobra Unit. Sua missão final durante Snake Eater envolvia sacrificar sua reputação e a própria vida para cumprir uma missão política secreta.',
  },

  {
    id: 'PF-009',
    name: 'EVA',
    codename: 'EVA',
    affiliation: 'KGB / PATRIOTS',
    status: 'HISTORICAL',
    specialty: 'ESPIONAGE / INFILTRATION',
    cardImage: '/images/personnel/eva.gif',
    modalImage: '/images/personnel/eva.gif',
    history:
      'EVA foi uma agente de inteligência que colaborou com Naked Snake durante Snake Eater. Posteriormente tornou-se uma figura importante na preservação do legado de Big Boss e nos acontecimentos relacionados aos Patriots. Em MGS4, já como Big Mama, liderou uma resistência na Europa Oriental.',
  },

  {
    id: 'PF-010',
    name: 'ZERO',
    codename: 'MAJOR ZERO',
    affiliation: 'FOX / PATRIOTS',
    status: 'DECEASED',
    specialty: 'INTELLIGENCE / COMMAND',
    cardImage: '/images/personnel/zero.gif',
    modalImage: '/images/personnel/zero.gif',
    history:
      'David Oh, conhecido como Major Zero, foi comandante da unidade FOX e parceiro de The Boss e Naked Snake. Após os eventos de Snake Eater, ajudou a fundar os Patriots com o objetivo de preservar a vontade de The Boss. Sua visão sobre informação e controle acabou contribuindo para a criação do sistema que posteriormente fugiria ao controle humano.',
  },

  {
    id: 'PF-011',
    name: 'KAZUHIRA MILLER',
    codename: 'KAZ',
    affiliation: 'MSF / DIAMOND DOGS',
    status: 'ACTIVE',
    specialty: 'TACTICAL COMMAND',
    cardImage: '/images/personnel/kaz.gif',
    modalImage: '/images/personnel/kaz.gif',
    history:
      'Kazuhira Miller foi um dos principais parceiros de Big Boss. Atuou como comandante adjunto e administrador das forças de MSF e posteriormente Diamond Dogs. Após a destruição da Mother Base, dedicou-se à reconstrução das forças de Snake e tornou-se profundamente desconfiado das manipulações envolvendo Cipher.',
  },

  {
    id: 'PF-012',
    name: 'SKULL FACE',
    codename: 'SKULL FACE',
    affiliation: 'XOF',
    status: 'DECEASED',
    specialty: 'INTELLIGENCE / BIOLOGICAL WARFARE',
    cardImage: '/images/personnel/skull-face.gif',
    modalImage: '/images/personnel/skull-face.gif',
    history:
      'Skull Face foi comandante da unidade XOF e um dos principais antagonistas de The Phantom Pain. Sua história está ligada às experiências de controle linguístico, armas biológicas e à tentativa de eliminar idiomas dominantes por meio de parasitas. Sua rivalidade com Big Boss e Zero nasce de décadas de conflitos dentro das estruturas secretas dos Patriots.',
  },

  {
    id: 'PF-013',
    name: 'QUIET',
    codename: 'QUIET',
    affiliation: 'XOF / DIAMOND DOGS',
    status: 'UNKNOWN',
    specialty: 'SNIPER / INFILTRATION',
    cardImage: '/images/personnel/quiet.gif',
    modalImage: '/images/personnel/quiet.gif',
    history:
      'Quiet é uma atiradora de elite envolvida nos experimentos com parasitas de Skull Face. Inicialmente enviada para eliminar Big Boss, acabou se tornando uma importante aliada dos Diamond Dogs. Sua condição biológica está diretamente relacionada aos experimentos com parasitas e à busca de vingança contra Skull Face.',
  },

  {
    id: 'PF-014',
    name: 'HUEY EMMERICH',
    codename: 'HUEY',
    affiliation: 'MSF / DIAMOND DOGS',
    status: 'UNKNOWN',
    specialty: 'ENGINEERING / AI',
    cardImage: '/images/personnel/huey.gif',
    modalImage: '/images/personnel/huey.gif',
    history:
      'Dr. Emmerich é um cientista especializado em sistemas de locomoção e inteligência artificial. Participou dos projetos Peace Walker e posteriormente Metal Gear Sahelanthropus. Seu envolvimento com Big Boss e os Diamond Dogs acabou gerando conflitos internos e acusações de traição.',
  },

  {
    id: 'PF-015',
    name: 'HAL EMMERICH',
    codename: 'OTACON',
    affiliation: 'PHILANTHROPY',
    status: 'ACTIVE',
    specialty: 'ENGINEERING / COMPUTING',
    cardImage: '/images/personnel/otacon.gif',
    modalImage: '/images/personnel/otacon.gif',
    history:
      'Hal Emmerich, conhecido como Otacon, é um cientista especializado em robótica e tecnologia militar. Projetou o Metal Gear REX sem conhecer inicialmente todo o propósito do projeto. Após conhecer Solid Snake durante Shadow Moses, tornou-se seu principal parceiro e participou da luta contra a proliferação de Metal Gears.',
  },

  {
    id: 'PF-016',
    name: 'MERYL SILVERBURGH',
    codename: 'MERYL',
    affiliation: 'FOXHOUND / US ARMY',
    status: 'ACTIVE',
    specialty: 'COMBAT / COMMAND',
    cardImage: '/images/personnel/meryl.gif',
    modalImage: '/images/personnel/meryl.gif',
    history:
      'Meryl Silverburgh é uma soldado que participou do incidente de Shadow Moses e posteriormente comandou a unidade Rat Patrol Team 01. Sua relação com Solid Snake e sua trajetória dentro das forças militares fazem dela uma das principais aliadas da história.',
  },

  {
    id: 'PF-017',
    name: 'NAOMI HUNTER',
    codename: 'NAOMI',
    affiliation: 'FOXHOUND / GENOME',
    status: 'UNKNOWN',
    specialty: 'GENETICS / MEDICINE',
    cardImage: '/images/personnel/naomi.gif',
    modalImage: '/images/personnel/naomi.gif',
    history:
      'Naomi Hunter é uma pesquisadora especializada em genética e engenharia biológica. Desenvolveu o vírus FOXDIE e manteve uma relação pessoal complicada com Solid Snake. Seu conhecimento científico acabou envolvendo-a diretamente nos projetos relacionados ao legado genético de Big Boss.',
  },

  {
    id: 'PF-018',
    name: 'MEI LING',
    codename: 'MEI',
    affiliation: 'US GOVERNMENT',
    status: 'ACTIVE',
    specialty: 'COMPUTING / COMMUNICATION',
    cardImage: '/images/personnel/mei-ling.gif',
    modalImage: '/images/personnel/mei-ling.gif',
    history:
      'Mei Ling é especialista em computação e comunicação. Desenvolveu o sistema Soliton Radar e auxiliou Solid Snake por Codec durante Shadow Moses. Mais tarde tornou-se comandante do encouraçado Missouri e continuou envolvida em operações contra o sistema de guerra controlado pelos Patriots.',
  },

  {
    id: 'PF-019',
    name: 'ROY CAMPBELL',
    codename: 'COLONEL',
    affiliation: 'FOXHOUND / US ARMY',
    status: 'RETIRED',
    specialty: 'COMMAND / TACTICAL SUPPORT',
    cardImage: '/images/personnel/campbell.gif',
    modalImage: '/images/personnel/campbell.gif',
    history:
      'Roy Campbell foi comandante e coordenador de diversas missões de Solid Snake. Liderou as operações relacionadas a Zanzibar Land e Shadow Moses e forneceu suporte tático e estratégico através do Codec.',
  },

  {
    id: 'PF-020',
    name: 'PSYCHO MANTIS',
    codename: 'PSYCHO MANTIS',
    affiliation: 'FOXHOUND',
    status: 'DECEASED',
    specialty: 'PSYCHIC WARFARE',
    cardImage: '/images/personnel/psycho-mantis.gif',
    modalImage: '/images/personnel/psycho-mantis.gif',
    history:
      'Psycho Mantis era um membro de FOXHOUND com extraordinárias habilidades psíquicas. Seu poder de ler mentes e influenciar pessoas tornou-o uma das figuras mais perigosas do grupo liderado por Liquid Snake.',
  },

  {
    id: 'PF-021',
    name: 'SNIPER WOLF',
    codename: 'SNIPER WOLF',
    affiliation: 'FOXHOUND',
    status: 'DECEASED',
    specialty: 'SNIPER',
    cardImage: '/images/personnel/sniper-wolf.gif',
    modalImage: '/images/personnel/sniper-wolf.gif',
    history:
      'Sniper Wolf foi uma atiradora de elite da unidade FOXHOUND. Reconhecida por sua precisão e capacidade de permanecer imóvel durante longos períodos, tornou-se uma das principais oponentes de Solid Snake durante Shadow Moses.',
  },

  {
    id: 'PF-022',
    name: 'VULCAN RAVEN',
    codename: 'VULCAN RAVEN',
    affiliation: 'FOXHOUND',
    status: 'DECEASED',
    specialty: 'HEAVY WEAPONS',
    cardImage: '/images/personnel/vulcan-raven.gif',
    modalImage: '/images/personnel/vulcan-raven.gif',
    history:
      'Vulcan Raven era um poderoso membro de FOXHOUND especializado em armas pesadas. Possuía enorme resistência física e participou da ocupação de Shadow Moses.',
  },

  {
    id: 'PF-023',
    name: 'VOLGIN',
    codename: 'THUNDERBOLT',
    affiliation: 'GRU',
    status: 'DECEASED',
    specialty: 'COMMAND / CQC',
    cardImage: '/images/personnel/volgin.gif',
    modalImage: '/images/personnel/volgin.gif',
    history:
      'Yevgeny Volgin era um coronel do GRU e um dos principais antagonistas de Snake Eater. Seu plano envolvia o controle de instalações militares soviéticas e o uso do protótipo Shagohod.',
  },

  {
    id: 'PF-024',
    name: 'PAZ ORTEGA ANDRADE',
    codename: 'PAZ',
    affiliation: 'CIPHER',
    status: 'DECEASED',
    specialty: 'ESPIONAGE',
    cardImage: '/images/personnel/paz.gif',
    modalImage: '/images/personnel/paz.gif',
    history:
      'Paz inicialmente aparece como uma estudante que busca ajuda para combater forças militares na Costa Rica. Posteriormente é revelado que sua identidade e missão estavam ligadas a Cipher e às manipulações de Zero.',
  },

  {
    id: 'PF-025',
    name: 'AMANDA VALENCIANO LIBRE',
    codename: 'AMANDA',
    affiliation: 'FSLN',
    status: 'ACTIVE',
    specialty: 'COMMAND / GUERRILLA WARFARE',
    cardImage: '/images/personnel/amanda.gif',
    modalImage: '/images/personnel/amanda.gif',
    history:
      'Amanda é uma comandante ligada à Frente Sandinista de Libertação Nacional. Em Peace Walker, ajuda Snake durante os conflitos na América Central e representa a dimensão política e revolucionária presente na história.',
  },

  {
    id: 'PF-026',
    name: 'CHICO',
    codename: 'CHICO',
    affiliation: 'FSLN',
    status: 'DECEASED',
    specialty: 'RECONNAISSANCE',
    cardImage: '/images/personnel/chico.gif',
    modalImage: '/images/personnel/chico.gif',
    history:
      'Chico é o irmão mais novo de Amanda. Em Peace Walker participa dos acontecimentos na Costa Rica e posteriormente é mantido prisioneiro em Camp Omega durante Ground Zeroes.',
  },

  {
    id: 'PF-027',
    name: 'STRANGELOVE',
    codename: 'STRANGELOVE',
    affiliation: 'MSF',
    status: 'DECEASED',
    specialty: 'ARTIFICIAL INTELLIGENCE',
    cardImage: '/images/personnel/strangelove.gif',
    modalImage: '/images/personnel/strangelove.gif',
    history:
      'Strangelove é uma cientista responsável pelo desenvolvimento de sistemas de inteligência artificial relacionados ao projeto Peace Walker. Seu trabalho está diretamente conectado à tentativa de reproduzir a vontade e o pensamento de The Boss por meio de máquinas.',
  },

  {
    id: 'PF-028',
    name: 'SOKOLOV',
    codename: 'SOKOLOV',
    affiliation: 'USSR / GRU',
    status: 'DECEASED',
    specialty: 'WEAPONS ENGINEERING',
    cardImage: '/images/personnel/sokolov.gif',
    modalImage: '/images/personnel/sokolov.gif',
    history:
      'Nikolai Sokolov era um cientista especializado em tecnologia militar e responsável pelo desenvolvimento de sistemas que dariam origem a projetos como Shagohod e posteriormente conceitos associados ao Metal Gear.',
  },

  {
    id: 'PF-029',
    name: 'OLGA GURLUKOVICH',
    codename: 'OLGA',
    affiliation: 'GURLUKOVICH MERCENARIES',
    status: 'DECEASED',
    specialty: 'COMMAND / COMBAT',
    cardImage: '/images/personnel/olga.gif',
    modalImage: '/images/personnel/olga.gif',
    history:
      'Olga Gurlukovich é filha de Sergei Gurlukovich e comandante de uma força mercenária. Em MGS2, sua filha Sunny é usada como instrumento de pressão pelos Patriots, levando Olga a cooperar secretamente com eles.',
  },

  {
    id: 'PF-030',
    name: 'VAMP',
    codename: 'VAMP',
    affiliation: 'DEAD CELL',
    status: 'DECEASED',
    specialty: 'CQC / KNIFE COMBAT',
    cardImage: '/images/personnel/vamp.gif',
    modalImage: '/images/personnel/vamp.gif',
    history:
      'Vamp foi membro da unidade Dead Cell e um dos principais inimigos de Raiden em MGS2. Seu corpo possuía habilidades físicas extraordinárias e sua existência posteriormente esteve ligada às tecnologias de nanomáquinas dos Patriots.',
  },
]