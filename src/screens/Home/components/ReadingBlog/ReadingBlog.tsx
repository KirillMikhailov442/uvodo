'use client';

import Carousel, { DotProps } from 'react-multi-carousel';
import styles from './ReadingBlog.module.scss';

import cn from 'clsx';

import { FC } from 'react';
import Card from './Card';

import img_card_1 from '@assets/carousel-images/img-1.jpg';
import img_card_2 from '@assets/carousel-images/img-2.jpg';
import img_card_3 from '@assets/carousel-images/img-3.jpg';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
};

const CustomDot = ({ active, ...props }: DotProps) => (
  <li
    className={cn(styles.dot, { [`${styles.dotActive}`]: active })}
    {...props}
  ></li>
);

const ReadingBlog: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Read our blog</h1>
        <p className={styles.subtitle}>
          We give actionable tips, strategies, and techniques to grow your
          business.
        </p>
        <Carousel
          arrows={false}
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={10000}
          keyBoardControl={true}
          className={styles.carousel}
          customDot={<CustomDot />}
        >
          <Card
            image={img_card_1}
            text="Social media isn’t killing as much as smoking"
            description="Only if you know how to use and get the most of it."
            date="Dec 29, 2021"
          />
          <Card
            image={img_card_2}
            text="How to get the most out of social media to grow your business?"
            description="Social media has become everything — from a way to connect with new people to a way to make money. It has turned into something that we c..."
            date="Nov 1, 2021"
          />
          <Card
            image={img_card_3}
            text="Hosted VS self-hosted eCommerce: which solution to choose for your online business?"
            description="You may have heard of these platforms like Shopify, Volusion, and BigCommerce, where you are paying on a monthly basis to have an online ..."
            date="Sep 30, 2021"
          />
          <Card
            image={img_card_1}
            text="Social media isn’t killing as much as smoking"
            description="Only if you know how to use and get the most of it."
            date="Dec 29, 2021"
          />
          <Card
            image={img_card_2}
            text="How to get the most out of social media to grow your business?"
            description="Social media has become everything — from a way to connect with new people to a way to make money. It has turned into something that we c..."
            date="Nov 1, 2021"
          />
          <Card
            image={img_card_3}
            text="Hosted VS self-hosted eCommerce: which solution to choose for your online business?"
            description="You may have heard of these platforms like Shopify, Volusion, and BigCommerce, where you are paying on a monthly basis to have an online ..."
            date="Sep 30, 2021"
          />
        </Carousel>
      </div>
    </section>
  );
};

export default ReadingBlog;
