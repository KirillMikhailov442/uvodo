import styles from './Hero.module.scss';

import Banner from '@components/Banner/Banner';
import { FC } from 'react';
import Button from '@components/UI/Button/Button';
import Image from 'next/image';

import hero_img from '@assets/banners/img-1.png';
import bg_img from '@assets/bg/img-1.png';
import stripe from '@assets/companies/stripe.png';
import paypal from '@assets/companies/paypal.png';
import envato from '@assets/companies/envato.png';
import instagram from '@assets/companies/instagram.png';
import whatsapp from '@assets/companies/whatsapp.png';
import companies500 from '@assets/companies/500.png';
import Link from 'next/link';

const Hero: FC = () => {
  return (
    <section className={styles.hero}>
      <Image
        layout="responsive"
        className={styles.bgImage}
        src={bg_img}
        alt="bg"
      />
      <div className={styles.container}>
        <Banner image={hero_img}>
          <p className={styles.description}>
            PAY ONE-TIME SMALL FEE, USE LIFETIME
          </p>
          <h1 className={styles.title}>
            Like Shopify store, with one-time fee
          </h1>
          <p className={styles.text}>
            Uvodo is an open-source Headless eCommerce Platform for small and
            medium brands, and everyone who wants to sell online.
          </p>
          <div className={styles.buttons}>
            <Button variant="purple">Admin Demo</Button>
            <Button variant="outline-purple">Shop Demo</Button>
          </div>
        </Banner>
        <ul className={styles.companies}>
          <li>
            <Link href={'/'}>
              <Image src={stripe} alt="stripe" />
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              <Image src={paypal} alt="paypal" />
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              <Image src={envato} alt="envato" />
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              <Image src={instagram} alt="instagram" />
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              <Image src={whatsapp} alt="whatsapp" />
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              <Image src={companies500} alt="500" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
