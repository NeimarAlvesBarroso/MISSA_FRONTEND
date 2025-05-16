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
  title: "MISSA - Museu da Imagem e do Som de Sabinópolis",
  description: "Aplicativo cultural e comunitário para acesso ao acervo digital do MISSA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}>
        <main className="min-h-screen max-w-4xl mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
