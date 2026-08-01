import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { INSTAGRAM_URL } from '../data/cutelariaData';

export const InstagramSection: React.FC = () => {
  const instaPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1588615419955-5840d210a471?auto=format&fit=crop&w=600&q=80',
      likes: '1.428',
      comments: '94',
      caption: 'Bowie 10" em Aço Carbono 1070 recém-saída do revenimento na forja em Camboriú SC. #cutelaria #facaartesanal'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80',
      likes: '2.109',
      comments: '132',
      caption: 'Faca de Churrasco Inox 420C espelhada com cabo em resina híbrida lava fire! #churrasco #fronteiracutelaria'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&w=600&q=80',
      likes: '982',
      comments: '64',
      caption: 'Respeito ao disco de arado antigo. Rústica, cortante e secular. #discodearado #forja'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
      likes: '1.854',
      comments: '108',
      caption: 'Detalhe do cabo em chifre de cervo natural com pino mosaico em latão. #exclusividade #customknives'
    }
  ];

  return (
    <section className="relative py-20 bg-[#050505] border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#ff6a0011] border border-[#ff6a0044] text-[#ff6a00] font-montserrat text-xs uppercase font-bold tracking-widest mb-2">
              <Instagram size={14} />
              <span>Siga no Instagram</span>
            </div>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-stone-100 uppercase">
              @fronteiracutelaria
            </h2>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-stone-900 border border-stone-700 hover:border-[#ff6a00] text-stone-200 hover:text-[#ff6a00] font-montserrat text-xs font-bold uppercase tracking-wider transition-all"
          >
            <span>Acompanhar Publicações</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instaPosts.map((post) => (
            <a
              key={post.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-72 rounded-sm overflow-hidden border border-stone-800 hover:border-[#ff6a00] transition-all duration-300 shadow-xl"
            >
              <img
                src={post.image}
                alt="Instagram Post Fronteira Cutelaria"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500 filter brightness-90 group-hover:brightness-100"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-center text-stone-200 font-montserrat text-xs font-bold">
                  <div className="flex items-center gap-1.5">
                    <Heart size={16} className="text-[#ff6a00] fill-[#ff6a00]" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle size={16} className="text-stone-300" />
                    <span>{post.comments}</span>
                  </div>
                </div>

                <p className="font-montserrat text-xs text-stone-300 line-clamp-3 font-light italic">
                  "{post.caption}"
                </p>

                <span className="font-montserrat text-[10px] text-[#ff6a00] font-bold uppercase tracking-widest">
                  Ver no Instagram →
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
