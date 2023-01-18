import { Story, Meta } from '@storybook/react';
import { TabBar } from '@components/TabBar/TabBar';
import { addFigmaToken } from '@utils/addFigmaToken';
export default {
  title: 'Components/TabBar',
  component: TabBar,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = () => <TabBar></TabBar>;

export const Primary = Template.bind({});

addFigmaToken(
  Primary,
  'https://www.figma.com/file/9Q9d6I31A1lMp11UMLZjA1/wireFrames(1st-Cycle)?node-id=14%3A7597&t=c3Zh0QDFcLof7m1Y-4'
);
