import type { Metadata } from "next";
import { Playfair_Display, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { BASE_URL } from "@/data/site";

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
  title: "Rô Espaço Terapêutico | Massoterapia e Terapias Integrativas em São José SC",
  description:
    "Agende sua sessão com Rosangela da Silva. Massoterapia, drenagem linfática, reflexologia e terapias integrativas com atendimento humanizado em São José, SC — Grande Florianópolis.",
  keywords: [
    "massoterapia em São José SC",
    "espaço terapêutico São José",
    "drenagem linfática São José",
    "massagem relaxante São José SC",
    "massagem terapêutica São José",
    "reflexologia podal São José",
    "terapias integrativas Grande Florianópolis",
    "massoterapeuta Praia Comprida",
    "drenagem linfática gestantes São José",
    "terapia da dor São José SC",
    "estética São José SC",
    "Rosangela da Silva massoterapeuta",
  ],
  authors: [{ name: "Rosangela da Silva" }],
  creator: "Rô Espaço Terapêutico",
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Rô Espaço Terapêutico | Alívio, bem-estar e cuidado humanizado",
    description:
      "Massoterapia, drenagem linfática, reflexologia e terapias integrativas com atendimento personalizado em São José, SC.",
    type: "website",
    locale: "pt_BR",
    siteName: "Rô Espaço Terapêutico",
    url: BASE_URL,
    images: [
      {
        url: "/images/rosangela.webp",
        width: 1200,
        height: 630,
        alt: "Rosangela da Silva — Rô Espaço Terapêutico, São José SC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rô Espaço Terapêutico | Massoterapia em São José SC",
    description:
      "Massoterapia, drenagem linfática e terapias integrativas com atendimento humanizado em São José, SC.",
    images: ["/images/rosangela.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
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
