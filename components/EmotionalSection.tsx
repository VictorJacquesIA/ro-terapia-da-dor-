import { Heart } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function EmotionalSection() {
  return (
    <section
      className="section-padding bg-cream relative overflow-hidden"
      aria-labelledby="emotional-title"
    >
      {/* Decorative left line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-20 items-center max-w-5xl mx-auto">

          {/* Left: Main text (3 cols) */}
          <div className="lg:col-span-3">
            <AnimateOnScroll>
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-8 h-px bg-gold" aria-hidden="true" />
                <span className="text-gold text-xs font-semibold tracking-[0.16em] uppercase">
                  Escuta e cuidado
                </span>
              </div>

              <h2
                id="emotional-title"
                className="font-playfair text-3xl md:text-4xl font-bold text-dark leading-tight mb-6 text-balance"
              >
                Antes de escolher uma técnica, é importante entender o que seu
                corpo está tentando dizer.
              </h2>

              <p className="text-muted text-lg leading-relaxed mb-10">
                Cada dor, tensão ou desconforto pode ter uma origem diferente.
                Por isso, o atendimento não começa pela técnica, mas pela
                escuta. A sessão é conduzida de forma personalizada, respeitando
                seu corpo, sua rotina e o momento que você está vivendo.
              </p>

              <WhatsAppButton label="Falar com a Rosangela" variant="primary" size="md" />
            </AnimateOnScroll>
          </div>

          {/* Right: Decorative quote card (2 cols) */}
          <div className="lg:col-span-2 flex justify-center">
            <AnimateOnScroll delay={2} className="w-full max-w-xs">
              <div className="relative w-full">
                {/* Main card */}
                <div className="bg-white rounded-3xl p-8 border border-border shadow-card relative">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-gold-soft flex items-center justify-center mb-6">
                    <Heart className="w-5 h-5 text-gold" aria-hidden="true" />
                  </div>

                  {/* Quote mark */}
                  <span
                    className="font-playfair text-7xl text-primary/10 leading-none absolute top-5 right-6 font-bold select-none"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>

                  <blockquote>
                    <p className="font-playfair text-xl text-primary-dark italic leading-relaxed relative z-10">
                      Cada sessão é pensada para o seu bem-estar, não para um
                      protocolo.
                    </p>
                  </blockquote>

                  <div className="mt-7 pt-5 border-t border-border flex items-center gap-3">
                    <div className="w-8 h-px bg-gold" aria-hidden="true" />
                    <p className="text-muted text-sm font-medium">Rosangela da Silva</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div
                  className="absolute -bottom-5 -right-5 w-20 h-20 rounded-full border-2 border-gold/20 pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-gold/25 pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </AnimateOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
