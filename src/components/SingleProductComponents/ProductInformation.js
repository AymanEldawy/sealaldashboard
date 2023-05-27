import { LanguageContext } from '@/context/LangContext'
import { colors, sizes } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import Link from 'next/link'
import React, { useContext, useState } from 'react'

import { Button } from '../Global/Button/Button'
import { HeartIcon, ShareIcon } from '../Icons'
import { ProductFavorite } from '../Product/ProductFavorite'
import RatingStars from '../RatingStars/RatingStars'
import { ProductColors } from './ProductColors'
import { ProductQuantity } from './ProductQuantity'
import { ProductSizes } from './ProductSizes'

export const ProductInformation = ({ handleToCart, setOpenShare, product, color, setColor, size, setSize, quantity, setQuantity, maxQuantity }) => {
  const { lang } = useContext(LanguageContext);
  const [quantityError, setQuantityError] = useState(false)
  return (
    <div className='flex-1'>
      <div className='flex flex-wrap relative items-center gap-6'>
        <Link href="/profile/3223" className='text-secondary font-medium'>{product?.company_name}</Link>
        <div className="flex gap-2 items-center">
          <RatingStars rating={product?.rating} />
          <span className='text-xs text-[#333333]'>(6) {fetchWord('review', lang)}</span>
        </div>
        <div className='absolute top-0 ltr:right-0 rtl:left-0 items-center flex gap-1'>
          <HeartIcon className='h-5 w-5 !stroke-red-500 fill-red-500' />
          321
        </div>
      </div>
      <h2 className='text-2xl font-semibold mt-2'>{product?.name}</h2>
      <h4 className="text-xl mt-2 font-semibold">${product?.price} <span className="text-gray-500 text-xs font-noraml">({fetchWord('in_stock', lang)})</span></h4>
      <div className='border border-[#E9E9E9] my-4 h-[1px]' />
      <p className='text-lead text-lg'>{product?.description}</p>
      <div className='border border-[#E9E9E9] my-4 h-[1px]' />
      <ProductColors productColors={colors?.slice(0, 5)} color={color} setColor={setColor} />
      <div className='border border-[#E9E9E9] my-4 h-[1px]' />
      <ProductSizes productSizes={sizes} size={size} setSize={setSize} />
      <div className='border border-[#E9E9E9] my-4 h-[1px]' />
      <div className="flex gap-4 items-center">
        {quantityError ? <p className="capitalize text-red-500 ">{fetchWord('out_of_stock', lang)}</p> :
          <ProductQuantity quantity={quantity} setQuantity={setQuantity} maxQuantity={maxQuantity} setQuantityError={setQuantityError} />
        }
        <div className='flex items-center gap-2 relative w-full flex-1'>
          <button onClick={handleToCart} className=' flex-1 capitalize active:bg-transparent active:text-primary w-full max-w-[300px] p-2 capitalizes rounded-sm text-center bg-primary text-white'>{fetchWord('add_to_cart', lang)}</button>
          <ProductFavorite className="!static ltr:ml-auto rtl:mr-auto" />
          <button onClick={() => setOpenShare(true)}>
            <ShareIcon className="w-6 h-6 text-primary" />
          </button>

        </div>
      </div>
      <div className="mt-4 capitalize text-sm">
        <div className='flex gap-4'>
          <p><strong>{fetchWord('SKU', lang)}</strong>: U2012</p>
          <p><strong>{fetchWord('tags', lang)}</strong>: Hot, Women</p>
        </div>
        <p className="mt-1"><strong>{fetchWord('categories', lang)}</strong>: Dress, Handbag, T-Shirts</p>
        <p className="mt-1"><strong>{fetchWord('product_code', lang)}</strong>: 3234432423 </p>
      </div>
    </div>
  )
}
