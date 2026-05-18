import { Activity, Brain, Droplets, Clock, LucideIcon } from "lucide-react";
import { problemCards } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const iconMap: Record<string, LucideIcon> = {
  activity: Activity,
  brain: Brain,
  droplets: Droplets,
  clock: Clock,
};

export default function ProblemSection() {
  return (
    <section className="section-padding bg-white" aria-labelledby="problem-title">
      <div className="container-content">
        <AnimateOnScroll>
          <SectionHeading
            tag="Você se identifica?"
            title="Você sente que o corpo está pedindo cuidado?"
            subtitle="Muitas pessoas convivem com dores, tensão muscular, estresse, ansiedade, retenção de líquidos ou cansaço constante. Com a rotina acelerada, o corpo acumula sinais que não devem ser ignorados."
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {problemCards.map((card, index) => {
            const Icon = iconMap[card.iconName] ?? Activity;
            return (
              <AnimateOnScroll key={card.title} delay={index + 1} className="h-full">
                <div className="group h-full bg-cream border border-border rounded-2xl p-4 sm:p-6 hover:bg-white hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-default flex flex-col items-center text-center sm:items-start sm:text-left">
                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary-soft flex items-center justify-center mb-3 sm:mb-5 group-hover:bg-primary/10 transition-colors duration-300 shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" aria-hidden="true" />
                  </div>

                  {/* Gold accent line */}
                  <div className="w-6 sm:w-8 h-0.5 bg-gold/50 mb-3 sm:mb-4" aria-hidden="true" />

                  <h3 className="font-playfair text-sm sm:text-lg font-semibold text-dark mb-1.5 sm:mb-2.5 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
