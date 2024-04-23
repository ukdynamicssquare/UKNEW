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
    ZOHO_API : 'https://www.zohoapis.in/crm/v2',
    ZOHO_TOKEN: 'https://accounts.zoho.in/oauth/v2/token'
  }
}
 


module.exports = nextConfig
