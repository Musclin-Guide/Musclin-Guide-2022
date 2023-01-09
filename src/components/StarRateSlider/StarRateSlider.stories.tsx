import { Story, Meta } from '@storybook/react';
import { StarRateSlider } from '@components/StarRateSlider/StarRateSlider';

export default {
  title: 'Components/StarRateSlider',
  component: StarRateSlider,
} as Meta;

const Template: Story = (args) => (
  <StarRateSlider rate={args.rate}></StarRateSlider>
);

export const StarRateZero = Template.bind({});
StarRateZero.storyName = 'rate=0';
StarRateZero.args = {
  rate: 0,
};
export const StarRateOne = Template.bind({});
StarRateOne.storyName = 'rate=1';
StarRateOne.args = {
  rate: 1,
};
export const StarRateTwo = Template.bind({});
StarRateTwo.storyName = 'rate=2';
StarRateTwo.args = {
  rate: 2,
};
export const StarRateThree = Template.bind({});
StarRateThree.storyName = 'rate=3';
StarRateThree.args = {
  rate: 3,
};
export const StarRateFour = Template.bind({});
StarRateFour.storyName = 'rate=4';
StarRateFour.args = {
  rate: 4,
};
export const StarRateFive = Template.bind({});
StarRateFive.storyName = 'rate=5';
StarRateFive.args = {
  rate: 5,
};
