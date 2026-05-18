import { Star } from "lucide-react";
import { testimonials, siteConfig } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";
import AnimateOnScroll from "@/components/AnimateOnScroll";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} de 5 estrelas`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-gold text-gold" aria-hidden="true" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #FBF7F2 0%, #F8EAF0 100%)" }}
      aria-labelledby="testimonials-title"
    >
      <div className="container-content">
        <AnimateOnScroll>
          <SectionHeading
            tag="Depoimentos"
            title="Quem já recebeu esse cuidado recomenda"
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={i} delay={i + 1} className="h-full">
              <figure className="group h-full bg-white rounded-3xl p-7 shadow-card border border-border hover:shadow-card-hover transition-all duration-300 flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <StarRating count={t.stars} />
                  {/* Decorative quote mark */}
                  <span
                    className="font-playfair text-5xl text-gold/20 leading-none font-bold -mt-2 select-none"
                    aria-hidden="true"
                  >
                    &rdquo;
                  </span>
                </div>

                <blockquote className="flex-1 mb-5">
                  <p className="text-dark text-sm leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>

                <figcaption className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-8 h-8 rounded-full bg-primary-soft flex items-center justify-center shrink-0">
                    <span className="text-primary text-xs font-playfair font-bold" aria-hidden="true">
                      {t.author.charAt(0)}
                    </span>
                  </div>
                  <span className="text-muted text-xs font-medium">{t.author}</span>
                </figcaption>
              </figure>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Trust indicators */}
        <AnimateOnScroll>
          <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
            {[
              { value: "11", label: "anos de experiência" },
              { value: "100%", label: "atendimento humanizado" },
              { value: "★ ★ ★ ★ ★", label: "feedbacks reais" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center bg-white rounded-2xl p-4 border border-border shadow-soft"
              >
                <p className="font-playfair text-xl font-bold text-primary mb-1 leading-none">
                  {stat.value}
                </p>
                <p className="text-xs text-muted leading-tight mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted mt-8">
            Mais feedbacks reais no Instagram{" "}
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
              aria-label={`Visitar Instagram ${siteConfig.instagram}`}
            >
              {siteConfig.instagram}
            </a>
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
