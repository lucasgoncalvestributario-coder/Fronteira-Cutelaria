import { MaterialInfo, GalleryItem, ProcessStep, Testimonial, FaqItem } from '../types';

export const LOGO_URL = 'https://i.postimg.cc/G3jyNHMZ/Chat-GPT-Image-22-de-jul-de-2026-17-32-37.png';
export const PHONE_NUMBER = '5547992787901';
export const PHONE_NUMBER_FORMATTED = '(47) 99278-7901';
export const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent('Olá Vani! Vim pelo site da Fronteira Cutelaria e gostaria de conhecer suas facas artesanais.')}`;
export const WHATSAPP_CUSTOM_QUOTE_URL = (text: string) => `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
export const CATALOG_URL = 'https://catalogofronteiracutelaria.netlify.app/';
export const INSTAGRAM_URL = 'https://instagram.com/fronteiracutelaria';
export const LOCATION_TEXT = 'Avenida Minas Gerais, 305 - Anexo ao Posto Ipiranga, Camboriú - SC';
export const FOUNDER_VIDEO_URL = '/video-vagner.mp4';
export const FOUNDER_YOUTUBE_URL = 'https://youtu.be/8yJU1_7AuZM';

export const FOUNDER_MESSAGE = {
  quote: "Fronteira Cutelaria: a faca que tem nome e sobrenome!",
  title: "Recado do Fundador e Cuteleiro",
  author: "Vagner Gonçalves",
  role: "Fundador & Mestre Cuteleiro",
  text: "Bem-vindo à Fronteira Cutelaria! Aqui em nossa fábrica em Camboriú - SC, moldamos cada lâmina artesanalmente com rigor técnico, alma e paixão. Se você não encontrar no catálogo a peça exata que deseja, fabricamos o seu projeto exclusivo sob medida!",
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
  }
];

