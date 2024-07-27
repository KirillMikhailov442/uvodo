import Image, { StaticImageData } from 'next/image';
import styles from './Banner.module.scss';

import cn from 'clsx';

import React, { FC, HTMLAttributes } from 'react';

interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  description?: string;
  title?: string;
  text?: string;
  button?: React.JSX.Element;
  image: StaticImageData;
  swap?: boolean;
  children?: React.ReactNode;
}

const Banner: FC<BannerProps> = ({
  description,
  title,
  text,
  button,
  image,
  children,
  className,
  swap,
  ...props
}) => {
  if (children) {
    return (
      <section className={cn(styles.banner, className)} {...props}>
        <div className={styles.container}>
          <div className={styles.content}>{children}</div>
          <Image
            className={styles.image}
            src={image}
            alt="banner-img"
            layout="responsive"
            style={{ order: swap ? '-1' : '2' }}
          />
        </div>
      </section>
    );
  }

  return (
    <section className={styles.banner} {...props}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.description}>{description}</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{text}</p>
          {button}
        </div>
        <Image
          className={styles.image}
          width={0}
          height={0}
          src={image}
          alt="banner-img"
          layout="responsive"
          style={{ order: swap ? '-1' : '2' }}
        />
      </div>
    </section>
  );
};

export default Banner;
