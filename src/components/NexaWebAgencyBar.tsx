import { useState } from 'react';
import { Sparkles, CheckCircle2, ChevronRight, X, Layers, ExternalLink } from 'lucide-react';

interface NexaWebAgencyBarProps {
  onOpenBooking: () => void;
}

export function NexaWebAgencyBar({ onOpenBooking }: NexaWebAgencyBarProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <>
      {/* Discreet Persistent Agency Proof Bar */}
      <aside 
        aria-label="Demonstração NexaWeb" 
        className="bg-[#141312] border-b border-[#c59b6d]/30 text-xs py-2 px-4 relative z-50 transition-all text-[#dcd7cd]"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c59b6d]" />
            <span className="font-semibold text-[#f5f2eb] tracking-wide">NexaWeb Showcase:</span>
            <span className="text-[#a8a398] hidden sm:inline">
              Demonstração de website premium de alta conversão para salões & ateliers de beleza.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowDetails(true)}
              className="text-[#c59b6d] hover:underline flex items-center gap-1 font-medium cursor-pointer"
            >
              <span>Por que este design converte</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onOpenBooking}
              className="px-2.5 py-1 bg-[#c59b6d]/20 hover:bg-[#c59b6d]/30 text-[#f5f2eb] border border-[#c59b6d]/40 transition-colors text-[11px] font-medium"
            >
              Testar Agendamento
            </button>

            <button
              onClick={() => setDismissed(true)}
              className="p-1 text-[#706c64] hover:text-[#f5f2eb]"
              aria-label="Fechar aviso demonstrativo"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </aside>

      {/* NexaWeb Architecture Details Modal */}
      {showDetails && (
        <div 
          className="fixed inset-0 z-50 bg-[#0b0b0a]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-xl w-full bg-[#141312] border border-white/15 p-6 sm:p-8 shadow-2xl space-y-6">
            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-4 right-4 p-2 text-[#9d988d] hover:text-[#f5f2eb] border border-white/10"
              aria-label="Fechar detalhes"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#c59b6d] font-semibold block mb-1">
                Padrão de Engenharia NexaWeb
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#f5f2eb]">
                Como transformamos visitantes em clientes fiéis
              </h3>
              <p className="text-xs sm:text-sm text-[#9e998e] mt-2 font-light">
                Diferente de templates comuns de salão (cheios de fotos genéricas e botões soltos de WhatsApp), nossa solução é desenhada para transmitir autoridade e luxo desde o primeiro segundo.
              </p>
            </div>

            <div className="space-y-3 text-xs text-[#b8b3a8]">
              <div className="p-3 bg-[#0e0e0d] border-l-2 border-[#c59b6d]">
                <strong className="text-[#f5f2eb] block">1. Diagnóstico Interativo "Encontre seu Estilo"</strong>
                <span>Reduz a incerteza do cliente e direciona o ticket médio para procedimentos de maior valor agregado.</span>
              </div>

              <div className="p-3 bg-[#0e0e0d] border-l-2 border-[#c59b6d]">
                <strong className="text-[#f5f2eb] block">2. Galeria Editorial com Lightbox Fluido</strong>
                <span>Valoriza o portfólio real da equipe sem desconfigurar o layout e sem travamentos no celular.</span>
              </div>

              <div className="p-3 bg-[#0e0e0d] border-l-2 border-[#c59b6d]">
                <strong className="text-[#f5f2eb] block">3. Slider Comparativo de Transformação</strong>
                <span>Comprova a maestria técnica com transparência através de componente interativo tátil.</span>
              </div>

              <div className="p-3 bg-[#0e0e0d] border-l-2 border-[#c59b6d]">
                <strong className="text-[#f5f2eb] block">4. SEO Estruturado para o Google (Schema.org)</strong>
                <span>Código indexado com microdados de salão de beleza e geolocalização exata para atração orgânica no Google Maps.</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowDetails(false)}
                className="px-6 py-2.5 text-xs uppercase tracking-widest bg-[#f5f2eb] text-[#0b0b0a] font-semibold hover:bg-[#c59b6d] transition-colors"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
