import { MapPin, Clock, Phone, Mail, Instagram, Car, Sparkles, Navigation } from 'lucide-react';

interface LocationSectionProps {
  onOpenBooking: () => void;
}

export function LocationSection({ onOpenBooking }: LocationSectionProps) {
  return (
    <section id="contato" className="py-24 border-b border-white/10 bg-[#0e0e0d] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#c59b6d] font-semibold block mb-3">
              09. O Atelier Presencial
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#f5f2eb] font-normal tracking-tight">
              Localização & Contato Concierge
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#9e998e] max-w-md font-light">
            Instalado no coração dos Jardins em São Paulo. Um refúgio arborizado com privacidade absoluta e serviço de manobrista.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12 items-stretch">
          
          {/* Atelier Details (5 cols) */}
          <div className="lg:col-span-5 bg-[#141312] border border-white/10 p-8 sm:p-10 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#c59b6d] font-semibold block mb-2">
                  Endereço & Acesso
                </span>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#c59b6d] shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base text-[#f5f2eb] font-medium">Alameda dos Jacarandás, 1420</h3>
                    <p className="text-xs text-[#9d988d] mt-0.5">Jardins · São Paulo, SP · CEP 01420-002</p>
                    <p className="text-xs text-[#c59b6d] mt-2 flex items-center gap-1.5">
                      <Car className="w-3.5 h-3.5" />
                      Valet cortesia na entrada do atelier
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#c59b6d] font-semibold block mb-2">
                  Horários de Atendimento
                </span>
                <div className="flex items-start gap-3 text-xs text-[#b8b3a8]">
                  <Clock className="w-4 h-4 text-[#c59b6d] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p><strong className="text-[#f5f2eb]">Terça a Sábado:</strong> 09h30 às 20h00</p>
                    <p className="text-[#706c64]">Domingo e Segunda: Fechado para pesquisa de tendências e treinamentos</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#c59b6d] font-semibold block mb-2">
                  Canais de Contato
                </span>
                <div className="space-y-3 text-xs text-[#b8b3a8]">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#c59b6d] shrink-0" />
                    <span>Linha Concierge: (11) 3845-0210</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#c59b6d] shrink-0" />
                    <span>concierge@aurastudio.com.br</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Instagram className="w-4 h-4 text-[#c59b6d] shrink-0" />
                    <span className="text-[#c59b6d]">@aurastudio.atelier</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-6 border-t border-white/10">
              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#0b0b0a] bg-[#f5f2eb] hover:bg-[#c59b6d] transition-colors cursor-pointer"
              >
                Encontrar meu horário
              </button>
            </div>
          </div>

          {/* Stylized Architectural Map Canvas (7 cols) */}
          <div className="lg:col-span-7 bg-[#141312] border border-white/10 relative overflow-hidden flex flex-col justify-between p-6 sm:p-8 min-h-[380px]">
            
            {/* Architectural Grid Stylized Map View */}
            <div className="absolute inset-0 bg-[#0d0c0b] opacity-90">
              {/* Subtle vector grid lines resembling Jardins street map */}
              <svg className="w-full h-full opacity-25" viewBox="0 0 800 600" fill="none">
                <path d="M 50 100 L 750 100" stroke="#f5f2eb" strokeWidth="1" />
                <path d="M 50 250 L 750 250" stroke="#f5f2eb" strokeWidth="1.5" />
                <path d="M 50 420 L 750 420" stroke="#f5f2eb" strokeWidth="1" />
                <path d="M 50 520 L 750 520" stroke="#f5f2eb" strokeWidth="1" />

                <path d="M 120 50 L 120 550" stroke="#f5f2eb" strokeWidth="1" />
                <path d="M 280 50 L 280 550" stroke="#f5f2eb" strokeWidth="1" />
                <path d="M 460 50 L 460 550" stroke="#c59b6d" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 640 50 L 640 550" stroke="#f5f2eb" strokeWidth="1" />

                {/* Diagonal avenue */}
                <path d="M 50 500 L 650 80" stroke="#f5f2eb" strokeWidth="2" opacity="0.6" />
                
                {/* Highlight Circle for Atelier Pin */}
                <circle cx="460" cy="250" r="40" fill="#c59b6d" fillOpacity="0.1" />
                <circle cx="460" cy="250" r="16" fill="#c59b6d" fillOpacity="0.25" />
                <circle cx="460" cy="250" r="6" fill="#c59b6d" />
              </svg>
            </div>

            {/* Map Top Badge */}
            <div className="relative z-10 flex items-center justify-between text-xs">
              <div className="bg-[#0b0b0a]/90 backdrop-blur-md px-3 py-1.5 border border-white/10 text-[#f5f2eb] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c59b6d] animate-pulse" />
                <span>Localização Privativa</span>
              </div>
              <div className="bg-[#0b0b0a]/90 backdrop-blur-md px-3 py-1.5 border border-white/10 text-[#a8a398] text-[11px]">
                Coord: -23.5658, -46.6669
              </div>
            </div>

            {/* Central Pin Callout */}
            <div className="relative z-10 self-center my-auto bg-[#0b0b0a]/90 backdrop-blur-md border border-[#c59b6d]/60 p-4 max-w-xs text-center shadow-2xl">
              <span className="font-serif text-lg text-[#f5f2eb] block">AURA STUDIO</span>
              <span className="text-[11px] text-[#c59b6d] tracking-widest uppercase block mt-0.5">Atelier Jardins</span>
              <p className="text-[11px] text-[#9d988d] mt-2 font-light">
                A 3 minutos do Parque Ibirapuera e da Rua Oscar Freire.
              </p>
            </div>

            {/* Map Bottom Hint */}
            <div className="relative z-10 flex items-center justify-between text-xs text-[#8f8a80] pt-4">
              <span>Navegação GPS integrada no dia da sua reserva.</span>
              <div className="flex items-center gap-1.5 text-[#f5f2eb]">
                <Navigation className="w-3.5 h-3.5 text-[#c59b6d]" />
                <span>Waze / Google Maps</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
