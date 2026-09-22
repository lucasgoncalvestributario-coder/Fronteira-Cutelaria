import { MaterialInfo, KnifeProduct, GalleryItem, ProcessStep, Testimonial, FaqItem } from '../types';

export const LOGO_URL = 'https://i.postimg.cc/G3jyNHMZ/Chat-GPT-Image-22-de-jul-de-2026-17-32-37.png';
export const PHONE_NUMBER = '5547997374307';
export const PHONE_NUMBER_FORMATTED = '(47) 99737-4307';
export const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent('Olá! Vim pelo site da Fronteira Cutelaria e gostaria de conhecer suas facas artesanais.')}`;
export const WHATSAPP_CUSTOM_QUOTE_URL = (text: string) => `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
export const INSTAGRAM_URL = 'https://instagram.com/fronteiracutelaria';
export const LOCATION_TEXT = 'Avenida Minas Gerais, 305 - Anexo ao Posto Ipiranga, Camboriú - SC';
export const BUSINESS_HOURS = '09h às 12h e das 13h30 às 22h';
export const FOUNDER_VIDEO_URL = '/video-vagner.mp4';
export const FOUNDER_YOUTUBE_URL = 'https://youtu.be/8yJU1_7AuZM';

export const FOUNDER_MESSAGE = {
  quote: "Fronteira Cutelaria: a faca que tem nome e sobrenome!",
  title: "Recado do Fundador e Cuteleiro",
  author: "Vagner Gonçalves",
  role: "Fundador & Mestre Cuteleiro",
  text: "Bem-vindo à Fronteira Cutelaria! Aqui em nossa fábrica em Camboriú - SC, moldamos cada lâmina artesanalmente com rigor técnico, alma e paixão. Fabricamos o seu projeto exclusivo sob medida com o aço, cabo e acabamento que você desejar!",
};

export const STEELS_DATA: MaterialInfo[] = [
  {
    id: 'inox-420c',
    name: 'Aço Inox 420C Premium',
    type: 'steel',
    badge: 'Alta Resistência à Oxidação',
    image: 'https://i.ibb.co/pjHN7mVy/Gemini-Generated-Image-vu8rxyvu8rxyvu8r.png',
    description: 'Aço inoxidável de altísima pureza com adição de cromo e tratamento térmico calibrado em atmosfera controlada. Proporciona brilho espelhado impecável.',
    features: [
      'Excelente resistência à corrosão e oxidação',
      'Alta durabilidade mecânica para uso contínuo',
      'Fácil manutenção e higienização garantida',
      'Ideal para uso diário na cozinha e no churrasco'
    ],
    recommendedFor: 'Facas de churrasco, cozinha do dia a dia e uso gastronômico em ambientes úmidos.'
  },
  {
    id: 'carbono-1070',
    name: 'Aço Carbono 1070 Forjado',
    type: 'steel',
    badge: 'Retenção de Fio Brutal',
    image: 'https://i.ibb.co/TB8bt4jP/Gemini-Generated-Image-4rz0h54rz0h54rz0.png',
    description: 'Aço clássico da cutelaria tradicional forjado a quente no martelo pneumático. Desenvolve uma pátina protetora natural com o tempo, carregando a história do uso.',
    features: [
      'Retenção de fio cirúrgica e incomparável',
      'Alta dureza Rockwell (58-60 HRC)',
      'Excelente facilidade para reassentar o fio na afiação',
      'Aço tradicional preferido pelos grandes cuteleiros'
    ],
    recommendedFor: 'Facas de campo, caça, desossa e churrasqueiros exigentes que priorizam corte agressivo.'
  },
  {
    id: 'disco-de-arado',
    name: 'Aço Disco de Arado',
    type: 'steel',
    badge: 'Reaproveitamento Sustentável',
    image: 'https://i.ibb.co/mFtLvz9b/Gemini-Generated-Image-27o4ul27o4ul27o4.png',
    description: 'Lâminas forjadas a partir de discos de arado agrícolas antigos de liga de aço-manganês. Cada peça possui densidade única e visual rústico incomparável.',
    features: [
      'Aço mola extremamente resistente a impactos',
      'Reaproveitamento histórico e ecológico',
      'Grande flexibilidade e resistência estrutural',
      'Marcas e textura exclusivas de forjamento'
    ],
    recommendedFor: 'Facas rústicas campeiras, uso pesado na lida do campo e colecionadores de peças com alma.'
  },
  {
    id: 'mola-caminhao',
    name: 'Aço de Mola de Caminhão',
    type: 'steel',
    badge: 'Resiliência & Tenacidade Máxima',
    image: 'https://i.ibb.co/TDG4L76Y/Gemini-Generated-Image-ugdddougdddougdd.jpg',
    description: 'Lâminas forjadas a partir de feixes de molas automotivas pesadas (liga SAE 5160). Consagrado na cutelaria pela resiliência superior, memória elástica e capacidade de suportar choques mecânicos violentos sem lascar.',
    features: [
      'Altíssima tenacidade e absorção de impactos pesados',
      'Excelente memória elástica e flexibilidade estrutural',
      'Retenção de fio vigorosa para serviços severos',
      'Reaproveitamento artesanal de aços de alta liga'
    ],
    recommendedFor: 'Facas campeiras, facões de lida, cutelos pesados e ferramentas de campo que exigem corte e resistência extrema.'
  },
  {
    id: 'aco-damasco',
    name: 'Aço Damasco',
    type: 'steel',
    badge: 'Obra de Arte Multicamadas',
    image: 'https://i.ibb.co/spwy9BJp/Gemini-Generated-Image-dvhxwfdvhxwfdvhx.jpg',
    description: 'Aço nobre forjado pelo caldeamento manual e dobras sucessivas de dezenas a centenas de camadas de aços de diferentes teores (como 1095 e 15N20), revelando padrões orgânicos únicos e corte cirúrgico extraordinário.',
    features: [
      'Padrão visual único e exclusivo com centenas de camadas',
      'Combinação de afiação navalha e corpo de alta tenacidade',
      'Acabamento estético nobre de padrão internacional',
      'Valorização histórica e prestígio de colecionador'
    ],
    recommendedFor: 'Facas de luxo, colecionadores exigentes, alta gastronomia, churrasco nobre e presentes comemorativos.'
  }
];

