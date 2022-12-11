import 'tailwindcss/tailwind.css';
import * as NextImage from 'next/image';

NextImage.defaultProps = {
  unoptimized: true,
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    exclude: ['role'],
  },
  a11y: {
    config: {
      rules: [
        {
          id: 'color-contrast',
          enabled: false,
        },
      ],
    },
  },
};
