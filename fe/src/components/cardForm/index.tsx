'use client';
import { PhotoIcon } from '@heroicons/react/24/outline';
import styles from './styles.module.css';
import clsx from 'clsx';
import { roboto } from '@/assets/font';
import { useState } from 'react';
import { Button } from '@/components/button';

type TCardFormProps = {
  action: (formData: FormData) => void;
  initData?: {
    id: string;
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

  const resetImage = () => {
    setImage('');
  };

  return (
    <form action={action} className={styles.form}>
      <label htmlFor='file' className={clsx(styles.fileInput, styles.columnFour, 'clickable')}>
        {!image && (
          <>
            <PhotoIcon /> Max size: 3 Mb
          </>
        )}
        {image && <img src={image} alt='Image preview' className={styles.previewImage} />}
      </label>
      <input
        onChange={imageInputChangeHandler}
        type='file'
        id='file'
        name='file'
        accept='.png, .jpg, .jpeg, .avif, .webp'
        hidden
      />
      <label className={styles.formLabel} htmlFor='title'>
        Title:
      </label>
      <input
        className={clsx(styles.formInput, roboto.className)}
        defaultValue={initData?.title}
        type='text'
        id='title'
        name='title'
        required
      />

      <label className={styles.formLabel} htmlFor='desc'>
        Description:
      </label>
      <textarea
        className={clsx(styles.formInput, styles.formTextArea, roboto.className)}
        defaultValue={initData?.desc}
        id='desc'
        name='desc'
        maxLength={300}
        required
      />

      <Button type='reset' className={styles.resetButton} onClick={resetImage}>
        Reset
      </Button>
      <Button type='submit' className={styles.submitButton}>
        Submit
      </Button>
    </form>
  );
};

export { CardForm };
