import { JOURNEY_STEPS } from '../data/salonData';
import { Calendar, Coffee, Sparkles, Smile, ArrowRight } from 'lucide-react';

interface JourneySectionProps {
  onOpenBooking: () => void;
}

export function JourneySection({ onOpenBooking }: JourneySectionProps) {
  const icons = [Calendar, Coffee, Sparkles, Smile];

  return (
    <section id="jornada" className="py-24 border-b border-white/10 bg-[#0e0e0d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-white/10">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#c59b6d] font-semibold block mb-3">
              07. A Experiência AURA
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#f5f2eb] font-normal tracking-tight">
              A Jornada do Seu Atendimento
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#9e998e] max-w-md font-light">
            Da reserva digital até a finalização e manutenção domiciliar: um fluxo desenhado para transformar sua ida ao salão em um momento de reconexão.
          </p>
        </div>

        {/* Stepped Journey Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 relative">
          
          {JOURNEY_STEPS.map((step, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={step.number}
                className="relative flex flex-col justify-between p-6 bg-[#141312] border border-white/10 group hover:border-[#c59b6d]/60 transition-all duration-300 min-h-[300px]"
              >
                <div>
                  {/* Step Header with Large Serif Number */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/10">
                    <span className="font-serif text-4xl text-[#c59b6d] font-light">
                      {step.number}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#9e998e] group-hover:text-[#c59b6d] group-hover:border-[#c59b6d] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Content */}
                  <div className="mt-6 space-y-2">
                    <h3 className="font-serif text-2xl text-[#f5f2eb] group-hover:text-[#c59b6d] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#c59b6d] font-medium">
                      {step.lead}
                    </p>
                    <p className="text-xs text-[#9d988d] font-light leading-relaxed pt-2">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Subtle bottom indicator */}
                <div className="pt-6 border-t border-white/5 flex items-center justify-between text-[11px] text-[#706c64]">
                  <span>Fase 0{idx + 1} de 04</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c59b6d]/50 group-hover:bg-[#c59b6d] transition-colors" />
                </div>
              </div>
            );
          })}

        </div>

        {/* Journey Bottom Action Banner */}
        <div className="mt-16 p-8 bg-[#161514] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl sm:text-2xl text-[#f5f2eb]">
              Pronta para vivenciar esse acolhimento?
            </h4>
            <p className="text-xs sm:text-sm text-[#9e998e] font-light">
              Reservas pontuais, ambiente climatizado e acústica projetada.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#0b0b0a] bg-[#f5f2eb] hover:bg-[#c59b6d] transition-colors whitespace-nowrap cursor-pointer"
          >
            Quero viver a experiência
          </button>
        </div>

      </div>
    </section>
  );
}
