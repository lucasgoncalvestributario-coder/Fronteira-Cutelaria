import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, 
  X, 
  ChevronRight, 
  RotateCcw, 
  Flame, 
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  MapPin,
  Clock,
  Sparkles,
  Scissors
} from 'lucide-react';
import { LOGO_URL, WHATSAPP_URL, PHONE_NUMBER } from '../data/cutelariaData';
import { WhatsAppIcon } from './WhatsAppIcon';

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
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const chatScrollRef = useRef<HTMLDivElement | null>(null);

  // Handle touch swipe-down on top bar
  const handleTopBarTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTopBarTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY === null) return;
    const currentY = e.changedTouches[0].clientY;
    const diffY = currentY - touchStartY;
    if (diffY > 60) {
      setIsOpen(false);
    }
    setTouchStartY(null);
  };

  // Auto-scroll chat to bottom
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

  // Renders the available buttons for the current menu state
  const renderOptionButtons = () => {
    // 1. MENU PRINCIPAL
    if (currentStep === 'MAIN_MENU') {
      return (
        <div className="flex flex-col gap-2 pt-2">
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
            className="chat-option-btn"
          >
            <span>🔪 Ver nossas facas</span>
            <ChevronRight size={14} className="text-[#ff6a00]" />
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
            className="chat-option-btn"
          >
            <span>⚡ Facas personalizadas</span>
            <ChevronRight size={14} className="text-[#ff6a00]" />
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
            className="chat-option-btn"
          >
            <span>📋 Quero um orçamento</span>
            <ChevronRight size={14} className="text-[#ff6a00]" />
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
            className="chat-option-btn"
          >
            <span>🛠️ Serviços da cutelaria</span>
            <ChevronRight size={14} className="text-[#ff6a00]" />
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
            className="chat-option-btn"
          >
            <span>🔥 Sobre a Fronteira</span>
            <ChevronRight size={14} className="text-[#ff6a00]" />
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
            className="chat-option-btn"
          >
            <span>📍 Localização e horário</span>
            <ChevronRight size={14} className="text-[#ff6a00]" />
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
            className="chat-option-btn border-[#25D366]/40 hover:border-[#25D366] text-[#25D366]"
          >
            <span className="flex items-center gap-2">
              <WhatsAppIcon size={14} color="#25D366" />
              <span>Falar com a fábrica</span>
            </span>
            <ChevronRight size={14} className="text-[#25D366]" />
          </button>
        </div>
      );
    }

    // 2. CATEGORIA: VER NOSSAS FACAS
    if (currentStep === 'CAT_FACAS') {
      return (
        <div className="flex flex-col gap-2 pt-2">
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
                    setIsOpen(false);
                    onOpenCatalog?.();
                  },
                  icon: 'catalog'
                }
              );
            }}
            className="chat-option-btn text-[#ff6a00] border-[#ff6a00]/40 font-bold"
          >
            <span>📖 Ver catálogo de facas</span>
            <ChevronRight size={14} />
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
            className="chat-option-btn"
          >
            <span>📦 As facas estão disponíveis?</span>
            <ChevronRight size={14} />
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
            className="chat-option-btn"
          >
            <span>💰 Quero saber o preço</span>
            <ChevronRight size={14} />
          </button>

          <button
            type="button"
            onClick={handleResetToMainMenu}
            className="chat-option-btn-secondary"
          >
            <RotateCcw size={12} />
            <span>Voltar ao menu principal</span>
          </button>
        </div>
      );
    }

    // 3. CATEGORIA: FACAS PERSONALIZADAS
    if (currentStep === 'CAT_PERSONALIZADAS') {
      return (
        <div className="flex flex-col gap-2 pt-2">
          <button
            type="button"
            onClick={() => {
              handleSelectOption(
                'Vocês fazem facas sob medida?',
                'ANS_SOB_MEDIDA',
                'Sim! Somos fabricantes com oficina própria e a cutelaria sob medida é o coração do nosso trabalho. Você pode escolher comprimento da lâmina, espessura, tipo de aço, dorso mosqueado, cabos de madeiras nobres ou resina híbrida e estilo de bainha.'
              );
            }}
            className="chat-option-btn"
          >
            <span>📏 Vocês fazem facas sob medida?</span>
            <ChevronRight size={14} />
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
            className="chat-option-btn"
          >
            <span>✍️ Posso personalizar com nome ou marca?</span>
            <ChevronRight size={14} />
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
            className="chat-option-btn"
          >
            <span>📸 Posso enviar uma foto de referência?</span>
            <ChevronRight size={14} />
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
            className="chat-option-btn text-[#ff6a00] border-[#ff6a00]/40 font-bold"
          >
            <span>📝 Quero solicitar um orçamento</span>
            <ChevronRight size={14} />
          </button>

          <button
            type="button"
            onClick={handleResetToMainMenu}
            className="chat-option-btn-secondary"
          >
            <RotateCcw size={12} />
            <span>Voltar ao menu principal</span>
          </button>
        </div>
      );
    }

    // 4. CATEGORIA: QUERO UM ORÇAMENTO
    if (currentStep === 'CAT_ORCAMENTO') {
      return (
        <div className="flex flex-col gap-2 pt-2">
          <button
            type="button"
            onClick={() => {
              handleSelectOption(
                'Orçamento de faca personalizada',
                'ANS_ORC_PERSONALIZADA',
                'Para cotar sua faca sob medida, envie o modelo desejado, dimensões e se deseja gravação de nome. Atendemos você direto no WhatsApp da fábrica com todo o detalhamento.'
              );
            }}
            className="chat-option-btn"
          >
            <span>🔪 Orçamento de faca personalizada</span>
            <ChevronRight size={14} />
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
            className="chat-option-btn"
          >
            <span>🏢 Orçamento para empresas</span>
            <ChevronRight size={14} />
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
            className="chat-option-btn"
          >
            <span>📦 Orçamento para várias peças</span>
            <ChevronRight size={14} />
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
            className="chat-option-btn text-[#25D366] border-[#25D366]/40"
          >
            <span className="flex items-center gap-2">
              <WhatsAppIcon size={14} color="#25D366" />
              <span>Falar com a fábrica</span>
            </span>
            <ChevronRight size={14} />
          </button>

          <button
            type="button"
            onClick={handleResetToMainMenu}
            className="chat-option-btn-secondary"
          >
            <RotateCcw size={12} />
            <span>Voltar ao menu principal</span>
          </button>
        </div>
      );
    }

    // 5. CATEGORIA: SERVIÇOS DA CUTELARIA
    if (currentStep === 'CAT_SERVICOS') {
      return (
        <div className="flex flex-col gap-2 pt-2">
          <button
            type="button"
            onClick={() => {
              handleSelectOption(
                'Afiação',
                'ANS_AFIACAO',
                'Realizamos afiação profissional com correção de geometria e acabamento em navalha. Sua faca volta a cortar como no primeiro dia.'
              );
            }}
            className="chat-option-btn"
          >
            <span>✨ Afiação</span>
            <ChevronRight size={14} />
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
            className="chat-option-btn"
          >
            <span>🔨 Restauração</span>
            <ChevronRight size={14} />
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
            className="chat-option-btn"
          >
            <span>🛡️ Bainhas</span>
            <ChevronRight size={14} />
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
            className="chat-option-btn"
          >
            <span>✒️ Personalização</span>
            <ChevronRight size={14} />
          </button>

          <button
            type="button"
            onClick={handleResetToMainMenu}
            className="chat-option-btn-secondary"
          >
            <RotateCcw size={12} />
            <span>Voltar ao menu principal</span>
          </button>
        </div>
      );
    }

    // 6. CATEGORIA: SOBRE A FRONTEIRA
    if (currentStep === 'CAT_SOBRE') {
      return (
        <div className="flex flex-col gap-2 pt-2">
          <button
            type="button"
            onClick={() => {
              handleSelectOption(
                'Vocês são fabricantes?',
                'ANS_FABRICANTES',
                'Sim! Somos fabricantes com oficina e forja própria. Todas as peças que você vê em nosso acervo foram feitas em nossa bancada em Camboriú/SC, preservando a essência da autêntica cutelaria artesanal brasileira.'
              );
            }}
            className="chat-option-btn"
          >
            <span>🔥 Vocês são fabricantes?</span>
            <ChevronRight size={14} />
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
            className="chat-option-btn"
          >
            <span>📍 Onde as facas são produzidas?</span>
            <ChevronRight size={14} />
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
            className="chat-option-btn"
          >
            <span>🛠️ Quais tipos de trabalho vocês fazem?</span>
            <ChevronRight size={14} />
          </button>

          <button
            type="button"
            onClick={handleResetToMainMenu}
            className="chat-option-btn-secondary"
          >
            <RotateCcw size={12} />
            <span>Voltar ao menu principal</span>
          </button>
        </div>
      );
    }

    // 7. CATEGORIA: LOCALIZAÇÃO E HORÁRIO
    if (currentStep === 'CAT_LOCALIZACAO') {
      return (
        <div className="flex flex-col gap-2 pt-2">
          <button
            type="button"
            onClick={() => {
              handleSelectOption(
                'Onde fica a loja?',
                'ANS_ONDE_FICA',
                'Nossa cutelaria e loja física fica na Rua Santa Cecília, 235 - Areias, Camboriú - SC (a minutos de Balneário Camboriú). Será um prazer receber você para conhecer a nossa fábrica!'
              );
            }}
            className="chat-option-btn"
          >
            <span>📍 Onde fica a loja?</span>
            <ChevronRight size={14} />
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
            className="chat-option-btn"
          >
            <span>🕒 Qual o horário de atendimento?</span>
            <ChevronRight size={14} />
          </button>

          <button
            type="button"
            onClick={handleResetToMainMenu}
            className="chat-option-btn-secondary"
          >
            <RotateCcw size={12} />
            <span>Voltar ao menu principal</span>
          </button>
        </div>
      );
    }

    // 8. CATEGORIA: FALAR COM A FÁBRICA
    if (currentStep === 'CAT_FALAR_FABRICA') {
      return (
        <div className="flex flex-col gap-2 pt-2">
          <button
            type="button"
            onClick={() => {
              openWhatsAppWithTopic('Atendimento Direto com o Cuteleiro');
            }}
            className="chat-option-btn bg-[#25D366] hover:bg-[#20ba59] text-black font-black border-[#25D366] shadow-[0_0_20px_rgba(37,211,102,0.4)]"
          >
            <span className="flex items-center gap-2">
              <WhatsAppIcon size={16} color="#000" />
              <span>Abrir WhatsApp</span>
            </span>
            <ExternalLink size={14} />
          </button>

          <button
            type="button"
            onClick={handleResetToMainMenu}
            className="chat-option-btn-secondary"
          >
            <RotateCcw size={12} />
            <span>Voltar ao menu principal</span>
          </button>
        </div>
      );
    }

    // 9. APÓS CADA RESPOSTA (REGRA 4)
    // Mostra somente: Voltar ao menu principal, Ver outras dúvidas, Falar com a fábrica
    return (
      <div className="flex flex-col gap-2 pt-2">
        <button
          type="button"
          onClick={handleResetToMainMenu}
          className="chat-option-btn border-stone-700 hover:border-[#ff6a00]"
        >
          <span className="flex items-center gap-2">
            <RotateCcw size={13} className="text-[#ff6a00]" />
            <span>Voltar ao menu principal</span>
          </span>
          <ChevronRight size={14} />
        </button>

        <button
          type="button"
          onClick={handleBackToCategory}
          className="chat-option-btn border-stone-700 hover:border-[#ff6a00]"
        >
          <span className="flex items-center gap-2">
            <HelpCircle size={13} className="text-stone-400" />
            <span>Ver outras dúvidas</span>
          </span>
          <ChevronRight size={14} />
        </button>

        <button
          type="button"
          onClick={() => openWhatsAppWithTopic('Atendimento de Fábrica')}
          className="chat-option-btn border-[#25D366]/40 hover:border-[#25D366] text-[#25D366]"
        >
          <span className="flex items-center gap-2">
            <WhatsAppIcon size={14} color="#25D366" />
            <span>Falar com a fábrica</span>
          </span>
          <ExternalLink size={14} />
        </button>
      </div>
    );
  };

  return (
    <>
      {/* Botão Flutuante Discreto para Abrir o Chatbot */}
      <div className="fixed bottom-24 right-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-stone-900 border border-[#ff6a0066] hover:border-[#ff6a00] text-stone-100 shadow-[0_0_20px_rgba(255,106,0,0.35)] hover:shadow-[0_0_30px_rgba(255,106,0,0.6)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer select-none"
          aria-label={isOpen ? 'Fechar atendimento' : 'Abrir atendimento guiado'}
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6a00] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ff6a00]" />
          </span>
          <MessageSquare size={17} className="text-[#ff6a00]" />
          <span className="hidden sm:inline font-montserrat text-xs font-bold uppercase tracking-wider text-stone-200 group-hover:text-white">
            Dúvidas Frequentes
          </span>
        </button>
      </div>

      {/* Janela Modal do Chatbot Guiado */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs">
            
            {/* Backdrop click to close */}
            <div 
              className="absolute inset-0" 
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              drag="y"
              dragDirectionLock
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0.05, bottom: 0.7 }}
              onDragEnd={(_e, info) => {
                if (info.offset.y > 75 || info.velocity.y > 350) {
                  setIsOpen(false);
                }
              }}
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="relative z-10 w-full sm:max-w-md max-h-[85vh] sm:max-h-[640px] flex flex-col bg-[#0d0a08] border border-stone-800 rounded-t-2xl sm:rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.9)] overflow-hidden touch-pan-y"
            >
              {/* Barra Superior Deslizável / Drag Handle (Puxe para baixo para fechar) */}
              <div 
                onTouchStart={handleTopBarTouchStart}
                onTouchEnd={handleTopBarTouchEnd}
                className="w-full pt-2.5 pb-1 flex flex-col items-center justify-center cursor-grab active:cursor-grabbing bg-[#15100c] border-b border-stone-800/60 select-none group"
                title="Puxe para baixo para fechar"
              >
                <div className="w-12 h-1.5 rounded-full bg-stone-500/80 group-hover:bg-[#ff6a00] group-active:bg-[#ff6a00] transition-colors" />
                <span className="text-[9px] font-montserrat uppercase tracking-wider text-stone-400 mt-1 select-none font-medium">
                  Deslize para baixo para fechar
                </span>
              </div>

              {/* Header do Chatbot */}
              <div 
                onTouchStart={handleTopBarTouchStart}
                onTouchEnd={handleTopBarTouchEnd}
                className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#140f0c] via-[#100d0b] to-[#140f0c] border-b border-stone-800 cursor-grab active:cursor-grabbing select-none"
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={LOGO_URL}
                      alt="Fronteira Cutelaria"
                      className="w-9 h-9 object-contain filter drop-shadow-[0_0_8px_rgba(255,106,0,0.6)]"
                    />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] border border-[#0d0a08]" />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-xs sm:text-sm font-black text-stone-100 uppercase tracking-wider">
                      Atendimento Fronteira
                    </h3>
                    <p className="font-montserrat text-[10px] text-stone-400 flex items-center gap-1 font-medium">
                      <span>Fábrica & Cutelaria</span>
                      <span className="text-[#ff6a00]">•</span>
                      <span className="text-[#ff6a00]">Menu Guiado</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={handleResetToMainMenu}
                    className="p-1.5 rounded-sm hover:bg-stone-800 text-stone-400 hover:text-[#ff6a00] transition-colors"
                    title="Reiniciar menu"
                    aria-label="Reiniciar para o menu principal"
                  >
                    <RotateCcw size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-sm hover:bg-stone-800 text-stone-400 hover:text-white transition-colors"
                    aria-label="Fechar janela de atendimento"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Mensagens e Histórico */}
              <div 
                ref={chatScrollRef}
                className="flex-1 overflow-y-auto p-4 space-y-3.5 font-montserrat text-xs scroll-smooth bg-[radial-gradient(ellipse_at_top,rgba(255,106,0,0.04),transparent_60%)]"
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-lg px-3.5 py-2.5 leading-relaxed shadow-sm ${
                        msg.sender === 'user'
                          ? 'bg-[#ff6a00] text-black font-bold rounded-br-none'
                          : 'bg-[#181310] border border-stone-800 text-stone-200 rounded-bl-none'
                      }`}
                    >
                      <p>{msg.text}</p>

                      {/* Botão de ação opcional dentro da mensagem do bot */}
                      {msg.actionButton && (
                        <div className="mt-3 pt-2 border-t border-stone-800/80">
                          <button
                            type="button"
                            onClick={msg.actionButton.action}
                            className="w-full py-2 px-3 rounded-sm bg-gradient-to-r from-[#ff6a00] to-[#ff7a1a] text-black font-black uppercase text-[11px] tracking-wider flex items-center justify-center gap-1.5 shadow-md hover:brightness-110 active:scale-98 transition-all cursor-pointer"
                          >
                            {msg.actionButton.icon === 'whatsapp' ? (
                              <WhatsAppIcon size={14} color="#000" />
                            ) : (
                              <Flame size={14} className="text-black" />
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
                  <div className="flex justify-start">
                    <div className="bg-[#181310] border border-stone-800 rounded-lg px-3 py-2 flex items-center gap-1 text-stone-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00] animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00] animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00] animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}
              </div>

              {/* Área de Opções Guiadas (NÃO há campo de texto livre - Regra 1) */}
              <div className="p-3 bg-[#110e0b] border-t border-stone-800/90 max-h-[260px] overflow-y-auto">
                <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1 px-1 flex items-center justify-between">
                  <span>Escolha uma opção:</span>
                  <span className="text-[#ff6a00]">Menu Interativo</span>
                </div>
                {renderOptionButtons()}
              </div>

              {/* Rodapé institucional */}
              <div className="px-4 py-2 bg-[#090706] border-t border-stone-900 flex items-center justify-between text-[10px] font-montserrat text-stone-400">
                <span>Atendimento Oficial</span>
                <span className="font-cinzel font-bold text-stone-400 uppercase tracking-widest">
                  Fronteira Cutelaria
                </span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Estilos utilitários locais do menu guiado */}
      <style>{`
        .chat-option-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          text-align: left;
          padding: 8px 12px;
          border-radius: 4px;
          background-color: #17130f;
          border: 1px solid #29241f;
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 600;
          color: #e5e0dc;
          transition: all 0.15s ease-in-out;
          cursor: pointer;
        }
        .chat-option-btn:hover {
          background-color: #211b15;
          border-color: #ff6a00;
          color: #ffffff;
          transform: translateX(2px);
        }
        .chat-option-btn:active {
          transform: scale(0.99);
        }
        .chat-option-btn-secondary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          width: 100%;
          padding: 7px 10px;
          border-radius: 4px;
          background-color: transparent;
          border: 1px dashed #3a322a;
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 600;
          color: #a89f91;
          transition: all 0.15s ease-in-out;
          cursor: pointer;
        }
        .chat-option-btn-secondary:hover {
          border-color: #ff6a00;
          color: #ff6a00;
          background-color: #191410;
        }
      `}</style>
    </>
  );
};
