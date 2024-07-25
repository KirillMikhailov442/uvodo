import styles from './Offers.module.scss';

import Button from '@components/UI/Button/Button';
import { FC, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  text: string;
  price: number;
  description: string[];
}

const Card: FC<CardProps> = ({ title, text, price, description, ...props }) => {
  return (
    <div className={styles.card} {...props}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardText}>{text}</p>
      <h3 className={styles.cardPrice}>$ {price.toFixed(2)}</h3>
      <Button className={styles.cardButton} variant="purple">
        Buy now
      </Button>
      <ul className={styles.cardList}>
        {description.map((item, index) => (
          <li className={styles.cardListItem} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
