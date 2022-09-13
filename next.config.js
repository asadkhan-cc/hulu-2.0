/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["links.papareact.com", "img.tmdb.org"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
