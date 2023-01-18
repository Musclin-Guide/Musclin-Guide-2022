import { Story, Meta } from '@storybook/react';
import { ReviewBar } from '@components/ReviewBar/ReviewBar';
import { addFigmaToken } from '@utils/addFigmaToken';
export default {
  title: 'Components/ReviewBar',
  component: ReviewBar,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => (
  <>
    <ReviewBar
      testNumber={args.testNumber}
      testListName={args.testListName}
      testNumber2={args.testNumber2}
      testListName2={args.testListName2}
      testNumber3={args.testNumber3}
      testListName3={args.testListName3}
    />
  </>
);

export const ReviewBarPrimary = Template.bind({});
