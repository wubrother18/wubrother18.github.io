import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { nunito } from './fonts';

export const metadata: Metadata = {
  metadataBase: new URL('https://wakuwakulab.example.com'),
  title: {
    default: 'WakuWaku Lab',
    template: '%s | WakuWaku Lab',
  },
  description: '探索未知，把驚喜裝進你的口袋。WakuWaku Lab——專注於開發讓人期待、微笑、想探索更多的 App。',
  keywords: [
    'WakuWaku Lab',
    'App',
    'Portfolio',
    'Next.js',
    'Tailwind CSS',
  ],
  openGraph: {
    title: 'WakuWaku Lab',
    description: '探索未知，把驚喜裝進你的口袋。WakuWaku Lab——專注於開發讓人期待、微笑、想探索更多的 App。',
    url: 'https://wakuwakulab.example.com',
    siteName: 'WakuWaku Lab',
    images: [
      { url: '/images/og.png', width: 1200, height: 630, alt: 'WakuWaku Lab' },
    ],
    locale: 'zh_TW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WakuWaku Lab',
    description: '探索未知，把驚喜裝進你的口袋。WakuWaku Lab——專注於開發讓人期待、微笑、想探索更多的 App。',
    images: ['/images/og.png'],
    creator: '@wakuwakulab',
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body className={`${nunito.className} min-h-screen flex flex-col relative`}>
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <Header />
        <main className="flex-1 container py-10 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

