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
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: 'Gagan Baghel | Software Engineer',
    template: '%s | Gagan Baghel',
  },
  description:
    'Portfolio of Gagan Baghel, a Full-Stack Software Engineer specializing in scalable web systems, React, Next.js, and high-performance UI.',
  keywords: ['Gagan Baghel', 'Software Engineer', 'Full-Stack Developer', 'React Developer', 'Next.js Developer', 'Frontend', 'Backend', 'Pune'],
  authors: [{ name: 'Gagan Baghel' }],
  creator: 'Gagan Baghel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Gagan Baghel | Software Engineer',
    description: 'Portfolio of Gagan Baghel, a Full-Stack Software Engineer specializing in scalable web systems, React, Next.js, and high-performance UI.',
    siteName: 'Gagan Baghel Portfolio',
    images: [
      {
        url: '/appScreenshot.png',
        width: 1200,
        height: 630,
        alt: 'Gagan Baghel Portfolio Screenshot',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gagan Baghel | Software Engineer',
    description: 'Portfolio of Gagan Baghel, a Full-Stack Software Engineer specializing in scalable web systems, React, Next.js, and high-performance UI.',
    images: ['/appScreenshot.png'],
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-icon.png',
  },
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
