import { FC } from 'react';
import styles from './Header.module.scss';

import Link from 'next/link';
import Image from 'next/image';
import cn from 'clsx';

import logo_dark from '@assets/logo-dark.png';
import logo_light from '@assets/logo-light.png';
import Button from '@components/UI/Button/Button';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftItem}>
          <Link className={cn(styles.logo, styles.logoLight)} href={'/'}>
            <Image
              src={logo_light}
              width={logo_light.width}
              height={logo_light.height}
              alt="logo"
            />
          </Link>
          <Link className={cn(styles.logo, styles.logoDark)} href={'/'}>
            <Image
              src={logo_dark}
              width={logo_dark.width}
              height={logo_dark.height}
              alt="logo"
            />
          </Link>
          <nav>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Link className={styles.listLink} href={'/'}>
                  Home
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link className={styles.listLink} href={'/features'}>
                  Features
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link className={styles.listLink} href={'/pricing'}>
                  Pricing
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link className={styles.listLink} href={'/resources'}>
                  Resources
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link className={styles.listLink} href={'/support'}>
                  Support
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <nav className={styles.rightItem}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Button>Buy Uvodo now</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
