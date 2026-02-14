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
  title: "Modern-TCG",
  description: "The first Trading Card Game with NFC crypto-engine cards, Unity mobile gameplay, and AI companions powered by ElizaOS. Experience the future of collectible card games.",
  keywords: ["TCG", "Trading Card Game", "NFC", "Blockchain", "Crypto", "AI", "ElizaOS", "Unity", "Elemental Beasts"],
  openGraph: {
    title: "Modern-TCG",
    description: "NFC cards with crypto-engine, Unity mobile game, and AI companions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
