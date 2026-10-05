import { useState, useEffect } from 'react';
import { SERVICES_DATA, SPECIALISTS_DATA } from '../data/salonData';
import { X, Calendar, Clock, User, Check, Sparkles, Phone, MessageSquare, ArrowRight, ArrowLeft } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialSpecialistId?: string;
}

export function BookingModal({
  isOpen,
  onClose,
  initialServiceId,
  initialSpecialistId,
}: BookingModalProps) {
  const [step, setStep] = useState<number>(1);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialServiceId || SERVICES_DATA[0].id);
  const [selectedSpecialistId, setSelectedSpecialistId] = useState<string>(initialSpecialistId || 'any');
  const [selectedDate, setSelectedDate] = useState<string>('2026-10-08');
  const [selectedTime, setSelectedTime] = useState<string>('14:30');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientNotes, setClientNotes] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  // Update initial props if modal opened with specific item
  useEffect(() => {
    if (initialServiceId) setSelectedServiceId(initialServiceId);
    if (initialSpecialistId) setSelectedSpecialistId(initialSpecialistId);
  }, [initialServiceId, initialSpecialistId]);

  // Lock scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Reset state on close
      setTimeout(() => {
        setStep(1);
        setIsSuccess(false);
      }, 300);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];
  const currentSpecialist = SPECIALISTS_DATA.find((sp) => sp.id === selectedSpecialistId);

  const availableTimes = ['09:30', '11:00', '14:30', '16:00', '18:00'];
  const nextDays = [
    { label: 'Hoje (Encaixe)', date: '2026-10-05' },
    { label: 'Terça, 06 Out', date: '2026-10-06' },
    { label: 'Quarta, 07 Out', date: '2026-10-07' },
    { label: 'Quinta, 08 Out', date: '2026-10-08' },
    { label: 'Sexta, 09 Out', date: '2026-10-09' },
    { label: 'Sábado, 10 Out', date: '2026-10-10' },
  ];

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#0b0b0a]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative max-w-2xl w-full bg-[#141312] border border-white/10 shadow-2xl p-6 sm:p-8 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-[#9d988d] hover:text-[#f5f2eb] border border-white/10 hover:border-white/30 transition-colors cursor-pointer"
          aria-label="Fechar agendamento"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-white/10 pb-5 mb-6 pr-10">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#c59b6d] font-semibold block mb-1">
            Reserva Digital · AURA STUDIO
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#f5f2eb]">
            {isSuccess ? 'Atendimento Confirmado' : 'Agendar Seu Horário Exclusivo'}
          </h2>
          <p className="text-xs text-[#8f8a80] mt-1">
            {isSuccess 
              ? 'Seu horário foi bloqueado em nossa agenda demonstrativa.' 
              : 'Fluxo interativo demonstrando a integração com sistema de agendamento do salão.'}
          </p>
        </div>

        {/* Success Screen */}
        {isSuccess ? (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="p-6 bg-[#0e0e0d] border border-[#c59b6d]/40 space-y-4">
              <div className="flex items-center gap-2 text-xs text-[#c59b6d] uppercase tracking-wider font-semibold">
                <Check className="w-4 h-4" />
                <span>Reserva Agendada com Sucesso</span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-[#b8b3a8]">
                <p><strong className="text-[#f5f2eb]">Cliente:</strong> {clientName || 'Visitante Demonstração'}</p>
                <p><strong className="text-[#f5f2eb]">Serviço:</strong> {currentService.name}</p>
                <p>
                  <strong className="text-[#f5f2eb]">Especialista:</strong>{' '}
                  {currentSpecialist ? currentSpecialist.name : 'Primeiro profissional disponível'}
                </p>
                <p><strong className="text-[#f5f2eb]">Data & Horário:</strong> {selectedDate} às {selectedTime}</p>
                <p><strong className="text-[#f5f2eb]">Local:</strong> Alameda dos Jacarandás, 1420 · Jardins</p>
              </div>

              {/* NexaWeb Agency Integration Insight */}
              <div className="pt-4 border-t border-white/10 text-xs text-[#8f8a80]">
                <p className="text-[#c59b6d] font-medium mb-1">Integração NexaWeb para Clientes Reais:</p>
                <p>
                  Em um ambiente de produção, este formulário dispara instantaneamente a confirmação via WhatsApp Business API, atualiza a agenda em tempo real e sincroniza com o Google Agenda do profissional.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#0b0b0a] bg-[#f5f2eb] hover:bg-[#c59b6d] transition-colors cursor-pointer"
            >
              Concluir & Fechar Demonstração
            </button>
          </div>
        ) : (
          /* Multi-step Form */
          <div>
            {/* Step Progress Indicators */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 text-[11px] uppercase tracking-widest text-[#706c64]">
              <span className={step >= 1 ? 'text-[#c59b6d] font-semibold' : ''}>1. Especialidade</span>
              <span>—</span>
              <span className={step >= 2 ? 'text-[#c59b6d] font-semibold' : ''}>2. Profissional & Data</span>
              <span>—</span>
              <span className={step >= 3 ? 'text-[#c59b6d] font-semibold' : ''}>3. Confirmação</span>
            </div>

            {/* Step 1: Select Service */}
            {step === 1 && (
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-wider text-[#d4cfc5] font-medium block">
                  Escolha o ritual desejado:
                </span>
                <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
                  {SERVICES_DATA.map((srv) => {
                    const isSelected = srv.id === selectedServiceId;
                    return (
                      <div
                        key={srv.id}
                        onClick={() => setSelectedServiceId(srv.id)}
                        className={`p-3.5 border transition-all cursor-pointer flex items-center justify-between text-xs ${
                          isSelected
                            ? 'bg-[#1c1b19] border-[#c59b6d] text-[#f5f2eb]'
                            : 'bg-[#121110] border-white/10 text-[#a8a398] hover:border-white/20'
                        }`}
                      >
                        <div>
                          <strong className="block text-sm font-serif text-[#f5f2eb]">{srv.name}</strong>
                          <span className="text-[11px] text-[#8f8a80]">{srv.duration} · {srv.priceEstimate}</span>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-[#c59b6d]" />}
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#0b0b0a] bg-[#f5f2eb] hover:bg-[#c59b6d] transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span>Avançar para Data</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Select Specialist & Date/Time */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#d4cfc5] font-medium block mb-2">
                    Especialista preferido:
                  </label>
                  <select
                    value={selectedSpecialistId}
                    onChange={(e) => setSelectedSpecialistId(e.target.value)}
                    className="w-full bg-[#121110] border border-white/20 p-3 text-xs text-[#f5f2eb] focus:border-[#c59b6d] focus:outline-none"
                  >
                    <option value="any">Primeiro especialista disponível (Recomendado)</option>
                    {SPECIALISTS_DATA.map((sp) => (
                      <option key={sp.id} value={sp.id}>
                        {sp.name} — {sp.specialty}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#d4cfc5] font-medium block mb-2">
                    Escolha a data:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {nextDays.map((d) => (
                      <button
                        key={d.date}
                        type="button"
                        onClick={() => setSelectedDate(d.date)}
                        className={`p-2.5 text-xs text-center border transition-colors cursor-pointer ${
                          selectedDate === d.date
                            ? 'bg-[#1c1b19] border-[#c59b6d] text-[#f5f2eb] font-semibold'
                            : 'bg-[#121110] border-white/10 text-[#8f8a80] hover:text-[#f5f2eb]'
                        }`}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#d4cfc5] font-medium block mb-2">
                    Horário disponível:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`px-4 py-2 text-xs border transition-colors cursor-pointer ${
                          selectedTime === time
                            ? 'bg-[#c59b6d] text-[#0b0b0a] font-semibold border-[#c59b6d]'
                            : 'bg-[#121110] border-white/10 text-[#8f8a80] hover:text-[#f5f2eb]'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2.5 text-xs uppercase tracking-wider text-[#8f8a80] hover:text-[#f5f2eb] flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Voltar</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#0b0b0a] bg-[#f5f2eb] hover:bg-[#c59b6d] transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span>Dados de Contato</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Client Info & Final Submit */}
            {step === 3 && (
              <form onSubmit={handleConfirm} className="space-y-4">
                <div className="p-3 bg-[#0e0e0d] border border-white/10 text-xs text-[#a8a398] space-y-1">
                  <p><strong className="text-[#f5f2eb]">Resumo:</strong> {currentService.name}</p>
                  <p><strong className="text-[#f5f2eb]">Horário:</strong> {selectedDate} às {selectedTime}</p>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#d4cfc5] font-medium block mb-1">
                    Nome Completo:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Mariana Silveira"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-[#121110] border border-white/20 p-3 text-xs text-[#f5f2eb] focus:border-[#c59b6d] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#d4cfc5] font-medium block mb-1">
                    WhatsApp para Confirmação:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 98765-4321"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full bg-[#121110] border border-white/20 p-3 text-xs text-[#f5f2eb] focus:border-[#c59b6d] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#d4cfc5] font-medium block mb-1">
                    Observações ou Histórico de Química (Opcional):
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ex: Cabelo descolorido há 6 meses, sensibilidade no couro cabeludo..."
                    value={clientNotes}
                    onChange={(e) => setClientNotes(e.target.value)}
                    className="w-full bg-[#121110] border border-white/20 p-3 text-xs text-[#f5f2eb] focus:border-[#c59b6d] focus:outline-none"
                  />
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2.5 text-xs uppercase tracking-wider text-[#8f8a80] hover:text-[#f5f2eb] flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Voltar</span>
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#0b0b0a] bg-[#c59b6d] hover:bg-[#b88a5e] transition-colors cursor-pointer"
                  >
                    Finalizar Agendamento
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
