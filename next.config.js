/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/portfolio-page",
  assetPrefix: "/portfolio-page"
}

module.exports = nextConfig
