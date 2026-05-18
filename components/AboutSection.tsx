import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function AboutSection() {
  return (
    <section id="sobre-profissional" className="section-padding bg-white" aria-labelledby="about-title">
      <div className="container-content">
        <AnimateOnScroll className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <span className="w-8 h-px bg-gold" aria-hidden="true" />
            <span className="text-gold text-xs font-semibold tracking-[0.16em] uppercase">
              A profissional
            </span>
            <span className="w-8 h-px bg-gold" aria-hidden="true" />
          </div>

          <h2
            id="about-title"
            className="font-playfair text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight"
          >
            Conheça Rosangela da Silva
          </h2>

          <p className="text-muted text-lg leading-relaxed mb-10">
            Rosangela é massoterapeuta e profissional da área da estética, com{" "}
            <strong className="text-dark font-semibold">11 anos de experiência</strong>{" "}
            em atendimentos voltados ao cuidado corporal, alívio de tensões e bem-estar.
            Seu trabalho une técnica, escuta e acolhimento para que cada sessão seja
            pensada de forma personalizada.
          </p>

          <div className="relative bg-cream rounded-3xl px-8 py-8 border border-border mb-10 max-w-xl mx-auto">
            {/* Quote mark */}
            <span
              className="absolute top-4 left-6 font-playfair text-6xl text-primary/10 leading-none font-bold select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote className="relative z-10">
              <p className="font-playfair text-xl text-primary-dark italic font-medium leading-relaxed">
                Cada sessão é pensada para o seu bem-estar.
              </p>
            </blockquote>

            <div className="mt-5 pt-5 border-t border-border flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-gold" aria-hidden="true" />
              <p className="text-muted text-sm font-medium">Rosangela da Silva</p>
            </div>
          </div>

          <WhatsAppButton label="Agendar com Rosangela" variant="primary" size="lg" />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
