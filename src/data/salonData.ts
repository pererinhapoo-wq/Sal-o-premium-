import specialistMasterImg from '../assets/images/specialist_master_stylist_1791177552940.jpg';
import galleryBalayageImg from '../assets/images/gallery_hair_balayage_1791177532910.jpg';
import salonInteriorImg from '../assets/images/gallery_salon_interior_1791177542993.jpg';
import transformationImg from '../assets/images/hair_transformation_editorial_1791177562306.jpg';
import heroEditorialImg from '../assets/images/hero_editorial_salon_1791177517311.jpg';

export interface ServiceItem {
  id: string;
  name: string;
  category: 'Cabelo' | 'Coloração' | 'Tratamentos' | 'Make' | 'Experiências';
  tagline: string;
  description: string;
  duration: string;
  indication: string;
  priceEstimate: string;
  highlights: string[];
  ritualIncludes: string[];
}

export interface Specialist {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  bio: string;
  signatureStyle: string;
  portrait: string;
  availableDays: string;
  clientCount: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  technique: string;
  specialist: string;
  format: 'vertical' | 'horizontal' | 'wide' | 'square';
  aspectClass: string;
  image: string;
  caption: string;
  duration: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  topic: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'corte-visagista',
    name: 'Corte Visagista & Diagnóstico Arquitetônico',
    category: 'Cabelo',
    tagline: 'Geometria personalizada para valorizar traços e proporções faciais.',
    description: 'Análise morfológica profunda do rosto, estilo de vida e densidade capilar. O corte é esculpido com lâminas japonesas e tesouras de alta precisão, preservando o caimento natural dos fios.',
    duration: '60 a 75 min',
    indication: 'Para quem busca uma assinatura visual única e fácil manutenção diária.',
    priceEstimate: 'A partir de R$ 380',
    highlights: ['Diagnóstico facial 1:1', 'Lavagem sensorial com massagem craniana', 'Finalização editorial personalizada'],
    ritualIncludes: ['Mapeamento de textura e redemoinhos', 'Escova com proteção térmica biomimética', 'Prescrição personalizada de homecare']
  },
  {
    id: 'aura-balayage-signature',
    name: 'Aura Balayage Signature (Luzes Naturais)',
    category: 'Coloração',
    tagline: 'Pintura à mão livre com transição imperceptível e brilho difuso.',
    description: 'Técnica proprietária desenvolvida pelo atelier para criar pontos de luminosidade estratégicos sem marcações rígidas na raiz. Proporciona crescimento suave e elegante por até 6 meses.',
    duration: '3h a 4h',
    indication: 'Para quem deseja luminosidade sofisticada, nuances amanteigadas ou caramelizadas com naturalidade.',
    priceEstimate: 'A partir de R$ 850',
    highlights: ['Clareamento suave com proteção de pontes', 'Glosser de tonalização personalizado', 'Tratamento de selamento de cutículas'],
    ritualIncludes: ['Teste de mecha rigoroso', 'Matização com pigmentos nobres', 'Escova e modelagem com ondas fluidas']
  },
  {
    id: 'gloss-tonalizante-brilho',
    name: 'Glossing Tonalizante & Reflexos de Seda',
    category: 'Coloração',
    tagline: 'Revitalização de cor e reflexo espelhado sem oxidação agressiva.',
    description: 'Fórmula hidratante sem amônia que sela as escamas do cabelo e reaviva os tons naturais ou reflexos desbotados, conferindo toque acetinado e brilho radiante.',
    duration: '45 min',
    indication: 'Cabelos opacos, pós-verão, ou entre procedimentos de mechas para manter o tom perfeito.',
    priceEstimate: 'A partir de R$ 320',
    highlights: ['Fórmula ultra-gentil sem amônia', 'Realce imediato de luminosidade', 'Proteção contra radicais livres'],
    ritualIncludes: ['Diagnóstico colorimétrico', 'Aplicação uniforme em lavatório de cromoterapia', 'Sérum finalizador de nutrição']
  },
  {
    id: 'ritual-reconstrucao-lipidica',
    name: 'Ritual de Reconstrução Lipídica Profunda',
    category: 'Tratamentos',
    tagline: 'Cura celular dos fios com infusão de aminoácidos raros e óleos botânicos.',
    description: 'Protocolo clínico em 4 etapas térmicas que repõe a massa proteica e restaura a maleabilidade de cabelos quimicamente sensibilizados ou ressecados.',
    duration: '50 min',
    indication: 'Fios porosos, quebradiços, que passaram por descoloração ou calor constante.',
    priceEstimate: 'A partir de R$ 420',
    highlights: ['Vapor de ozônio para absorção máxima', 'Aminoácidos biomiméticos essenciais', 'Selamento térmico a laser frio'],
    ritualIncludes: ['Esfoliação desintoxicante do couro cabeludo', 'Máscara termoativada sob toalha quente', 'Finalização com defrizante botânico']
  },
  {
    id: 'spa-couro-cabeludo',
    name: 'Detox & Spa Terapêutico do Couro Cabeludo',
    category: 'Tratamentos',
    tagline: 'Saúde na raiz para estímulo do crescimento e equilíbrio oleoso.',
    description: 'Tricologia relaxante com esfoliação com microesferas de jojoba, vaporização ozonizada e massagem sensorial drenante na nuca e ombros.',
    duration: '60 min',
    indication: 'Sensibilidade, descamação, oleosidade desregulada ou necessidade de puro relaxamento.',
    priceEstimate: 'A partir de R$ 360',
    highlights: ['Microcâmera para análise capilar antes/depois', 'Argiloterapia e óleos essenciais puros', 'Massagem craniofacial descompressiva'],
    ritualIncludes: ['Higienização micelar profunda', 'Infusão botânica de alecrim e lavanda', 'Chá aromático de boas-vindas']
  },
  {
    id: 'maquiagem-editorial-glow',
    name: 'Maquiagem Editorial Natural Glow',
    category: 'Make',
    tagline: 'Pele etérea, iluminação precisa e realce elegante da beleza autêntica.',
    description: 'Construção de pele fresca e translúcida com produtos de alta performance. Olhar esfumado sutil e lábios hidratados em harmonia com sua paleta pessoal.',
    duration: '60 min',
    indication: 'Jantares, eventos sociais, editoriais e ocasiões onde a sofisticação discreta é primordial.',
    priceEstimate: 'A partir de R$ 450',
    highlights: ['Skincare preparatório com drenagem facial', 'Produtos de alta durabilidade e acabamento acetinado', 'Cílios individuais sob medida'],
    ritualIncludes: ['Bruma fixadora com peptídeos', 'Aplicação personalizada de iluminador líquido', 'Kit retoque com batom mini']
  },
  {
    id: 'experiencia-noiva-atelier',
    name: 'Experiência Noiva & Atelier Exclusivo',
    category: 'Experiências',
    tagline: 'Dia da noiva em sala privativa com assessoria estética integral.',
    description: 'Um dia imersivo com prova antecipada, menu de brunch com champagne, massagem relaxante, penteado de alta costura e maquiagem duradoura.',
    duration: '4h a 6h',
    indication: 'Noivas que buscam tranquilidade, exclusividade e memória afetiva refinada.',
    priceEstimate: 'Sob consulta personalizada',
    highlights: ['Suíte privativa com serviço de som e luz', 'Brunch assinado e taça de espumante', 'Acompanhamento do fotógrafo'],
    ritualIncludes: ['Ensaio de teste completo 15 dias antes', 'Tratamento capilar iluminador prévio', 'Kit emergencial da noiva']
  }
];

