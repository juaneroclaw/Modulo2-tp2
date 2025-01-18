import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        protocol: 'https',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig