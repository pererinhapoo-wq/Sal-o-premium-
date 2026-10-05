interface FooterProps {
  onOpenBooking: () => void;
}

export function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer className="bg-[#080807] border-t border-white/10 text-xs text-[#8f8a80] py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="font-serif text-2xl tracking-[0.2em] text-[#f5f2eb] block">
              AURA STUDIO
            </a>
            <p className="text-xs text-[#9d988d] max-w-sm font-light leading-relaxed">
              Atelier contemporâneo de visagismo, coloração e alta costura capilar. Um santuário de beleza silenciosa nos Jardins, São Paulo.
            </p>
            <div className="pt-2 text-[11px] text-[#706c64]">
              <p>Alameda dos Jacarandás, 1420 · Jardins, São Paulo - SP</p>
              <p>Terça a Sábado das 09h30 às 20h00</p>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#c59b6d] font-medium block mb-2">
              Navegação
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#filosofia" className="hover:text-[#f5f2eb] transition-colors">Nossa Filosofia</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#f5f2eb] transition-colors">Cardápio de Rituais</a>
              </li>
              <li>
                <a href="#estilo" className="hover:text-[#f5f2eb] transition-colors">Teste de Estilo</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-[#f5f2eb] transition-colors">Galeria Editorial</a>
              </li>
              <li>
                <a href="#mestres" className="hover:text-[#f5f2eb] transition-colors">Mestres & Visagistas</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#f5f2eb] transition-colors">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Reservation Callout (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#c59b6d] font-medium block mb-2">
              Atendimento Privativo
            </span>
            <p className="text-xs text-[#9d988d] font-light leading-relaxed">
              Garantimos pontualidade absoluta através de intervalos programados entre cada cliente.
            </p>
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#0b0b0a] bg-[#f5f2eb] hover:bg-[#c59b6d] transition-colors cursor-pointer"
            >
              Agendar meu horário
            </button>
          </div>

        </div>

        {/* Bottom Credits & Agency Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#706c64]">
          <p>© 2026 AURA STUDIO. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span>Desenvolvido com excelência por <strong className="text-[#a8a398] font-normal">NexaWeb</strong></span>
            <span aria-hidden="true">·</span>
            <span className="text-[#c59b6d]">Padrão Editorial 2026</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
