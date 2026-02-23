import { Manrope, Space_Grotesk } from 'next/font/google';
import FloatingRails from '../components/FloatingRails';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Gagan Baghel | Portfolio',
    template: '%s | Gagan Baghel',
  },
  description:
    'Fullstack developer portfolio focused on high-impact UI, frontend engineering, and product experiences.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a101b',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        <FloatingRails />
        {children}
      </body>
    </html>
  );
}
