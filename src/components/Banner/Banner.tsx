import Image, { StaticImageData } from 'next/image';
import styles from './Banner.module.scss';

import React, { FC, HTMLAttributes } from 'react';

interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  description?: string;
  title?: string;
  text?: string;
  button?: React.JSX.Element;
  image: StaticImageData;
  children?: React.ReactNode;
}

const Banner: FC<BannerProps> = ({
  description,
  title,
  text,
  button,
  image,
  children,
  ...props
}) => {
  if (children) {
    return (
      <section className={styles.banner} {...props}>
        <div className={styles.container}>
          <div className={styles.content}>{children}</div>
          <Image className={styles.image} src={image} alt="banner-img" />
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
        />
      </div>
    </section>
  );
};

export default Banner;
