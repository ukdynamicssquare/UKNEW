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

  // ✅ Add cache headers
  async headers() {
    return [
      // JS & CSS chunks → cache for 1 year, never revalidate
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Optimized images (from next/image) → cache 1 year
      {
        source: "/_next/image(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Public static assets like /favicon.ico, /robots.txt, /public/images/*
      {
        source: "/(.*)\\.(png|jpg|jpeg|gif|ico|svg|css|js|woff2|woff|ttf|eot)$",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // HTML pages → short cache in browser, long at edge (so redeploy is instant)
      {
        source: "/(.*)",
        headers: [
          { 
            key: "Cache-Control", 
            value: "public, max-age=0, s-maxage=86400, stale-while-revalidate" 
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
