import { ImagePlaceholder } from '@components/ImageInputList/ImagePlaceholder';
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import addImg from '@public/ImageListInput/BG.png';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import buttonStyle from '@components/ImageInputList/ImageInputButton/ImageInputButton.module.css';
import clsx from 'clsx';

const FILE_SIZE_MAX_LIMIT = 5 * 1024 * 1024;
interface ImageInputButtonProps {
  file?: File;
  size?: 'primary' | 'small';
  setImages: Dispatch<
    SetStateAction<{ key: string; value: File }[] | undefined>
  >;
}

export const ImageInputButton = ({
  // formData,
  size = 'primary',
  file,
  setImages,
}: ImageInputButtonProps): JSX.Element => {
  const [imgSrc, setImgSrc] = useState<string>('');
  const setImg = useCallback((newFile: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(newFile);
    reader.onloadend = () => {
      setImgSrc(reader.result as string);
    };
  }, []);
  const hasSameFile = useCallback(
    (images: { key: string; value: File }[], newFile: File) => {
      if (images) {
        const hasSameFile = images.some((element) => {
          if (element.key === newFile.name) {
            return true;
          }
        });
        if (hasSameFile) {
          alert('동일한 이름의 파일을 등록할수 없습니다.');
          return true;
        }
      }
      return false;
    },
    []
  );
  const handleAdd = useCallback(
    (newFile: File) => {
      setImages((c) => {
        if (c) {
          if (hasSameFile(c, newFile)) {
            return c;
          }
          return [...c, { key: newFile.name, value: newFile }];
        }
        return [{ key: newFile.name, value: newFile }];
      });
    },
    [hasSameFile, setImages]
  );

  const handleUpdate = useCallback(
    (newFile: File) => {
      setImages((c) => {
        if (file && c) {
          if (hasSameFile(c, newFile)) {
            return c;
          }
          const oldIdx = c?.findIndex((element) =>
            element.key === file.name ? true : false
          );
          const newImages = c;
          newImages[oldIdx] = { key: newFile.name, value: newFile };
          setImg(newFile);
          return newImages;
        }
        return c;
      });
    },
    [file, hasSameFile, setImages, setImg]
  );
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newFile = (e.target.files as FileList)[0];
      if (newFile === undefined) {
        return true;
      }
      if (newFile.size > FILE_SIZE_MAX_LIMIT) {
        alert('업로드 가능한 최대 용량은 5MB입니다. ');
        return true;
      }
      if (file) {
        handleUpdate(newFile);
        return;
      }
      handleAdd(newFile);
    },
    [file, handleAdd, handleUpdate]
  );
  // 삭제 버튼 클릭 핸들러
  // const handleDelete = useCallback(() => {
  //   formData.delete(name);
  //   setFile(undefined);
  //   setImgSrc('');
  // }, []);
  useEffect(() => {
    if (file) {
      console.log(file);
      setImg(file);
      return;
    }
  }, [file, setImg]);

  const buttonStyleClassName = useMemo(() => {
    return clsx(
      buttonStyle.Button,
      size === 'primary' ? buttonStyle.PrimarySize : buttonStyle.SmallSize,
      file ? buttonStyle.HasImgStyle : buttonStyle.NoImgStyle
    );
  }, [size, file]);
  return (
    <label className={'w-fit block'}>
      <input
        accept=".jpg, .jpeg, .png"
        className="hidden"
        type="file"
        onChange={handleChange}
        alt="inputImage"
        form="ImageListInputForm"
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
