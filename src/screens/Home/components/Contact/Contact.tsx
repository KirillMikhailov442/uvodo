import Button from '@components/UI/Button/Button';
import styles from './Contact.module.scss';

import { FC } from 'react';

const Contact: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>We can take care of the installation</h1>
        <p className={styles.subtitle}>
          Don’t want to deal with technical stuff?
        </p>
        <p className={styles.description}>
          Let us fire up Uvodo for you, so you can spend your time selling right
          away.
        </p>
        <Button className={styles.button} variant="purple">
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default Contact;
