import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import { HiArrowDown } from 'react-icons/hi';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'Primary',
  children: 'Button Text',
};

export const White = Template.bind({});
White.args = {
  color: 'White',
  children: 'Button Text',
};

export const IconLeading = Template.bind({});
IconLeading.args = {
  color: 'Primary',
  children: 'Button Text',
  icon: {
    type: 'Leading',
    element: <HiArrowDown />,
  },
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  color: 'Primary',
  children: 'Button Text',
  icon: {
    type: 'Only',
    element: <HiArrowDown />,
  },
};
