'use client';

import { toDataURI } from '@/utils';
import { PhotoIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { FormEventHandler, useRef, useState } from 'react';
import styles from './styles.module.css';

const ImageInput = ({ initImage, className }: { initImage?: string; className: string }) => {
  const [image, setImage] = useState(() => initImage ?? '');
  const [shake, setShake] = useState(false);

  const ref = useRef<HTMLLabelElement>(null);

  const imageInputChangeHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) {
      return;
    }
    const dataURI = await toDataURI(files[0]);
    setImage(dataURI);
  };

  const onNotFilled: FormEventHandler<HTMLInputElement> = (e) => {
    setShake(true);
    setTimeout(() => setShake(false), 300);
  };

  return (
    <>
      <label htmlFor="image" className={clsx(styles.imageInput, 'clickable', className)} ref={ref}>
        {!image && (
          <>
            <PhotoIcon className={clsx({ [styles.shake]: shake })} />
          </>
        )}
        {image && <img src={image} alt="Image preview" className={styles.previewImage} />}
      </label>
      <input
        onChange={imageInputChangeHandler}
        type="file"
        id="image"
        name="image"
        accept=".png, .jpg, .jpeg, .avif, .webp"
        hidden
        aria-hidden
        required={!image}
        onInvalid={onNotFilled}
      />
    </>
  );
};

export { ImageInput };
