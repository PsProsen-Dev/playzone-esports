import type { Metadata } from "next";
import { Black_Ops_One, Rajdhani } from "next/font/google";
import "./globals.css";

const display = Black_Ops_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Rajdhani({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PlayZone eSports — A Esports Community",
  description:
    "PlayZone eSports organizes official BGMI tournaments — free twice a week and paid T2/T3. Every custom room is live streamed on YouTube.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-pz-black text-white font-body antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
