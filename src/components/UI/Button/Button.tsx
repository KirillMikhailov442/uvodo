import React, { FC, HTMLAttributes } from 'react';
import cn from 'clsx';

import styles from './Button.module.scss';

type ButtonVariants = 'default' | 'outline-purple' | 'outline-black' | 'purple';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariants;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = 'default',
  className,
  ...props
}) => {
  switch (variant) {
    case 'default':
      return (
        <button
          className={cn(styles.button, styles.black, className)}
          {...props}
        >
          {children}
        </button>
      );
    case 'outline-black':
      return (
        <button
          className={cn(styles.button, styles.outlineBlack, className)}
          {...props}
        >
          {children}
        </button>
      );
    case 'outline-purple':
      return (
        <button
          className={cn(styles.button, styles.outlinePurple, className)}
          {...props}
        >
          {children}
        </button>
      );
    case 'purple':
      return (
        <button
          className={cn(styles.button, styles.purple, className)}
          {...props}
        >
          {children}
        </button>
      );
  }
};

export default Button;
