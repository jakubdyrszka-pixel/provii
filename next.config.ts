import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Rewrites for local development to redirect /api calls to the locally running backend
  // In production (Vercel), vercel.json handles the rewriting to api/index.py
  async rewrites() {
    return process.env.NODE_ENV === 'development'
      ? [
        {
          source: '/api/:path*',
          destination: 'http://127.0.0.1:8000/api/v1/:path*',
        },
      ]
      : [];
  },
};

export default nextConfig;
