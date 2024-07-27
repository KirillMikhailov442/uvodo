import styles from './Home.module.scss';

import { FC } from 'react';

import img_banner_1 from '@assets/banners/img-2.png';
import img_banner_2 from '@assets/banners/img-3.png';

import Hero from './components/Hero/Hero';
import Manage from './components/Manage/Manage';
import Advantages from './components/Advantages/Advantages';
import Banner from '@components/Banner/Banner';
import Clients from './components/Clients/Clients';
import Button from '@components/UI/Button/Button';
import Offers from './components/Offers/Offers';
import Start from './components/Start/Start';
import ReadingBlog from './components/ReadingBlog/ReadingBlog';
import Contact from './components/Contact/Contact';

const HomeScreen: FC = () => {
  return (
    <>
      <Hero />
      <Manage />
      <Advantages />
      <Banner
        image={img_banner_1}
        description="PWA READY STOREFRONT"
        title="Pay once, own everything"
        text="Build the business you’ve always dreamed of. No worries about monthly fees or recurring payments."
        button={<Button>Buy Uvodo now</Button>}
      />
      <Banner
        image={img_banner_2}
        description="PAY ONCE, USE LIFETIME"
        title="It’s how you sell on the spot"
        text="Sell from your online store and turn social media accounts into shoppable channels."
        swap
        button={<Button>Buy Uvodo now</Button>}
      />
      <Clients />
      <Offers />
      <Start />
      <ReadingBlog />
      <Contact />
    </>
  );
};

export default HomeScreen;
