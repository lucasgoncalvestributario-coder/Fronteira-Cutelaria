import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit3, 
  Trash2, 
  Check, 
  X, 
  ShieldCheck, 
  Flame, 
  Sparkles, 
  Package, 
  RotateCcw,
  ExternalLink,
  ChevronRight,
  SlidersHorizontal
} from 'lucide-react';
import { 
  INITIAL_PRODUCTS, 
  STEEL_OPTIONS, 
  HANDLE_OPTIONS, 
  CATEGORY_OPTIONS, 
  PHONE_NUMBER,
  STEELS_DATA
} from '../data/cutelariaData';
import { KnifeProduct } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';

const STORAGE_KEY = 'fronteira_cutelaria_knife_catalog_v1';

export const ProductCatalogSection: React.FC = () => {
  // Load products from localStorage or use INITIAL_PRODUCTS
  const [products, setProducts] = useState<KnifeProduct[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Erro ao ler produtos do localStorage:', e);
    }
    return INITIAL_PRODUCTS;
  });

  // Save to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    } catch (e) {
      console.error('Erro ao salvar produtos no localStorage:', e);
    }
  }, [products]);

  // Filters state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSteel, setSelectedSteel] = useState<string>('todos');
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');
  const [selectedStock, setSelectedStock] = useState<string>('todos');

  // Modals state
  const [detailProduct, setDetailProduct] = useState<KnifeProduct | null>(null);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<KnifeProduct | null>(null);

  // Form fields
  const [formName, setFormName] = useState('');
  const [formCode, setFormCode] = useState('');
  const [formCategory, setFormCategory] = useState('Churrasco');
  const [formSteel, setFormSteel] = useState('Aço Inox');
  const [formHandle, setFormHandle] = useState('Cabo de Chifre de Cervo Natural');
  const [formBladeLength, setFormBladeLength] = useState('8 polegadas (20 cm)');
  const [formPrice, setFormPrice] = useState<number | string>(590);
  const [formImage, setFormImage] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formStockStatus, setFormStockStatus] = useState<'pronta-entrega' | 'sob-encomenda' | 'esgotado'>('pronta-entrega');
  const [formStockQuantity, setFormStockQuantity] = useState<number | string>(2);
  const [formError, setFormError] = useState('');
  const [notification, setNotification] = useState<string | null>(null);

  // Show temporary notification
  const notify = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  // Open form for creating new product
  const handleOpenCreate = () => {
    setEditingProduct(null);
    const nextNum = products.length + 101;
    setFormCode(`FC-${nextNum}`);
    setFormName('');
    setFormCategory('Churrasco');
    setFormSteel('Aço de Mola de Caminhão');
    setFormHandle('Cabo de Chifre de Cervo Natural');
    setFormBladeLength('8 polegadas (20 cm)');
    setFormPrice(580);
    setFormImage('https://i.ibb.co/TDG4L76Y/Gemini-Generated-Image-ugdddougdddougdd.jpg');
    setFormDescription('Lâmina forjada artesanalmente com têmpera seletiva e afiação cirúrgica. Peça exclusiva com garantia vitalícia de forja.');
    setFormStockStatus('pronta-entrega');
    setFormStockQuantity(2);
    setFormError('');
    setIsFormModalOpen(true);
  };

  // Open form for editing existing product
  const handleOpenEdit = (prod: KnifeProduct) => {
    setEditingProduct(prod);
    setFormCode(prod.code);
    setFormName(prod.name);
    setFormCategory(prod.category);
    setFormSteel(prod.steel);
    setFormHandle(prod.handle);
    setFormBladeLength(prod.bladeLength);
    setFormPrice(prod.price);
    setFormImage(prod.image);
    setFormDescription(prod.description);
    setFormStockStatus(prod.stockStatus);
    setFormStockQuantity(prod.stockQuantity);
    setFormError('');
    setIsFormModalOpen(true);
    if (detailProduct) setDetailProduct(null);
  };

  // Save product (create or update)
  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim()) {
      setFormError('Informe o nome do produto.');
      return;
    }
    if (!formCode.trim()) {
      setFormError('Informe o código do produto.');
      return;
    }
    const priceNum = Number(formPrice);
    if (isNaN(priceNum) || priceNum <= 0) {
      setFormError('Informe um preço válido maior que zero.');
      return;
    }

    const defaultImg = formImage.trim() || 'https://i.ibb.co/TDG4L76Y/Gemini-Generated-Image-ugdddougdddougdd.jpg';

    if (editingProduct) {
      // Update
      setProducts((prev) =>
        prev.map((p) =>
          p.id === editingProduct.id
            ? {
                ...p,
                code: formCode.trim().toUpperCase(),
                name: formName.trim(),
                category: formCategory,
                steel: formSteel,
                handle: formHandle,
                bladeLength: formBladeLength.trim(),
                price: priceNum,
                image: defaultImg,
                images: p.images ? [defaultImg, ...p.images.slice(1)] : [defaultImg],
                description: formDescription.trim(),
                stockStatus: formStockStatus,
                stockQuantity: Number(formStockQuantity) || 0
              }
            : p
        )
      );
      notify(`Faca "${formName}" atualizada com sucesso!`);
    } else {
      // Create new
      const newProduct: KnifeProduct = {
        id: `prod-${Date.now()}`,
        code: formCode.trim().toUpperCase(),
        name: formName.trim(),
        category: formCategory,
        steel: formSteel,
        handle: formHandle,
        bladeLength: formBladeLength.trim() || '8 polegadas (20 cm)',
        price: priceNum,
        image: defaultImg,
        images: [defaultImg],
        description: formDescription.trim() || 'Faca artesanal forjada à mão pela Fronteira Cutelaria.',
        stockStatus: formStockStatus,
        stockQuantity: Number(formStockQuantity) || 1,
        features: ['Lâmina forjada artesanalmente', 'Corte estilo navalha', 'Certificado de autenticidade']
      };
      setProducts((prev) => [newProduct, ...prev]);
      notify(`Nova faca "${formName}" cadastrada com sucesso!`);
    }

    setIsFormModalOpen(false);
  };

  // Delete product
  const handleDeleteProduct = (id: string, name: string) => {
    if (window.confirm(`Tem certeza que deseja remover a faca "${name}" do catálogo?`)) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
      if (detailProduct?.id === id) setDetailProduct(null);
      setIsFormModalOpen(false);
      notify(`Faca "${name}" removida com sucesso.`);
    }
  };

  // Reset to default products
  const handleResetCatalog = () => {
    if (window.confirm('Deseja restaurar o catálogo padrão original? Todas as facas pré-configuradas (incluindo Aço de Mola de Caminhão e Aço Damasco) serão restauradas.')) {
      setProducts(INITIAL_PRODUCTS);
      localStorage.removeItem(STORAGE_KEY);
      notify('Catálogo restaurado para a versão padrão.');
    }
  };

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Search term
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesCode = item.code.toLowerCase().includes(query);
        const matchesSteel = item.steel.toLowerCase().includes(query);
        const matchesHandle = item.handle.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        if (!matchesName && !matchesCode && !matchesSteel && !matchesHandle && !matchesDesc) {
          return false;
        }
      }

      // Steel filter
      if (selectedSteel !== 'todos') {
        const itemSteelNorm = item.steel.toLowerCase();
        const filterSteelNorm = selectedSteel.toLowerCase();
        if (!itemSteelNorm.includes(filterSteelNorm) && !filterSteelNorm.includes(itemSteelNorm)) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== 'todas') {
        if (item.category.toLowerCase() !== selectedCategory.toLowerCase()) {
          return false;
        }
      }

      // Stock filter
      if (selectedStock !== 'todos') {
        if (item.stockStatus !== selectedStock) {
          return false;
        }
      }

      return true;
    });
  }, [products, searchTerm, selectedSteel, selectedCategory, selectedStock]);

  // Generate WhatsApp buy link
  const getWhatsAppProductUrl = (prod: KnifeProduct) => {
    const text = `Olá! Gostaria de consultar sobre a ${prod.name} (Código: ${prod.code}), forjada em ${prod.steel}, com cabo em ${prod.handle}. Valor: R$ ${prod.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}.`;
    return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="catalogo" className="relative py-20 sm:py-24 bg-[#080808] border-t-2 border-stone-800 text-stone-100">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#ff6a0015] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-stone-800/80 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#ff6a0044] bg-[#ff6a0011] mb-3">
              <Flame size={14} className="text-[#ff6a00]" />
              <span className="font-montserrat text-xs uppercase tracking-widest text-[#ff6a00] font-bold">
                Acervo da Fronteira Cutelaria
              </span>
            </div>
            
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black text-stone-100 uppercase tracking-tight">
              Catálogo de <span className="text-[#ff6a00]">Facas Artesanais</span>
            </h2>
            
            <p className="font-montserrat text-stone-400 text-sm sm:text-base font-normal mt-2 max-w-2xl leading-relaxed">
              Consulte modelos disponíveis para pronta entrega ou encomenda personalizada. Filtre por tipo de aço, categoria e disponibilidade de estoque.
            </p>
          </div>

          {/* Action Buttons: Cadastrar Faca */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              id="btn-cadastrar-nova-faca"
              onClick={handleOpenCreate}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#ff6a00] hover:bg-[#e05e00] text-black font-montserrat text-xs font-black uppercase tracking-wider shadow-[0_0_20px_rgba(255,106,0,0.35)] hover:shadow-[0_0_30px_rgba(255,106,0,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Plus size={16} className="stroke-[3]" />
              <span>Cadastrar Nova Faca</span>
            </button>

            <button
              id="btn-restaurar-catalogo"
              onClick={handleResetCatalog}
              title="Restaurar catálogo inicial com os 5 tipos de aço"
              className="inline-flex items-center gap-1.5 px-3.5 py-3 rounded-sm bg-stone-900 border border-stone-800 hover:border-stone-700 text-stone-400 hover:text-stone-200 font-montserrat text-xs font-semibold tracking-wider transition-colors cursor-pointer"
            >
              <RotateCcw size={14} />
              <span className="hidden sm:inline">Restaurar Padrão</span>
            </button>
          </div>
        </div>

        {/* Notification Toast */}
        <AnimatePresence>
          {notification && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 p-4 rounded-sm bg-[#ff6a0018] border border-[#ff6a0088] text-[#ff9040] flex items-center justify-between font-montserrat text-xs font-bold"
            >
              <div className="flex items-center gap-2">
                <Check size={16} className="text-[#ff6a00]" />
                <span>{notification}</span>
              </div>
              <button onClick={() => setNotification(null)} className="text-stone-400 hover:text-stone-100">
                <X size={14} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search and Filters Bar */}
        <div className="p-4 sm:p-5 rounded-md bg-[#111111] border border-stone-800 mb-8 space-y-4 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-500" />
              <input
                id="search-catalogo-input"
                type="text"
                placeholder="Buscar por nome, código, aço..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-black border border-stone-800 rounded text-stone-200 placeholder-stone-600 font-montserrat text-xs focus:outline-none focus:border-[#ff6a00]"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-300"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Filter: Tipo de Aço (Inclui os 5 materiais) */}
            <div>
              <label htmlFor="filter-steel-select" className="sr-only">Filtrar por Tipo de Aço</label>
              <select
                id="filter-steel-select"
                value={selectedSteel}
                onChange={(e) => setSelectedSteel(e.target.value)}
                className="w-full px-3 py-2.5 bg-black border border-stone-800 rounded text-stone-200 font-montserrat text-xs focus:outline-none focus:border-[#ff6a00]"
              >
                <option value="todos">Todos os Tipos de Aço ({products.length})</option>
                {STEEL_OPTIONS.map((steel) => {
                  const count = products.filter((p) => p.steel.toLowerCase().includes(steel.toLowerCase())).length;
                  return (
                    <option key={steel} value={steel}>
                      {steel} ({count})
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Filter: Categoria */}
            <div>
              <label htmlFor="filter-category-select" className="sr-only">Filtrar por Categoria</label>
              <select
                id="filter-category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2.5 bg-black border border-stone-800 rounded text-stone-200 font-montserrat text-xs focus:outline-none focus:border-[#ff6a00]"
              >
                <option value="todas">Todas as Categorias</option>
                {CATEGORY_OPTIONS.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter: Estoque */}
            <div>
              <label htmlFor="filter-stock-select" className="sr-only">Filtrar por Disponibilidade</label>
              <select
                id="filter-stock-select"
                value={selectedStock}
                onChange={(e) => setSelectedStock(e.target.value)}
                className="w-full px-3 py-2.5 bg-black border border-stone-800 rounded text-stone-200 font-montserrat text-xs focus:outline-none focus:border-[#ff6a00]"
              >
                <option value="todos">Todas as Disponibilidades</option>
                <option value="pronta-entrega">Pronta Entrega</option>
                <option value="sob-encomenda">Sob Encomenda</option>
                <option value="esgotado">Esgotado</option>
              </select>
            </div>
          </div>

          {/* Quick steel tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-800/80">
            <span className="font-montserrat text-[11px] font-bold text-stone-400 uppercase tracking-wider flex items-center gap-1">
              <SlidersHorizontal size={12} className="text-[#ff6a00]" /> Aços:
            </span>
            <button
              onClick={() => setSelectedSteel('todos')}
              className={`px-2.5 py-1 rounded text-[11px] font-montserrat font-semibold transition-all ${
                selectedSteel === 'todos'
                  ? 'bg-[#ff6a00] text-black font-bold shadow-md'
                  : 'bg-black/60 text-stone-300 border border-stone-800 hover:border-stone-700'
              }`}
            >
              Todos
            </button>
            {STEEL_OPTIONS.map((steel) => (
              <button
                key={steel}
                onClick={() => setSelectedSteel(steel)}
                className={`px-2.5 py-1 rounded text-[11px] font-montserrat font-semibold transition-all ${
                  selectedSteel === steel
                    ? 'bg-[#ff6a00] text-black font-bold shadow-md'
                    : 'bg-black/60 text-stone-300 border border-stone-800 hover:border-stone-700'
                }`}
              >
                {steel}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-lg bg-stone-900/30 border border-stone-800">
            <Package size={40} className="mx-auto text-stone-600 mb-3" />
            <h3 className="font-cinzel text-xl text-stone-200 font-bold mb-2">
              Nenhuma faca encontrada com os filtros selecionados
            </h3>
            <p className="font-montserrat text-xs text-stone-400 max-w-md mx-auto mb-6">
              Tente redefinir a busca por tipo de aço ou cadastre uma nova faca artesanal com o material desejado.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedSteel('todos');
                setSelectedCategory('todas');
                setSelectedStock('todos');
              }}
              className="px-4 py-2 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 font-montserrat text-xs font-bold"
            >
              Limpar Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((prod) => {
              // Format price
              const formattedPrice = prod.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              });

              return (
                <motion.div
                  key={prod.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-lg bg-black border border-stone-800 hover:border-[#ff6a0088] transition-all duration-300 overflow-hidden shadow-2xl flex flex-col justify-between"
                >
                  {/* Top Image Box */}
                  <div>
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-950">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none" />

                      {/* Code Badge */}
                      <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/80 border border-stone-700 text-stone-300 font-montserrat text-[10px] font-black uppercase tracking-wider backdrop-blur-sm">
                        {prod.code}
                      </span>

                      {/* Steel Badge (Destaque visual do tipo de aço) */}
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#ff6a00] text-black font-montserrat text-[10px] font-black uppercase tracking-wider shadow-md">
                        {prod.steel}
                      </span>

                      {/* Stock Status Pill */}
                      <div className="absolute bottom-3 left-3">
                        {prod.stockStatus === 'pronta-entrega' && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-950/90 border border-emerald-500/50 text-emerald-400 font-montserrat text-[10px] font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Pronta Entrega ({prod.stockQuantity})
                          </span>
                        )}
                        {prod.stockStatus === 'sob-encomenda' && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-950/90 border border-amber-500/50 text-amber-400 font-montserrat text-[10px] font-bold">
                            Sob Encomenda
                          </span>
                        )}
                        {prod.stockStatus === 'esgotado' && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-rose-950/90 border border-rose-500/50 text-rose-400 font-montserrat text-[10px] font-bold">
                            Esgotado
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 sm:p-5 space-y-3">
                      <div>
                        <span className="font-montserrat text-[10px] uppercase tracking-widest text-stone-400 font-bold block mb-1">
                          {prod.category}
                        </span>
                        <h3 className="font-cinzel text-lg sm:text-xl font-black text-stone-100 uppercase line-clamp-1 group-hover:text-[#ff6a00] transition-colors">
                          {prod.name}
                        </h3>
                      </div>

                      {/* Specs Row */}
                      <div className="space-y-1.5 pt-2 border-t border-stone-900 text-xs font-montserrat">
                        <div className="flex items-center justify-between text-stone-300">
                          <span className="text-stone-500 text-[11px]">Material Lâmina:</span>
                          <span className="font-bold text-[#ff6a00]">{prod.steel}</span>
                        </div>
                        <div className="flex items-center justify-between text-stone-300">
                          <span className="text-stone-500 text-[11px]">Material Cabo:</span>
                          <span className="font-medium line-clamp-1 max-w-[170px] text-right">{prod.handle}</span>
                        </div>
                        <div className="flex items-center justify-between text-stone-300">
                          <span className="text-stone-500 text-[11px]">Tamanho:</span>
                          <span className="font-medium">{prod.bladeLength}</span>
                        </div>
                      </div>

                      {/* Description preview */}
                      <p className="font-montserrat text-xs text-stone-400 line-clamp-2 leading-relaxed font-light pt-1">
                        {prod.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer: Price & Actions */}
                  <div className="p-4 sm:p-5 pt-0 space-y-3">
                    <div className="flex items-baseline justify-between pt-3 border-t border-stone-800">
                      <span className="font-montserrat text-[11px] text-stone-500 uppercase tracking-wider font-semibold">
                        Valor da Peça:
                      </span>
                      <span className="font-cinzel text-xl font-bold text-stone-100">
                        {formattedPrice}
                      </span>
                    </div>

                    {/* Action buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        id={`btn-ver-detalhes-${prod.code.toLowerCase()}`}
                        onClick={() => setDetailProduct(prod)}
                        className="w-full py-2.5 px-3 rounded bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-stone-700 text-stone-200 font-montserrat text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Ver Detalhes</span>
                        <ChevronRight size={14} />
                      </button>

                      <a
                        id={`btn-comprar-whatsapp-${prod.code.toLowerCase()}`}
                        href={getWhatsAppProductUrl(prod)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-3 rounded bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-black border border-[#25D366]/60 font-montserrat text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                      >
                        <WhatsAppIcon size={14} color="currentColor" />
                        <span>Pedir</span>
                      </a>
                    </div>

                    {/* Quick Edit icon */}
                    <div className="flex justify-end pt-1">
                      <button
                        id={`btn-editar-faca-${prod.code.toLowerCase()}`}
                        onClick={() => handleOpenEdit(prod)}
                        className="text-stone-500 hover:text-[#ff6a00] font-montserrat text-[11px] flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Edit3 size={12} />
                        <span>Editar cadastro</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

      </div>

      {/* MODAL: Detalhes do Produto */}
      <AnimatePresence>
        {detailProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-[#0e0e0e] border border-stone-800 rounded-lg shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-stone-800 bg-black/60">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-stone-800 text-stone-300 font-montserrat text-xs font-bold uppercase">
                    {detailProduct.code}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-[#ff6a00] text-black font-montserrat text-xs font-black uppercase">
                    {detailProduct.steel}
                  </span>
                </div>
                <button
                  onClick={() => setDetailProduct(null)}
                  className="p-1.5 rounded-full bg-stone-900 text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Image */}
                  <div className="relative aspect-square rounded-md overflow-hidden bg-black border border-stone-800">
                    <img
                      src={detailProduct.image}
                      alt={detailProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info details */}
                  <div className="space-y-4">
                    <div>
                      <span className="font-montserrat text-xs text-stone-400 uppercase tracking-widest font-bold">
                        {detailProduct.category}
                      </span>
                      <h3 className="font-cinzel text-2xl font-black text-stone-100 uppercase mt-1">
                        {detailProduct.name}
                      </h3>
                    </div>

                    <div className="p-3 rounded bg-black/70 border border-stone-800/80 space-y-2 font-montserrat text-xs">
                      <div className="flex justify-between py-1 border-b border-stone-800">
                        <span className="text-stone-400">Código (SKU):</span>
                        <span className="font-bold text-stone-200">{detailProduct.code}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-stone-800">
                        <span className="text-stone-400">Material da Lâmina:</span>
                        <span className="font-black text-[#ff6a00]">{detailProduct.steel}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-stone-800">
                        <span className="text-stone-400">Material do Cabo:</span>
                        <span className="font-medium text-stone-200">{detailProduct.handle}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-stone-800">
                        <span className="text-stone-400">Tamanho da Lâmina:</span>
                        <span className="font-medium text-stone-200">{detailProduct.bladeLength}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-stone-400">Disponibilidade:</span>
                        <span className="font-bold text-emerald-400">
                          {detailProduct.stockStatus === 'pronta-entrega' && `Pronta Entrega (${detailProduct.stockQuantity} em estoque)`}
                          {detailProduct.stockStatus === 'sob-encomenda' && 'Sob Encomenda (7-15 dias de forja)'}
                          {detailProduct.stockStatus === 'esgotado' && 'Esgotado'}
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="font-montserrat text-xs text-stone-400 uppercase tracking-wider font-bold block mb-1">
                        Preço:
                      </span>
                      <div className="font-cinzel text-3xl font-black text-[#ff6a00]">
                        {detailProduct.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-stone-200 uppercase tracking-wider mb-2">
                    Descrição Detalhada
                  </h4>
                  <p className="font-montserrat text-xs text-stone-300 leading-relaxed font-light bg-black/40 p-4 rounded border border-stone-800">
                    {detailProduct.description}
                  </p>
                </div>

                {/* Features */}
                {detailProduct.features && detailProduct.features.length > 0 && (
                  <div>
                    <h4 className="font-cinzel text-sm font-bold text-stone-200 uppercase tracking-wider mb-2">
                      Diferenciais Desta Peça
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {detailProduct.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-montserrat text-stone-300 bg-stone-900/50 p-2 rounded border border-stone-800">
                          <ShieldCheck size={14} className="text-[#ff6a00] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer actions */}
              <div className="p-4 sm:p-5 border-t border-stone-800 bg-black/80 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => handleOpenEdit(detailProduct)}
                  className="px-4 py-2.5 rounded bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-300 font-montserrat text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Edit3 size={14} />
                  <span>Editar Cadastro</span>
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={getWhatsAppProductUrl(detailProduct)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded bg-[#25D366] hover:bg-[#20ba59] text-black font-montserrat text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all cursor-pointer"
                  >
                    <WhatsAppIcon size={16} color="#000" />
                    <span>Fazer Pedido Desta Peça no WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL: Cadastro & Edição de Produto */}
      <AnimatePresence>
        {isFormModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#0e0e0e] border border-stone-800 rounded-lg shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
            >
              {/* Form Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-stone-800 bg-black/60">
                <div className="flex items-center gap-2">
                  <Flame size={18} className="text-[#ff6a00]" />
                  <h3 className="font-cinzel text-lg sm:text-xl font-black text-stone-100 uppercase">
                    {editingProduct ? `Editar Faca (${editingProduct.code})` : 'Cadastrar Nova Faca'}
                  </h3>
                </div>
                <button
                  onClick={() => setIsFormModalOpen(false)}
                  className="p-1.5 rounded-full bg-stone-900 text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Form Modal Body */}
              <form onSubmit={handleSaveProduct} className="p-5 sm:p-6 overflow-y-auto space-y-4">
                {formError && (
                  <div className="p-3 rounded bg-rose-950/80 border border-rose-600 text-rose-200 text-xs font-montserrat font-bold">
                    {formError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nome do Produto */}
                  <div className="sm:col-span-2">
                    <label className="block font-montserrat text-xs font-bold text-stone-300 uppercase tracking-wider mb-1">
                      Nome do Produto *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Faca Campeira 9'' Lida Pesada"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-3 py-2 bg-black border border-stone-800 rounded text-stone-200 font-montserrat text-xs focus:outline-none focus:border-[#ff6a00]"
                    />
                  </div>

                  {/* Código / SKU */}
                  <div>
                    <label className="block font-montserrat text-xs font-bold text-stone-300 uppercase tracking-wider mb-1">
                      Código / SKU *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: FC-107"
                      value={formCode}
                      onChange={(e) => setFormCode(e.target.value)}
                      className="w-full px-3 py-2 bg-black border border-stone-800 rounded text-stone-200 font-montserrat text-xs focus:outline-none focus:border-[#ff6a00]"
                    />
                  </div>

                  {/* Categoria */}
                  <div>
                    <label className="block font-montserrat text-xs font-bold text-stone-300 uppercase tracking-wider mb-1">
                      Categoria *
                    </label>
                    <select
                      value={formCategory}
                      onChange={(e) => setFormCategory(e.target.value)}
                      className="w-full px-3 py-2 bg-black border border-stone-800 rounded text-stone-200 font-montserrat text-xs focus:outline-none focus:border-[#ff6a00]"
                    >
                      {CATEGORY_OPTIONS.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Material da Lâmina (OPÇÕES SELECIONÁVEIS INCLUINDO OS 5 TIPOS DE AÇO) */}
                  <div>
                    <label className="block font-montserrat text-xs font-bold text-[#ff6a00] uppercase tracking-wider mb-1 flex items-center justify-between">
                      <span>Material da Lâmina (Aço) *</span>
                      <span className="text-[10px] text-stone-400 font-normal">5 tipos disponíveis</span>
                    </label>
                    <select
                      value={formSteel}
                      onChange={(e) => {
                        const newSteel = e.target.value;
                        setFormSteel(newSteel);
                        // Auto-suggest image if creating new and currently using default
                        if (!editingProduct) {
                          if (newSteel === 'Aço de Mola de Caminhão') {
                            setFormImage('https://i.ibb.co/TDG4L76Y/Gemini-Generated-Image-ugdddougdddougdd.jpg');
                          } else if (newSteel === 'Aço Damasco') {
                            setFormImage('https://i.ibb.co/spwy9BJp/Gemini-Generated-Image-dvhxwfdvhxwfdvhx.jpg');
                          }
                        }
                      }}
                      className="w-full px-3 py-2 bg-black border-2 border-[#ff6a0088] rounded text-stone-100 font-montserrat text-xs font-bold focus:outline-none focus:border-[#ff6a00]"
                    >
                      {STEEL_OPTIONS.map((steel) => (
                        <option key={steel} value={steel}>
                          {steel}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Material do Cabo */}
                  <div>
                    <label className="block font-montserrat text-xs font-bold text-stone-300 uppercase tracking-wider mb-1">
                      Material do Cabo *
                    </label>
                    <select
                      value={formHandle}
                      onChange={(e) => setFormHandle(e.target.value)}
                      className="w-full px-3 py-2 bg-black border border-stone-800 rounded text-stone-200 font-montserrat text-xs focus:outline-none focus:border-[#ff6a00]"
                    >
                      {HANDLE_OPTIONS.map((h) => (
                        <option key={h} value={h}>
                          {h}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Tamanho da Lâmina */}
                  <div>
                    <label className="block font-montserrat text-xs font-bold text-stone-300 uppercase tracking-wider mb-1">
                      Tamanho da Lâmina *
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: 8 polegadas (20 cm)"
                      value={formBladeLength}
                      onChange={(e) => setFormBladeLength(e.target.value)}
                      className="w-full px-3 py-2 bg-black border border-stone-800 rounded text-stone-200 font-montserrat text-xs focus:outline-none focus:border-[#ff6a00]"
                    />
                  </div>

                  {/* Preço */}
                  <div>
                    <label className="block font-montserrat text-xs font-bold text-stone-300 uppercase tracking-wider mb-1">
                      Preço (R$) *
                    </label>
                    <input
                      type="number"
                      min="1"
                      step="10"
                      required
                      value={formPrice}
                      onChange={(e) => setFormPrice(e.target.value)}
                      className="w-full px-3 py-2 bg-black border border-stone-800 rounded text-stone-200 font-montserrat text-xs focus:outline-none focus:border-[#ff6a00]"
                    />
                  </div>

                  {/* Disponibilidade em Estoque */}
                  <div>
                    <label className="block font-montserrat text-xs font-bold text-stone-300 uppercase tracking-wider mb-1">
                      Disponibilidade em Estoque *
                    </label>
                    <select
                      value={formStockStatus}
                      onChange={(e) => setFormStockStatus(e.target.value as any)}
                      className="w-full px-3 py-2 bg-black border border-stone-800 rounded text-stone-200 font-montserrat text-xs focus:outline-none focus:border-[#ff6a00]"
                    >
                      <option value="pronta-entrega">Pronta Entrega</option>
                      <option value="sob-encomenda">Sob Encomenda</option>
                      <option value="esgotado">Esgotado</option>
                    </select>
                  </div>

                  {/* Quantidade em Estoque */}
                  <div>
                    <label className="block font-montserrat text-xs font-bold text-stone-300 uppercase tracking-wider mb-1">
                      Quantidade em Estoque
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={formStockQuantity}
                      onChange={(e) => setFormStockQuantity(e.target.value)}
                      className="w-full px-3 py-2 bg-black border border-stone-800 rounded text-stone-200 font-montserrat text-xs focus:outline-none focus:border-[#ff6a00]"
                    />
                  </div>

                  {/* URL da Imagem */}
                  <div className="sm:col-span-2">
                    <label className="block font-montserrat text-xs font-bold text-stone-300 uppercase tracking-wider mb-1">
                      URL da Imagem do Produto
                    </label>
                    <input
                      type="text"
                      placeholder="https://..."
                      value={formImage}
                      onChange={(e) => setFormImage(e.target.value)}
                      className="w-full px-3 py-2 bg-black border border-stone-800 rounded text-stone-200 font-montserrat text-xs focus:outline-none focus:border-[#ff6a00]"
                    />
                    {/* Fast Presets */}
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span className="font-montserrat text-[10px] text-stone-500 font-bold uppercase">Sugestões rápidas:</span>
                      <button
                        type="button"
                        onClick={() => setFormImage('https://i.ibb.co/TDG4L76Y/Gemini-Generated-Image-ugdddougdddougdd.jpg')}
                        className="px-2 py-0.5 rounded bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-300 text-[10px] font-montserrat"
                      >
                        Mola de Caminhão
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormImage('https://i.ibb.co/spwy9BJp/Gemini-Generated-Image-dvhxwfdvhxwfdvhx.jpg')}
                        className="px-2 py-0.5 rounded bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-300 text-[10px] font-montserrat"
                      >
                        Aço Damasco
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormImage('https://i.ibb.co/rKVmzKSp/Chat-GPT-Image-25-de-jul-de-2026-14-16-09.png')}
                        className="px-2 py-0.5 rounded bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-300 text-[10px] font-montserrat"
                      >
                        Inox Pescaria
                      </button>
                    </div>
                  </div>

                  {/* Descrição */}
                  <div className="sm:col-span-2">
                    <label className="block font-montserrat text-xs font-bold text-stone-300 uppercase tracking-wider mb-1">
                      Descrição do Produto
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Descreva a lâmina, têmpera, equilíbrio e características especiais..."
                      value={formDescription}
                      onChange={(e) => setFormDescription(e.target.value)}
                      className="w-full px-3 py-2 bg-black border border-stone-800 rounded text-stone-200 font-montserrat text-xs focus:outline-none focus:border-[#ff6a00]"
                    />
                  </div>
                </div>

                {/* Form Buttons */}
                <div className="pt-4 border-t border-stone-800 flex items-center justify-between gap-3">
                  {editingProduct ? (
                    <button
                      type="button"
                      onClick={() => handleDeleteProduct(editingProduct.id, editingProduct.name)}
                      className="px-3.5 py-2 rounded bg-rose-950/60 hover:bg-rose-900 border border-rose-800 text-rose-300 font-montserrat text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                    >
                      <Trash2 size={14} />
                      <span>Excluir</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsFormModalOpen(false)}
                      className="px-4 py-2 rounded bg-stone-900 hover:bg-stone-800 text-stone-300 font-montserrat text-xs font-bold cursor-pointer"
                    >
                      Cancelar
                    </button>

                    <button
                      type="submit"
                      className="px-6 py-2 rounded bg-[#ff6a00] hover:bg-[#e05e00] text-black font-montserrat text-xs font-black uppercase tracking-wider shadow-lg cursor-pointer"
                    >
                      {editingProduct ? 'Salvar Alterações' : 'Cadastrar Faca'}
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