export const HANDLES_DATA: MaterialInfo[] = [
  {
    id: 'chifre-cervo-natural',
    name: 'Cabo de Chifre de Cervo Natural',
    type: 'handle',
    badge: 'Exclusividade Rústica',
    image: 'https://i.ibb.co/TxTmPysC/Gemini-Generated-Image-z6feeez6feeez6fe.png',
    description: 'Cabo confeccionado em chifre de cervo natural, apresentando características únicas de textura, tonalidade e formato. Cada peça possui sua própria identidade, valorizando a exclusividade e o trabalho artesanal da cutelaria.',
    features: ['Textura e formato natural único', 'Aderência e ergonomia anatômica', '100% autêntico e artesanal']
  },
  {
    id: 'resina-hibrida-madeira',
    name: 'Cabo de Resina Híbrida e Madeira',
    type: 'handle',
    badge: 'Design Híbrido Premium',
    image: 'https://i.ibb.co/DPSBQ23F/Gemini-Generated-Image-qdhly1qdhly1qdhl.png',
    description: 'Cabo produzido com madeira natural e resina híbrida, combinando os veios naturais da madeira com efeitos exclusivos da resina. Uma opção moderna, resistente e com acabamento premium.',
    features: ['Fusão de madeira nobre e resina', 'Alta durabilidade e impermeabilidade', 'Efeitos visuais exclusivos']
  },
  {
    id: 'madeira-nobre',
    name: 'Cabo de Madeira Nobre',
    type: 'handle',
    badge: 'Nobreza Clássica',
    image: 'https://i.ibb.co/GfhKWt8J/Gemini-Generated-Image-dv8jtldv8jtldv8j.png',
    description: 'Cabo confeccionado em madeira nobre, valorizando os desenhos naturais dos veios, tonalidades e detalhes exclusivos da madeira. Material clássico que transmite elegância, resistência e sofisticação.',
    features: ['Desenhos e veios naturais', 'Acabamento acetinado e polido', 'Elegância e sofisticação atemporal']
  },
  {
    id: 'chifre-boi-polido',
    name: 'Cabo de Chifre de Boi Polido',
    type: 'handle',
    badge: 'Tradição & Brilho',
    image: 'https://i.ibb.co/GfRj6DcC/Gemini-Generated-Image-knk6srknk6srknk6.png',
    description: 'Cabo feito em chifre de boi natural polido, com acabamento liso e brilho característico. Apresenta padrões naturais únicos, trazendo rusticidade, tradição e personalidade à faca artesanal.',
    features: ['Chifre de boi natural selecionado', 'Brilho espelhado e toque suave', 'Tradição da cutelaria gaúcha']
  },
  {
    id: 'canela-osso-ovelha',
    name: 'Cabo de Canela e Osso de Ovelha',
    type: 'handle',
    badge: 'Combinação Exclusiva',
    image: 'https://i.ibb.co/JWfc31xv/Gemini-Generated-Image-8x9ca28x9ca28x9c.png',
    description: 'Cabo artesanal produzido com canela natural e osso de ovelha, criando uma combinação diferenciada de materiais naturais. Possui visual tradicional e exclusivo, valorizando a arte da cutelaria.',
    features: ['Combinação de canela e osso de ovelha', 'Visual rústico e refinado', 'Excelente resistência mecânica']
  },
  {
    id: 'rabo-tatu-natural',
    name: 'Cabo de Rabo de Tatu Natural',
    type: 'handle',
    badge: 'Material Raro',
    image: 'https://i.ibb.co/gLJRSyxx/Gemini-Generated-Image-qhys3qqhys3qqhys.png',
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
      'Excelente resistência à corrosão',
      'Cabo artesanal ergonômico',
      'Peso balanceado',
      'Bainha em couro legítimo',
      'Certificado de autenticidade'
    ]
  },
  {
    id: 'chef-premium-8',
    title: 'Faca Chef Artesanal Premium 8"',
    category: 'algumas',
    categoryLabel: 'Faca Chef',
    steel: 'Aço Inox 420C',
    handle: 'Resina Premium Perolada com Detalhes Ornamentais em Metal',
    bladeLength: '8 polegadas (20 cm)',
    finish: 'espelhada',
    image: 'https://i.ibb.co/S71qvNfQ/Chat-GPT-Image-25-de-jul-de-2026-14-13-59.png',
    description: 'Elegância, precisão e sofisticação reunidas em uma única peça. Desenvolvida para quem busca desempenho profissional aliado a um acabamento artesanal de alto padrão.',
    details: [
      'Acabamento polido espelhado',
      'Cabo artesanal premium',
      'Excelente retenção de fio',
      'Peso perfeitamente balanceado',
      'Bainha em couro legítimo',
      'Certificado de autenticidade'
    ]
  },
  {
    id: 'chef-fosfatizada-8',
    title: 'Faca Chef Artesanal Fosfatizada Premium 8"',
    category: 'algumas',
    categoryLabel: 'Faca Fosfatizada',
    steel: 'Aço Inox 420C Fosfatizado',
    handle: 'Chifre de Cervo Natural',
    bladeLength: '8 polegadas (20 cm)',
    finish: 'escurecida',
    image: 'https://i.ibb.co/JRb0VdxG/Chat-GPT-Image-25-de-jul-de-2026-14-15-00.png',
    description: 'Robustez e exclusividade em uma peça artesanal. O acabamento fosfatizado aliado ao cabo em chifre de cervo entrega uma faca diferenciada para quem valoriza tradição.',
    details: [
      'Acabamento fosfatizado',
      'Cabo em chifre de cervo natural',
      'Excelente retenção de fio',
      'Empunhadura ergonômica',
      'Peso balanceado',
      'Bainha artesanal em couro legítimo',
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
    categoryLabel: 'Faca Temática',
    steel: 'Aço Inox 420C',
    handle: 'Resina Híbrida Premium com Madeira Natural',
    bladeLength: '8 polegadas (20 cm)',
    finish: 'espelhada',
    image: 'https://i.ibb.co/LX0vrV96/Chat-GPT-Image-25-de-jul-de-2026-14-10-20.png',
    description: 'Desenvolvida para amantes da cutelaria artesanal. Uma faca resistente, elegante e preparada para acompanhar você em qualquer aventura.',
    details: [
      'Gravação temática "PAVÃO"',
      'Excelente resistência à corrosão',
      'Cabo artesanal ergonômico',
      'Peso balanceado',
      'Bainha em couro legítimo',
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
    question: 'Qual o melhor aço para minha necessidade: Inox, Carbono ou Disco de Arado?',
    answer: 'Se você busca praticidade, baixa manutenção e brilho espelhado, escolha o Inox 420C. Se você prioriza retaining de fio cirúrgico e o ritual tradicional da cutelaria, vá de Carbono 1070. Se deseja uma peça robusta, com alma rústica e grande resistência a choques, o Disco de Arado é perfeito.',
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
