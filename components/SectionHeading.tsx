interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  tag?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  tag,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""}`}>
      {tag && (
        <div className={`flex items-center gap-2.5 mb-5 ${centered ? "justify-center" : ""}`}>
          <span className="w-8 h-px bg-gold" />
          <span className={`text-xs font-semibold tracking-[0.16em] uppercase ${light ? "text-gold-soft" : "text-gold"}`}>
            {tag}
          </span>
          <span className="w-8 h-px bg-gold" />
        </div>
      )}
      <h2
        className={`font-playfair text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-5 text-balance ${
          light ? "text-white" : "text-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg leading-relaxed max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-white/75" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
