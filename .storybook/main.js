const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-dark-mode',
    'storybook-addon-next',
    'storybook-addon-next-router',
    'storybook-addon-designs',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    }),
      // console.log(config.module.rules);
      (config.resolve.alias = {
        ...config.resolve.alias,
        '@components/*': path.resolve('src/components/*'),
        '@hooks/*': path.resolve('src/hooks/*'),
        '@pages/*': path.resolve('src/pages/*'),
        '@styles/*': path.resolve('styles/*'),
        '@public/*': path.resolve('public/*'),
      });

    return config;
  },
};
