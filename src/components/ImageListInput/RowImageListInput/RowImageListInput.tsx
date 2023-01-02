import { ImageListInputButton } from '@components/ImageListInput/ImageListInputButton/ImageListInputButton';
import rowListStyle from '@components/ImageListInput/RowImageListInput/RowImageListInput.module.css';

export const RowImageListInput = (): JSX.Element => {
  return (
    <div className={rowListStyle.RowListInput}>
      <ImageListInputButton size="primary"></ImageListInputButton>
      <ImageListInputButton size="primary"></ImageListInputButton>
    </div>
  );
};
