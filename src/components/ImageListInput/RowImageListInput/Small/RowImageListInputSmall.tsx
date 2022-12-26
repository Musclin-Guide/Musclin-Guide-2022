import { ImageListInputButton } from '@components/ImageListInput/ImageListInputButton/ImageListInputButton';
import rowListSmallStyle from '@components/ImageListInput/RowImageListInput/Small/RowImageListInputSmall.module.css';

export const RowImageListInputSmall = (): JSX.Element => {
  return (
    <div className={rowListSmallStyle.RowImageListInputSmall}>
      <ImageListInputButton size="small"></ImageListInputButton>
      <ImageListInputButton size="small"></ImageListInputButton>
    </div>
  );
};
