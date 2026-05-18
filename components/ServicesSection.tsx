import {
  Waves,
  Hand,
  Droplets,
  Zap,
  Leaf,
  CalendarDays,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { services } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import SectionHeading from "@/components/SectionHeading";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const iconMap: Record<string, LucideIcon> = {
  waves: Waves,
  hand: Hand,
  droplets: Droplets,
  zap: Zap,
  leaf: Leaf,
  calendar: CalendarDays,
};

export default function ServicesSection() {
  return (
    <section id="servicos" className="section-padding bg-white" aria-labelledby="services-title">
      <div className="container-content">
        <AnimateOnScroll>
          <SectionHeading
            tag="Tratamentos"
            title="Terapias e cuidados disponíveis"
            subtitle="Escolha um cuidado pensado para aliviar tensões, melhorar sua sensação de bem-estar e apoiar o equilíbrio do corpo."
          />
        </AnimateOnScroll>

        {/* Mobile: carrossel scroll snap — Desktop: grid */}
        <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide">
          {services.map((service) => {
            const Icon = iconMap[service.iconName] ?? Leaf;
            return (
              <article
                key={service.title}
                className="group snap-center shrink-0 w-[calc(100vw-2rem)] bg-cream border border-border rounded-3xl p-6 flex flex-col items-center text-center"
              >
                <div className="w-[52px] h-[52px] rounded-2xl bg-primary-soft flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>

                <h3 className="font-playfair text-xl font-bold text-dark mb-1.5 leading-snug">
                  {service.title}
                </h3>

                <div className="inline-flex mb-4">
                  <span className="text-[11px] font-medium text-gold bg-gold-light border border-gold/20 px-2.5 py-1 rounded-full">
                    {service.highlight}
                  </span>
                </div>

                <p className="text-muted text-sm leading-relaxed flex-1 mb-6">
                  {service.description}
                </p>

                <a
                  href={getWhatsAppUrl(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-primary text-xs font-semibold border border-primary/30 bg-primary-soft hover:bg-primary hover:text-white px-4 py-2 rounded-full transition-all duration-200"
                  aria-label={`Agendar ${service.title} pelo WhatsApp`}
                >
                  {service.cta}
                </a>
              </article>
            );
          })}
        </div>

        {/* Swipe hint — mobile only */}
        <div className="flex md:hidden items-center justify-center gap-3 mt-2 mb-2">
          <div className="flex gap-1.5">
            {services.map((_, i) => (
              <div key={i} className={`rounded-full bg-primary/20 transition-all ${i === 0 ? "w-4 h-1.5 bg-primary/60" : "w-1.5 h-1.5"}`} />
            ))}
          </div>
          <span className="text-muted/60 text-xs flex items-center gap-1">
            deslize para ver mais
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </span>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = iconMap[service.iconName] ?? Leaf;
            return (
              <AnimateOnScroll key={service.title} delay={(index % 3) + 1} className="h-full">
                <article className="group h-full bg-cream border border-border rounded-3xl p-7 hover:bg-white hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-[52px] h-[52px] rounded-2xl bg-primary-soft flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <div className="w-2 h-2 rounded-full bg-gold/40 mt-1" aria-hidden="true" />
                  </div>

                  <h3 className="font-playfair text-xl font-bold text-dark mb-1.5 leading-snug">
                    {service.title}
                  </h3>

                  <div className="inline-flex mb-4">
                    <span className="text-[11px] font-medium text-gold bg-gold-light border border-gold/20 px-2.5 py-1 rounded-full">
                      {service.highlight}
                    </span>
                  </div>

                  <p className="text-muted text-sm leading-relaxed flex-1 mb-6">
                    {service.description}
                  </p>

                  <a
                    href={getWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-primary text-xs font-semibold border border-primary/30 bg-primary-soft hover:bg-primary hover:text-white px-4 py-2 rounded-full transition-all duration-200 mt-auto"
                    aria-label={`Agendar ${service.title} pelo WhatsApp`}
                  >
                    {service.cta}
                  </a>
                </article>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
