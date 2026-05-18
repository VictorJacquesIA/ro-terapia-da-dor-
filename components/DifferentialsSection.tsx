import Image from "next/image";
import { Check, Award } from "lucide-react";
import { differentials } from "@/data/site";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function DifferentialsSection() {
  return (
    <section
      id="sobre"
      className="section-padding"
      style={{ background: "linear-gradient(135deg, #FBF7F2 0%, #F8EAF0 60%, #FBF7F2 100%)" }}
      aria-labelledby="differentials-title"
    >
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Text side */}
          <AnimateOnScroll>
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-8 h-px bg-gold" aria-hidden="true" />
              <span className="text-gold text-xs font-semibold tracking-[0.16em] uppercase">
                Por que nos escolher
              </span>
            </div>

            <h2
              id="differentials-title"
              className="font-playfair text-3xl md:text-4xl font-bold text-dark mb-8 leading-tight"
            >
              Por que escolher a Rô Espaço Terapêutico?
            </h2>

            <ul className="space-y-3.5 mb-10" role="list">
              {differentials.map((item) => (
                <li key={item} className="flex items-start gap-3.5">
                  <div
                    className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-dark text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <WhatsAppButton label="Agendar minha sessão" variant="primary" size="md" />
          </AnimateOnScroll>

          {/* Image side */}
          <AnimateOnScroll delay={2} className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Decorative rings */}
              <div
                className="absolute -inset-3 rounded-[48px] border border-gold/20 pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute -inset-6 rounded-[56px] border border-gold/10 pointer-events-none"
                aria-hidden="true"
              />

              {/* Image */}
              <div className="relative w-full aspect-[3/4] rounded-[40px] overflow-hidden shadow-hero">
                {/* Desktop */}
                <Image
                  src="/images/rosangela.webp"
                  alt="Rosangela da Silva — massoterapeuta com 11 anos de experiência"
                  fill
                  className="object-cover hidden md:block"
                  style={{ objectPosition: "50% 45%" }}
                  sizes="384px"
                />
                {/* Mobile */}
                <Image
                  src="/images/rosangela.webp"
                  alt="Rosangela da Silva — massoterapeuta com 11 anos de experiência"
                  fill
                  className="object-cover block md:hidden"
                  style={{ objectPosition: "50% 20%" }}
                  sizes="80vw"
                />
                {/* Subtle gradient */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary-dark/20 to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* Experience badge */}
              <div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-card px-5 py-4 border border-border"
                aria-label="11 anos de experiência"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold-soft flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-playfair text-2xl font-bold text-dark leading-none">11</p>
                    <p className="text-muted text-xs leading-tight mt-0.5">
                      anos de<br />experiência
                    </p>
                  </div>
                </div>
              </div>

              {/* Top-right accent */}
              <div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full border-2 border-gold/25 pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
}
