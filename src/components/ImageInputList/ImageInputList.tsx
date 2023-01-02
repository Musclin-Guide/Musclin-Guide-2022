import { ImageInputButton } from '@components/ImageInputList/ImageInputButton/ImageInputButton';
import InputListStyle from '@components/ImageInputList/ImageInputList.module.css';
import clsx from 'clsx';
import { Dispatch, SetStateAction } from 'react';
interface ImageObject {
  key: string;
  value: File;
}
interface ImageInputListProps {
  images: ImageObject[] | undefined;
  setImages: Dispatch<SetStateAction<ImageObject[] | undefined>>;
  size?: 'primary' | 'small';
  remit?: number;
}

export const ImageInputList = ({
  images,
  setImages,
  size = 'primary',
  remit = 4,
}: ImageInputListProps): JSX.Element => {
  const InputListClassName = clsx(
    InputListStyle.ImageInputList,
    size === 'primary' ? InputListStyle.Primary : InputListStyle.Small
  );
  return (
    <div className={InputListClassName}>
      {images?.map(({ key, value }) => (
        <ImageInputButton
          key={key}
          file={value}
          size={size}
          setImages={setImages}
        />
      ))}
      {((images && images.length < remit) || !images) && (
        <ImageInputButton size={size} setImages={setImages} />
      )}
    </div>
  );
};
