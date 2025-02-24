import "./globals.css";

import type { Metadata } from "next";
import { Montserrat, Rubik } from "next/font/google";

import Nav from "@/components/Nav";
import { cn } from "@/lib/utils";

const fontHeading = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
});

const fontSans = Rubik({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kolor Motip",
  description: "Lakiery Samochodowe Katowice F.H. Kolor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl"
      className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
