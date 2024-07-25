import Image from 'next/image';
import styles from './Manage.module.scss';

import img_cross_platform from '@assets/banners/big-img-1.png';
import img_bg from '@assets/bg/img-2.png';

import { FC } from 'react';

const Manage: FC = () => {
  return (
    <section className={styles.section}>
      <Image className={styles.bgImage} src={img_bg} alt="bg-img" />
      <div className={styles.container}>
        <p className={styles.description}>MOBILE FIRST DESIGN</p>
        <h1 className={styles.title}>
          Manage your online store from your pocket
        </h1>
        <p className={styles.subtitle}>
          Enjoy complete freedom of doing business online by managing every
          aspect of your online store from your mobile device.
        </p>
        <Image
          src={img_cross_platform}
          layout="responsive"
          alt="cross-platform"
        />
      </div>
    </section>
  );
};

export default Manage;
