import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Renta Consultorios Médicos Puerto Vallarta | Madeira Medical Group",
  description:
    "Consultorios médicos modernos en renta en Puerto Vallarta, Jalisco. Ubicados en Versalles, la zona con mayor densidad médica. Secretaria incluida. Último consultorio disponible.",
  keywords: [
    "renta consultorios médicos Puerto Vallarta",
    "consultorios en renta Puerto Vallarta",
    "Madeira Medical Group",
    "consultorio médico Versalles Puerto Vallarta",
    "renta consultorio médico Jalisco",
    "turismo médico Puerto Vallarta",
  ],
  openGraph: {
    title: "Renta Consultorios Médicos Puerto Vallarta | Madeira Medical Group",
    description:
      "Consultorios modernos en la zona con mayor densidad médica de Puerto Vallarta. Secretaria e infraestructura incluidas.",
    type: "website",
    locale: "es_MX",
    siteName: "Madeira Medical Group",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://madeiramedicalgroup.com/Renta-Consultorios-medicos-puerto-vallarta",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
