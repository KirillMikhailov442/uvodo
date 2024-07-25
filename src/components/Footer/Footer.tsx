import Link from 'next/link';
import styles from './Footer.module.scss';

import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <header className={styles.header}>
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
          </ul>
        </header>
        <div className={styles.content}>
          <div id="footer-col-1" className={styles.column}>
            <h3 className={styles.columnLabel}>Resources</h3>
            <ul>
              <li className={styles.columnListItem}>
                <Link className={styles.columnLink} href={'/'}>
                  Feature Requests
                </Link>
              </li>
              <li className={styles.columnListItem}>
                <Link className={styles.columnLink} href={'/'}>
                  Documentation
                </Link>
              </li>
              <li className={styles.columnListItem}>
                <Link className={styles.columnLink} href={'/'}>
                  Changelog
                </Link>
              </li>
              <li className={styles.columnListItem}>
                <Link className={styles.columnLink} href={'/'}>
                  Roadmap
                </Link>
              </li>
              <li className={styles.columnListItem}>
                <Link className={styles.columnLink} href={'/'}>
                  Support
                </Link>
              </li>
              <li className={styles.columnListItem}>
                <Link className={styles.columnLink} href={'/'}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div id="footer-col-2" className={styles.column}>
            <h3 className={styles.columnLabel}>Legal</h3>
            <ul>
              <li className={styles.columnListItem}>
                <Link className={styles.columnLink} href={'/'}>
                  Terms of Service
                </Link>
              </li>
              <li className={styles.columnListItem}>
                <Link className={styles.columnLink} href={'/'}>
                  Privacy Policy
                </Link>
              </li>
              <li className={styles.columnListItem}>
                <Link className={styles.columnLink} href={'/'}>
                  Cookie Policy
                </Link>
              </li>
              <li className={styles.columnListItem}>
                <Link className={styles.columnLink} href={'/'}>
                  Refund policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className={styles.copyright}>&copy; 2021 Uvodo eCommerce</p>
      </div>
    </footer>
  );
};

export default Footer;
