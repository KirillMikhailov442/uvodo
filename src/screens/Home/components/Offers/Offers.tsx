import Card from './Card';
import styles from './Offers.module.scss';

import { FC } from 'react';

const Offers: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>One cost, lifetime investment.</h1>
        <p className={styles.subtitle}>
          It’s a one-time payment. Pay once, use for a lifetime.
        </p>
        <div className={styles.offers}>
          <Card
            title="Regular"
            text="Best for personal use by small business and creators with occasional online & in-person sales."
            price={49}
            description={[
              'Free lifetime updates',
              '1 domain/license',
              'Standart support',
              'Personal use',
            ]}
          />
          <Card
            title="Extended"
            text="Best for developers or agencies to develop/customize and resell it to their clients."
            price={599}
            description={[
              'Free lifetime updates',
              '1 domain/license',
              'Advanced support',
              'Personal or commercial use',
            ]}
          />
          <Card
            title="Enterprise"
            text="Best for professional businesses that require exclusive apps, themes, and extensive support."
            price={199}
            description={[
              'Free lifetime updates',
              'Multiple domains',
              'Dedicated success manager',
              'Personal or commercial use',
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Offers;
