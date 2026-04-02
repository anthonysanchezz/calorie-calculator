import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Calculadora de calorías",
  description: "Calcula tus calorías para perder peso, mantener o ganar masa muscular",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {children}

        {/* Script de Google AdSense */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js?client=ca-pub-4335047551907086"
          strategy="afterInteractive"
          async
          crossOrigin="anonymous"
        />

      </body>
    </html>
  );
}