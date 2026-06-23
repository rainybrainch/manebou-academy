import type { Metadata } from 'next';
import { Dela_Gothic_One, Zen_Maru_Gothic } from 'next/font/google';
import './globals.css';
import LayoutShell from '@/components/LayoutShell';

const delaGothic = Dela_Gothic_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dela',
});

const zenMaru = Zen_Maru_Gothic({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-zen',
});

export const metadata: Metadata = {
  title: 'マネぼうジュニア',
  description: 'お金のことを楽しく学ぼう！小学生・中学生のためのお金の学校。',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'マネぼうジュニア',
  },
  openGraph: {
    title: 'マネぼうジュニア',
    description: 'お金のことを楽しく学ぼう！小学生・中学生のためのお金の学校。',
    url: 'https://manebou-juku.vercel.app',
    siteName: 'マネぼうジュニア',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'マネぼうジュニア',
    description: 'お金のことを楽しく学ぼう！小学生・中学生のためのお金の学校。',
  },
  other: {
    'mobile-web-app-capable': 'yes',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${delaGothic.variable} ${zenMaru.variable}`}>
      <head>
        <meta name="theme-color" content="#1A1A2E" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
      </head>
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
