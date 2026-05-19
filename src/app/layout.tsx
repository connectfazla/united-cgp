import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "United Corporation | Marine Engineering & Offshore Solutions",
    template: "%s | United Corporation",
  },
  description:
    "Bangladesh's leading marine engineering, ship repair, civil construction, power generation, and navigation solutions provider. ISO 9001 certified, serving Asia & Middle East.",
  keywords: [
    "marine engineering Bangladesh",
    "ship repair Chittagong",
    "jetty construction",
    "power generation marine",
    "hydrography equipment",
    "marine navigation",
    "United Corporation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "United Corporation",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${openSans.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
