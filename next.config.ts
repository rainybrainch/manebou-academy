import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [390, 768, 1080],
    imageSizes: [48, 96, 128, 256],
  },
};

export default nextConfig;
