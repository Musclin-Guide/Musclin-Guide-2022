import { useDragAndDrop } from '@utils/useDragAndDrop';
import React, { useState, useCallback, useRef, ChangeEvent } from 'react';
import Image from 'next/image';
import addImg from '@public/ImageListInput/BG.png';
import ImageInputStyle from '@components/ImageInput/ImageInput.module.css';

// 파일 조건 상수
const FILE_SIZE_MAX_LIMIT = 5 * 1024 * 1024;
const ALLOW_FILE_EXTENSION = 'jpg,jpeg,png';

export function ImageInput(): JSX.Element {
  const [file, setFile] = useState<File>();

  // 드래그 이벤트를 감지하는 ref 참조변수 (label 태그에 들어갈 예정)
  const inputLabelRef = useRef<HTMLLabelElement | null>(null);

  // 파일이름을 없애고 확장자만 남기는 함수
  const removeFileName = useCallback((originalFileName: string): string => {
    // 마지막 .의 위치를 구한다
    // 마지막 .의 위치다음이 파일 확장자를 의미한다
    const lastIndex = originalFileName.lastIndexOf('.');

    // 파일 이름에서 .이 존재하지 않는 경우이다.
    // 이경우 파일 확장자가 존재하지 않는경우(?)를 의미한다.
    if (lastIndex < 0) {
      return '';
    }

    // substring을 함수를 이용해 확장자만 잘라준다
    // lastIndex의 값은 마지막 .의 위치이기 때문에 해당 위치 다음부터 끝까지 문자열을 잘라준다.
    // 문자열을 자른 후 소문자로 변경시켜 확장자 값을 반환 해준다.
    return originalFileName.substring(lastIndex + 1).toLowerCase();
  }, []);

  // 파일 확장자 유효성 판단 함수
  const fileExtensionValid = useCallback(
    ({ name }: { name: string }): boolean => {
      // 파일 확장자
      const extension = removeFileName(name);

      // 확장자명이 확장자 조건에 포함되지 않거나 없을때 if문 실행
      if (!ALLOW_FILE_EXTENSION.includes(extension) || extension === '') {
        return false;
      }
      return true;
    },
    [removeFileName]
  );

  // 파일을 드롭다운 할시 핸들러
  const DropFileHandler = useCallback(
    (e: DragEvent): void => {
      const dataTransfer = e.dataTransfer as DataTransfer;
      const files = dataTransfer.files[0];
      if (!fileExtensionValid(files)) {
        alert(
          `업로드 가능한 확장자가 아닙니다. [가능한 확장자 : ${ALLOW_FILE_EXTENSION}]`
        );
        return;
      }
      if (files.size > FILE_SIZE_MAX_LIMIT) {
        alert('업로드 가능한 최대 용량은 5MB입니다. ');
        return;
      }
      setFile(files);
    },
    [fileExtensionValid]
  );

  // 드롭다운 유틸함수 불러오기 + 드롭다운 중일시 isDragging함수를 통한 스타일 변화
  const isDragging = useDragAndDrop({ DropFileHandler, inputLabelRef });

  // 파일 등록 함수
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const files = (e.target.files as FileList)[0];

    //  formData 백 전송시 전송수단 필요
    if (files === undefined) {
      return;
    }
    if (files.size > FILE_SIZE_MAX_LIMIT) {
      e.target.value = '';
      return;
    }
    setFile(files);
  }, []);

  return (
    <label
      className={isDragging ? 'opacity-50 w-fit block' : 'w-fit block'}
      // 드래그 중일때와 아닐때의 클래스 이름을 다르게 주어 스타일 차이

      htmlFor="fileUpload"
      ref={inputLabelRef}
    >
      <input
        type="file"
        id="fileUpload"
        accept=".jpg, .jpeg, .png"
        className="hidden"
        onChange={handleChange}
      />
      <div className={ImageInputStyle.ImageInput}>
        <Image src={addImg} alt="addImg" width={36} height={36} priority />
        <p className={ImageInputStyle.Text}>
          <span className={ImageInputStyle.AccentText}>
            클릭하여 파일 업로드{' '}
          </span>
          또는 드래그 앤 드롭
        </p>
        <p className={ImageInputStyle.HelpText}>PNG, JPEG, JPG up to 5MB</p>
      </div>
    </label>
  );
}
