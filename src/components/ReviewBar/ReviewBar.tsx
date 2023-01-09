import { ReviewButton } from '@components/ReviewBar/ReviewButton';

interface testGroup {
  testNumber: number;
  testNumber2: number;
  testNumber3: number;
  testListName: string;
  testListName2: string;
  testListName3: string;
}
export const ReviewBar = ({
  testNumber,
  testNumber2,
  testNumber3,
  testListName = '리뷰',
  testListName2 = '내가 쓴 칵테일',
  testListName3 = '찜',
}: testGroup) => {
  return (
    <ul className="flex">
      <ReviewButton number={testNumber} listName={testListName}></ReviewButton>
      <ReviewButton
        number={testNumber2}
        listName={testListName2}
      ></ReviewButton>
      <ReviewButton
        number={testNumber3}
        listName={testListName3}
      ></ReviewButton>
    </ul>
  );
};
