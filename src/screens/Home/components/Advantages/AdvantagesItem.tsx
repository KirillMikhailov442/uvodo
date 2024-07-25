import Image, { StaticImageData } from 'next/image';
import styles from './Advantages.module.scss';

import { FC, HTMLAttributes } from 'react';

interface AdvantagesItemProps extends HTMLAttributes<HTMLDivElement> {
  image: StaticImageData;
  text: string;
  description: string;
}

const AdvantagesItem: FC<AdvantagesItemProps> = ({
  image,
  text,
  description,
  ...props
}) => {
  return (
    <div className={styles.advantagesItem} {...props}>
      <Image
        className={styles.advantagesItemImage}
        src={image}
        width={50}
        height={50}
        alt="image"
      />
      <p className={styles.advantagesItemText}>{text}</p>
      <p className={styles.advantagesItemDescription}>{description}</p>
    </div>
  );
};

export default AdvantagesItem;
