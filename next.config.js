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
    // If image optimization costs are too high, you can uncomment:
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
      // Cache JS/CSS chunks forever
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Cache optimized images forever
      {
        source: "/_next/image(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Cache static pages, but allow revalidation at the edge
      {
        source: "/(.*)",
        headers: [
          { 
            key: "Cache-Control", 
            value: "public, max-age=0, s-maxage=31536000, stale-while-revalidate" 
          },
        ],
      },
      // ✅ Local images in /public refresh every deploy (not forever cached)
      {
        source: "/images/(.*)", 
        headers: [
          { 
            key: "Cache-Control", 
            value: "public, max-age=0, s-maxage=86400" // cache 1 day at edge
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