export const SPECIALISTS_DATA: Specialist[] = [
  {
    id: 'helena-vasconcelos',
    name: 'Helena Vasconcelos',
    role: 'Diretora Criativa & Master Visagista',
    specialty: 'Cortes Arquitetônicos & Geometria Fluida',
    experience: '14 anos de formação entre Paris e São Paulo',
    bio: 'Pioneira em cortes que respeitam o movimento natural e textura sem dependência diária de secador. Assina editoriais de moda e visagismo corporativo.',
    signatureStyle: 'Bobs franceses texturizados e camadas invisíveis com balanço orgânico.',
    portrait: specialistMasterImg,
    availableDays: 'Terça a Sábado',
    clientCount: 'Mais de 3.200 transformações realizadas'
  },
  {
    id: 'gabriel-martins',
    name: 'Gabriel Martins',
    role: 'Head de Cor & Balayage Artist',
    specialty: 'Loiros Saudáveis & Brunette Iluminada',
    experience: '11 anos dedicados à colorimetria pura',
    bio: 'Especialista em nuances de caramelo, avelã e loiro baunilha. Desenvolveu a técnica de transição difusa com mínimo desgaste das cutículas.',
    signatureStyle: 'Dimensão e profundidade com brilho tridimensional.',
    portrait: galleryBalayageImg,
    availableDays: 'Quarta a Sábado',
    clientCount: 'Referência em tonalização limpa e saudável'
  },
  {
    id: 'camila-freitas',
    name: 'Camila Freitas',
    role: 'Tricologista & Terapeuta Capilar',
    specialty: 'Cura e Regeneração do Couro Cabeludo',
    experience: '9 anos em tricologia integrada e saúde capilar',
    bio: 'Combina óleos essenciais orgânicos, cromoterapia e laser frio para desobstruir folículos, devolver densidade e proporcionar relaxamento absoluto.',
    signatureStyle: 'Rituais sensoriais que restauram vigor e acalmam o estresse.',
    portrait: salonInteriorImg,
    availableDays: 'Terça a Sexta',
    clientCount: 'Mais de 1.800 rituais de restauração'
  },
  {
    id: 'beatriz-luz',
    name: 'Beatriz Luz',
    role: 'Makeup Artist & Beauty Stylist',
    specialty: 'Pele Acetinada & Visagismo de Maquiagem',
    experience: '8 anos com editoriais de noivas e passarela',
    bio: 'Defensora da maquiagem que respira: correção invisível, pontos de luz harmônicos e destaque aos traços singulares de cada rosto.',
    signatureStyle: 'Glow natural com durabilidade impecável para eventos longos.',
    portrait: transformationImg,
    availableDays: 'Quinta a Sábado',
    clientCount: 'Especialista nas principais semanas de moda'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Balayage Caramelo Manteiga',
    technique: 'Pintura à Mão Livre + Glosser Acetinado',
    specialist: 'Gabriel Martins',
    format: 'vertical',
    aspectClass: 'md:col-span-5 md:row-span-2 aspect-[3/4]',
    image: galleryBalayageImg,
    caption: 'Luminosidade quente e contorno facial suave com preservação de integridade capilar.',
    duration: '3h30'
  },
  {
    id: 'gal-2',
    title: 'Atelier & Espaço Arquitetônico',
    technique: 'Ambiente de Conforto & Cromoterapia',
    specialist: 'Espaço AURA',
    format: 'wide',
    aspectClass: 'md:col-span-7 md:row-span-1 aspect-[16/9]',
    image: salonInteriorImg,
    caption: 'Bancadas em mármore travertino e iluminação neutra com fidelidade cromática real.',
    duration: 'Experiência'
  },
  {
    id: 'gal-3',
    title: 'French Bob com Texturização Suave',
    technique: 'Corte Visagista em Fios Úmidos e Secos',
    specialist: 'Helena Vasconcelos',
    format: 'square',
    aspectClass: 'md:col-span-7 md:row-span-1 aspect-[4/3]',
    image: transformationImg,
    caption: 'Precisão milimétrica na nuca e movimento fluido na linha da mandíbula.',
    duration: '1h15'
  },
  {
    id: 'gal-4',
    title: 'Editorial Escultura & Movimento',
    technique: 'Tratamento de Espelhamento + Escova Orgânica',
    specialist: 'Helena & Equipe',
    format: 'wide',
    aspectClass: 'md:col-span-12 md:row-span-1 aspect-[21/9]',
    image: heroEditorialImg,
    caption: 'Fios alinhados com balanço natural e textura acetinada sem aspecto pesado.',
    duration: 'Ritual Completo'
  }
];

