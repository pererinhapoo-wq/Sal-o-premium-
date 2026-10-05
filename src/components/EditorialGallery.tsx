import { useState, useEffect } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/salonData';
import { Maximize2, X, Clock, User, ArrowUpRight } from 'lucide-react';

export function EditorialGallery() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  // Prevent background scroll when modal is active
  useEffect(() => {
    if (activeItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeItem]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveItem(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="galeria" className="py-24 border-b border-white/10 bg-[#0b0b0a] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#c59b6d] font-semibold block mb-3">
              04. Portfólio & Atmosfera
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#f5f2eb] font-normal tracking-tight">
              Galeria Editorial AURA
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#9e998e] max-w-md font-light">
            Trabalhos autorais executados em nosso atelier. Clique sobre qualquer composição para inspecionar em alta resolução.
          </p>
        </div>

        {/* Asymmetrical Editorial Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-12">
          
          {/* Card 1: Tall Vertical (5 cols) */}
          <div 
            onClick={(e) => { e.preventDefault(); setActiveItem(GALLERY_ITEMS[0]); }}
            className="md:col-span-5 aspect-[3/4] relative overflow-hidden bg-[#171615] border border-white/10 group cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label={`Ver imagem ampliada: ${GALLERY_ITEMS[0].title}`}
          >
            <img
              src={GALLERY_ITEMS[0].image}
              alt={GALLERY_ITEMS[0].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
            
            <div className="absolute top-4 right-4 p-2 bg-[#0b0b0a]/70 backdrop-blur-sm border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-left">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#c59b6d] font-medium block mb-1">
                {GALLERY_ITEMS[0].technique}
              </span>
              <h3 className="font-serif text-2xl text-[#f5f2eb]">
                {GALLERY_ITEMS[0].title}
              </h3>
              <p className="text-xs text-[#b8b3a8] mt-1">
                Por {GALLERY_ITEMS[0].specialist}
              </p>
            </div>
          </div>

          {/* Right Column Pair (7 cols) */}
          <div className="md:col-span-7 flex flex-col gap-6">
            
            {/* Card 2: Landscape wide (Interior) */}
            <div 
              onClick={(e) => { e.preventDefault(); setActiveItem(GALLERY_ITEMS[1]); }}
              className="aspect-[16/9] relative overflow-hidden bg-[#171615] border border-white/10 group cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={`Ver imagem ampliada: ${GALLERY_ITEMS[1].title}`}
            >
              <img
                src={GALLERY_ITEMS[1].image}
                alt={GALLERY_ITEMS[1].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#c59b6d] font-medium block mb-1">
                  Espaço Físico
                </span>
                <h3 className="font-serif text-2xl text-[#f5f2eb]">
                  {GALLERY_ITEMS[1].title}
                </h3>
                <p className="text-xs text-[#b8b3a8] mt-1">
                  {GALLERY_ITEMS[1].caption}
                </p>
              </div>
            </div>

            {/* Card 3: French Bob */}
            <div 
              onClick={(e) => { e.preventDefault(); setActiveItem(GALLERY_ITEMS[2]); }}
              className="aspect-[16/9] relative overflow-hidden bg-[#171615] border border-white/10 group cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={`Ver imagem ampliada: ${GALLERY_ITEMS[2].title}`}
            >
              <img
                src={GALLERY_ITEMS[2].image}
                alt={GALLERY_ITEMS[2].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#c59b6d] font-medium block mb-1">
                  {GALLERY_ITEMS[2].technique}
                </span>
                <h3 className="font-serif text-2xl text-[#f5f2eb]">
                  {GALLERY_ITEMS[2].title}
                </h3>
                <p className="text-xs text-[#b8b3a8] mt-1">
                  Por {GALLERY_ITEMS[2].specialist}
                </p>
              </div>
            </div>

          </div>

          {/* Full-width editorial row */}
          <div 
            onClick={(e) => { e.preventDefault(); setActiveItem(GALLERY_ITEMS[3]); }}
            className="md:col-span-12 aspect-[21/9] min-h-[260px] relative overflow-hidden bg-[#171615] border border-white/10 group cursor-pointer mt-2"
            role="button"
            tabIndex={0}
            aria-label={`Ver imagem ampliada: ${GALLERY_ITEMS[3].title}`}
          >
            <img
              src={GALLERY_ITEMS[3].image}
              alt={GALLERY_ITEMS[3].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#c59b6d] font-medium block mb-1">
                  {GALLERY_ITEMS[3].technique}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#f5f2eb]">
                  {GALLERY_ITEMS[3].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#b8b3a8] max-w-xl mt-1">
                  {GALLERY_ITEMS[3].caption}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#f5f2eb] bg-[#0b0b0a]/80 backdrop-blur-md px-4 py-2 border border-white/10 shrink-0">
                <span>Ampliar Ensaio</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#c59b6d]" />
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 bg-[#0b0b0a]/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] bg-[#141312] border border-white/10 flex flex-col md:flex-row overflow-hidden shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-[#0b0b0a]/80 text-[#f5f2eb] hover:text-[#c59b6d] border border-white/10 transition-colors cursor-pointer"
              aria-label="Fechar visualização ampliada"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media side */}
            <div className="md:w-3/5 bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full max-h-[75vh] object-contain"
              />
            </div>

            {/* Editorial Metadata side */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#c59b6d] font-semibold block mb-2">
                  {activeItem.technique}
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#f5f2eb]">
                  {activeItem.title}
                </h3>

                <p className="mt-4 text-sm text-[#b8b3a8] font-light leading-relaxed">
                  {activeItem.caption}
                </p>

                <div className="mt-6 pt-6 border-t border-white/10 space-y-3 text-xs text-[#9d988d]">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#c59b6d]" />
                      Especialista
                    </span>
                    <span className="text-[#f5f2eb]">{activeItem.specialist}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#c59b6d]" />
                      Tempo de Execução
                    </span>
                    <span className="text-[#f5f2eb]">{activeItem.duration}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6">
                <button
                  onClick={() => setActiveItem(null)}
                  className="w-full py-3 text-xs uppercase tracking-[0.2em] font-medium text-[#f5f2eb] border border-white/20 hover:border-[#c59b6d] hover:text-[#c59b6d] transition-colors"
                >
                  Voltar para a Galeria
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
