/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.storefrontier.com",
      "yt3.ggpht.com",
      "pbs.twimg.com",
      "th.bing.com",
      "cdn.sanity.io",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
