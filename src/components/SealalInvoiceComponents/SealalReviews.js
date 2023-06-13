import { LanguageContext } from '@/context/LangContext'
import { reviews } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import Image from 'next/image'
import React, { useContext } from 'react'

import RatingStars from '../RatingStars/RatingStars'

export const SealalReviews = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='rounded-xl bg-white py-8 px-4 mt-4 md:mt-8'>
      <h2 className="md:text-xl mb-6 font-medium text-secondary">{fetchWord('our_business', lang)}</h2>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {
          reviews?.map((review, index) => (
            <div className='h-full bg-[#F6FAFF] p-4' key={index}>
              <div className='flex gap-2 items-center'>
                <Image src={review?.image} alt={review?.name} width={44} height={44} className='rounded-full' />
                <div className=''>
                  <h3 className='text-lg font-semibold text-[#273142]'> {review?.name}</h3>
                  <h4 className='text-[#95A1B5] text-xs'>{review?.role}</h4>
                </div>
              </div>
              <div className='flex flex-col gap-4 mt-4'>
                <h5>{review?.title}</h5>
                <p>{review?.comment}</p>
                <div className='mt-auto' />
                <RatingStars rating={review?.rating}  />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
