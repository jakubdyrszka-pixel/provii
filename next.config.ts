
const nextConfig: NextConfig = {
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
