import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, 
  ChevronRight, 
  RotateCcw, 
  Flame, 
  HelpCircle,
  ExternalLink,
  ArrowLeft
} from 'lucide-react';
import { LOGO_URL, PHONE_NUMBER } from '../data/cutelariaData';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BoyWithHatAvatar } from './BoyWithHatAvatar';

interface GuidedChatbotProps {
  onOpenCatalog?: () => void;
}

type MenuStep = 
  | 'MAIN_MENU'
  // Categories
  | 'CAT_FACAS'
  | 'CAT_PERSONALIZADAS'
  | 'CAT_ORCAMENTO'
  | 'CAT_SERVICOS'
  | 'CAT_SOBRE'
  | 'CAT_LOCALIZACAO'
  | 'CAT_FALAR_FABRICA'
  // Specific answers
  | 'ANS_VER_CATALOGO'
  | 'ANS_DISPONIBILIDADE'
  | 'ANS_PRECO'
  | 'ANS_SOB_MEDIDA'
  | 'ANS_NOME_MARCA'
  | 'ANS_FOTO_REFERENCIA'
  | 'ANS_SOLICITAR_ORCAMENTO'
  | 'ANS_ORC_PERSONALIZADA'
  | 'ANS_ORC_EMPRESAS'
  | 'ANS_ORC_VARIAS'
  | 'ANS_AFIACAO'
  | 'ANS_RESTAURACAO'
  | 'ANS_BAINHAS'
  | 'ANS_CUSTOM_LASER'
  | 'ANS_FABRICANTES'
  | 'ANS_ONDE_PRODUZIDAS'
  | 'ANS_TIPOS_TRABALHO'
  | 'ANS_ONDE_FICA'
  | 'ANS_HORARIO'
  | 'OUT_OF_SCOPE';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  actionButton?: {
    label: string;
    action: () => void;
    icon?: 'catalog' | 'whatsapp';
  };
}

