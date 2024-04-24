/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  output: "standalone",
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['blognew.dynamicssquare.co.uk']
   },
   env:{
    BACKEND_URL:'https://blognew.dynamicssquare.co.uk',
    ZOHO_API_BASE_URL : 'https://www.zohoapis.in/crm/v2',
    ZOHO_TOKEN: 'https://accounts.zoho.in/oauth/v2/token',
    ZOHO_CLIENT_ID : '1000.RCESGIFMS3K5CP9EDQTCLP7VH9081W',
    ZOHO_CLIENT_SECRET : 'aacee8f5995bab8e889ba09fe80766d3cf2451a389',
  }
}
 


module.exports = nextConfig
