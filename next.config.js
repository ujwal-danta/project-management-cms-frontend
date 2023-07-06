/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  env: {
    EMAIL: process.env.EMAIL,
    PASSWORD : process.env.PASSWORD
  },
}

module.exports = nextConfig
