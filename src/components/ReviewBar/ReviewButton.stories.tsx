import { Story, Meta } from '@storybook/react';
import { ReviewButton } from '@components/ReviewBar/ReviewButton';
import { addFigmaToken } from '@utils/addFigmaToken';
export default {
  title: 'Components/ReviewBar',
  component: ReviewButton,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => (
  <ReviewButton
    number={args.number}
    listName={args.listName}
    className={args.className}
    href={args.href}
  />
);

export const ReviewButtons = Template.bind({});
ReviewButtons.args = {
  number: 33,
  listName: '리뷰',
  className: '',
  href: './',
};

addFigmaToken(
  ReviewButtons,
  'https://www.figma.com/file/9Q9d6I31A1lMp11UMLZjA1/wireFrames(1st-Cycle)?node-id=105%3A15320&t=tUF156vV18R3Zxxr-4'
);
