'use client';

import Carousel, { ArrowProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { FC } from 'react';
import Button from '@components/UI/Button/Button';

import styles from './Clients.module.scss';

import cn from 'clsx';

import { TfiArrowLeft, TfiArrowRight } from 'react-icons/tfi';
import Image from 'next/image';

import client_img_1 from '@assets/clients/img-1.jpg';
import client_img_2 from '@assets/clients/img-2.jpg';
import Comment from './Comment';

const dotList = [client_img_1, client_img_2];

const CustomLeftArrow = ({ onClick }: ArrowProps) => (
  <Button className={cn(styles.button, styles.buttonLeft)} onClick={onClick}>
    <TfiArrowLeft />
  </Button>
);

const CustomRightArrow = ({ onClick }: ArrowProps) => (
  <Button className={cn(styles.button, styles.buttonRight)} onClick={onClick}>
    <TfiArrowRight />
  </Button>
);

const CustomDot = ({ active, index, ...props }: any) => {
  return (
    <li
      className={cn(styles.dot, { [`${styles.dotActive}`]: active })}
      {...props}
    >
      <Image src={dotList[index]} alt="dot-img" />
    </li>
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Clients: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>What Our Customers Say</h1>
        <p className={styles.subtitle}>
          See what it’s like to be a customer of Uvodo.
        </p>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={10000}
          keyBoardControl={true}
          containerClass={styles.carousel}
          itemClass={styles.item}
          dotListClass={styles.listDot}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          customDot={<CustomDot />}
        >
          <Comment
            comment="Uvodo and it’s amazing support team has helped me set up my first ever online store from the ground up. Now I’m making a living from my hobby. Couldn’t be happier!"
            author="Zane Mayes"
            profession="Entrepreneur, Business Owner"
          />
          <Comment
            comment="Uvodo and it’s amazing support team has helped me set up my first ever online store from the ground up. Now I’m making a living from my hobby. Couldn’t be happier!"
            author="Zane Mayes"
            profession="Entrepreneur, Business Owner"
          />
        </Carousel>
      </div>
    </section>
  );
};

export default Clients;
