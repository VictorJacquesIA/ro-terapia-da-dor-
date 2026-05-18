const WHATSAPP_DIRECT = "https://wa.me/5548999797222";
const WHATSAPP_SHORT = "https://wa.link/yotbbs";
const DEFAULT_MESSAGE = "Olá, Rosangela! Gostaria de agendar uma sessão.";

export function getWhatsAppUrl(message: string = DEFAULT_MESSAGE): string {
  const encoded = encodeURIComponent(message);
  return `${WHATSAPP_DIRECT}?text=${encoded}`;
}

export const whatsAppShortUrl = WHATSAPP_SHORT;
export const whatsAppUrl = getWhatsAppUrl();
