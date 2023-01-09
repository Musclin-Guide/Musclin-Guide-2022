import { Story, Meta } from '@storybook/react';
import { Header } from '@components/Header/Header';
import { addFigmaToken } from '@utils/addFigmaToken';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => {
  return <Header />;
};

export const HEADER = Template.bind({});

addFigmaToken(
  HEADER,
  'https://www.figma.com/file/9Q9d6I31A1lMp11UMLZjA1/wireFrames(1st-Cycle)?node-id=14%3A7529&t=Omzb8UeOOSJQHskd-4'
);
