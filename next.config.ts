import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        // pathname: '/dms/image/v2/**',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        port: '',
        // pathname: '/dms/image/v2/**',
      },
      {
        protocol: 'https',
        hostname: 'pronovix.com',
        port: '',
        // pathname: '/dms/image/v2/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        // pathname: '/dms/image/v2/**',
      },
      {
        protocol: 'https',
        hostname: 'www.fermicoding.com',
        port: '',
        // pathname: '/dms/image/v2/**',
      },
    ],
  },
};

export default nextConfig;
