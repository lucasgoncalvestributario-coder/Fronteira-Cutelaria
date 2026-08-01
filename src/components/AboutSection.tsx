import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'motion/react';
import { Flame, Hammer, Award, Maximize2, X, Move3d, ShieldCheck, Layers, Play, Volume2, VolumeX, Quote, Tv, Sparkles, MessageSquareQuote } from 'lucide-react';
import { LOGO_URL, FOUNDER_VIDEO_URL, FOUNDER_YOUTUBE_URL, FOUNDER_MESSAGE } from '../data/cutelariaData';

export const AboutSection: React.FC = () => {
  const [is3DModalOpen, setIs3DModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1.1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  // Helper to parse standard YouTube embed URLs (supports watch, share, shorts, embed, mobile links)
  const getYouTubeEmbedUrl = (url: string) => {
    if (!url || !url.trim()) return null;
    const cleanUrl = url.trim();

    // Standard watch URL: youtube.com/watch?v=ID
    const watchMatch = cleanUrl.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
    if (watchMatch && watchMatch[1]) {
      return `https://www.youtube.com/embed/${watchMatch[1]}?rel=0`;
    }

    // Shortened URL: youtu.be/ID
    const shortLinkMatch = cleanUrl.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
    if (shortLinkMatch && shortLinkMatch[1]) {
      return `https://www.youtube.com/embed/${shortLinkMatch[1]}?rel=0`;
    }

    // Shorts URL: youtube.com/shorts/ID
    const shortsMatch = cleanUrl.match(/shorts\/([a-zA-Z0-9_-]{11})/);
    if (shortsMatch && shortsMatch[1]) {
      return `https://www.youtube.com/embed/${shortsMatch[1]}?rel=0`;
    }

    // Embed URL: youtube.com/embed/ID
    const embedMatch = cleanUrl.match(/embed\/([a-zA-Z0-9_-]{11})/);
    if (embedMatch && embedMatch[1]) {
      return `https://www.youtube.com/embed/${embedMatch[1]}?rel=0`;
    }

    return null;
  };

  const youtubeEmbedUrl = getYouTubeEmbedUrl(FOUNDER_YOUTUBE_URL);

  // Mouse tilt animation state for 3D card effect
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 20 });

  // Modal 3D mouse tracking
  const modalX = useMotionValue(0);
  const modalY = useMotionValue(0);
  const modalRotateX = useSpring(useTransform(modalY, [-0.5, 0.5], [15, -15]), { stiffness: 200, damping: 22 });
  const modalRotateY = useSpring(useTransform(modalX, [-0.5, 0.5], [-15, 15]), { stiffness: 200, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleModalMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { innerWidth, innerHeight } = window;
    const xPct = e.clientX / innerWidth - 0.5;
    const yPct = e.clientY / innerHeight - 0.5;
    modalX.set(xPct);
    modalY.set(yPct);
  };

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="sobre" className="relative py-20 sm:py-28 bg-[#080808] border-t border-b border-[#ff6a0033] overflow-hidden">
      {/* Background Decorative Elements: Brushed Steel Texture & Glows */}
      <div className="absolute inset-0 bg-brushed-metal opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#ff6a0012] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#e6390010] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Category Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ff6a0044] bg-[#ff6a0011] mb-4">
            <Flame size={14} className="text-[#ff6a00] animate-pulse" />
            <span className="font-montserrat text-xs uppercase tracking-[0.25em] text-[#ff6a00] font-bold">
              Mestre Cuteleiro & Fundador
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-black text-stone-100 uppercase tracking-tight">
            A Alma da <span className="text-[#ff6a00] text-lava-glow">Fronteira Cutelaria</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#ff6a00] to-transparent mx-auto mt-4" />
        </div>

        {/* Centered YouTube 16:9 Widescreen Video Player */}
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto w-full">
          
          {/* YOUTUBE STANDARD 16:9 WIDESCREEN VIDEO CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col items-center justify-center"
          >
            {/* Widescreen Video Card Frame */}
            <div className="w-full max-w-3xl perspective-1000">
              <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
                className="relative rounded-xl bg-[#0e0e0e] border-2 border-[#ff6a0088] p-3.5 shadow-[0_0_60px_rgba(255,106,0,0.35)] hover:shadow-[0_0_90px_rgba(255,106,0,0.6)] transition-shadow duration-500 group"
              >
                {/* 16:9 Standard YouTube Container Frame */}
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black flex items-center justify-center border border-stone-800">
                  
                  {youtubeEmbedUrl ? (
                    <iframe
                      src={youtubeEmbedUrl}
                      title="Vídeo Institucional - Fronteira Cutelaria"
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  ) : (
                    <>
                      <video
                        ref={videoRef}
                        src={FOUNDER_VIDEO_URL}
                        playsInline
                        preload="metadata"
                        controls={isPlaying}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        className="w-full h-full object-cover filter contrast-[1.05] brightness-105"
                      />

                      {/* Dark Vignette Overlay when paused */}
                      {!isPlaying && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30 transition-opacity pointer-events-none" />
                      )}

                      {/* Top Bar Badge & Expand Modal Button */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/80 border border-[#ff6a0066] backdrop-blur-md">
                          <Tv size={12} className="text-[#ff6a00]" />
                          <span className="font-montserrat text-[10px] text-stone-200 font-bold uppercase tracking-wider">
                            Vídeo Oficial
                          </span>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setIs3DModalOpen(true);
                          }}
                          className="pointer-events-auto p-2 rounded-full bg-black/80 border border-[#ff6a00] text-[#ff6a00] hover:bg-[#ff6a00] hover:text-black transition-all shadow-lg"
                          title="Abrir Vídeo em Tela Cheia"
                        >
                          <Maximize2 size={14} />
                        </button>
                      </div>

                      {/* Center Glowing Play Overlay Button when paused */}
                      {!isPlaying && (
                        <button
                          onClick={togglePlay}
                          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/30 hover:bg-black/10 transition-all z-10 group/btn cursor-pointer"
                        >
                          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#ff3300] via-[#ff6a00] to-[#ffaa00] p-1 shadow-[0_0_35px_rgba(255,106,0,0.85)] group-hover/btn:scale-110 transition-transform duration-300 flex items-center justify-center">
                            <div className="w-full h-full rounded-full bg-black/90 flex items-center justify-center pl-1 text-[#ff6a00] group-hover/btn:text-white transition-colors">
                              <Play size={28} className="fill-current" />
                            </div>
                          </div>

                          <span className="font-cinzel text-[11px] font-black text-stone-100 uppercase tracking-widest px-3.5 py-1 rounded-full bg-black/80 border border-[#ff6a00] shadow-xl">
                            Assistir Vídeo (16:9)
                          </span>
                        </button>
                      )}

                      {/* Quick Mute Control when playing */}
                      {isPlaying && (
                        <button
                          onClick={toggleMute}
                          className="absolute bottom-12 right-3 p-2 rounded-full bg-black/80 border border-[#ff6a0066] text-[#ff6a00] hover:bg-black transition-all z-20 shadow-lg"
                          title={isMuted ? "Ativar Áudio" : "Silenciar"}
                        >
                          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                        </button>
                      )}
                    </>
                  )}

                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* FULL-SCREEN WIDESCREEN VIDEO MODAL */}
      <AnimatePresence>
        {is3DModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseMove={handleModalMouseMove}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 overflow-hidden"
          >
            {/* Background Embers & Studio Lights inside Modal */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ff6a0022] via-[#050505] to-[#000000] pointer-events-none" />
            
            {/* Modal Controls Top Bar */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
              <div className="flex items-center gap-3 bg-black/80 border border-[#ff6a0066] px-4 py-2 rounded-full">
                <Tv size={18} className="text-[#ff6a00]" />
                <span className="font-cinzel text-xs text-stone-200 uppercase tracking-widest font-bold">
                  Vídeo Institucional 16:9 - Fronteira Cutelaria
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center gap-2 bg-black/80 border border-stone-800 px-3 py-1.5 rounded-full text-xs font-montserrat text-stone-300">
                  <Layers size={14} className="text-[#ff6a00]" />
                  <span>Zoom:</span>
                  <button 
                    onClick={() => setZoomLevel(Math.max(1, zoomLevel - 0.2))}
                    className="w-6 h-6 rounded bg-stone-800 hover:bg-[#ff6a00] hover:text-black font-bold flex items-center justify-center transition-colors"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-bold text-[#ff6a00]">{zoomLevel.toFixed(1)}x</span>
                  <button 
                    onClick={() => setZoomLevel(Math.min(1.8, zoomLevel + 0.2))}
                    className="w-6 h-6 rounded bg-stone-800 hover:bg-[#ff6a00] hover:text-black font-bold flex items-center justify-center transition-colors"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => setIs3DModalOpen(false)}
                  className="p-3 rounded-full bg-stone-900 border border-stone-700 text-stone-200 hover:bg-[#ff6a00] hover:text-black hover:border-[#ff6a00] transition-all shadow-xl"
                  title="Fechar Vídeo"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Interactive Video Stage Modal */}
            <div className="relative max-w-4xl w-full flex flex-col md:flex-row items-center justify-center gap-8 z-10 perspective-1000">
              
              {/* 3D Widescreen Multi-Layer Frame */}
              <motion.div
                style={{
                  rotateX: modalRotateX,
                  rotateY: modalRotateY,
                  transformStyle: 'preserve-3d',
                  scale: zoomLevel,
                }}
                className="relative w-full aspect-video rounded-xl bg-[#0a0a0a] border-2 border-[#ff6a00] p-3 shadow-[0_0_100px_rgba(255,106,0,0.4)] transition-transform duration-100"
              >
                {/* Floating Glow Aura behind video */}
                <div 
                  style={{ transform: 'translateZ(-20px)' }}
                  className="absolute inset-4 bg-gradient-to-tr from-[#e63900] via-[#ff6a00] to-[#ffaa00] opacity-40 blur-2xl rounded-md pointer-events-none"
                />

                {/* Main Video Layer */}
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-black flex items-center justify-center">
                  {youtubeEmbedUrl ? (
                    <iframe
                      src={youtubeEmbedUrl}
                      title="Vídeo Institucional em Tela Cheia - Fronteira Cutelaria"
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      ref={modalVideoRef}
                      src={FOUNDER_VIDEO_URL}
                      controls
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover filter contrast-[1.08] brightness-105"
                    />
                  )}
                </div>

              </motion.div>

              {/* Side Info in Modal */}
              <div className="w-full max-w-xs space-y-4 text-left hidden lg:block">
                <div className="p-5 rounded bg-stone-950/80 border border-[#ff6a0044] backdrop-blur-md space-y-3">
                  <h4 className="font-cinzel text-base font-bold text-stone-100 uppercase border-b border-stone-800 pb-2">
                    Vídeo Institucional
                  </h4>

                  <p className="font-montserrat text-xs text-stone-300 leading-relaxed">
                    Assista à apresentação de Vagner Gonçalves, Cuteleiro e criador da Fronteira Cutelaria em Camboriú - SC.
                  </p>

                  <div className="space-y-2 text-xs font-montserrat text-stone-300">
                    <div className="flex items-center gap-2">
                      <Flame size={14} className="text-[#ff6a00]" />
                      <span>Fábrica e Loja Física em Camboriú - SC</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={14} className="text-[#ff6a00]" />
                      <span>Fabricação Sob Medida</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIs3DModalOpen(false)}
                    className="w-full py-2.5 rounded bg-[#ff6a00] text-black font-montserrat text-xs font-bold uppercase tracking-wider hover:bg-[#ff8800] transition-colors mt-2"
                  >
                    Fechar Vídeo
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

