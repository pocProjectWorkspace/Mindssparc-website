import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { clsx } from 'clsx';
import { CookieConsent } from '@/components/ui/CookieConsent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MindsSparc | Enterprise Consulting',
  description: 'Global strategic consulting firm specializing in security, intelligence, and search.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'bg-background text-foreground antialiased')}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
