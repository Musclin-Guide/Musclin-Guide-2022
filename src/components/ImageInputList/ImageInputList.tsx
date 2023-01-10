import { ImageInputButton } from '@components/ImageInputList/ImageInputButton/ImageInputButton';
import InputListStyle from '@components/ImageInputList/ImageInputList.module.css';
import clsx from 'clsx';
import { useMemo } from 'react';
import { useEffect, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';
interface ImageObject {
  key: string;
  value: File;
}
interface ImageInputListProps {
  // images: ImageObject[] | undefined;
  // setImages: Dispatch<SetStateAction<ImageObject[] | undefined>>;
  formData: FormData;
  size?: 'primary' | 'small';
  remit?: number;
}

export const ImageInputList = ({
  // images,
  // setImages,
  formData,
  size = 'primary',
  remit = 4,
}: ImageInputListProps): JSX.Element => {
  const InputListClassName = clsx(
    InputListStyle.ImageInputList,
    size === 'primary' ? InputListStyle.Primary : InputListStyle.Small
  );
  const data = useMemo(() => {
    const values = formData.values();
    return [...values];
  }, [formData]);
  return (
    <div className={InputListClassName}>
      {data?.map((value) => (
        <ImageInputButton
          key={value.name}
          file={value}
          size={size}
          formData={formData}
        />
      ))}
      {((data && data.length < remit) || !data) && (
        <ImageInputButton size={size} formData={formData} />
      )}
      <button
        className={'bg-red-600 w-14 h-14 top-72 fixed'}
        onClick={() => {
          console.log([...formData.values()]);
        }}
      >
        test
      </button>
    </div>
  );
};
