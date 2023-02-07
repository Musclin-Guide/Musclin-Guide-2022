export function getBase64(file: Blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

import { useCallback, useState, useRef, ChangeEvent, useEffect } from 'react';
import { FieldValues, useController, useFormContext } from 'react-hook-form';

export function FileController({
  name,
  control,
  defaultValue,
  render,
  setValue,
}: FieldValues) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { field } = useController({ name, control });

  const [base64, setBase64] = useState(defaultValue.name);

  // console.log(base64);
  const onChange = useCallback(async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      setBase64((await getBase64(event.target.files[0])) as string);
      field.onChange(event.target.files[0]);
      if (event.target.files[0].size > 2097152) {
        alert('파일 용량은 2MB를 초과할 수 없습니다.');
        setBase64(null);
      }
    }
  }, []);

  useEffect(() => {
    // 컴포넌트가 언마운트되면 createObjectURL()을 통해 생성한 기존 URL을 폐기
    return () => {
      window.URL.revokeObjectURL(base64);
      /*    setBase64(null); */
    };
  }, [base64]);

  return render({
    field: {
      className: 'hidden',
      type: 'file',
      accept: 'image/jpg, image/jpeg',
      name,

      onChange,
      ref: (instance: HTMLInputElement | null) => {
        field.ref(instance);
        inputRef.current = instance;
      },
    },
    base64,

    select: () => inputRef.current?.click(),
    remove: () => {
      URL.revokeObjectURL(base64);
      setBase64(null);
    },
  });
}
