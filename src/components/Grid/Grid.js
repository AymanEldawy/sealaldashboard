import SectionTitle from '@/components/Global/SectionTitle/SectionTitle'
import { ProductCard } from '@/components/Product/ProductCard'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export const Grid = ({ title, products }) => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='mt-8'>
      {title ?
        <SectionTitle title={title} link="/" />
        : null}
      <Swiper
        spaceBetween={10}
        slidesPerView={2.15}
        breakpoints={{
          100: {
            slidesPerView: 1.5
          },
          320: {
            slidesPerView: 2.15,
           
          },
          400: {
            slidesPerView: 2.5,
           
          },
          480: {
            slidesPerView: 3,
           
          },
          640: {
            slidesPerView: 3.15,
          },
          767: {
            slidesPerView: 3.75,
          },
          991: {
            slidesPerView: 4.15,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {products?.slice(0, 5)?.map(product => (
          <SwiperSlide key={product?.id}>
            <ProductCard product={product} key={product?.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div >
  )
}