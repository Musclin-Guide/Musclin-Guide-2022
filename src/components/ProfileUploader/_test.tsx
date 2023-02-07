import { ChangeEvent, useEffect, useState } from 'react';
import { Button } from '@components/Button';
import Image from 'next/image';
import clsx from 'clsx';
import { EditButton } from '@components/index';
import { HiOutlineCamera } from 'react-icons/all';
import { UseFormRegister, FieldValues, useForm } from 'react-hook-form';

interface ProfileProps {
  size?: 'small' | 'medium' | 'large';
  name?: string;
  register: UseFormRegister<FieldValues>;
}

const sizes = {
  small: 'w-24 h-24',
  medium: 'w-40 h-40',
  large: 'w-52 h-52',
};

const ProfileUploader = ({
  size = 'small',
  name = 'image_file',
  register,
  ...props
}: ProfileProps) => {
  const [image, setImage] = useState({
    image_file: '',
    preview_URL: '/assets/default_profile.png',
  });
  console.log(image);
  let inputRef: HTMLInputElement | null;

  const saveImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files !== null && e.target.files[0]) {
      // 새로운 이미지를 올리면 createObjectURL()을 통해 생성한 기존 URL을 폐기
      if (e.target.files[0].size > 2097152) {
        return alert('파일이 너무 큽니다');
      }
      URL.revokeObjectURL(image.preview_URL);
      const preview_URL = URL.createObjectURL(e.target.files[0]);
      setImage(() => ({
        image_file: (e.target.files as FileList)[0] as unknown as string,
        preview_URL: preview_URL,
      }));
    }
  };

  const deleteImage = () => {
    // createObjectURL()을 통해 생성한 기존 URL을 폐기
    URL.revokeObjectURL(image.preview_URL);
    setImage({
      image_file: '/',
      preview_URL: '/assets/default_profile.png',
    });
  };

  useEffect(() => {
    // 컴포넌트가 언마운트되면 createObjectURL()을 통해 생성한 기존 URL을 폐기
    return () => {
      URL.revokeObjectURL(image.preview_URL);
    };
  }, [image]);

  return (
    <>
      <div className={clsx('relative', sizes[size])}>
        <EditButton
          className="bg-orange-400 w-6 h-6 border border-neutral-100 bottom-0 right-1 rounded-full absolute"
          icon={<HiOutlineCamera className="stroke-neutral-100 ml-[0.2rem]" />}
          onClick={() => inputRef?.click()}
          title="나가기"
          type="button"
        />
        <input
          className="hidden"
          type="file"
          accept="image/jpg, image/jpeg"
          // 클릭할 때 마다 file input의 value를 초기화 하지 않으면 버그가 발생할 수 있다
          // 사진 등록을 두개 띄우고 첫번째에 사진을 올리고 지우고 두번째에 같은 사진을 올리면 그 값이 남아있음!
          onClick={(e) => {
            const target = e.target as HTMLInputElement;
            target.value = '';
          }}
          {...(register &&
            register(name, {
              onChange(event: ChangeEvent<HTMLInputElement>) {
                saveImage(event);
              },
            }))}
          ref={(refParam) => (inputRef = refParam)}
          {...props}
        />
        <div className=" object-contain flex flex-col gap-2 items-center">
          <Image
            priority
            onClick={() => inputRef?.click()}
            className={clsx(
              'rounded-full object-contain self-center',
              sizes[size]
            )}
            src={image.preview_URL}
            alt={''}
            width={100}
            height={100}
          />

          <Button
            color="Outline"
            className="p-1"
            size="xxs"
            onClick={deleteImage}
          >
            <p>삭제</p>
          </Button>
        </div>
      </div>
    </>
  );
};
