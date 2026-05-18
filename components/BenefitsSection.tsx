import { Check } from "lucide-react";
import { benefits } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function BenefitsSection() {
  return (
    <section
      className="section-padding"
      style={{ background: "linear-gradient(160deg, #FBF7F2 0%, #F8EAF0 60%, #FBF7F2 100%)" }}
      aria-labelledby="benefits-title"
    >
      <div className="container-content">
        <AnimateOnScroll>
          <SectionHeading
            tag="Resultados"
            title="Benefícios que vão além do relaxamento"
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <AnimateOnScroll key={benefit} delay={(index % 3) + 1} className="h-full">
              <div className="group h-full flex items-start gap-4 bg-white rounded-2xl p-5 border border-border shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-300">
                <div className="shrink-0 mt-0.5 w-7 h-7 rounded-full bg-gold-soft border border-gold/25 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} aria-hidden="true" />
                </div>
                <p className="text-dark text-sm font-medium leading-relaxed">{benefit}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
