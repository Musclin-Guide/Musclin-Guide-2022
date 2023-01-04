import { Story, Meta } from '@storybook/react';
import { FeaturedSlideList } from '@components/FeaturedSlide/FeaturedSlideList';

export default {
  title: 'Components/FeaturedSlideList',
  component: FeaturedSlideList,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => <FeaturedSlideList />;

export const Primary = Template.bind({});
