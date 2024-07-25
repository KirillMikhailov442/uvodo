import styles from './Start.module.scss';

import Image, { StaticImageData } from 'next/image';
import { FC, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLLIElement> {
  image: StaticImageData;
  text: string;
  description: string;
}

const Card: FC<CardProps> = ({ image, text, description, ...props }) => {
  return (
    <li className={styles.card} {...props}>
      <Image
        className={styles.cardImage}
        src={image.src}
        width={image.width}
        height={image.height}
        alt="icon"
      />
      <p className={styles.cardText}>{text}</p>
      <p className={styles.cardDescription}>{description}</p>
    </li>
  );
};

export default Card;
