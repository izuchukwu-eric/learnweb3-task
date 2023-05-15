/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ipfs.io", "tokens.buildspace.so", "nft-cdn.alchemy.com"],
  },
}

module.exports = nextConfig
