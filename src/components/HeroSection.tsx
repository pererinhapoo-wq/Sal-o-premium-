import { ArrowDown, Calendar, Sparkles, Compass } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-white/10 overflow-hidden">
      {/* Subtle ambient gradient mesh */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c59b6d]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top editorial kicker bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10 text-xs text-[#9d988d]">
          <div className="flex items-center gap-2 tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c59b6d]" />
            <span>São Paulo · Jardins</span>
            <span aria-hidden="true">·</span>
            <span>Atelier de Alta Costura Capilar</span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-xs tracking-wider">
            <span>Diagnóstico Visagista</span>
            <span aria-hidden="true">/</span>
            <span>Coloração Precisa</span>
            <span aria-hidden="true">/</span>
            <span>Tricologia Integrada</span>
          </div>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typographic Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <span className="text-xs uppercase tracking-[0.3em] text-[#c59b6d] font-semibold mb-4 block">
              Manifesto de Beleza Contemporânea
            </span>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.08] tracking-tight text-[#f5f2eb] text-balance">
              Onde a técnica rigorosa encontra a sua <span className="italic font-light text-[#c59b6d]">expressão mais genuína.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#b8b3a8] font-light leading-relaxed max-w-xl">
              Cortes esculpidos sob medida, mechas de transição orgânica e rituais capilares em um espaço silencioso, pensado para desacelerar o ritmo da cidade.
            </p>

            {/* CTAs & Proof Row */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 text-xs uppercase tracking-[0.22em] font-semibold text-[#0b0b0a] bg-[#f5f2eb] hover:bg-[#c59b6d] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#0b0b0a] transition-transform group-hover:scale-110" />
                <span>Agendar Atendimento</span>
              </button>

              <a
                href="#servicos"
                className="px-8 py-4 text-xs uppercase tracking-[0.22em] font-medium text-[#f5f2eb] border border-white/20 hover:border-[#c59b6d] hover:text-[#c59b6d] transition-colors flex items-center justify-center"
              >
                Explorar Serviços
              </a>
            </div>

            {/* Editorial Distinction Markers */}
            <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 text-left">
              <div>
                <span className="font-serif text-2xl sm:text-3xl text-[#f5f2eb] block">1:1</span>
                <span className="text-xs text-[#8f8a80] tracking-wide mt-1 block">Atendimento sem sobreposição</span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl text-[#f5f2eb] block">0%</span>
                <span className="text-xs text-[#8f8a80] tracking-wide mt-1 block">Danos por pressa ou excessos</span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl text-[#f5f2eb] block">100%</span>
                <span className="text-xs text-[#8f8a80] tracking-wide mt-1 block">Produtos botânicos & premium</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Artwork Frame (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#171615] border border-white/10 shadow-2xl group">
              <img
                src="/src/assets/images/hero_editorial_salon_1791177517311.jpg"
                alt="Editorial AURA STUDIO - Cabelo com textura acetinada e corte moderno"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter grayscale-[15%] group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-700 ease-out"
              />

              {/* Floating Architectural Badge (Zero-pill, clean typographic card) */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#0b0b0a]/90 backdrop-blur-md border border-white/10 text-xs">
                <div className="flex items-center justify-between text-[#8f8a80] uppercase tracking-[0.18em] mb-1">
                  <span>Edição 2026</span>
                  <span>Coleção Luz Pura</span>
                </div>
                <p className="text-sm font-serif text-[#f5f2eb] italic">
                  "O cabelo perfeito não é aquele que parece montado, mas o que parece ter nascido assim."
                </p>
                <div className="mt-2 text-[11px] text-[#c59b6d] tracking-wider uppercase font-medium">
                  Atelier Helena Vasconcelos
                </div>
              </div>
            </div>

            {/* Asymmetrical offset accent bar */}
            <div 
              className="absolute -bottom-4 -right-4 w-28 h-28 border-r border-b border-[#c59b6d]/40 -z-10 hidden sm:block" 
              aria-hidden="true" 
            />
          </div>

        </div>

        {/* Subtle Scroll Indicator */}
        <div className="mt-16 flex items-center justify-between text-xs text-[#706c64] uppercase tracking-[0.2em]">
          <span className="flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-[#c59b6d]" />
            Navegue pela coleção
          </span>
          <a href="#filosofia" className="flex items-center gap-1.5 hover:text-[#f5f2eb] transition-colors">
            <span>Deslize</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
}
