import { useEffect } from 'react';
import { Specialist } from '../data/salonData';
import { X, Calendar, Award, CheckCircle2, Clock, MapPin } from 'lucide-react';

interface SpecialistModalProps {
  specialist: Specialist | null;
  onClose: () => void;
  onBookWithSpecialist: (specialistId: string) => void;
}

export function SpecialistModal({ specialist, onClose, onBookWithSpecialist }: SpecialistModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (specialist) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [specialist, onClose]);

  if (!specialist) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#0b0b0a]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative max-w-3xl w-full bg-[#141312] border border-white/10 overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-[#0b0b0a]/80 text-[#f5f2eb] hover:text-[#c59b6d] border border-white/10 transition-colors cursor-pointer"
          aria-label="Fechar perfil do especialista"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Portrait side */}
        <div className="md:w-5/12 bg-black relative min-h-[280px] md:min-h-full">
          <img
            src={specialist.portrait}
            alt={specialist.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden" />
          <div className="absolute bottom-4 left-4 right-4 text-xs text-[#c59b6d] tracking-widest uppercase md:hidden">
            {specialist.role}
          </div>
        </div>

        {/* Content side */}
        <div className="md:w-7/12 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#c59b6d] font-semibold block mb-1">
                {specialist.role}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#f5f2eb]">
                {specialist.name}
              </h3>
              <p className="text-xs text-[#a8a398] mt-1 font-medium">
                {specialist.specialty}
              </p>
            </div>

            <p className="text-sm text-[#b8b3a8] font-light leading-relaxed">
              {specialist.bio}
            </p>

            <div className="p-4 bg-[#0e0e0d] border-l-2 border-[#c59b6d] space-y-2 text-xs">
              <div>
                <strong className="text-[#f5f2eb] block">Assinatura Estética:</strong>
                <span className="text-[#a8a398]">{specialist.signatureStyle}</span>
              </div>
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[#8f8a80]">
                <span>Formação & Trajetória:</span>
                <span className="text-[#d4cfc5]">{specialist.experience}</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-[#8f8a80] space-y-1.5">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#c59b6d]" />
                <span>Atendimento presencial: <strong className="text-[#f5f2eb] font-normal">{specialist.availableDays}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c59b6d]" />
                <span>{specialist.clientCount}</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 mt-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onBookWithSpecialist(specialist.id);
              }}
              className="flex-1 py-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#0b0b0a] bg-[#f5f2eb] hover:bg-[#c59b6d] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#0b0b0a]" />
              <span>Agendar com {specialist.name.split(' ')[0]}</span>
            </button>

            <button
              onClick={onClose}
              className="py-3 px-5 text-xs uppercase tracking-[0.2em] font-medium text-[#b8b3a8] hover:text-[#f5f2eb] border border-white/10 transition-colors"
            >
              Voltar
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
