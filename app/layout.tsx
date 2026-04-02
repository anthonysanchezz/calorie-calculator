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

<body>

{children}

<Script
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4335047551907086"
strategy="afterInteractive"
async
crossOrigin="anonymous"
/>

</body>

</html>
  );
}