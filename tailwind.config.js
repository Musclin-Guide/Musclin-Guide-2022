/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = {
  black: '#000000',
  white: '#ffffff',
  gray: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    850: '#303030',
    900: '#212121',
  },
  blue: {
    50: '#dceefb',
    100: '#b6e0fe',
    200: '#84c5f4',
    300: '#62b0e8',
    400: '#4098d7',
    500: '#2680c2',
    600: '#186faf',
    700: '#0f609b',
    800: '#0a558c',
    900: '#003e6b',
  },
  orange: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },
  amber: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  yellow: {
    50: '#fffbea',
    100: '#fff3c4',
    200: '#fce588',
    300: '#fadb5f',
    400: '#f7c948',
    500: '#f0b429',
    600: '#de911d',
    700: '#cb6e17',
    800: '#b44d12',
    900: '#8d2b0b',
  },
  neutral: {
    50: '#f0f4f8',
    100: '#d9e2ec',
    200: '#bcccdc',
    300: '#9fb3c8',
    400: '#829ab1',
    500: '#627d98',
    600: '#486581',
    700: '#334e68',
    800: '#243b53',
    900: '#102a43',
  },
};

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        primary: {
          ...colors.orange,
          default: colors.orange['500'],
        },
        secondary: {
          ...colors.amber,
          default: colors.amber['400'],
        },
        neutral: {
          ...colors.neutral,
          default: colors.neutral['900'],
        },
      },
      fontFamily: {
        pretendard: ['pretendard', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
