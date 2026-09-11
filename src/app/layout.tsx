import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import { Header } from "@/components/navigation/Header";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ANGHA | Modern Fashion & Editorial Apparel",
  description: "Curated modern fashion and editorial clothing collection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-angha-ivory text-angha-charcoal">
        <Header />
        <div className="flex-1 flex flex-col">{children}</div>
      </body>
    </html>
  );
}
