import WhatsAppButton from "@/components/WhatsAppButton";

export default function SolutionSection() {
  return (
    <section
      className="section-padding"
      style={{ background: "linear-gradient(135deg, #FCF8F8 0%, #FDE8F0 50%, #E8F5E9 100%)" }}
      aria-labelledby="solution-title"
    >
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center">
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mb-8" aria-hidden="true">
            <div className="h-px w-12 bg-fuchsia/40" />
            <div className="w-2 h-2 rounded-full bg-fuchsia" />
            <div className="h-px w-12 bg-fuchsia/40" />
          </div>

          <h2
            id="solution-title"
            className="font-playfair text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight"
          >
            Um cuidado personalizado para o seu momento
          </h2>

          <p className="text-lg text-muted leading-relaxed mb-8">
            Na Rô Espaço Terapêutico, cada sessão é pensada de forma individual,
            respeitando suas necessidades, seu corpo e seus objetivos. O
            atendimento combina técnicas de massoterapia, terapias manuais e
            cuidado integrativo para promover relaxamento, bem-estar e
            equilíbrio.
          </p>

          <blockquote className="relative bg-white rounded-2xl px-8 py-6 shadow-card mb-10 border-l-4 border-fuchsia">
            <p className="font-playfair text-xl md:text-2xl text-fuchsia italic font-medium">
              &ldquo;Você merece esse cuidado.&rdquo;
            </p>
          </blockquote>

          <WhatsAppButton
            label="Quero cuidar de mim"
            variant="primary"
            size="lg"
          />
        </div>
      </div>
    </section>
  );
}
