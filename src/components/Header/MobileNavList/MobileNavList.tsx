'use client';

import Link from 'next/link';
import cn from 'clsx';

import { FC, useRef } from 'react';
import useAppSelector from '@/hooks/useAppSelector';
import Button from '@components/UI/Button/Button';

import styles from './MobileNavList.module.scss';
import useAppDispatch from '@/hooks/useAppDispatch';
import { hideComponent } from '@store/slices/showComponents';

const MobileNavList: FC = () => {
  const showNav = useAppSelector(state => state.showComponents.mobileNavList);
  const dispatch = useAppDispatch();
  const navRef = useRef<HTMLDivElement>(null);

  const closeNav = (area: any) => {
    if (!navRef.current?.contains(area)) {
      dispatch(hideComponent('mobileNavList'));
    }
  };

  return (
    <div
      onClick={e => closeNav(e.target)}
      className={cn(styles.wrapper, { [`${styles.wrapperShowNav}`]: showNav })}
    >
      <nav
        ref={navRef}
        className={cn(styles.nav, { [`${styles.navActive}`]: showNav })}
      >
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
          <li className={styles.listItem}>
            <Button className={styles.button}>Buy Uvodo now</Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavList;
