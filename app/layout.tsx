import "./globals.css";
import { Inter, Manrope } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "HITLAB | Precision Digital Identity",
  description:
    "Software development that you can trust. Engineering excellence delivered with mathematical intentionality.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
