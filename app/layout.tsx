import type { Metadata } from "next";
import { Bodoni_Moda, Jost, Fira_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"
import Footer from "@/components/Footer";

const bodoni = Bodoni_Moda({
  variable: "--font-header",
  subsets: ["latin"],
  weight: ["400", "700"]
});


const jost = Jost({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "600"],
});

const firaMono = Fira_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Tech Edu app",
  description: "Python focused tech mvp app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen antialiased ${bodoni.variable} ${jost.variable} ${firaMono.variable}`}
      >
        <Header />
        <main className="flex flex-col flex-1 bg-primary-light">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