export const STEEL_OPTIONS: string[] = [
  'Aço Inox',
  'Aço Carbono',
  'Disco de Arado',
  'Aço de Mola de Caminhão',
  'Aço Damasco'
];

export const HANDLE_OPTIONS: string[] = [
  'Cabo de Chifre de Cervo Natural',
  'Cabo de Resina Híbrida e Madeira',
  'Cabo de Madeira Nobre',
  'Cabo de Chifre de Boi Polido',
  'Cabo de Canela e Osso de Ovelha',
  'Cabo de Rabo de Tatu Natural'
];

export const CATEGORY_OPTIONS: string[] = [
  'Churrasco',
  'Campeira',
  'Bowie',
  'Caça',
  'Chef',
  'Utilitária',
  'Especial'
];

export const INITIAL_PRODUCTS: KnifeProduct[] = [
  {
    id: 'fc-101',
    code: 'FC-101',
    name: 'Faca Pescaria Artesanal 8"',
    category: 'Especial',
    steel: 'Aço Inox',
    handle: 'Cabo de Resina Híbrida e Madeira',
    bladeLength: '8 polegadas (20 cm)',
    price: 490,
    image: 'https://i.ibb.co/rKVmzKSp/Chat-GPT-Image-25-de-jul-de-2026-14-16-09.png',
    images: [
      'https://i.ibb.co/rKVmzKSp/Chat-GPT-Image-25-de-jul-de-2026-14-16-09.png',
      'https://i.ibb.co/pjHN7mVy/Gemini-Generated-Image-vu8rxyvu8rxyvu8r.png'
    ],
    description: 'Desenvolvida especialmente para pescadores e amantes da cutelaria fina. Lâmina em aço inoxidável com resistência à umidade, dorso mosqueado e empunhadura anatômica.',
    stockStatus: 'pronta-entrega',
    stockQuantity: 4,
    features: ['Gravação temática "PESCARIA"', 'Lâmina espelhada', 'Bainha em couro legítimo', 'Certificado assinado']
  },
  {
    id: 'fc-102',
    code: 'FC-102',
    name: 'Faca Chef Artesanal 8" Edição Especial',
    category: 'Chef',
    steel: 'Aço Inox',
    handle: 'Cabo de Madeira Nobre',
    bladeLength: '8 polegadas (20 cm)',
    price: 540,
    image: 'https://i.ibb.co/S71qvNfQ/Chat-GPT-Image-25-de-jul-de-2026-14-13-59.png',
    images: [
      'https://i.ibb.co/S71qvNfQ/Chat-GPT-Image-25-de-jul-de-2026-14-13-59.png',
      'https://i.ibb.co/pjHN7mVy/Gemini-Generated-Image-vu8rxyvu8rxyvu8r.png'
    ],
    description: 'Elegância, precisão e sofisticação reunidas para alta gastronomia e churrasco de elite. Geometria de corte refinada com balanceamento perfeito.',
    stockStatus: 'pronta-entrega',
    stockQuantity: 3,
    features: ['Acabamento polido espelhado', 'Empunhadura ergonômica', 'Equilíbrio peso/fio', 'Garantia vitalícia de forja']
  },
  {
    id: 'fc-103',
    code: 'FC-103',
    name: 'Faca Bowie Rústica Forjada 10"',
    category: 'Bowie',
    steel: 'Aço Carbono',
    handle: 'Cabo de Chifre de Cervo Natural',
    bladeLength: '10 polegadas (25 cm)',
    price: 680,
    image: 'https://i.ibb.co/JRb0VdxG/Chat-GPT-Image-25-de-jul-de-2026-14-15-00.png',
    images: [
      'https://i.ibb.co/JRb0VdxG/Chat-GPT-Image-25-de-jul-de-2026-14-15-00.png',
      'https://i.ibb.co/TB8bt4jP/Gemini-Generated-Image-4rz0h54rz0h54rz0.png'
    ],
    description: 'Lâmina forjada no fogo e na bigorna em aço carbono de alto teor com têmpera seletiva. Acabamento escurecido/fosfatizado com retenção de fio cirúrgica.',
    stockStatus: 'pronta-entrega',
    stockQuantity: 2,
    features: ['Tratamento térmico diferencial', 'Cabo em chifre de cervo legítimo', 'Espiga full tang reforçada', 'Bainha com passador']
  },
  {
    id: 'fc-104',
    code: 'FC-104',
    name: 'Faca Campeira Gaúcha 9"',
    category: 'Campeira',
    steel: 'Disco de Arado',
    handle: 'Cabo de Chifre de Boi Polido',
    bladeLength: '9 polegadas (23 cm)',
    price: 460,
    image: 'https://i.ibb.co/LX0vrV96/Chat-GPT-Image-25-de-jul-de-2026-14-10-20.png',
    images: [
      'https://i.ibb.co/LX0vrV96/Chat-GPT-Image-25-de-jul-de-2026-14-10-20.png',
      'https://i.ibb.co/mFtLvz9b/Gemini-Generated-Image-27o4ul27o4ul27o4.png'
    ],
    description: 'Tradição pura forjada a partir de antigo disco de arado agrícola. Uma lâmina resistente a qualquer lida, mantendo o charme rústico de um aço histórico.',
    stockStatus: 'pronta-entrega',
    stockQuantity: 5,
    features: ['Aço mola de trator/arado', 'Textura rústica original', 'Cabo anatômico em chifre de boi', 'Acompanha bainha de couro']
  },
  {
    id: 'fc-105',
    code: 'FC-105',
    name: 'Faca Campo & Lida 9" em Mola de Caminhão',
    category: 'Campeira',
    steel: 'Aço de Mola de Caminhão',
    handle: 'Cabo de Canela e Osso de Ovelha',
    bladeLength: '9 polegadas (23 cm)',
    price: 520,
    image: 'https://i.ibb.co/TDG4L76Y/Gemini-Generated-Image-ugdddougdddougdd.jpg',
    images: [
      'https://i.ibb.co/TDG4L76Y/Gemini-Generated-Image-ugdddougdddougdd.jpg',
      'https://i.ibb.co/JRb0VdxG/Chat-GPT-Image-25-de-jul-de-2026-14-15-00.png'
    ],
    description: 'Forjada a partir de feixe de mola de caminhão com a lendária liga 5160. Resiste aos choques mecânicos mais severos, cortes brutos e tarefas pesadas no campo com elasticidade impecável.',
    stockStatus: 'pronta-entrega',
    stockQuantity: 3,
    features: ['Liga 5160 de feixe de mola forjada', 'Tenacidade e memória elástica', 'Cabo artesanal em canela e osso', 'Certificado com garantia vitalícia']
  },
  {
    id: 'fc-106',
    code: 'FC-106',
    name: 'Faca Churrasco Nobre 8.5" em Aço Damasco',
    category: 'Churrasco',
    steel: 'Aço Damasco',
    handle: 'Cabo de Resina Híbrida e Madeira',
    bladeLength: '8.5 polegadas (21.5 cm)',
    price: 1190,
    image: 'https://i.ibb.co/spwy9BJp/Gemini-Generated-Image-dvhxwfdvhxwfdvhx.jpg',
    images: [
      'https://i.ibb.co/spwy9BJp/Gemini-Generated-Image-dvhxwfdvhxwfdvhx.jpg',
      'https://i.ibb.co/S71qvNfQ/Chat-GPT-Image-25-de-jul-de-2026-14-13-59.png'
    ],
    description: 'Peça de colecionador forjada pelo caldeamento de mais de 250 camadas de aços 1095 e 15N20. Desenho damasco hipnotizante com fio navalha de precisão absoluta.',
    stockStatus: 'pronta-entrega',
    stockQuantity: 2,
    features: ['Mais de 250 camadas caldeadas', 'Padrão damasco autêntico', 'Cabo híbrido em resina perolada', 'Estojo de apresentação de luxo']
  }
];

