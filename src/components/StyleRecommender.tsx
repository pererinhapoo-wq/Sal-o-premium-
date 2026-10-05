import { useState } from 'react';
import { STYLE_RECOMMENDER_OPTIONS } from '../data/salonData';
import { Sparkles, Clock, UserCheck, ArrowRight, Check } from 'lucide-react';

interface StyleRecommenderProps {
  onOpenBooking: (serviceId?: string) => void;
}

export function StyleRecommender({ onOpenBooking }: StyleRecommenderProps) {
  const [selectedIntentId, setSelectedIntentId] = useState<string>('transformar');

  const activeOption = STYLE_RECOMMENDER_OPTIONS.find((opt) => opt.id === selectedIntentId) || STYLE_RECOMMENDER_OPTIONS[0];

  return (
    <section id="estilo" className="py-24 border-b border-white/10 bg-[#0e0e0d] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c59b6d] font-semibold block mb-3">
            03. Diagnóstico Interativo
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#f5f2eb] font-normal leading-tight">
            Qual é a intenção do seu momento?
          </h2>
          <p className="mt-4 text-sm text-[#9e998e] font-light">
            Selecione seu objetivo para receber uma recomendação sob medida pensada pelos nossos visagistas.
          </p>
        </div>

        {/* 3 Intent Cards (Clickable) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {STYLE_RECOMMENDER_OPTIONS.map((opt) => {
            const isSelected = opt.id === selectedIntentId;
            return (
              <button
                key={opt.id}
                onClick={() => setSelectedIntentId(opt.id)}
                className={`p-6 text-left transition-all duration-300 border cursor-pointer relative ${
                  isSelected
                    ? 'bg-[#1a1816] border-[#c59b6d] shadow-lg -translate-y-1'
                    : 'bg-[#121110] border-white/10 hover:border-white/20 hover:bg-[#161514]'
                }`}
                aria-pressed={isSelected}
              >
                {isSelected && (
                  <span className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#c59b6d]" />
                )}
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#c59b6d] font-medium block mb-2">
                  {opt.badge}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#f5f2eb] font-normal">
                  {opt.label}
                </h3>
                <p className="mt-2 text-xs text-[#8f8a80]">
                  {opt.headline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Dynamic Recommendation Reveal Box */}
        <div className="mt-8 max-w-4xl mx-auto bg-[#141312] border border-white/10 p-8 sm:p-10 transition-all duration-500">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs text-[#c59b6d] uppercase tracking-[0.2em]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Protocolo Sugerido para Você</span>
              </div>

              <h4 className="font-serif text-2xl sm:text-3xl text-[#f5f2eb] font-normal">
                {activeOption.recommendationTitle}
              </h4>

              <p className="text-sm text-[#b8b3a8] font-light leading-relaxed">
                {activeOption.recommendationText}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-[#8f8a80]">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#c59b6d]" />
                  Tempo estimado: <strong className="text-[#f5f2eb] font-normal">{activeOption.timeEstimate}</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-[#c59b6d]" />
                  Especialista indicado: <strong className="text-[#f5f2eb] font-normal">{activeOption.specialistMatch}</strong>
                </span>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col justify-center items-start md:items-end pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-white/10 md:pl-8">
              <button
                onClick={() => onOpenBooking(activeOption.recommendedServiceId)}
                className="w-full md:w-auto px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#0b0b0a] bg-[#f5f2eb] hover:bg-[#c59b6d] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Agendar esta opção</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-[11px] text-[#706c64] mt-2 block text-center md:text-right">
                Consulta preliminar inclusa
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
