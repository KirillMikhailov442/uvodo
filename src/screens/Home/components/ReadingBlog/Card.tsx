import styles from './ReadingBlog.module.scss';

import { FC, HTMLAttributes } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface CardProps extends HTMLAttributes<HTMLLIElement> {
  image: StaticImageData;
  text: string;
  description: string;
  date: string;
}

const Card: FC<CardProps> = ({ image, text, description, date, ...props }) => {
  return (
    <li className={styles.card} {...props}>
      <Image
        className={styles.cardImage}
        width={image.width}
        height={image.height}
        src={image.src}
        alt="card-img"
        layout="responsive"
      />
      <p className={styles.cardText}>{text}</p>
      <p className={styles.cardDescription}>{description}</p>
      <time className={styles.cardDate}>
        {date} / <Link href={'/'}>Read more</Link>
      </time>
    </li>
  );
};

export default Card;