export const HANDLES_DATA: MaterialInfo[] = [
  {
    id: 'chifre-cervo-natural',
    name: 'Cabo de Chifre de Cervo Natural',
    type: 'handle',
    badge: 'Exclusividade Rústica',
    image: '/images/handles/handle-chifre-cervo.png',
    description: 'Cabo confeccionado em chifre de cervo natural, apresentando características únicas de textura, tonalidade e formato. Cada peça possui sua própria identidade, valorizando a exclusividade e o trabalho artesanal da cutelaria.',
    features: ['Textura e formato natural único', 'Aderência e ergonomia anatômica', '100% autêntico e artesanal']
  },
  {
    id: 'resina-hibrida-madeira',
    name: 'Cabo de Resina Híbrida e Madeira',
    type: 'handle',
    badge: 'Design Híbrido Premium',
    image: '/images/handles/handle-resina-hibrida.png',
    description: 'Cabo produzido com madeira natural e resina híbrida, combinando os veios naturais da madeira com efeitos exclusivos da resina. Uma opção moderna, resistente e com acabamento premium.',
    features: ['Fusão de madeira nobre e resina', 'Alta durabilidade e impermeabilidade', 'Efeitos visuais exclusivos']
  },
  {
    id: 'madeira-nobre',
    name: 'Cabo de Madeira Nobre',
    type: 'handle',
    badge: 'Nobreza Clássica',
    image: '/images/handles/handle-madeira-nobre.png',
    description: 'Cabo confeccionado em madeira nobre, valorizando os desenhos naturais dos veios, tonalidades e detalhes exclusivos da madeira. Material clássico que transmite elegância, resistência e sofisticação.',
    features: ['Desenhos e veios naturais', 'Acabamento acetinado e polido', 'Elegância e sofisticação atemporal']
  },
  {
    id: 'chifre-boi-polido',
    name: 'Cabo de Chifre de Boi Polido',
    type: 'handle',
    badge: 'Tradição & Brilho',
    image: '/images/handles/handle-chifre-boi.png',
    description: 'Cabo feito em chifre de boi natural polido, com acabamento liso e brilho característico. Apresenta padrões naturais únicos, trazendo rusticidade, tradição e personalidade à faca artesanal.',
    features: ['Chifre de boi natural selecionado', 'Brilho espelhado e toque suave', 'Tradição da cutelaria gaúcha']
  },
  {
    id: 'canela-osso-ovelha',
    name: 'Cabo de Canela e Osso de Ovelha',
    type: 'handle',
    badge: 'Combinação Exclusiva',
    image: '/images/handles/handle-canela-osso.png',
    description: 'Cabo artesanal produzido com canela natural e osso de ovelha, criando uma combinação diferenciada de materiais naturais. Possui visual tradicional e exclusivo, valorizando a arte da cutelaria.',
    features: ['Combinação de canela e osso de ovelha', 'Visual rústico e refinado', 'Excelente resistência mecânica']
  },
  {
    id: 'rabo-tatu-natural',
    name: 'Cabo de Rabo de Tatu Natural',
    type: 'handle',
    badge: 'Material Raro',
    image: '/images/handles/handle-rabo-tatu.png',
    description: 'Cabo confeccionado em rabo de tatu natural, um material raro e diferenciado na cutelaria artesanal. Sua textura única torna cada peça exclusiva, destacando o trabalho manual e a tradição.',
    features: ['Rabo de tatu natural legítimo', 'Textura anelada e firmeza na pega', 'Item raro de colecionador']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'pescaria-artesanal-8',
    title: 'Faca Pescaria Artesanal 8"',
    category: 'algumas',
    categoryLabel: 'Faca Especial',
    steel: 'Aço Inox 420C',
    handle: 'Resina Híbrida Premium com Madeira Natural',
    bladeLength: '8 polegadas (20 cm)',
    finish: 'espelhada',
    image: 'https://i.ibb.co/rKVmzKSp/Chat-GPT-Image-25-de-jul-de-2026-14-16-09.png',
    description: 'Desenvolvida para pescadores e amantes da cutelaria artesanal. Uma faca resistente, elegante e preparada para acompanhar você em qualquer aventura.',
    details: [
      'Gravação temática "PESCARIA"',
      'Aço inoxidável 420C',
      'Acabamento polido espelhado',
      'Cabo híbrido em resina e madeira',
      'Alta retenção de fio e fácil afiação',
      'Bainha artesanal em couro legítimo',
      'Certificado de autenticidade'
    ]
  },
  {
    id: 'chef-hibrida-ouro-8',
    title: 'Faca Chef Artesanal 8" Edição Especial',
    category: 'algumas',
    categoryLabel: 'Faca Chef Premium',
    steel: 'Aço Inox 420C',
    handle: 'Resina Premium Perolada com Detalhes Ornamentais em Metal',
    bladeLength: '8 polegadas (20 cm)',
    finish: 'espelhada',
    image: 'https://i.ibb.co/S71qvNfQ/Chat-GPT-Image-25-de-jul-de-2026-14-13-59.png',
    description: 'Elegância, precisão e sofisticação reunidas em uma única peça. Desenvolvida para quem busca desempenho profissional aliado a um acabamento artesanal de alto padrão.',
    details: [
      'Acabamento polido espelhado',
      'Cabo perolado exclusivo com detalhes ornamentais',
      'Empunhadura ergonômica e anatômica',
      'Equilíbrio perfeito entre lâmina e cabo',
      'Geometria de corte profissional',
      'Bainha em couro legítimo com passador de cinto',
      'Garantia vitalícia'
    ]
  },
  {
    id: 'artesanal-fosfatizada-8',
    title: 'Faca Artesanal 8" Cabo em Chifre de Cervo',
    category: 'algumas',
    categoryLabel: 'Faca Rústica Forjada',
    steel: 'Aço Carbono 5160',
    handle: 'Chifre de Cervo Natural',
    bladeLength: '8 polegadas (20 cm)',
    finish: 'escurecida',
    image: 'https://i.ibb.co/JRb0VdxG/Chat-GPT-Image-25-de-jul-de-2026-14-15-00.png',
    description: 'Robustez e exclusividade em uma peça artesanal. O acabamento fosfatizado aliado ao cabo em chifre de cervo entrega uma faca diferenciada para quem valoriza tradição.',
    details: [
      'Acabamento fosfatizado',
      'Cabo em chifre de cervo natural',
      'Alta retenção de fio e poder de corte',
      'Estrutura full tang para máxima resistência',
      'Bainha em couro bovino costurada à mão',
      'Certificado de autenticidade'
    ]
  },
  {
    id: 'chef-hibrida-8',
    title: 'Faca Chef Artesanal Híbrida Premium 8"',
    category: 'algumas',
    categoryLabel: 'Faca Híbrida',
    steel: 'Aço Inox 420C',
    handle: 'Madeira Estabilizada com Resina Híbrida Perolada',
    bladeLength: '8 polegadas (20 cm)',
    finish: 'espelhada',
    image: 'https://i.ibb.co/S71qvNfQ/Chat-GPT-Image-25-de-jul-de-2026-14-13-59.png',
    description: 'Uma peça exclusiva que combina sofisticação, precisão e acabamento premium. Seu cabo híbrido torna cada faca única.',
    details: [
      'Cabo híbrido artesanal',
      'Acabamento espelhado',
      'Excelente retenção de fio',
      'Empunhadura ergonômica',
      'Peso perfeitamente balanceado',
      'Bainha artesanal em couro legítimo',
      'Certificado de autenticidade'
    ]
  },
  {
    id: 'pavao-artesanal-8',
    title: 'Faca Pavão Artesanal 8"',
    category: 'algumas',
    categoryLabel: 'Faca Especial',
    steel: 'Aço Inox 420C',
    handle: 'Resina Híbrida Premium com Madeira Natural',
    bladeLength: '8 polegadas (20 cm)',
    finish: 'espelhada',
    image: 'https://i.ibb.co/LX0vrV96/Chat-GPT-Image-25-de-jul-de-2026-14-10-20.png',
    description: 'Desenvolvida para amantes da cutelaria artesanal. Uma faca resistente, elegante e preparada para acompanhar você em qualquer aventura.',
    details: [
      'Gravação temática "PAVÃO"',
      'Aço inoxidável 420C',
      'Acabamento polido espelhado',
      'Cabo híbrido de alta resistência',
      'Empunhadura ergonômica',
      'Bainha artesanal em couro legítimo',
      'Certificado de autenticidade'
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: 'Escolha do Aço',
    subtitle: 'Seleção Rigorosa',
    description: 'Análise microscópica e dimensional das barras de aço Inox 420C, Carbono 1070 ou discos de arado genuínos.',
    temperature: 'Ambiente (25°C)',
    iconName: 'ShieldCheck',
    image: 'https://i.ibb.co/3mxfVVKy/Gemini-Generated-Image-2wz1mg2wz1mg2wz1.png',
    details: ['Inspeção contra trincas', 'Aferição de teor de carbono', 'Corte da barra de matéria-prima']
  },
  {
    number: 2,
    title: 'Corte e Perfilamento',
    subtitle: 'Desenho Geométrico',
    description: 'A barra é marcada e cortada seguindo o gabarito exclusivo da marca para determinar o desenho preciso da lâmina.',
    temperature: 'Corte Frio',
    iconName: 'Scissors',
    image: 'https://i.ibb.co/zqYSf69/Gemini-Generated-Image-y9s4yry9s4yry9s4.png',
    details: ['Traçagem de curvatura', 'Definição da espiga (tang)', 'Furação para pinos de retenção']
  },
  {
    number: 3,
    title: 'Forjamento Tradicional',
    subtitle: 'Modelagem ao Fogo',
    description: 'O aço é aquecido na forja a carvão/gás até ficar incandescente em amarelo vivo, sendo batido ritmicamente na bigorna.',
    temperature: '1050°C a 1200°C',
    iconName: 'Flame',
    image: 'https://i.ibb.co/j9Fm73X7/Gemini-Generated-Image-y2n44iy2n44iy2n4.png',
    details: ['Compactação das cadeias moleculares', 'Formatacao do bisel e dorso', 'Martelamento artesanal']
  },
  {
    number: 4,
    title: 'Tratamento Térmico',
    subtitle: 'Têmpera & Revenimento',
    description: 'A lâmina incandescente é mergulhada em óleo especial para travar os cristais de austenita e revenida para eliminar tensões.',
    temperature: '850°C -> Resfriamento rápido',
    iconName: 'Zap',
    image: 'https://i.ibb.co/m5fFt7JS/Gemini-Generated-Image-swfnmkswfnmkswfn.png',
    details: ['Teste de dureza Rockwell (58-60 HRC)', 'Eliminação de fragilidade mecânica', 'Verificação de alinhamento']
  },
  {
    number: 5,
    title: 'Desbaste e Usinagem',
    subtitle: 'Geometria de Corte',
    description: 'Usinagem minuciosa na lixadeira de cinta com grãos sequenciais até formar o ângulo perfeito do bisel.',
    temperature: 'Controle contínuo em água',
    iconName: 'Compass',
    image: 'https://i.ibb.co/jv7ZFz49/Gemini-Generated-Image-lmzvbtlmzvbtlmzv.png',
    details: ['Ajuste da geometria do fio', 'Mosqueado manual no dorso', 'Polimento inicial']
  },
  {
    number: 6,
    title: 'Acabamento & Escultura do Cabo',
    subtitle: 'Cuidado nos Detalhes',
    description: 'Ajuste do cabo nobre (madeira, chifre, osso ou resina), fixação dos pinos de latão e lixamento manual até P2000.',
    temperature: 'Manual (Artesanal)',
    iconName: 'Sparkles',
    image: 'https://i.ibb.co/LdTwXm2k/Gemini-Generated-Image-dtvtvldtvtvldtvt.png',
    details: ['Lixamento manual progressivo', 'Selamento térmico do cabo', 'Polimento espelhado no pano de algodão']
  },
  {
    number: 7,
    title: 'Afiação Navalha',
    subtitle: 'Micro-Lapidação',
    description: 'Afiação em pedras japonesas de água de grão 1000 a 8000 e polimento final em couro strop com pasta diamantada.',
    temperature: 'Frio com Pedra D’água',
    iconName: 'Feather',
    image: 'https://i.ibb.co/xS9d0djf/Gemini-Generated-Image-ppmmx5ppmmx5ppmm.png',
    details: ['Teste de corte em papel de seda', 'Ajuste de ângulo micro-bevel', 'Conferência sob lupa de precisão']
  },
  {
    number: 8,
    title: 'Inspeção & Entrega',
    subtitle: 'Embalagem Especial',
    description: 'Selo de qualidade aplicado, gravação a laser com nome do cliente, bainha de couro ajustada e expedição segura.',
    temperature: 'Embalagem de Luxo',
    iconName: 'Award',
    image: 'https://i.ibb.co/Zz1hmYY4/Gemini-Generated-Image-3pjzrb3pjzrb3pjz.png',
    details: ['Emissão do Certificado Assinado', 'Número de série gravado', 'Entrega com acompanhamento seguro']
  }
];

export const DIFFERENTIALS = [
  { title: '100% Artesanal', desc: 'Produção totalmente manual do início ao fim.' },
  { title: 'Feita à Mão', desc: 'Sem esteira industrial. Cada martelada é única.' },
  { title: 'Aço Selecionado', desc: 'Apenas ligas de alta pureza e procedência.' },
  { title: 'Alto Poder de Corte', desc: 'Têmpera calibrada para afiação estilo navalha.' },
  { title: 'Acabamento Premium', desc: 'Polimento até P2000 e cera protetora natural.' },
  { title: 'Cabos Exclusivos', desc: 'Madeiras nobres, chifre de cervo e resinas autorais.' },
  { title: 'Durabilidade Extrema', desc: 'Criadas com geometria projetada para durar gerações.' },
  { title: 'Garantia Vitalícia de Forja', desc: 'Respaldo direto do cuteleiro para defeitos de estrutura.' },
  { title: 'Personalização Exclusiva', desc: 'Gravação a laser do seu nome ou brasão na lâmina.' },
  { title: 'Atendimento Personalizado', desc: 'Fale diretamente com quem entende e ama a cutelaria.' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Dr. Roberto Silveira',
    city: 'Curitiba',
    state: 'PR',
    knifeBought: 'Faca Bowie 10" Carbono 1070',
    rating: 5,
    comment: 'Recebi minha Bowie da Fronteira Cutelaria e fiquei impressionado com o peso e o equilíbrio! O cabo de chifre de cervo tem uma empunhadura firme e o fio veio afiado como uma navalha. É uma verdadeira obra de arte.',
    date: '14 de Maio de 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't2',
    name: 'Henrique M. Alencar',
    city: 'Porto Alegre',
    state: 'RS',
    knifeBought: 'Faca de Churrasco Inox 420C',
    rating: 5,
    comment: 'Corta picanha sem fazer qualquer esforço. Todo churrasco que faço em casa vira assunto por causa da faca. Parabéns ao cuteleiro Vani e toda equipe pelo profissionalismo e entrega rápida!',
    date: '02 de Junho de 2026',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't3',
    name: 'Gustavo Becker',
    city: 'Florianópolis',
    state: 'SC',
    knifeBought: 'Campeira Disco de Arado',
    rating: 5,
    comment: 'A alma rústica do disco de arado combinada com o polimento fino do cabo de boi mesclado ficou fantástica. O atendimento pelo WhatsApp foi sensacional e tiraram todas as minhas dúvidas.',
    date: '19 de Julho de 2026',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'A faca artesanal enferruja?',
    answer: 'As facas em Aço Inox 420C são altamente resistentes à oxidação e não enferrujam no uso normal. Já as facas em Aço Carbono 1070 e Disco de Arado podem oxidar se guardadas molhadas; contudo, basta secá-las bem após o uso e aplicar uma leve camada de óleo mineral ou vaselina antes de embainhar.',
    category: 'manutencao'
  },
  {
    question: 'Como faço a manutenção e limpeza adequada da minha lâmina?',
    answer: 'Lave sempre à mão com água fria e sabão neutro usando o lado macio da esponja. NUNCA coloque sua faca artesanal na lava-louças. Seque imediatamente com pano limpo. Para lâminas em carbono, aplique uma gota de óleo protetor.',
    category: 'manutencao'
  },
  {
    question: 'Qual o melhor aço para minha necessidade: Inox, Carbono, Disco de Arado, Mola de Caminhão ou Damasco?',
    answer: 'Se você busca praticidade, baixa manutenção e brilho espelhado, escolha o Inox 420C. Se você prioriza retenção de fio cirúrgico e a forja clássica, vá de Carbono 1070. Se procura robustez extrema e resistência a impactos pesados, o Disco de Arado ou o Aço de Mola de Caminhão são escolhas imbatíveis. E se você deseja o ápice do prestígio, nobreza e arte visual, o Aço Damasco multicamadas é a escolha definitiva.',
    category: 'materiais'
  },
  {
    question: 'Posso personalizar com meu nome ou logo na lâmina?',
    answer: 'Sim! Realizamos gravação a laser de alta precisão no dorso ou na face da lâmina. Você pode gravar seu nome, iniciais, data especial ou brasão da sua família ou empresa.',
    category: 'personalizacao'
  },
  {
    question: 'Quanto tempo leva para produzir uma peça personalizada sob encomenda?',
    answer: 'Temos algumas peças exclusivas de pronta entrega para atendimento imediato. Para encomendas personalizadas com escolha de materiais e gravação, o prazo médio de forjamento e acabamento é de 7 a 15 dias úteis.',
    category: 'personalizacao'
  },
  {
    question: 'Como funciona a garantia da Fronteira Cutelaria?',
    answer: 'Oferecemos Garantia Vitalícia sobre qualquer defeito de fabricação ou forjamento da estrutura da lâmina. Nossa prioridade absoluta é a sua satisfação e o orgulho de possuir uma peça duradoura.',
    category: 'garantia'
  }
];
