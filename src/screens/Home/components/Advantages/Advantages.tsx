import { FC } from 'react';
import styles from './Advantages.module.scss';
import AdvantagesItem from './AdvantagesItem';

import icon_diamon from '@assets/icons/purple/diamon.png';
import icon_reset from '@assets/icons/purple/reset.png';
import icon_gear from '@assets/icons/purple/gear.png';
import icon_database from '@assets/icons/purple/database.png';
import icon_phone from '@assets/icons/purple/phone.png';
import icon_tool from '@assets/icons/purple/tool.png';

const Advantages: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.info}>
          <p className={styles.description}>360° CUSTOMIZABLE</p>
          <h2 className={styles.title}>
            Have full control over your online store
          </h2>
          <p className={styles.subtitle}>
            Take complete control over your eCommerce business by owning source
            code, data, and economics.
          </p>
        </div>
        <AdvantagesItem
          image={icon_diamon}
          text="One-time payment"
          description="Uvodo is a lifetime investment, one-time fee with no recurring payments. Pay once and never pay again to own your shop."
          id="advantagesItem1"
        />
        <AdvantagesItem
          image={icon_reset}
          text="Always free updates"
          description="Uvodo is so committed to giving you the tools that are always current that it sends you free updates foa lifetime without paying for anything."
          id="advantagesItem2"
        />
        <AdvantagesItem
          image={icon_gear}
          text="100% customizable"
          description="You have complete control over the customization of your storefront and everything else the way you want as an owner of the source code."
          id="advantagesItem3"
        />
        <AdvantagesItem
          image={icon_database}
          text="Self-hosted data"
          description="You own your data and gain complete control over your business, data and profits, and how your store look and operates."
          id="advantagesItem4"
        />
        <AdvantagesItem
          image={icon_phone}
          text="Mobile first design"
          description="Manage your store right at your fingertips and provide a seamless shopping experience to your customers with PWA ready storefront."
          id="advantagesItem5"
        />
        <AdvantagesItem
          image={icon_tool}
          text="Smooth installation"
          description="Enjoy a hassle-free experience of the breeze installation process knowing your system is running at peak performance."
          id="advantagesItem6"
        />
      </div>
    </section>
  );
};

export default Advantages;
