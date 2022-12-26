import { Story, Meta } from '@storybook/react';
import { UserReviewUnitItem } from '@components/UserReviewUnitList/UserReviewUnitItem/UserReviewUnitItem';
import { HiOutlineHeart, HiOutlineStar } from 'react-icons/hi';

export default {
  title: 'Components/UserReviewUnitList/UserReviewUnitItem',
  component: UserReviewUnitItem,
} as Meta;

const Template: Story = (args) => (
  <UserReviewUnitItem icon={args.icon} count={args.count}></UserReviewUnitItem>
);

export const UserReviewUnitItemStar = Template.bind({});
UserReviewUnitItemStar.storyName = 'icon=star';
UserReviewUnitItemStar.args = {
  icon: <HiOutlineStar className={'fill-yellow-300'}></HiOutlineStar>,
  count: 81,
};

export const UserReviewUnitItemHeart = Template.bind({});
UserReviewUnitItemHeart.storyName = 'icon=heart';
UserReviewUnitItemHeart.args = {
  icon: <HiOutlineHeart className={'fill-red-500'}></HiOutlineHeart>,
  count: 81,
};
