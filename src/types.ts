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
