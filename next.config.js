/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['tailwindui.com', 'res.cloudinary.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
