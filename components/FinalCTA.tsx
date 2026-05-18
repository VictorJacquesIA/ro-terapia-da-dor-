import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function FinalCTA() {
  return (
    <section
      className="relative section-padding overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #7A334C 0%, #B65C7A 50%, #7A334C 100%)",
      }}
      aria-labelledby="final-cta-title"
    >
      {/* Decorative shapes */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(200,164,93,0.12) 0%, transparent 70%)",
          transform: "translate(30%, -40%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
          transform: "translate(-30%, 40%)",
        }}
        aria-hidden="true"
      />

      {/* Gold accent dots */}
      <div className="absolute top-8 left-1/4 w-2 h-2 rounded-full bg-gold/30 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-8 right-1/4 w-3 h-3 rounded-full bg-gold/20 pointer-events-none" aria-hidden="true" />

      <div className="relative container-content text-center">
        <AnimateOnScroll>
          {/* Gold divider */}
          <div className="flex items-center justify-center gap-3 mb-8" aria-hidden="true">
            <div className="w-8 h-px bg-gold/60" />
            <div className="w-2 h-2 rounded-full bg-gold/60" />
            <div className="w-8 h-px bg-gold/60" />
          </div>

          <h2
            id="final-cta-title"
            className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight text-balance max-w-2xl mx-auto"
          >
            Seu corpo não precisa esperar a dor piorar para receber{" "}
            <em className="not-italic" style={{ color: "#F3E5C0" }}>cuidado.</em>
          </h2>

          <p className="text-white/75 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Agende sua sessão e viva um momento de alívio, presença e bem-estar com
            atendimento profissional em São José, SC.
          </p>

          <WhatsAppButton
            label="Quero agendar pelo WhatsApp"
            variant="white"
            size="lg"
            className="mb-6"
          />

          <p className="text-white/50 text-sm">
            Atendimento com hora marcada. Fale diretamente pelo WhatsApp.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
