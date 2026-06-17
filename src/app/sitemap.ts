import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://manebou-juku.vercel.app';
  return [
    { url: base,                   changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/courses`,      changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/news`,         changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${base}/glossary`,     changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/questions`,    changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/progress`,     changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/stamp`,        changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/manual`,       changeFrequency: 'monthly', priority: 0.4 },
  ];
}
