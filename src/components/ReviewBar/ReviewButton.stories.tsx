import { Story, Meta } from '@storybook/react';
import { ReviewButton } from '@components/ReviewBar/ReviewButton';
import { addFigmaToken } from '@utils/addFigmaToken';
export default {
  title: 'Components/ReviewBar',
  component: ReviewButton,
  argTypes: { onClick: { action: 'clicked' } },
} as unknown as Meta;

const Template: Story = () => <ReviewButton />;

export const ButtonStory = Template.bind({});
