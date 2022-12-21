import { Story } from '@storybook/react';

const figmaAccessToken: string = process.env.FIGMA_PERSONAL_ACCESS_TOKEN || '';
export const addFigmaToken = (token: Story, URL: string) => {
  token.parameters = {
    design: {
      type: 'figspec',
      url: URL,
      accessToken: figmaAccessToken,
    },
  };
};
