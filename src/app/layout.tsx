import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'leaflet/dist/leaflet.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Safety Shadow — A Privacy-First Silent Guardian',
  description: 'Not just an alarm. A guardian that notices. Safety Shadow is a ₹1,500 wrist band that detects route deviations and falls, checks in with a silent buzz, and hands families and police a "Last Safe Point" instead of "Location Unknown".',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-black text-white antialiased selection:bg-zinc-300 selection:text-black`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
