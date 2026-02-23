import Script from 'next/script';
import LoaderController from '../components/LoaderController';
import './globals.css';

export const metadata = {
  title: 'GBfolio',
  description: 'Portfolio website',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="example bg-[#11111a] overflow-x-hidden">
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        <LoaderController />
        {children}
        <Script
          src="https://kit.fontawesome.com/0b20950690.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
