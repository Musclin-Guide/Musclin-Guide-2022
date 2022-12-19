import 'tailwindcss/tailwind.css';
import '@styles/globals.css';
import * as NextImage from 'next/image';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import ko from 'axe-core/locales/ko.json';
import globalDecorator from './decorators';
import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    exclude: ['role'],
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  a11y: {
    config: {
      locale: ko,
      rules: [
        {
          id: 'color-contrast',
          enabled: false,
        },
      ],
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  darkMode: {
    dark: { ...themes.dark, appBg: 'black' },
  },
};
NextImage.defaultProps = {
  unoptimized: true,
};

export const globalTypes = {
  darkMode: true,
};

export const decorators = globalDecorator;
