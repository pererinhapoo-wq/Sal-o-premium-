import { useState } from 'react';
import { SPECIALISTS_DATA, Specialist } from '../data/salonData';
import { SpecialistModal } from './SpecialistModal';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface SpecialistsSectionProps {
  onOpenBooking: (serviceId?: string, specialistId?: string) => void;
}

export function SpecialistsSection({ onOpenBooking }: SpecialistsSectionProps) {
  const [selectedSpecialist, setSelectedSpecialist] = useState<Specialist | null>(null);

  return (
    <section id="mestres" className="py-24 border-b border-white/10 bg-[#0b0b0a] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#c59b6d] font-semibold block mb-3">
              06. Mestres & Visagistas
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#f5f2eb] font-normal tracking-tight">
              Os Talentos por Trás do Atelier
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#9e998e] max-w-md font-light">
            Especialistas dedicados à personalização autêntica de cada rosto e fio capilar. Conheça suas trajetórias e assinaturas estéticas.
          </p>
        </div>

        {/* 4 Specialists Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {SPECIALISTS_DATA.map((specialist, idx) => (
            <div
              key={specialist.id}
              className="bg-[#141312] border border-white/10 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:border-white/30"
            >
              <div>
                {/* Photo with subtle hover effect */}
                <div className="aspect-[4/5] relative overflow-hidden bg-[#1f1e1c]">
                  <img
                    src={specialist.portrait}
                    alt={specialist.name}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center filter grayscale-[25%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#c59b6d] font-medium block">
                      {specialist.role}
                    </span>
                  </div>
                </div>

                {/* Info Text */}
                <div className="p-6">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#f5f2eb]">
                    {specialist.name}
                  </h3>
                  <p className="text-xs text-[#c59b6d] font-medium mt-1">
                    {specialist.specialty}
                  </p>
                  <p className="text-xs text-[#9d988d] font-light mt-3 leading-relaxed line-clamp-3">
                    {specialist.bio}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedSpecialist(specialist)}
                  className="w-full py-2.5 px-4 text-xs uppercase tracking-[0.18em] font-medium text-[#f5f2eb] border border-white/15 hover:border-[#c59b6d] hover:text-[#c59b6d] transition-colors flex items-center justify-between group/btn cursor-pointer"
                >
                  <span>Conhecer Perfil</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#706c64] group-hover/btn:text-[#c59b6d] transition-colors" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Specialist Modal */}
      <SpecialistModal
        specialist={selectedSpecialist}
        onClose={() => setSelectedSpecialist(null)}
        onBookWithSpecialist={(specialistId) => onOpenBooking(undefined, specialistId)}
      />
    </section>
  );
}
