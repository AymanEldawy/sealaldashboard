import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import Image from 'next/image';
import React, { useContext } from 'react'
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import '@/styles/NewArrivalsSlider.module.css';
import 'swiper/css';
import "swiper/css/navigation";

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return `<span class="${className} w-5 h-2 block cursor-pointer rounded-xl bg-[#D0E7FF]"></span>`;
  },
};
export const NewArrivalsSlider = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='overflow-hidden p-4 pb-8 bg-white rounded-md'>
      <Swiper
        className='new-arrivals'
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={pagination}
        modules={[Navigation, Pagination]}
        slideActiveClass='bg-primary'
      >
        <SwiperSlide>
          <div className='relative'>
            <Image src="/images/products/new-arrivals.png" alt="new arrivals" height={274} width={546} className="max-w-full w-auto h-auto" />
            <div className="absolute top-1/2 -translate-y-1/2 ltr:left-8 rtl:right-8">
              <h3 className='text-white font-semibold text-sm md:text-lg xl:text-2xl max-w-[250px]'>{fetchWord('new_arrivals_slider_description', lang)}</h3>
              <h4 className='text-black text-sm xl:text-base xl:font-medium'>{fetchWord('new_arrivals_slider_text', lang)}</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <Image src="/images/products/new-arrivals.png" alt="new arrivals" height={274} width={546} className="max-w-full w-auto h-auto" />
            <div className="absolute top-1/2 -translate-y-1/2 ltr:left-8 rtl:right-8">
              <h3 className='text-white font-semibold text-sm md:text-lg xl:text-2xl max-w-[250px]'>{fetchWord('new_arrivals_slider_description', lang)}</h3>
              <h4 className='text-black text-sm xl:text-base xl:font-medium'>{fetchWord('new_arrivals_slider_text', lang)}</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <Image src="/images/products/new-arrivals.png" alt="new arrivals" height={274} width={546} className="max-w-full w-auto h-auto" />
            <div className="absolute top-1/2 -translate-y-1/2 ltr:left-8 rtl:right-8">
              <h3 className='text-white font-semibold text-sm md:text-lg xl:text-2xl max-w-[250px]'>{fetchWord('new_arrivals_slider_description', lang)}</h3>
              <h4 className='text-black text-sm xl:text-base xl:font-medium'>{fetchWord('new_arrivals_slider_text', lang)}</h4>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  )
}
