'use client';

import styles from './styles.module.css';
import clsx from 'clsx';
import { roboto } from '@/assets/font';
import { useState } from 'react';
import { Button } from '@/components/button';
import { ImageInput } from '@/components/cardForm/imageInput';
import { TGaleryItem } from '@/app/model';

type TCardFormProps = {
  action: (formData: FormData) => void;
  initData?: TGaleryItem | null;
};

const CardForm = ({ action, initData }: TCardFormProps) => {
  const [key, setKey] = useState(1);
  return (
    <form action={action} className={styles.form} key={key}>
      <ImageInput initImage={initData?.imageURL} className={styles.formImageInput} />
      <label className={styles.formLabel} htmlFor="title">
        Title:
      </label>
      <input
        className={clsx(styles.formInput, roboto.className, styles.focus)}
        defaultValue={initData?.title}
        type="text"
        id="title"
        name="title"
        required
        maxLength={30}
      />

      <label className={styles.formLabel} htmlFor="desc">
        Description:
      </label>
      <textarea
        className={clsx(styles.formInput, styles.formTextArea, roboto.className, styles.focus)}
        defaultValue={initData?.desc}
        id="desc"
        name="desc"
        maxLength={300}
        required
      />

      <Button
        type="reset"
        className={styles.resetButton}
        onClick={() => setKey((prev) => prev + 1)}
      >
        Reset
      </Button>
      <Button type="submit" className={styles.submitButton}>
        Submit
      </Button>
    </form>
  );
};

export { CardForm };
