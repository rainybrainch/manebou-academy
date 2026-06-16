import { type Metadata } from 'next';
import StampClient from './StampClient';

export const metadata: Metadata = {
  title: 'スタンプカード | マネぼうアカデミー',
  description: 'マネぼうアカデミーのスタンプカード。講義を完了してスタンプを集めよう。',
};

interface Props {
  searchParams: Promise<{ admin?: string }>;
}

export default async function StampPage({ searchParams }: Props) {
  const params = await searchParams;
  const isAdmin = params.admin === 'manebou';

  return <StampClient isAdmin={isAdmin} />;
}
