/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')(['react-icons']);
module.exports = {
  images: {
    domains: ['dummyimage.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: { plugins: { removeViewBox: false } },
          },
        },
      ],
    });
    return config;
  },
};
module.exports = withTM({});
