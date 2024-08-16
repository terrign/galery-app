'use client';
import clsx from 'clsx';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './styles.module.css';

type TButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = ({ className, ...rest }: TButtonProps) => {
  return <button className={clsx('clickable', styles.border, className)} {...rest} />;
};

export { Button };
