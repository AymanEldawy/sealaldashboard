import React from 'react'
import Image from 'next/image';
import RatingStars from '../RatingStars/RatingStars';

export const StoreCard = () => {
  return (
    <div className='flex gap-4'>
      <Image src='/images/products/1.png' alt='store name' height={60} width={60} className='rounded-full h-12 w-12' />
      <div className=''>
        <div className='flex gap-1 items-center'>
          <h4 className='text-secondary capitalize text-sm lg:text-lg '>store name</h4>
          <span className='text-[#D9D9D9] text-xs'>(ID 342344324)</span>
        </div>
        <RatingStars rating={4} count="7/10" />
      </div>
    </div>
  )
}
