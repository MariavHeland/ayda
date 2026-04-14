import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"], weight: ["300","400","500","600"],
  style: ["normal","italic"], variable: "--font-cormorant", display: "swap",
});

export const metadata: Metadata = {
  title: "AYDA — Every budget. Every territory. Every incentive.",
  description: "Production finance intelligence across 31 European territories. Part of DA SUITE.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={cormorant.variable}><body>{children}</body></html>;
}