export const GuidedChatbot: React.FC<GuidedChatbotProps> = ({ onOpenCatalog }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<MenuStep>('MAIN_MENU');
  const [previousCategory, setPreviousCategory] = useState<MenuStep>('MAIN_MENU');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Olá! 👋 Como podemos ajudar? Escolha uma das opções abaixo para atendimento imediato:'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll chat to latest message smoothly without moving the fixed options panel
  const scrollToBottom = () => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTo({
        top: chatScrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, currentStep]);

  // Support mobile back gesture to close full-screen chatbot
  useEffect(() => {
    const handlePopState = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [isOpen]);

  const handleOpenChat = () => {
    try {
      window.history.pushState({ modal: 'chatbot' }, '', window.location.href);
    } catch {
      // fallback
    }
    setIsOpen(true);
  };

  const handleCloseChat = () => {
    if (window.history.state?.modal === 'chatbot') {
      window.history.back();
    } else {
      setIsOpen(false);
    }
  };

  // Open WhatsApp helper
  const openWhatsAppWithTopic = (topic: string) => {
    const text = `Olá! Estive no atendimento do site da Fronteira Cutelaria com uma dúvida sobre: ${topic}. Gostaria de falar com a fábrica.`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  // Transition handler
  const handleSelectOption = (
    userText: string, 
    nextStep: MenuStep, 
    botAnswer?: string,
    actionButton?: ChatMessage['actionButton']
  ) => {
    // 1. Add User Choice message
    const userMsgId = 'user-' + Date.now();
    setMessages((prev) => [
      ...prev,
      { id: userMsgId, sender: 'user', text: userText }
    ]);

    // 2. Animate subtle typing indicator
    setIsTyping(true);
    setCurrentStep(nextStep);

    setTimeout(() => {
      setIsTyping(false);
      if (botAnswer) {
        const botMsgId = 'bot-' + Date.now();
        setMessages((prev) => [
          ...prev,
          {
            id: botMsgId,
            sender: 'bot',
            text: botAnswer,
            actionButton
          }
        ]);
      }
    }, 380);
  };

  // Reset to Main Menu
  const handleResetToMainMenu = () => {
    handleSelectOption(
      'Voltar ao menu principal',
      'MAIN_MENU',
      'Como podemos ajudar você agora? Escolha uma das opções abaixo:'
    );
  };

  // Back to previous category
  const handleBackToCategory = () => {
    if (previousCategory && previousCategory !== 'MAIN_MENU') {
      setCurrentStep(previousCategory);
      setMessages((prev) => [
        ...prev,
        {
          id: 'bot-back-' + Date.now(),
          sender: 'bot',
          text: 'Qual outra dúvida você gostaria de consultar nesta seção?'
        }
      ]);
    } else {
      handleResetToMainMenu();
    }
  };

  // Renders the available buttons for the current menu state (100% PRESERVED TEXTS)
  const renderOptionButtons = () => {
    // 1. MENU PRINCIPAL
    if (currentStep === 'MAIN_MENU') {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={() => {
              setPreviousCategory('CAT_FACAS');
              handleSelectOption(
                'Ver nossas facas',
                'CAT_FACAS',
                'O que você gostaria de saber sobre as nossas facas?'
              );
            }}
            className="chat-panel-btn group"
          >
            <span className="flex items-center gap-2">
              <span className="text-base">🔪</span>
              <span className="font-semibold text-stone-100 group-hover:text-white">Ver nossas facas</span>
            </span>
            <ChevronRight size={16} className="text-[#ff6a00] group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            type="button"
            onClick={() => {
              setPreviousCategory('CAT_PERSONALIZADAS');
              handleSelectOption(
                'Facas personalizadas',
                'CAT_PERSONALIZADAS',
                'Somos especialistas em cutelaria sob medida. O que você gostaria de saber?'
              );
            }}
            className="chat-panel-btn group"
          >
            <span className="flex items-center gap-2">
              <span className="text-base">⚡</span>
              <span className="font-semibold text-stone-100 group-hover:text-white">Facas personalizadas</span>
            </span>
            <ChevronRight size={16} className="text-[#ff6a00] group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            type="button"
            onClick={() => {
              setPreviousCategory('CAT_ORCAMENTO');
              handleSelectOption(
                'Quero um orçamento',
                'CAT_ORCAMENTO',
                'Qual tipo de orçamento você procura para a sua faca artesanal?'
              );
            }}
            className="chat-panel-btn group"
          >
            <span className="flex items-center gap-2">
              <span className="text-base">📋</span>
              <span className="font-semibold text-stone-100 group-hover:text-white">Quero um orçamento</span>
            </span>
            <ChevronRight size={16} className="text-[#ff6a00] group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            type="button"
            onClick={() => {
              setPreviousCategory('CAT_SERVICOS');
              handleSelectOption(
                'Serviços da cutelaria',
                'CAT_SERVICOS',
                'Além da forja de novas facas, oferecemos serviços especializados. Qual serviço você precisa?'
              );
            }}
            className="chat-panel-btn group"
          >
            <span className="flex items-center gap-2">
              <span className="text-base">🛠️</span>
              <span className="font-semibold text-stone-100 group-hover:text-white">Serviços da cutelaria</span>
            </span>
            <ChevronRight size={16} className="text-[#ff6a00] group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            type="button"
            onClick={() => {
              setPreviousCategory('CAT_SOBRE');
              handleSelectOption(
                'Sobre a Fronteira',
                'CAT_SOBRE',
                'Conheça a história e o trabalho autêntico da Fronteira Cutelaria:'
              );
            }}
            className="chat-panel-btn group"
          >
            <span className="flex items-center gap-2">
              <span className="text-base">🔥</span>
              <span className="font-semibold text-stone-100 group-hover:text-white">Sobre a Fronteira</span>
            </span>
            <ChevronRight size={16} className="text-[#ff6a00] group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            type="button"
            onClick={() => {
              setPreviousCategory('CAT_LOCALIZACAO');
              handleSelectOption(
                'Localização e horário',
                'CAT_LOCALIZACAO',
                'Fique à vontade para nos visitar em Camboriú/SC. O que deseja consultar?'
              );
            }}
            className="chat-panel-btn group"
          >
            <span className="flex items-center gap-2">
              <span className="text-base">📍</span>
              <span className="font-semibold text-stone-100 group-hover:text-white">Localização e horário</span>
            </span>
            <ChevronRight size={16} className="text-[#ff6a00] group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            type="button"
            onClick={() => {
              setPreviousCategory('CAT_FALAR_FABRICA');
              handleSelectOption(
                'Falar com a fábrica',
                'CAT_FALAR_FABRICA',
                'Nosso cuteleiro e equipe atendem você diretamente no WhatsApp oficial da fábrica:'
              );
            }}
            className="chat-panel-btn border-[#25D366]/40 hover:border-[#25D366] bg-[#0f1712]/70 hover:bg-[#142318] text-[#25D366] sm:col-span-2 group"
          >
            <span className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-[#25D366] flex items-center justify-center shadow-xs flex-shrink-0">
                <WhatsAppIcon size={16} color="#ffffff" />
              </span>
              <span className="font-bold text-[#25D366] group-hover:text-white transition-colors">
                Falar com a fábrica
              </span>
            </span>
            <ChevronRight size={16} className="text-[#25D366] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      );
    }

    // 2. CATEGORIA: VER NOSSAS FACAS
    if (currentStep === 'CAT_FACAS') {
      return (
        <div className="flex flex-col gap-2.5">
          <button
            type="button"
            onClick={() => {
              handleSelectOption(
                'Ver catálogo de facas',
                'ANS_VER_CATALOGO',
                'Nosso catálogo reúne 49 fotografias reais de facas que saíram da nossa bancada. Você pode abrir o álbum agora mesmo clicando no botão abaixo:',
                {
                  label: 'ABRIR CATÁLOGO DE FACAS',
                  action: () => {
                    handleCloseChat();
                    onOpenCatalog?.();
                  },
                  icon: 'catalog'
                }
              );
            }}
            className="chat-panel-btn text-[#ff6a00] border-[#ff6a00]/50 font-bold bg-[#1f1712]"
          >
            <span className="flex items-center gap-2">
              <span>📖</span>
              <span>Ver catálogo de facas</span>
            </span>
            <ChevronRight size={16} />
          </button>

          <button
            type="button"
            onClick={() => {
              handleSelectOption(
                'As facas estão disponíveis?',
                'ANS_DISPONIBILIDADE',
                'Como produzimos artesanalmente em Camboriú/SC, temos facas para pronta entrega na loja física e produzimos modelos sob encomenda com prazos rápidos. Fale com a fábrica para ver as peças disponíveis hoje!'
              );
            }}
            className="chat-panel-btn"
          >
            <span className="flex items-center gap-2">
              <span>📦</span>
              <span>As facas estão disponíveis?</span>
            </span>
            <ChevronRight size={16} />
          </button>

          <button
            type="button"
            onClick={() => {
              handleSelectOption(
                'Quero saber o preço',
                'ANS_PRECO',
                'Os valores das nossas facas variam de acordo com o tipo de aço (Inox 420C, Aço Carbono, Disco de Arado ou Aço Damasco), dimensões da lâmina, empunhadura e personalizações. Entre em contato para receber o catálogo com valores atualizados.'
              );
            }}
            className="chat-panel-btn"
          >
            <span className="flex items-center gap-2">
              <span>💰</span>
              <span>Quero saber o preço</span>
            </span>
            <ChevronRight size={16} />
          </button>

          <button
            type="button"
            onClick={handleResetToMainMenu}
            className="chat-panel-btn-secondary"
          >
            <RotateCcw size={14} />
            <span>Voltar ao menu principal</span>
          </button>
        </div>
      );
    }

    // 3. CATEGORIA: FACAS PERSONALIZADAS
    if (currentStep === 'CAT_PERSONALIZADAS') {
      return (
        <div className="flex flex-col gap-2.5">
          <button
            type="button"
            onClick={() => {
              handleSelectOption(
                'Vocês fazem facas sob medida?',
                'ANS_SOB_MEDIDA',
                'Sim! Somos fabricantes com oficina própria e a cutelaria sob medida é o coração do nosso trabalho. Você pode escolher comprimento da lâmina, espessura, tipo de aço, dorso mosqueado, cabos de madeiras nobres ou resina híbrida e estilo de bainha.'
              );
            }}
            className="chat-panel-btn"
          >
            <span className="flex items-center gap-2">
              <span>📏</span>
              <span>Vocês fazem facas sob medida?</span>
            </span>
            <ChevronRight size={16} />
          </button>

          <button
            type="button"
            onClick={() => {
              handleSelectOption(
                'Posso personalizar com nome ou marca?',
                'ANS_NOME_MARCA',
                'Sim! Gravamos com precisão a laser ou em baixo relevo: seu nome, marca de fazenda, logo de empresa, brasão familiar ou dedicatória personalizada.'
              );
            }}
            className="chat-panel-btn"
          >
            <span className="flex items-center gap-2">
              <span>✍️</span>
              <span>Posso personalizar com nome ou marca?</span>
            </span>
            <ChevronRight size={16} />
          </button>

          <button
            type="button"
            onClick={() => {
              handleSelectOption(
                'Posso enviar uma foto de referência?',
                'ANS_FOTO_REFERENCIA',
                'Com certeza! Você pode nos enviar uma foto de referência no WhatsApp. Nossa equipe avalia a viabilidade da forja, indica os melhores materiais e produz a sua peça.'
              );
            }}
            className="chat-panel-btn"
          >
            <span className="flex items-center gap-2">
              <span>📸</span>
              <span>Posso enviar uma foto de referência?</span>
            </span>
            <ChevronRight size={16} />
          </button>

          <button
            type="button"
            onClick={() => {
              handleSelectOption(
                'Quero solicitar um orçamento',
                'ANS_SOLICITAR_ORCAMENTO',
                'Para solicitar um orçamento personalizado, envie uma mensagem direta para a fábrica informando como você imagina sua faca:',
                {
                  label: 'SOLICITAR NO WHATSAPP',
                  action: () => openWhatsAppWithTopic('Orçamento de Faca Personalizada'),
                  icon: 'whatsapp'
                }
              );
            }}
            className="chat-panel-btn text-[#ff6a00] border-[#ff6a00]/50 font-bold bg-[#1f1712]"
          >
            <span className="flex items-center gap-2">
              <span>📝</span>
              <span>Quero solicitar um orçamento</span>
            </span>
            <ChevronRight size={16} />
          </button>

          <button
            type="button"
            onClick={handleResetToMainMenu}
            className="chat-panel-btn-secondary"
          >
            <RotateCcw size={14} />
            <span>Voltar ao menu principal</span>
          </button>
        </div>
      );
    }

    // 4. CATEGORIA: QUERO UM ORÇAMENTO
    if (currentStep === 'CAT_ORCAMENTO') {
      return (
        <div className="flex flex-col gap-2.5">
          <button
            type="button"
            onClick={() => {
              handleSelectOption(
                'Orçamento de faca personalizada',
                'ANS_ORC_PERSONALIZADA',
                'Para cotar sua faca sob medida, envie o modelo desejado, dimensões e se deseja gravação de nome. Atendemos você direto no WhatsApp da fábrica com todo o detalhamento.'
              );
            }}
            className="chat-panel-btn"
          >
            <span className="flex items-center gap-2">
              <span>🔪</span>
              <span>Orçamento de faca personalizada</span>
            </span>
            <ChevronRight size={16} />
          </button>

          <button
            type="button"
            onClick={() => {
              handleSelectOption(
                'Orçamento para empresas',
                'ANS_ORC_EMPRESAS',
                'Produzimos kits de facas corporativas e brindes executivos de alto padrão com a marca da sua empresa gravada a laser. Condições especiais para pedidos institucionais.'
              );
            }}
            className="chat-panel-btn"
          >
            <span className="flex items-center gap-2">
              <span>🏢</span>
              <span>Orçamento para empresas</span>
            </span>
            <ChevronRight size={16} />
          </button>

          <button
            type="button"
            onClick={() => {
              handleSelectOption(
                'Orçamento para várias peças',
                'ANS_ORC_VARIAS',
                'Para compras em lote (churrascadas, eventos, presentes para grupos e famílias), oferecemos condições diferenciadas de fábrica. Fale conosco no WhatsApp.'
              );
            }}
            className="chat-panel-btn"
          >
            <span className="flex items-center gap-2">
              <span>📦</span>
              <span>Orçamento para várias peças</span>
            </span>
            <ChevronRight size={16} />
          </button>

          <button
            type="button"
            onClick={() => {
              handleSelectOption(
                'Falar com a fábrica',
                'CAT_FALAR_FABRICA',
                'Clique abaixo para conversar diretamente com o cuteleiro da Fronteira Cutelaria no WhatsApp:'
              );
            }}
            className="chat-panel-btn border-[#25D366]/40 hover:border-[#25D366] bg-[#0f1712]/70 hover:bg-[#142318] text-[#25D366] group"
          >
            <span className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-[#25D366] flex items-center justify-center shadow-xs flex-shrink-0">
                <WhatsAppIcon size={16} color="#ffffff" />
              </span>
              <span className="font-bold text-[#25D366] group-hover:text-white transition-colors">
                Falar com a fábrica
              </span>
            </span>
            <ChevronRight size={16} className="text-[#25D366] group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            type="button"
            onClick={handleResetToMainMenu}
            className="chat-panel-btn-secondary"
          >
            <RotateCcw size={14} />
            <span>Voltar ao menu principal</span>
          </button>
        </div>
      );
    }

    // 5. CATEGORIA: SERVIÇOS DA CUTELARIA
    if (currentStep === 'CAT_SERVICOS') {
      return (
        <div className="flex flex-col gap-2.5">
          <button
            type="button"
            onClick={() => {
              handleSelectOption(
                'Afiação',
                'ANS_AFIACAO',
                'Realizamos afiação profissional com correção de geometria e acabamento em navalha. Sua faca volta a cortar como no primeiro dia.'
              );
            }}
            className="chat-panel-btn"
          >
            <span className="flex items-center gap-2">
              <span>✨</span>
              <span>Afiação</span>
            </span>
            <ChevronRight size={16} />
          </button>

          <button
            type="button"
            onClick={() => {
              handleSelectOption(
                'Restauração',
                'ANS_RESTAURACAO',
                'Restauramos peças antigas de família, facas de disco de arado oxidadas, fazemos troca de cabos de madeira ou resina e polimento da lâmina.'
              );
            }}
            className="chat-panel-btn"
          >
            <span className="flex items-center gap-2">
              <span>🔨</span>
              <span>Restauração</span>
            </span>
            <ChevronRight size={16} />
          </button>

          <button
            type="button"
            onClick={() => {
              handleSelectOption(
                'Bainhas',
                'ANS_BAINHAS',
                'Confeccionamos bainhas sob medida em couro bovino legítimo com costura manual reforçada e acabamento artesanal de alto padrão.'
              );
            }}
            className="chat-panel-btn"
          >
            <span className="flex items-center gap-2">
              <span>🛡️</span>
              <span>Bainhas</span>
            </span>
            <ChevronRight size={16} />
          </button>

          <button
            type="button"
            onClick={() => {
              handleSelectOption(
                'Personalização',
                'ANS_CUSTOM_LASER',
                'Fazemos gravação a laser personalizada de nomes, datas, marcas e logos em qualquer lâmina ou cabo.'
              );
            }}
            className="chat-panel-btn"
          >
            <span className="flex items-center gap-2">
              <span>✒️</span>
              <span>Personalização</span>
            </span>
            <ChevronRight size={16} />
          </button>

          <button
            type="button"
            onClick={handleResetToMainMenu}
            className="chat-panel-btn-secondary"
          >
            <RotateCcw size={14} />
            <span>Voltar ao menu principal</span>
          </button>
        </div>
      );
    }

    // 6. CATEGORIA: SOBRE A FRONTEIRA
    if (currentStep === 'CAT_SOBRE') {
      return (
        <div className="flex flex-col gap-2.5">
          <button
            type="button"
            onClick={() => {
              handleSelectOption(
                'Vocês são fabricantes?',
                'ANS_FABRICANTES',
                'Sim! Somos fabricantes com oficina e forja própria. Todas as peças que você vê em nosso acervo foram feitas em nossa bancada em Camboriú/SC, preservando a essência da autêntica cutelaria artesanal brasileira.'
              );
            }}
            className="chat-panel-btn"
          >
            <span className="flex items-center gap-2">
              <span>🔥</span>
              <span>Vocês são fabricantes?</span>
            </span>
            <ChevronRight size={16} />
          </button>

          <button
            type="button"
            onClick={() => {
              handleSelectOption(
                'Onde as facas são produzidas?',
                'ANS_ONDE_PRODUZIDAS',
                'Nossa fábrica e cutelaria fica em Camboriú, Santa Catarina. Daqui enviamos para churrasqueiros, colecionadores e entusiastas de todo o Brasil via transportadora e Correios com seguro total.'
              );
            }}
            className="chat-panel-btn"
          >
            <span className="flex items-center gap-2">
              <span>📍</span>
              <span>Onde as facas são produzidas?</span>
            </span>
            <ChevronRight size={16} />
          </button>

          <button
            type="button"
            onClick={() => {
              handleSelectOption(
                'Quais tipos de trabalho vocês fazem?',
                'ANS_TIPOS_TRABALHO',
                'Produzimos facas de churrasco (8", 10", 12"), facas de campo, utilitárias, facas de chef, discos de arado forjados, aço carbono, inox 420C e aço damasco, além de restaurações completas e cutelaria sob medida.'
              );
            }}
            className="chat-panel-btn"
          >
            <span className="flex items-center gap-2">
              <span>🛠️</span>
              <span>Quais tipos de trabalho vocês fazem?</span>
            </span>
            <ChevronRight size={16} />
          </button>

          <button
            type="button"
            onClick={handleResetToMainMenu}
            className="chat-panel-btn-secondary"
          >
            <RotateCcw size={14} />
            <span>Voltar ao menu principal</span>
          </button>
        </div>
      );
    }

    // 7. CATEGORIA: LOCALIZAÇÃO E HORÁRIO
    if (currentStep === 'CAT_LOCALIZACAO') {
      return (
        <div className="flex flex-col gap-2.5">
          <button
            type="button"
            onClick={() => {
              handleSelectOption(
                'Onde fica a loja?',
                'ANS_ONDE_FICA',
                'Nossa cutelaria e loja física fica na Rua Santa Cecília, 235 - Areias, Camboriú - SC (a minutos de Balneário Camboriú). Será um prazer receber você para conhecer a nossa fábrica!'
              );
            }}
            className="chat-panel-btn"
          >
            <span className="flex items-center gap-2">
              <span>📍</span>
              <span>Onde fica a loja?</span>
            </span>
            <ChevronRight size={16} />
          </button>

          <button
            type="button"
            onClick={() => {
              handleSelectOption(
                'Qual o horário de atendimento?',
                'ANS_HORARIO',
                'Atendimento presencial na fábrica de Segunda a Sexta das 08h às 18h e aos Sábados das 08h às 12h. Nosso WhatsApp de fábrica atende diariamente.'
              );
            }}
            className="chat-panel-btn"
          >
            <span className="flex items-center gap-2">
              <span>🕒</span>
              <span>Qual o horário de atendimento?</span>
            </span>
            <ChevronRight size={16} />
          </button>

          <button
            type="button"
            onClick={handleResetToMainMenu}
            className="chat-panel-btn-secondary"
          >
            <RotateCcw size={14} />
            <span>Voltar ao menu principal</span>
          </button>
        </div>
      );
    }

    // 8. CATEGORIA: FALAR COM A FÁBRICA
    if (currentStep === 'CAT_FALAR_FABRICA') {
      return (
        <div className="flex flex-col gap-2.5">
          <button
            type="button"
            onClick={() => {
              openWhatsAppWithTopic('Atendimento Direto com o Cuteleiro');
            }}
            className="chat-panel-btn bg-[#25D366] hover:bg-[#20ba59] text-black font-black border-[#25D366] shadow-[0_0_20px_rgba(37,211,102,0.35)]"
          >
            <span className="flex items-center gap-2.5">
              <WhatsAppIcon size={18} color="#000" />
              <span className="text-sm">Abrir WhatsApp</span>
            </span>
            <ExternalLink size={16} />
          </button>

          <button
            type="button"
            onClick={handleResetToMainMenu}
            className="chat-panel-btn-secondary"
          >
            <RotateCcw size={14} />
            <span>Voltar ao menu principal</span>
          </button>
        </div>
      );
    }

    // 9. APÓS CADA RESPOSTA (REGRA 4)
    // Mostra somente: Voltar ao menu principal, Ver outras dúvidas, Falar com a fábrica
    return (
      <div className="flex flex-col gap-2.5">
        <button
          type="button"
          onClick={handleResetToMainMenu}
          className="chat-panel-btn border-stone-700 hover:border-[#ff6a00]"
        >
          <span className="flex items-center gap-2.5">
            <RotateCcw size={15} className="text-[#ff6a00]" />
            <span className="font-semibold">Voltar ao menu principal</span>
          </span>
          <ChevronRight size={16} />
        </button>

        <button
          type="button"
          onClick={handleBackToCategory}
          className="chat-panel-btn border-stone-700 hover:border-[#ff6a00]"
        >
          <span className="flex items-center gap-2.5">
            <HelpCircle size={15} className="text-stone-400" />
            <span className="font-semibold">Ver outras dúvidas</span>
          </span>
          <ChevronRight size={16} />
        </button>

        <button
          type="button"
          onClick={() => openWhatsAppWithTopic('Atendimento de Fábrica')}
          className="chat-panel-btn border-[#25D366]/40 hover:border-[#25D366] bg-[#0f1712]/70 hover:bg-[#142318] text-[#25D366] group"
        >
          <span className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-[#25D366] flex items-center justify-center shadow-xs flex-shrink-0">
              <WhatsAppIcon size={16} color="#ffffff" />
            </span>
            <span className="font-bold text-[#25D366] group-hover:text-white transition-colors">
              Falar com a fábrica
            </span>
          </span>
          <ExternalLink size={16} className="text-[#25D366] group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    );
  };

  return (
    <>
      {/* Botão Flutuante de Atendimento Humanizado com o Menininho de Chapéu */}
      <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
        {/* Balão de fala convidativo acima do botão */}
        <div className="mb-2 relative animate-bounce select-none pointer-events-none">
          <div className="bg-gradient-to-r from-[#1c1611] to-[#261c14] border border-[#ff6a00] text-stone-100 px-3.5 py-1.5 rounded-2xl shadow-[0_4px_16px_rgba(255,106,0,0.3)] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="font-montserrat text-xs sm:text-[13px] font-bold text-stone-100">
              Posso te ajudar?
            </span>
            <span className="text-sm">👋</span>
          </div>
          {/* Ponta do balão apontando para o atendente */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#261c14] border-r border-b border-[#ff6a00] rotate-45" />
        </div>

        {/* Botão principal com o Menininho de Chapéu */}
        <button
          type="button"
          onClick={handleOpenChat}
          className="group relative flex items-center gap-3 pl-1.5 pr-4 sm:pr-5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#17110c] via-[#1f1610] to-[#17110c] border-2 border-[#ff6a00] text-stone-100 shadow-[0_6px_25px_rgba(255,106,0,0.4)] hover:shadow-[0_8px_35px_rgba(255,106,0,0.7)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer select-none"
          aria-label="Abrir atendimento da Fronteira Cutelaria - Posso te ajudar?"
        >
          {/* Avatar do Menininho com Chapéu */}
          <div className="relative flex-shrink-0">
            <BoyWithHatAvatar size={48} className="filter drop-shadow-md rounded-full transform group-hover:rotate-3 transition-transform" />
            {/* Ponto verde de status online */}
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#25D366] border-2 border-[#17110c] shadow-xs" />
          </div>

          <div className="flex flex-col text-left">
            <span className="font-montserrat text-[10px] text-[#ff6a00] uppercase tracking-wider font-extrabold flex items-center gap-1 leading-tight">
              Atendimento
            </span>
            <span className="font-montserrat text-xs sm:text-sm font-black text-white group-hover:text-[#ff6a00] transition-colors leading-tight">
              Posso ajudar?
            </span>
          </div>
        </button>
      </div>

      {/* TELA INTEIRA DEDICADA AO ATENDIMENTO DA FRONTEIRA CUTELARIA */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 z-50 bg-[#070504] text-stone-200 flex flex-col justify-between overflow-hidden"
          >
            {/* CONTAINER CENTRALIZADO ELEGANTE PARA MOBILE E DESKTOP */}
            <div className="w-full max-w-3xl mx-auto h-full flex flex-col bg-[#0b0806] sm:border-x sm:border-stone-800/80 shadow-2xl relative">
              
              {/* ============================================================ */}
              {/* 1. CABEÇALHO FIXO DA TELA DE ATENDIMENTO                     */}
              {/* ============================================================ */}
              <header className="sticky top-0 z-30 bg-[#120e0b]/95 backdrop-blur-md border-b border-stone-800/90 px-4 py-3 sm:px-6 flex items-center justify-between gap-3 shadow-md flex-shrink-0">
                {/* Lado esquerdo: ← Voltar ao site */}
                <button
                  type="button"
                  onClick={handleCloseChat}
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-stone-900/90 hover:bg-[#ff6a00] text-stone-200 hover:text-black border border-stone-700/80 hover:border-[#ff6a00] font-montserrat text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer shadow-sm active:scale-95 group"
                  aria-label="Voltar para o site"
                >
                  <ArrowLeft size={16} className="stroke-[2.5] group-hover:-translate-x-0.5 transition-transform" />
                  <span>← Voltar ao site</span>
                </button>

                {/* Centro / Marca: Menininho de Chapéu + Fronteira Cutelaria */}
                <div className="flex items-center gap-2.5 sm:gap-3 text-left">
                  <div className="relative flex-shrink-0">
                    <BoyWithHatAvatar size={40} className="filter drop-shadow-[0_0_8px_rgba(255,106,0,0.6)] rounded-full" />
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#25D366] border-2 border-[#120e0b]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-cinzel text-xs sm:text-base font-black text-stone-100 uppercase tracking-wider leading-tight">
                      Fronteira Cutelaria
                    </span>
                    <span className="font-montserrat text-[10px] sm:text-xs text-[#ff6a00] uppercase tracking-widest font-semibold flex items-center gap-1.5 leading-tight">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] inline-block animate-pulse" />
                      Atendimento
                    </span>
                  </div>
                </div>

                {/* Reiniciar Atendimento */}
                <button
                  type="button"
                  onClick={handleResetToMainMenu}
                  className="p-2 sm:px-3 sm:py-2 rounded-lg bg-stone-900/70 hover:bg-stone-800 text-stone-400 hover:text-[#ff6a00] border border-stone-800/80 transition-colors flex items-center gap-1.5 cursor-pointer text-xs font-semibold"
                  title="Reiniciar menu principal"
                  aria-label="Reiniciar atendimento"
                >
                  <RotateCcw size={15} />
                  <span className="hidden md:inline">Início</span>
                </button>
              </header>

              {/* ============================================================ */}
              {/* 2. ÁREA DAS MENSAGENS COM ROLAGEM INDEPENDENTE              */}
              {/* ============================================================ */}
              <div 
                ref={chatScrollRef}
                className="flex-1 overflow-y-auto px-4 py-5 sm:px-6 space-y-4 font-montserrat text-xs sm:text-sm scroll-smooth bg-[radial-gradient(ellipse_at_top,rgba(255,106,0,0.04),transparent_70%)]"
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start items-end gap-2.5'}`}
                  >
                    {msg.sender === 'bot' && (
                      <div className="flex-shrink-0 mb-1">
                        <BoyWithHatAvatar size={34} className="rounded-full shadow-md filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]" />
                      </div>
                    )}
                    <div
                      className={`max-w-[85%] sm:max-w-[78%] rounded-2xl p-4 leading-relaxed shadow-md ${
                        msg.sender === 'user'
                          ? 'bg-[#ff6a00] text-black font-bold rounded-tr-xs'
                          : 'bg-[#181310] border border-stone-800 text-stone-200 rounded-tl-xs'
                      }`}
                    >
                      <p className="whitespace-pre-line">{msg.text}</p>

                      {/* Botão de ação opcional dentro da mensagem do bot */}
                      {msg.actionButton && (
                        <div className="mt-3.5 pt-3 border-t border-stone-800">
                          <button
                            type="button"
                            onClick={msg.actionButton.action}
                            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#ff6a00] to-[#ff7a1a] text-black font-black uppercase text-xs tracking-wider flex items-center justify-center gap-2 shadow-lg hover:brightness-110 active:scale-98 transition-all cursor-pointer"
                          >
                            {msg.actionButton.icon === 'whatsapp' ? (
                              <WhatsAppIcon size={16} color="#000" />
                            ) : (
                              <Flame size={16} className="text-black" />
                            )}
                            <span>{msg.actionButton.label}</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Efeito digitando */}
                {isTyping && (
                  <div className="flex justify-start items-end gap-2.5">
                    <div className="flex-shrink-0 mb-1">
                      <BoyWithHatAvatar size={34} className="rounded-full shadow-md" />
                    </div>
                    <div className="bg-[#181310] border border-stone-800 rounded-2xl px-4 py-3 flex items-center gap-1.5 text-stone-400">
                      <span className="w-2 h-2 rounded-full bg-[#ff6a00] animate-bounce" />
                      <span className="w-2 h-2 rounded-full bg-[#ff6a00] animate-bounce [animation-delay:0.2s]" />
                      <span className="w-2 h-2 rounded-full bg-[#ff6a00] animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}
              </div>

              {/* ============================================================ */}
              {/* 3. PAINEL FIXO DE OPÇÕES PRONTAS NA PARTE INFERIOR           */}
              {/* Sempre visível e fácil de encontrar, sem forçar rolagem      */}
              {/* ============================================================ */}
              <div className="sticky bottom-0 z-30 bg-gradient-to-t from-[#0d0a08] via-[#120e0b] to-[#120e0b]/98 border-t border-stone-800/90 shadow-[0_-12px_32px_rgba(0,0,0,0.85)] px-4 pt-3 pb-4 sm:px-6 sm:pb-6 flex-shrink-0">
                
                {/* Título do painel */}
                <div className="flex items-center justify-between mb-2.5 px-1">
                  <span className="font-montserrat text-xs sm:text-sm font-bold text-stone-200">
                    {currentStep === 'MAIN_MENU' ? 'Como podemos ajudar?' : 'Escolha uma opção:'}
                  </span>
                  <span className="font-montserrat text-[10px] text-[#ff6a00] uppercase tracking-wider font-semibold">
                    Menu Interativo
                  </span>
                </div>

                {/* Opções de fácil toque em cartões/botões arredondados com rolagem própria se necessário */}
                <div className="max-h-[46vh] sm:max-h-[280px] overflow-y-auto pr-1">
                  {renderOptionButtons()}
                </div>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Estilos dedicados ao painel de opções */}
      <style>{`
        .chat-panel-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          min-height: 48px;
          text-align: left;
          padding: 12px 16px;
          border-radius: 12px;
          background: #17130f;
          border: 1px solid #2e2620;
          font-family: 'Montserrat', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #f3efe9;
          transition: all 0.15s ease-in-out;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.35);
        }
        .chat-panel-btn:hover {
          background: #231c16;
          border-color: #ff6a00;
          color: #ffffff;
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(255,106,0,0.18);
        }
        .chat-panel-btn:active {
          transform: scale(0.99);
        }
        .chat-panel-btn-secondary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          min-height: 42px;
          padding: 10px 16px;
          border-radius: 12px;
          background-color: transparent;
          border: 1px dashed #3f362e;
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: #b0a698;
          transition: all 0.15s ease-in-out;
          cursor: pointer;
        }
        .chat-panel-btn-secondary:hover {
          border-color: #ff6a00;
          color: #ff6a00;
          background-color: #191410;
        }
      `}</style>
    </>
  );
};
