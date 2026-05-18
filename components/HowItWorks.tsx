import { steps } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function HowItWorks() {
  return (
    <section className="section-padding bg-white" aria-labelledby="how-title">
      <div className="container-content">
        <AnimateOnScroll>
          <SectionHeading
            tag="Como funciona"
            title="Como funciona o atendimento"
            subtitle="Um processo simples, acolhedor e pensado para que você se sinta segura desde o primeiro contato."
          />
        </AnimateOnScroll>

        <div className="relative max-w-4xl mx-auto">
          {/* Desktop connector line */}
          <div
            className="hidden md:block absolute top-[2.6rem] left-[calc(16.66%-1px)] right-[calc(16.66%-1px)] h-px bg-gradient-to-r from-gold/10 via-gold/40 to-gold/10 pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <AnimateOnScroll key={step.number} delay={index + 1}>
                {/* Mobile: timeline style */}
                <div className="relative flex md:flex-col md:items-center md:text-center gap-5 md:gap-0">
                  {/* Mobile vertical line */}
                  {index < steps.length - 1 && (
                    <div
                      className="md:hidden absolute left-[1.375rem] top-[4.5rem] bottom-[-2rem] w-px bg-gold/20"
                      aria-hidden="true"
                    />
                  )}

                  {/* Number circle */}
                  <div className="relative z-10 shrink-0 md:mb-6">
                    <div className="w-11 h-11 rounded-full bg-white border-2 border-gold/40 shadow-gold flex items-center justify-center">
                      <span className="font-playfair text-sm font-bold text-gold leading-none">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pb-8 md:pb-0">
                    <h3 className="font-playfair text-xl font-bold text-dark mb-2.5 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed max-w-xs md:mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        <AnimateOnScroll className="flex justify-center mt-14">
          <WhatsAppButton label="Agendar pelo WhatsApp" variant="primary" size="lg" />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
