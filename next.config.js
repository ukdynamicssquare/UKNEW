/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  output: "standalone",

  images: {
    formats: ["image/avif", "image/webp"],
    domains: [
      "blognew.dynamicssquare.co.uk",
      "blognew.dynamicssquare.com",
      "cdn.gemsroot.com"
    ],
    // If image optimization costs are too high, uncomment:
    // unoptimized: true, 
  },

  env: {
    BACKEND_URL: "https://blognew.dynamicssquare.co.uk",
  },

  eslint: {
    ignoreDuringBuilds: true,
  },


};

module.exports = nextConfig;
