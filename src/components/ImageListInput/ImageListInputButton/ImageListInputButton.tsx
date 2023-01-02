import { ImagePlaceholder } from '@components/ImageListInput/ImagePlaceholder';
import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';
import addImg from '@public/ImageListInput/BG.png';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import buttonStyle from '@components/ImageListInput/ImageListInputButton/ImageListInputButton.module.css';
import clsx from 'clsx';

const FILE_SIZE_MAX_LIMIT = 5 * 1024 * 1024;

interface ImageListInputButtonProps {
  // formData: FormData;
  size?: 'primary' | 'small';
}

export const ImageListInputButton = ({
  // formData,
  size = 'primary',
}: ImageListInputButtonProps): JSX.Element => {
  const [imgSrc, setImgSrc] = useState<string | undefined>('');
  const [file, setFile] = useState<File>();

  // img file 데이터를 다루기 위한 formData를 받아올 저장소 필요.

  const buttonStyleClassName = useMemo(() => {
    return clsx(
      buttonStyle.Button,
      size === 'primary' ? buttonStyle.PrimarySize : buttonStyle.SmallSize,
      file ? buttonStyle.HasImgStyle : buttonStyle.NoImgStyle
    );
  }, [size, file]);

  // input 클릭시 핸들러
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const files = (e.target.files as FileList)[0];
    const reader = new FileReader();
    // if (file) {
    //   formData.delete(file.name);
    // }
    if (files === undefined) {
      return;
    }
    if (files.size > FILE_SIZE_MAX_LIMIT) {
      e.target.value = '';
      return;
    }
    reader.readAsDataURL(files);
    setFile(files);
    // formData.set(files.name, files);
    reader.onloadend = () => {
      setImgSrc(reader.result as string);
    };
  }, []);
  // 삭제 버튼 클릭 핸들러
  // const handleDelete = useCallback(() => {
  //   formData.delete(name);
  //   setFile(undefined);
  //   setImgSrc('');
  // }, []);
  return (
    <label className={'w-fit block'}>
      <input
        accept=".jpg, .jpeg, .png"
        className="hidden"
        type="file"
        onChange={handleChange}
      />
      <div className={buttonStyleClassName}>
        <ImagePlaceholder
          className={buttonStyle.ImgPlaceholderStyle}
          src={imgSrc ? imgSrc : addImg}
          alt="placeHolder"
          fill={!!file}
        />
        {file && (
          <HiOutlinePencilAlt
            size={size === 'primary' ? 48 : 30}
            className={'text-neutral-300'}
          />
        )}
        {/* 삭제 버튼이 있어야 하는데 버튼 컴포넌트 데브 푸쉬시 진행 하겠습니다. */}
      </div>
    </label>
  );
};
