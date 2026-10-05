import { useState } from 'react';
import { SERVICES_DATA, ServiceItem } from '../data/salonData';
import { Clock, Sparkles, CheckCircle2, Calendar, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export function ServicesSection({ onOpenBooking }: ServicesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_DATA[0].id);

  const categories = ['Todos', 'Cabelo', 'Coloração', 'Tratamentos', 'Make', 'Experiências'];

  const filteredServices = selectedCategory === 'Todos'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  const activeService = SERVICES_DATA.find((s) => s.id === activeServiceId) || filteredServices[0] || SERVICES_DATA[0];

  return (
    <section id="servicos" className="py-24 border-b border-white/10 bg-[#0b0b0a] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#c59b6d] font-semibold block mb-3">
              02. Cardápio Editorial & Rituais
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#f5f2eb] font-normal tracking-tight">
              Alta Precisão & Cuidados Assinados
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#9e998e] max-w-md font-light">
            Selecione uma especialidade para inspecionar os detalhes morfológicos, duração e orientações personalizadas.
          </p>
        </div>

        {/* Category Selector (Segmented control button tabs) */}
        <div className="flex items-center gap-2 overflow-x-auto py-6 border-b border-white/10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                const firstInCat = cat === 'Todos' ? SERVICES_DATA[0] : SERVICES_DATA.find(s => s.category === cat);
                if (firstInCat) setActiveServiceId(firstInCat.id);
              }}
              className={`px-4 py-2 text-xs uppercase tracking-[0.18em] transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#f5f2eb] text-[#0b0b0a] font-semibold'
                  : 'text-[#9e998e] hover:text-[#f5f2eb] border border-white/10 hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Split Experience (Dossier Left, Selector Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10">
          
          {/* Active Service Dossier (7 cols) */}
          <div className="lg:col-span-7 bg-[#141312] border border-white/10 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300">
            <div>
              {/* Category & Price Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 text-xs text-[#9d988d]">
                <div className="flex items-center gap-2 tracking-wider">
                  <span className="text-[#c59b6d] font-medium uppercase">{activeService.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#c59b6d]" />
                    {activeService.duration}
                  </span>
                </div>
                <span className="text-xs uppercase tracking-[0.15em] text-[#f5f2eb] font-semibold">
                  {activeService.priceEstimate}
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="mt-6">
                <h3 className="font-serif text-2xl sm:text-4xl text-[#f5f2eb] font-normal leading-tight">
                  {activeService.name}
                </h3>
                <p className="mt-2 text-sm text-[#c59b6d] italic font-serif">
                  {activeService.tagline}
                </p>
                <p className="mt-4 text-sm sm:text-base text-[#b8b3a8] font-light leading-relaxed">
                  {activeService.description}
                </p>
              </div>

              {/* Indication Box */}
              <div className="mt-6 p-4 bg-[#0e0e0d] border-l-2 border-[#c59b6d] text-xs sm:text-sm text-[#d4cfc5]">
                <span className="font-semibold text-[#f5f2eb] block mb-1">Para quem é recomendado:</span>
                {activeService.indication}
              </div>

              {/* Highlights & Ritual steps */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#858075] font-semibold block mb-3">
                    Diferenciais AURA
                  </span>
                  <ul className="space-y-2 text-xs text-[#b8b3a8]">
                    {activeService.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c59b6d] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#858075] font-semibold block mb-3">
                    Incluso no Protocolo
                  </span>
                  <ul className="space-y-2 text-xs text-[#b8b3a8]">
                    {activeService.ritualIncludes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#c59b6d] font-mono text-[10px] mt-0.5">0{idx + 1}.</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Bottom Booking Action */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="text-xs text-[#8f8a80]">
                <span>Diagnóstico individualizado incluso sem cobrança extra.</span>
              </div>

              <button
                onClick={() => onOpenBooking(activeService.id)}
                className="px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#0b0b0a] bg-[#f5f2eb] hover:bg-[#c59b6d] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-[#0b0b0a]" />
                <span>Agendar este serviço</span>
              </button>
            </div>
          </div>

          {/* Service Directory Selector (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#858075] font-semibold px-2 mb-1">
              Catálogo de Especialidades ({filteredServices.length})
            </span>

            <div className="space-y-2">
              {filteredServices.map((service, index) => {
                const isActive = service.id === activeService.id;
                return (
                  <div
                    key={service.id}
                    onClick={() => setActiveServiceId(service.id)}
                    className={`p-5 transition-all cursor-pointer border text-left group ${
                      isActive
                        ? 'bg-[#1e1c1a] border-[#c59b6d] shadow-lg translate-x-1'
                        : 'bg-[#121110] border-white/10 hover:border-white/30 hover:bg-[#171615]'
                    }`}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveServiceId(service.id);
                      }
                    }}
                    aria-label={`Ver detalhes do serviço ${service.name}`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[#706c64]">
                          {index < 9 ? `0${index + 1}` : index + 1}
                        </span>
                        <h4 className={`text-sm sm:text-base font-medium transition-colors ${
                          isActive ? 'text-[#f5f2eb]' : 'text-[#d4cfc5] group-hover:text-[#f5f2eb]'
                        }`}>
                          {service.name}
                        </h4>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs text-[#9d988d] hidden sm:inline">{service.duration}</span>
                        <ArrowRight className={`w-4 h-4 transition-transform ${
                          isActive ? 'text-[#c59b6d] translate-x-1' : 'text-[#706c64] group-hover:text-[#f5f2eb]'
                        }`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 p-4 border border-dashed border-white/15 bg-transparent text-xs text-[#8f8a80] flex items-center justify-between">
              <span>Dúvida sobre qual procedimento escolher?</span>
              <a href="#estilo" className="text-[#c59b6d] hover:underline font-medium uppercase tracking-wider text-[11px]">
                Fazer teste de estilo →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