export const JOURNEY_STEPS = [
  {
    number: '01',
    title: 'Escolha seu momento',
    lead: 'Agendamento consciente sem filas ou esperas.',
    description: 'Selecione online o ritual desejado, seu especialista de preferência ou deixe nosso concierge orientar o horário mais conveniente.'
  },
  {
    number: '02',
    title: 'Converse com nossa equipe',
    lead: 'Consulta sensorial e diagnóstico de textura.',
    description: 'Ao chegar, saboreie nosso menu de chás ou espumante enquanto avaliamos a saúde do seu fio, histórico químico e objetivos visuais.'
  },
  {
    number: '03',
    title: 'Personalizamos o atendimento',
    lead: 'Protocolo exclusivo formulado na hora.',
    description: 'Ajustamos diluições, tempos de pausa, fórmulas de tratamento e técnicas de corte para o seu estilo de vida particular.'
  },
  {
    number: '04',
    title: 'Viva a experiência AURA',
    lead: 'Resultado memorável e plano de continuidade.',
    description: 'Saia com a sensação revigorante de um cabelo impecável, finalizado com padrão editorial e guia prático de cuidados em casa.'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    topic: 'Agendamento',
    question: 'É necessário agendar com antecedência?',
    answer: 'Sim. Para garantir um atendimento pontual, exclusivo e sem pressa, trabalhamos exclusivamente com horários reservados. Recomendamos agendar com 3 a 7 dias de antecedência para procedimentos de cor ou finais de semana.'
  },
  {
    topic: 'Serviços',
    question: 'Quais marcas e cosméticos são utilizados no estúdio?',
    answer: 'Trabalhamos exclusivamente com linhas premium de performance internacional e fórmulas livres de crueldade, como Kérastase Fusio-Dose, Davines, Olaplex e pigmentos botânicos selecionados por nossa direção técnica.'
  },
  {
    topic: 'Profissionais',
    question: 'Como escolher o profissional ideal para o meu cabelo?',
    answer: 'Você pode conferir a assinatura de cada especialista em nossa seção "Mestres do Atelier", ou utilizar nossa ferramenta interativa "Encontre seu Estilo" para receber uma indicação alinhada ao seu perfil.'
  },
  {
    topic: 'Tempo',
    question: 'Quanto tempo dura um atendimento de mechas ou corte?',
    answer: 'Um corte com diagnóstico visagista e finalização dura aproximadamente 1 hora e 15 minutos. Procedimentos de descoloração e balayage duram entre 3h30 e 4h30 para que a abertura de tom ocorra de maneira segura e controlada.'
  },
  {
    topic: 'Políticas',
    question: 'Como funciona o cancelamento ou reagendamento?',
    answer: 'Compreendemos imprevistos. Solicitamos aviso prévio com pelo menos 24 horas de antecedência pelo nosso concierge para remanejarmos sua vaga sem qualquer cobrança adicional.'
  }
];

