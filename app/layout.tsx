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
  verification: {
    google: "4335047551907086", // <- tu código de verificación de Google
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">

      <head>
        <meta name="google-adsense-account" content="ca-pub-4335047551907086"/>
      </head>

      <body className="min-h-full flex flex-col">

        {children}

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 py-10 border-t mt-20">

          <div className="flex gap-6 justify-center flex-wrap">

            <a href="/about">About</a>

            <a href="/privacy-policy">Privacy Policy</a>

            <a href="/terms">Terms</a>

            <a href="/contact">Contact</a>

            <a href="/disclaimer">Disclaimer</a>

          </div>

        </footer>

      </body>

    </html>
  );
}