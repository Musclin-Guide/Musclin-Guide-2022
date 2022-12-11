/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$$/i,
      issuer: /\.[jt]sx?$/i,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

// module.exports = nextConfig;
