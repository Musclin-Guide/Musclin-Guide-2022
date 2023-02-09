import { ImageInputButton } from '@components/ImageInputList/ImageInputButton/ImageInputButton';
import InputListStyle from '@components/ImageInputList/ImageInputList.module.css';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface ImageInputListProps {
  formData?: FormData;
  size?: 'primary' | 'small';
  remit?: number;
  name: string;
  register: UseFormRegister<FieldValues>;
}

export const ImageInputList = ({
  formData,
  size = 'primary',
  remit = 4,
  name,
  register,
}: ImageInputListProps): JSX.Element => {
  const InputListClassName = clsx(
    InputListStyle.ImageInputList,
    size === 'primary' ? InputListStyle.Primary : InputListStyle.Small
  );
  const [datas, setDatas] = useState<File[]>();

  useEffect(() => {
    formData?.forEach((value) => {
      setDatas((current) => {
        return current ? [...current, value as File] : [value as File];
      });
    });
  }, [formData]);
  return (
    <div className={InputListClassName}>
      {datas?.map((file) => (
        <ImageInputButton
          register={register}
          name={name}
          key={file.name}
          file={file}
          size={size}
          formData={formData}
          setDatas={setDatas}
        />
      ))}
      {((datas && datas.length < remit) || !datas) && (
        <ImageInputButton
          register={register}
          name={name}
          size={size}
          formData={formData}
          setDatas={setDatas}
        />
      )}
    </div>
  );
};
