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
import { whatsAppUrl } from "@/lib/whatsapp";
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = iconMap[service.iconName] ?? Leaf;
            return (
              <AnimateOnScroll key={service.title} delay={(index % 3) + 1} className="h-full">
                <article className="group h-full bg-cream border border-border rounded-3xl p-7 hover:bg-white hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  {/* Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-13 h-13 w-[52px] h-[52px] rounded-2xl bg-primary-soft flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    {/* Gold accent dot */}
                    <div className="w-2 h-2 rounded-full bg-gold/40 mt-1" aria-hidden="true" />
                  </div>

                  <h3 className="font-playfair text-xl font-bold text-dark mb-1.5 leading-snug">
                    {service.title}
                  </h3>

                  {/* Highlight pill */}
                  <div className="inline-flex mb-4">
                    <span className="text-[11px] font-medium text-gold bg-gold-light border border-gold/20 px-2.5 py-1 rounded-full">
                      {service.highlight}
                    </span>
                  </div>

                  <p className="text-muted text-sm leading-relaxed flex-1 mb-6">
                    {service.description}
                  </p>

                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:text-primary-dark group-hover:gap-3 transition-all duration-200 mt-auto"
                    aria-label={`Agendar ${service.title} pelo WhatsApp`}
                  >
                    Agendar este cuidado
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
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
