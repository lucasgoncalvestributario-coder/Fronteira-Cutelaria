export interface MaterialInfo {
  id: string;
  name: string;
  type: 'steel' | 'handle';
  image: string;
  description: string;
  features: string[];
  recommendedFor?: string;
  badge?: string;
}

export interface KnifeProduct {
  id: string;
  code: string; // Código do produto (SKU)
  name: string; // Nome do produto
  category: string; // Categoria da faca
  steel: string; // Material da lâmina
  handle: string; // Material do cabo
  bladeLength: string; // Tamanho
  price: number; // Preço
  image: string; // Imagem principal
  images?: string[]; // Demais imagens
  description: string; // Descrição
  stockStatus: 'pronta-entrega' | 'sob-encomenda' | 'esgotado'; // Disponibilidade em estoque
  stockQuantity: number; // Quantidade em estoque
  features?: string[]; // Demais campos / diferenciais
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'algumas' | 'bowie' | 'churrasco' | 'campeira' | 'caca' | 'utilitaria' | string;
  categoryLabel: string;
  steel: string;
  handle: string;
  bladeLength: string;
  image: string;
  description: string;
  details: string[];
  featured?: boolean;
  finish: 'espelhada' | 'escurecida' | 'acetinada' | 'damasco';
}

export interface ProcessStep {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  temperature?: string;
  iconName: string;
  image: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  state: string;
  knifeBought: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'manutencao' | 'materiais' | 'personalizacao' | 'envio' | 'garantia';
}

export interface PromoBanner {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  imageWebp2560: string;
  imageWebp1920: string;
  imageWebp960: string;
  imageJpg1920: string;
  imageJpg960: string;
  originalUrl: string;
  ctaText: string;
  whatsappMessage: string;
}

export interface CustomKnifeConfig {
  steel: string;
  bladeModel: string;
  bladeFinish: string;
  handleMaterial: string;
  bolsterMaterial: string;
  sheathType: string;
  engravingText: string;
  bladeSizeInches: number;
}
