import { useState } from 'react';
import { Menu, X, ArrowUpRight, Calendar, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceId?: string, specialistId?: string) => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Filosofia', href: '#filosofia' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Estilo', href: '#estilo' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Mestres', href: '#mestres' },
    { label: 'Experiência', href: '#jornada' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0b0b0a]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Zone 1: Single text element wordmark */}
          <a 
            href="#" 
            className="group flex items-center gap-2 text-xl md:text-2xl font-serif tracking-[0.2em] uppercase text-[#f5f2eb] hover:text-[#c59b6d] transition-colors"
          >
            <span>AURA</span>
            <span className="text-[#c59b6d] font-light text-base tracking-[0.3em] font-sans">STUDIO</span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-[#b8b3a8]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#f5f2eb] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#c59b6d] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#0b0b0a] bg-[#f5f2eb] hover:bg-[#c59b6d] hover:text-[#0b0b0a] transition-all duration-300 rounded-none shadow-sm cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Agendar Horário</span>
            </button>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#f5f2eb] hover:text-[#c59b6d] transition-colors focus:outline-none focus:ring-1 focus:ring-[#c59b6d]"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-[#0b0b0a] flex flex-col justify-between p-8 lg:hidden animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div>
            <div className="flex items-center justify-between pb-8 border-b border-white/10">
              <span className="font-serif text-2xl tracking-[0.2em] text-[#f5f2eb]">AURA STUDIO</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#b8b3a8] hover:text-[#f5f2eb]"
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl text-[#f5f2eb] hover:text-[#c59b6d] transition-colors flex items-center justify-between group"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-4 text-xs uppercase tracking-[0.2em] font-semibold text-[#0b0b0a] bg-[#c59b6d] hover:bg-[#b88a5e] transition-colors flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Atendimento</span>
            </button>

            <div className="text-center text-xs text-[#8f8a80] space-y-1">
              <p>Alameda dos Jacarandás, 1420 · Jardins, SP</p>
              <p>Terça a Sábado das 09h30 às 20h00</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
