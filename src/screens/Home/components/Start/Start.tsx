import { StaticImageData } from 'next/image';
import styles from './Start.module.scss';

import { FC } from 'react';

import icon_cloud from '@assets/icons/black/cloud.png';
import icon_database from '@assets/icons/black/database.png';
import icon_connection from '@assets/icons/black/connection.png';
import icon_money from '@assets/icons/black/money.png';
import Card from './Card';

interface CardProps {
  image: StaticImageData;
  text: string;
  description: string;
}

const listStart: CardProps[] = [
  {
    image: icon_cloud,
    text: 'Buy Uvodo',
    description: 'Buy Uvodo eCommerce Platform with one-time fee.',
  },
  {
    image: icon_database,
    text: 'Install on server',
    description: 'Install on your own server. We can also install.',
  },
  {
    image: icon_connection,
    text: 'Get started',
    description:
      'Welcome your sellers, share on social media to join your website.',
  },
  {
    image: icon_money,
    text: 'Start selling',
    description: 'Start earning from sales with Uvodo eCommerce Platform.',
  },
];

const Start: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>So, where to start?</h1>
        <p className={styles.subtitle}>
          It’s never been so easy to launch your online store.
        </p>
        <ul className={styles.list}>
          {listStart.map(({ image, text, description }, index) => (
            <Card
              image={image}
              text={text}
              description={description}
              key={index}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Start;
