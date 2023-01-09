import { Story, Meta } from '@storybook/react';
import { UserReviewUnitList } from '@components/UserReviewUnitList/UserReviewUnitList';
import { ReviewUnitListDummy } from '@components/UserReviewUnitList/ReviewUnitListDummy';

export default {
  title: 'Components/UserReviewUnitList',
  component: UserReviewUnitList,
} as Meta;

const Template: Story = (args) => (
  <UserReviewUnitList data={args.data}></UserReviewUnitList>
);

export const UserReviewUnitListAll = Template.bind({});
UserReviewUnitListAll.storyName = 'All Icon';
UserReviewUnitListAll.args = {
  data: ReviewUnitListDummy[0],
};

export const UserReviewUnitListTwo = Template.bind({});
UserReviewUnitListTwo.storyName = 'Two Icon';
UserReviewUnitListTwo.args = {
  data: ReviewUnitListDummy[1],
};

export const UserReviewUnitListOne = Template.bind({});
UserReviewUnitListOne.storyName = 'One Icon';
UserReviewUnitListOne.args = {
  data: ReviewUnitListDummy[2],
};
