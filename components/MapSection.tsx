import { MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function MapSection() {
  return (
    <section className="bg-cream" aria-label="Localização">
      {/* Header */}
      <div className="container-content py-12 text-center">
        <div className="flex items-center justify-center gap-2.5 mb-4">
          <span className="w-8 h-px bg-gold" aria-hidden="true" />
          <span className="text-gold text-xs font-semibold tracking-[0.16em] uppercase">
            Onde estamos
          </span>
          <span className="w-8 h-px bg-gold" aria-hidden="true" />
        </div>
        <div className="flex items-center justify-center gap-2 text-muted text-sm">
          <MapPin className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
          <address className="not-italic">{siteConfig.address} — {siteConfig.cep}</address>
        </div>
      </div>

      {/* Map */}
      <div className="w-full h-[220px] md:h-[300px] overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.599408696644!2d-48.6282966!3d-27.6059466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273739c974b9fd%3A0xf22a957c87834103!2sR%C3%B4%20Espa%C3%A7o%20Terap%C3%AAutico%20%7C%20Massoterapia%20na%20Grande%20Florian%C3%B3polis!5e0!3m2!1spt-BR!2sbr!4v1780758289859!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização da Rô Espaço Terapêutico no Google Maps"
        />
      </div>
    </section>
  );
}
