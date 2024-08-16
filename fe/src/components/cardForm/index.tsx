'use client';
import { PhotoIcon } from '@heroicons/react/24/outline';
import styles from './styles.module.css';
import clsx from 'clsx';
import { roboto } from '@/assets/font';
import { useState } from 'react';

type TCardFormProps = {
  action: (formData: FormData) => void;
  initData?: {
    desc: string;
    title: string;
    image: string;
  };
};

const toDataURI = (file: Blob): Promise<string> => {
  return new Promise((resolve) => {
    const fileReader = new FileReader();
    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      resolve('');
    }
    fileReader.onload = () => {
      resolve(fileReader.result as string);
    };
  });
};

const CardForm = ({ action, initData }: TCardFormProps) => {
  const [image, setImage] = useState(() => initData?.image ?? '');

  const imageInputChangeHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) {
      return;
    }
    const dataURI = await toDataURI(files[0]);
    setImage(dataURI);
  };

  return (
    <form action={action} className={styles.form}>
      <label htmlFor='file' className={clsx(styles.fileInput, styles.columnFour, 'border')}>
        {!image && <PhotoIcon />}
        {image && <img src={image} alt='Uploaded image preview' className={styles.previewImage} />}
      </label>
      <input
        onChange={imageInputChangeHandler}
        type='file'
        id='file'
        name='file'
        accept='.png, .jpg, .jpeg, .avif, .webp'
        hidden
      />
      <label className={clsx(styles.formLabel)} htmlFor='title'>
        Title:
      </label>
      <input
        className={clsx(styles.formInput, 'border', roboto.className)}
        defaultValue={initData?.title}
        type='text'
        id='title'
        name='title'
        required
      />

      <label className={clsx(styles.formLabel)} htmlFor='desc'>
        Description:
      </label>
      <textarea
        className={clsx(styles.formInput, 'border', styles.formTextArea, roboto.className)}
        defaultValue={initData?.desc}
        id='desc'
        name='desc'
        maxLength={300}
        required
      />

      <button type='reset' className={clsx(styles.resetButton, 'clickable', 'border')} onClick={() => setImage('')}>
        Reset
      </button>
      <button className={clsx(styles.submitButton, 'clickable', 'border')}>Submit</button>
    </form>
  );
};

export { CardForm };
