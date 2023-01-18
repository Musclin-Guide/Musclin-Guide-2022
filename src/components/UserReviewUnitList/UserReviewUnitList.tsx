import { UserReviewUnitItem } from '@components/UserReviewUnitList/UserReviewUnitItem/UserReviewUnitItem';
import { HiOutlineHeart, HiOutlineStar, HiLink } from 'react-icons/hi';
import UserReviewUnitListStyle from '@components/UserReviewUnitList/UserReviewUnitList.module.css';

interface UserReviewUnitListProps {
  data: {
    heart: number;
    star: number;
    share: number;
  };
}

export const UserReviewUnitList = ({
  data,
}: UserReviewUnitListProps): JSX.Element => {
  return (
    <div className={UserReviewUnitListStyle.UserReviewUnitList}>
      {data.heart && (
        <UserReviewUnitItem
          icon={<HiOutlineHeart className={'fill-red-500'}></HiOutlineHeart>}
          count={81}
        ></UserReviewUnitItem>
      )}
      {data.star && (
        <UserReviewUnitItem
          icon={<HiOutlineStar className={'fill-yellow-300'}></HiOutlineStar>}
          count={13}
        ></UserReviewUnitItem>
      )}
      {data.share && (
        <UserReviewUnitItem
          icon={<HiLink className={'fill-neutral-700'}></HiLink>}
          count={43}
        ></UserReviewUnitItem>
      )}
    </div>
  );
};
