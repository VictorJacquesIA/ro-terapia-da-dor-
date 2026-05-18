import type { Metadata } from "next";
import { Playfair_Display, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
});

const vietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-vietnam",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rô Terapia da Dor | Massoterapia e Terapias Integrativas em São José SC",
  description:
    "Agende sua sessão com Rosangela da Silva. Massoterapia, drenagem linfática, terapias integrativas e estética com atendimento humanizado em São José, SC.",
  keywords: [
    "massoterapia em São José SC",
    "terapia da dor",
    "drenagem linfática São José",
    "massagem relaxante",
    "massagem terapêutica",
    "terapias integrativas",
    "estética São José SC",
    "Rosangela da Silva",
  ],
  authors: [{ name: "Rosangela da Silva" }],
  creator: "Rô Terapia da Dor",
  metadataBase: new URL("https://roterapiadadordotcom.vercel.app"),
  openGraph: {
    title: "Rô Terapia da Dor | Alívio, bem-estar e cuidado humanizado",
    description:
      "Massoterapia, terapias integrativas e estética com atendimento personalizado em São José, SC.",
    type: "website",
    locale: "pt_BR",
    siteName: "Rô Terapia da Dor",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${vietnam.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
