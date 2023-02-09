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
import { HiOutlinePencilAlt, HiOutlineX } from 'react-icons/hi';
import buttonStyle from '@components/ImageInputList/ImageInputButton/ImageInputButton.module.css';
import clsx from 'clsx';
import { Button } from '@components/Button';
import { UseFormRegister, FieldValues } from 'react-hook-form';

const FILE_SIZE_MAX_LIMIT = 5 * 1024 * 1024;

interface ImageInputButtonProps {
  file?: File;
  size?: 'primary' | 'small';
  setDatas: Dispatch<SetStateAction<File[] | undefined>>;
  formData?: FormData;
  register?: UseFormRegister<FieldValues>;
  name: string;
}

export const ImageInputButton = ({
  size = 'primary',
  file,
  name,
  formData,
  setDatas,
  register,
}: ImageInputButtonProps): JSX.Element => {
  const [imgSrc, setImgSrc] = useState<string>('');
  const fields = register(name);
  const { onChange, onBlur, ref, ...newFields } = fields;
  let inputRef: HTMLInputElement | null;
  const setImg = useCallback((newFile: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(newFile);
    reader.onloadend = () => {
      setImgSrc(reader.result as string);
    };
    reader.onload = () => {
      onChange({ target: { name, vlaue: reader.result } });
    };
  }, []);
  const handleAdd = useCallback(
    (newFile: File) => {
      formData?.append(newFile.name, newFile);
      setDatas((current) => (current ? [...current, newFile] : [newFile]));
    },
    [formData, setDatas]
  );

  const handleUpdate = useCallback(
    (newFile: File) => {
      if (file) {
        formData?.delete(file.name);
        formData?.set(newFile.name, newFile);
        setDatas((current) => {
          return current?.map((data) => {
            if (data.name === file.name) {
              return newFile;
            }
            return data;
          });
        });
      }
    },
    [file, formData, setDatas]
  );
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newFile = (e.target.files as FileList)[0];
      const reader = new FileReader();
      reader.onload = () => {
        onChange({ target: { name, vlaue: reader.result } });
      };

      if (e?.target?.files?.[0]) {
        reader.readAsDataURL(newFile);
      }
      if (newFile === undefined) {
        return;
      }
      if (newFile.size > FILE_SIZE_MAX_LIMIT) {
        alert('업로드 가능한 최대 용량은 5MB입니다. ');
        return;
      }
      if (formData?.has(newFile.name)) {
        alert('동일한 이름의 파일을 등록할수 없습니다.');
        return;
      }
      if (file) {
        handleUpdate(newFile);
        return;
      }
      handleAdd(newFile);
    },
    [file, formData, handleAdd, handleUpdate]
  );
  // 삭제 버튼 클릭 핸들러
  const handleDelete = useCallback(() => {
    if (file) {
      formData?.delete(file.name);
      setDatas((current) => {
        return current?.filter((data) => {
          if (data.name === file.name) {
            return false;
          }
          return true;
        });
      });
    }
  }, [file, formData, setDatas]);

  useEffect(() => {
    if (file) {
      setImg(file);
      return;
    }
    setImgSrc('');
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
        onChange={handleChange}
        type="file"
        alt="inputImage"
        form="ImageListInputForm"
        ref={(elem) => {
          inputRef = elem;
          ref(elem);
        }}
        {...newFields}
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
        {file && (
          <Button
            className={'absolute top-[-1rem] left-[108px] '}
            color="Primary"
            size="xs"
            onClick={handleDelete}
            icon={{ type: 'Only', element: <HiOutlineX /> }}
          ></Button>
        )}
      </div>
    </label>
  );
};
