import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Changed from Geist
import "./globals.css";
import clsx from "clsx";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mindssparc | Enterprise Consulting",
  description: "Strategic insights for the digital age. Mindssparc delivers enterprise-grade consulting solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(inter.variable, "antialiased font-sans bg-background text-foreground")}
      >
        {children}
      </body>
    </html>
  );
}
