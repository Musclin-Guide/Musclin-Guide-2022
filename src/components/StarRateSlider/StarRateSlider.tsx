import { HiOutlineStar } from 'react-icons/hi';
import starRateSliderStyle from '@components/StarRateSlider/StarRateSlider.module.css';

interface StarProps {
  filled: boolean;
}
const Star = ({ filled }: StarProps): JSX.Element => {
  return (
    <HiOutlineStar
      size={24}
      className={
        filled ? starRateSliderStyle.StarFill : starRateSliderStyle.StarEmpty
      }
    />
  );
};

// 반쪽 별이 아이콘에 없습니다.
interface StarRateSliderProps {
  rate: 0 | 1 | 2 | 3 | 4 | 5;
}

export const StarRateSlider = ({ rate }: StarRateSliderProps): JSX.Element => {
  return (
    <div className={starRateSliderStyle.StarRateSlider}>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star key={value} filled={value <= rate} />
      ))}
    </div>
  );
};
