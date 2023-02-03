import { resizeImage } from 'next/dist/server/image-optimizer';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

export const ProfileUpload = () => {
  // const scm = yup.
  // const { register, handleSubmit } = useForm<FieldValues>({});
  const [images, setImages] = useState({
    image_file: '',
    preview_URL: '/assets/default_profile.png',
  });
  return <>{/* <input ref={register} type="file" /> */}</>;
};
