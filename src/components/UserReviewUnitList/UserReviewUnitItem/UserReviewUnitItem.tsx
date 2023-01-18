import { IconContext } from 'react-icons';
import { useNumberWithCommas } from '@utils/UseNumberWithCommas';
import UserReviewUnitItemStyle from '@components/UserReviewUnitList/UserReviewUnitItem/UserReviewUnitItem.module.css';
import clsx from 'clsx';

interface UserReviewUnitItemProps {
  icon: JSX.Element;
  count: number;
}

export const UserReviewUnitItem = ({
  icon,
  count,
}: UserReviewUnitItemProps): JSX.Element => {
  return (
    <div className={UserReviewUnitItemStyle.UserReviewUnitItem}>
      <IconContext.Provider
        value={{
          size: '18px',
          className: clsx(UserReviewUnitItemStyle.IconStyle),
        }}
      >
        {icon}
      </IconContext.Provider>
      <span className={UserReviewUnitItemStyle.TextStyle}>
        {useNumberWithCommas(count)}
      </span>
    </div>
  );
};
