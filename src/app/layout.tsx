import type { Metadata } from 'next';
import './globals.css';
import LayoutShell from '@/components/LayoutShell';

export const metadata: Metadata = {
  title: 'Monebou Academy | マネぼうアカデミー',
  description: 'ゲームで遊んだら、経済がわかった。お金の知識を楽しく学べるオンライン学習プラットフォーム。',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'マネぼう',
  },
  openGraph: {
    title: 'Monebou Academy | マネぼうアカデミー',
    description: 'ゲームで遊んだら、経済がわかった。お金の基本から資産形成まで楽しく学ぼう。',
    url: 'https://manebou-juku.vercel.app',
    siteName: 'Monebou Academy',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Monebou Academy',
    description: 'ゲームで遊んだら、経済がわかった。お金の知識を楽しく学ぼう。',
  },
  other: {
    'mobile-web-app-capable': 'yes',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta name="theme-color" content="#1A1A2E" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
