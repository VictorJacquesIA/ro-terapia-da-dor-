import Image from "next/image";
import { Award, CheckCircle, ArrowDown } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { trustBadges } from "@/data/site";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen md:h-screen overflow-hidden bg-cream flex items-center"
      aria-label="Apresentação principal"
    >
      {/* Organic background shapes */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-primary-soft opacity-60 blur-3xl pointer-events-none"
        style={{ transform: "translate(30%, -35%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gold-light opacity-50 blur-3xl pointer-events-none"
        style={{ transform: "translate(-25%, 30%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 container-content w-full pt-20 pb-8 md:pt-24 md:pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 xl:gap-12 items-center">

          {/* ── Left: Content ── */}
          <div className="order-2 lg:order-1">

            {/* Gold tag — centered on mobile */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <span className="w-8 h-px bg-gold lg:hidden" aria-hidden="true" />
              <span className="w-10 h-px bg-gold hidden lg:block" aria-hidden="true" />
              <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
                Massoterapia em São José
              </span>
              <span className="w-8 h-px bg-gold lg:hidden" aria-hidden="true" />
            </div>

            {/* Headline */}
            <h1 className="font-playfair text-[1.9rem] sm:text-4xl xl:text-[2.85rem] font-bold text-dark leading-[1.2] mb-4 text-center lg:text-left text-balance">
              Terapias personalizadas para{" "}
              <em className="text-primary not-italic">aliviar dores</em>,{" "}
              reduzir tensões e cuidar do seu bem-estar.
            </h1>

            {/* Subtitle */}
            <p className="text-muted text-base leading-relaxed mb-2.5 text-center lg:text-left mx-auto lg:mx-0 max-w-[22rem] lg:max-w-lg">
              Massoterapia, drenagem linfática e terapias integrativas com
              atendimento humanizado, escuta cuidadosa e técnicas adaptadas ao
              que você está sentindo hoje.
            </p>

            {/* Support text */}
            <p className="text-muted/70 text-sm leading-relaxed mb-6 flex items-start justify-center lg:justify-start gap-2.5 text-center lg:text-left mx-auto lg:mx-0 max-w-[20rem] lg:max-w-md">
              <span className="w-4 h-px bg-gold shrink-0 mt-2" aria-hidden="true" />
              Atendimento com hora marcada em um espaço preparado para você
              relaxar e se cuidar.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <WhatsAppButton
                label="Quero agendar pelo WhatsApp"
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
              />
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 text-primary font-semibold py-3.5 text-sm underline underline-offset-4 hover:text-primary-dark transition-colors duration-200 sm:no-underline sm:border-2 sm:border-primary/25 sm:px-6 sm:rounded-full sm:hover:border-primary sm:hover:bg-primary-soft sm:hover:no-underline sm:active:scale-[0.97]"
              >
                Ver tratamentos disponíveis
              </a>
            </div>

            {/* Trust badges — centered on mobile */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {trustBadges.map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gold/25 px-3 py-1.5 rounded-full shadow-soft"
                >
                  <CheckCircle className="w-3 h-3 text-gold shrink-0" aria-hidden="true" />
                  <span className="text-dark text-xs font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Image ── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">

            {/* ── Mobile image block ── */}
            <div className="relative w-full max-w-[320px] block lg:hidden pb-6">
              <div
                className="relative w-full overflow-hidden rounded-[24px] shadow-hero"
                style={{
                  aspectRatio: "4 / 3.2",
                  background: "linear-gradient(155deg, #FFFDF9 0%, #F8EAF0 55%, #FAF0D7 100%)",
                }}
              >
                <Image
                  src="/images/rosangela.webp"
                  alt="Rosangela da Silva — massoterapeuta com +11 anos de experiência em São José, SC"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "50% 60%" }}
                  priority
                  sizes="95vw"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F8EAF0]/60 to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* Authority badge — flutuando entre a imagem e o fundo */}
              <div
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white rounded-full shadow-card px-5 py-2.5 border border-border flex items-center gap-2.5"
                aria-label="Mais de 11 anos cuidando de pessoas"
              >
                <div className="w-7 h-7 rounded-full bg-gold-soft flex items-center justify-center shrink-0">
                  <Award className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
                </div>
                <p className="font-playfair text-sm font-bold text-dark leading-none">+11 anos</p>
                <span className="text-muted text-xs">cuidando de pessoas</span>
              </div>
            </div>

            {/* ── Desktop image block ── */}
            <div className="relative w-full max-w-[340px] xl:max-w-[390px] hidden lg:block">

              {/* Decorative rings */}
              <div
                className="absolute rounded-[48px] border border-gold/15 pointer-events-none"
                style={{ inset: "-10px" }}
                aria-hidden="true"
              />
              <div
                className="absolute rounded-[56px] border border-primary/10 pointer-events-none"
                style={{ inset: "-22px" }}
                aria-hidden="true"
              />

              {/* Image card */}
              <div
                className="relative w-full overflow-hidden rounded-[40px] shadow-hero"
                style={{
                  aspectRatio: "4 / 4.25",
                  background: "linear-gradient(155deg, #FFFDF9 0%, #F8EAF0 55%, #FAF0D7 100%)",
                }}
              >
                <div
                  className="absolute bottom-0 left-0 right-0"
                  style={{ aspectRatio: "4 / 5" }}
                >
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at 50% 90%, rgba(182,92,122,0.18) 0%, transparent 58%)",
                    }}
                    aria-hidden="true"
                  />
                  <Image
                    src="/images/hero-pc.webp"
                    alt="Rosangela da Silva — massoterapeuta com +11 anos de experiência em São José, SC"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 80%" }}
                    priority
                    sizes="(max-width: 1280px) 340px, 390px"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F8EAF0]/50 to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Authority badge */}
              <div
                className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-card px-5 py-3.5 border border-border"
                aria-label="Mais de 11 anos cuidando de pessoas"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-soft flex items-center justify-center shrink-0">
                    <Award className="w-[18px] h-[18px] text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-playfair text-lg font-bold text-dark leading-none">+11 anos</p>
                    <p className="text-muted text-[11px] leading-tight mt-0.5">cuidando de<br />pessoas</p>
                  </div>
                </div>
              </div>

              {/* Top-right gold accent */}
              <div
                className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gold-soft border border-gold/30 shadow-gold pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center pointer-events-none"
                aria-hidden="true"
              >
                <span className="text-gold text-lg font-playfair">✦</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-35"
        aria-hidden="true"
      >
        <span className="text-muted text-[10px] tracking-widest uppercase font-medium">
          Explore
        </span>
        <ArrowDown className="w-4 h-4 text-muted animate-bounce" />
      </div>
    </section>
  );
}
