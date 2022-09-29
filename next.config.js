/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL: process.env.API_URL,
    INFURA_API_KEY: process.env.INFURA_API_KEY,
  }
}

module.exports = nextConfig
