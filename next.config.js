/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['screenshotapi-dot-net.storage.googleapis.com']
  }
}

module.exports = nextConfig
