import type { Metadata } from "next";
import {
  Playfair_Display,
  Spectral,
  Parisienne,
  Tangerine,
  Great_Vibes,
  Allura,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["200", "300", "400", "700"],
});

const parisienne = Parisienne({
  variable: "--font-parisienne",
  subsets: ["latin"],
  weight: ["400"],
});

const tangerine = Tangerine({
  variable: "--font-tangerine",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Ola & Kacper - 28.08.2026",
  description: "Zapraszamy na nasz ślub w Dworku w Tomaszowicach",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${playfair.variable} ${spectral.variable} ${parisienne.variable} ${tangerine.variable} ${greatVibes.variable} ${allura.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
