import { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, Sparkles, CheckCircle2, Info } from 'lucide-react';
import transformationImg from '../assets/images/hair_transformation_editorial_1791177562306.jpg';

interface BeforeAfterSliderProps {
  onOpenBooking: () => void;
}

export function BeforeAfterSlider({ onOpenBooking }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-24 border-b border-white/10 bg-[#0e0e0d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#c59b6d] font-semibold block mb-3">
              05. Transformação em Foco
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#f5f2eb] font-normal tracking-tight">
              A Precisão do Antes & Depois
            </h2>
          </div>

          {/* Explicit Demonstrative Disclaimer */}
          <div className="flex items-center gap-2 text-xs text-[#8f8a80] max-w-md bg-[#141312] p-3 border border-white/10">
            <Info className="w-4 h-4 text-[#c59b6d] shrink-0" />
            <span>Demonstração de componente visual para apresentação NexaWeb. Finalidade ilustrativa de experiência interativa.</span>
          </div>
        </div>

        {/* Content Layout: Slider on Left, Analysis on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-12">
          
          {/* Interactive Split Slider (7 cols) */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              className="relative aspect-[4/3] w-full overflow-hidden select-none bg-[#171615] border border-white/10 shadow-2xl cursor-ew-resize"
              onMouseDown={() => (isDragging.current = true)}
              onMouseUp={() => (isDragging.current = false)}
              onMouseLeave={() => (isDragging.current = false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* "After" Image (Background, full size) */}
              <img
                src={transformationImg}
                alt="Transformação Depois - French Bob estilizado"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== '/images/hair_transformation_editorial.jpg') {
                    target.src = '/images/hair_transformation_editorial.jpg';
                  }
                }}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute top-4 right-4 bg-[#0b0b0a]/80 backdrop-blur-md px-3 py-1.5 border border-white/10 text-[11px] uppercase tracking-widest text-[#f5f2eb]">
                Depois (AURA)
              </div>

              {/* "Before" Image (Clipped overlay) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={transformationImg}
                  alt="Transformação Antes"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== '/images/hair_transformation_editorial.jpg') {
                      target.src = '/images/hair_transformation_editorial.jpg';
                    }
                  }}
                  className="absolute inset-y-0 left-0 h-full max-w-none object-cover filter contrast-75 brightness-75 sepia-[0.3]"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  }}
                />
                <div className="absolute top-4 left-4 bg-[#0b0b0a]/80 backdrop-blur-md px-3 py-1.5 border border-white/10 text-[11px] uppercase tracking-widest text-[#9d988d]">
                  Antes (Base)
                </div>
              </div>

              {/* Divider Line & Interactive Handle */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-[#c59b6d] shadow-[0_0_10px_rgba(197,155,109,0.5)] pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0b0b0a] border-2 border-[#c59b6d] flex items-center justify-center text-[#c59b6d] shadow-xl">
                  <ArrowLeftRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Mobile / Interaction Hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#0b0b0a]/80 backdrop-blur-sm px-4 py-1 border border-white/10 text-[10px] uppercase tracking-widest text-[#8f8a80] pointer-events-none">
                Arraste o divisor lateralmente
              </div>
            </div>
          </div>

          {/* Transformation Breakdown (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#c59b6d] font-semibold block mb-2">
                Estudo de Caso Ilustrativo
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#f5f2eb]">
                Equilíbrio de Linhas & Luminosidade Natural
              </h3>
              <p className="mt-3 text-sm text-[#b8b3a8] font-light leading-relaxed">
                Neste diagnóstico demonstrativo, o corte pesado e com pontas desgastadas deu lugar a um French Bob estruturado na altura do maxilar, acompanhado de selamento de cutículas.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#c59b6d] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#f5f2eb] font-medium block">Diagnóstico Morfológico:</strong>
                  <span className="text-[#9e998e]">Abertura das linhas do pescoço e queixo para valorizar traços naturais.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#c59b6d] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#f5f2eb] font-medium block">Protocolo de Fios:</strong>
                  <span className="text-[#9e998e]">Reconstrução lipídica térmica antes do corte para máxima maleabilidade.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#c59b6d] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#f5f2eb] font-medium block">Tempo de Execução:</strong>
                  <span className="text-[#9e998e]">Aproximadamente 1h30 entre lavagem sensorial e finalização.</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#0b0b0a] bg-[#f5f2eb] hover:bg-[#c59b6d] transition-all duration-300 cursor-pointer"
              >
                Viver Minha Transformação
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