export const STYLE_RECOMMENDER_OPTIONS = [
  {
    id: 'transformar',
    label: 'Quero transformar',
    headline: 'Renovação radical e marcante',
    badge: 'Mudança de impacto',
    recommendedServiceId: 'corte-visagista',
    recommendationTitle: 'Corte Visagista + Iluminação Facial Estratégica',
    recommendationText: 'Indicamos uma renovação com diagnóstico de linhas faciais e mechas de contorno suave para iluminar sua expressão com elegância contemporânea.',
    timeEstimate: '2h a 3h',
    specialistMatch: 'Helena Vasconcelos'
  },
  {
    id: 'manter',
    label: 'Quero manter',
    headline: 'Saúde, forma e brilho preservados',
    badge: 'Refinamento sutil',
    recommendedServiceId: 'ritual-reconstrucao-lipidica',
    recommendationTitle: 'Ritual de Reconstrução Lipídica + Limpeza de Pontas',
    recommendationText: 'Foco na integridade e maleabilidade dos fios. Removemos pontas duplas sem alterar o comprimento e fazemos uma infusão de brilho espelhado.',
    timeEstimate: '1h15',
    specialistMatch: 'Camila Freitas'
  },
  {
    id: 'experimentar',
    label: 'Quero experimentar',
    headline: 'Sensação nova sem compromisso agressivo',
    badge: 'Toque contemporâneo',
    recommendedServiceId: 'gloss-tonalizante-brilho',
    recommendationTitle: 'Glossing Tonalizante Sem Amônia + Escova Fluida',
    recommendationText: 'Experimente nuances de reflexo quente ou frio e textura aveludada. Sai com visual de passarela que desbota de forma sutil e uniforme ao longo das semanas.',
    timeEstimate: '1h30',
    specialistMatch: 'Gabriel Martins'
  }
];
