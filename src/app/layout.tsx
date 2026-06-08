import type { Metadata } from 'next';
import './globals.css';
import LayoutShell from '@/components/LayoutShell';

export const metadata: Metadata = {
  title: 'Monebou Academy | マネぼうアカデミー',
  description: 'ゲームで遊んだら、経済がわかった。お金の知識を楽しく学べるオンライン学習プラットフォーム。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
