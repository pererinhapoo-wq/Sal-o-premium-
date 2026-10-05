import { Sparkles, ShieldCheck, HeartHandshake, Eye } from 'lucide-react';

export function PhilosophySection() {
  return (
    <section id="filosofia" className="py-24 border-b border-white/10 bg-[#0e0e0d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-white/10">
          <div className="lg:col-span-8">
            <span className="text-xs uppercase tracking-[0.3em] text-[#c59b6d] font-semibold block mb-3">
              01. Nossa Convicção
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#f5f2eb] font-normal leading-[1.15] text-balance">
              Criamos beleza a partir do silêncio, da observação e do respeito à textura orgânica.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pl-6">
            <p className="text-sm sm:text-base text-[#a39e93] font-light leading-relaxed">
              Recusamos fórmulas padronizadas e tendências efêmeras. No AURA, cada mecha de cabelo e cada corte é tratado como uma obra escultórica singular.
            </p>
          </div>
        </div>

        {/* 3 Editorial Pillars - Not generic cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-16">
          
          {/* Pillar 1 */}
          <div className="space-y-4 group">
            <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
              <span className="font-serif text-3xl text-[#c59b6d]">I</span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#706c64]">Arquitetura Capilar</span>
            </div>
            <h3 className="font-serif text-2xl text-[#f5f2eb] group-hover:text-[#c59b6d] transition-colors">
              Geometria & Visagismo
            </h3>
            <p className="text-sm text-[#9e998e] leading-relaxed font-light">
              Estudamos o formato do crânio, a rotação dos redemoinhos e as sombras do rosto para esculpir cortes que caem no lugar certo com mínimo esforço de manutenção.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="space-y-4 group">
            <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
              <span className="font-serif text-3xl text-[#c59b6d]">II</span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#706c64]">Coloração Botânica</span>
            </div>
            <h3 className="font-serif text-2xl text-[#f5f2eb] group-hover:text-[#c59b6d] transition-colors">
              Pigmentação Consciente
            </h3>
            <p className="text-sm text-[#9e998e] leading-relaxed font-light">
              Trabalhamos com clareamentos controlados por cronômetro térmico e neutralização precisa de reflexos indesejados, preservando a saúde das pontes de queratina.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="space-y-4 group">
            <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
              <span className="font-serif text-3xl text-[#c59b6d]">III</span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#706c64]">Santuário Privado</span>
            </div>
            <h3 className="font-serif text-2xl text-[#f5f2eb] group-hover:text-[#c59b6d] transition-colors">
              Pausa no Ritmo Urbano
            </h3>
            <p className="text-sm text-[#9e998e] leading-relaxed font-light">
              Acústica projetada, assentos com massagem lombar suave, café moído na hora e espumante selecionado para que seu momento no atelier seja uma renovação completa.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
