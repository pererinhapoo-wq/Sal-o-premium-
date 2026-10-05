import { useState } from 'react';
import { FAQ_DATA } from '../data/salonData';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 border-b border-white/10 bg-[#0b0b0a] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-white/10">
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#c59b6d] font-semibold block mb-3">
              08. Esclarecimentos & Políticas
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#f5f2eb] font-normal tracking-tight">
              Perguntas Frequentes
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-xs sm:text-sm text-[#9e998e] font-light leading-relaxed">
              Tudo o que você precisa saber sobre nossos horários, rituais, linhas de produtos e diretrizes de acolhimento.
            </p>
          </div>
        </div>

        {/* Elegant Accordion List */}
        <div className="max-w-4xl mx-auto pt-10 divide-y divide-white/10">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6 transition-colors">
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left flex items-start justify-between gap-6 py-2 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c59b6d] cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs text-[#706c64] mt-1">
                      0{idx + 1}
                    </span>
                    <h3 className="font-serif text-lg sm:text-2xl text-[#f5f2eb] group-hover:text-[#c59b6d] transition-colors">
                      {item.question}
                    </h3>
                  </div>

                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#9e998e] group-hover:text-[#f5f2eb] group-hover:border-[#c59b6d] transition-colors shrink-0 mt-0.5">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="mt-4 pl-8 sm:pl-10 pr-4 text-xs sm:text-sm text-[#b8b3a8] font-light leading-relaxed animate-in fade-in duration-300"
                  >
                    <p>{item.answer}</p>
                    <div className="mt-3 text-[11px] uppercase tracking-wider text-[#c59b6d]/70">
                      Tópico: {item.topic}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
