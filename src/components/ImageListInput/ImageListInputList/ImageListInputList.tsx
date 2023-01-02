import { RowImageListInput } from '@components/ImageListInput/RowImageListInput/RowImageListInput';
import InputListStyle from '@components/ImageListInput/ImageListInputList/ImageListInputList.module.css';

interface ImageListInputListProps {
  row: number;
}

export const ImageListInputList = ({
  row,
}: ImageListInputListProps): JSX.Element => {
  return (
    <div className={InputListStyle.ImageListInputList}>
      {/* 좋은 랜더링 방법 필요 */}
      {Array.from(Array(row), (x) => (
        <RowImageListInput key={x} />
      ))}
    </div>
  );
};
