import React, { useEffect } from 'react'

import { ProductCardColors } from './ProductCardColors'
import { ProductDiscount } from './ProductDiscount'
import { ProductFavorite } from './ProductFavorite'
import { ProductGallery } from './ProductGallery'
import { ProductImg } from './ProductImg'
import { ProductInfo } from './ProductInfo'
import { ProductPrice } from './ProductPrice'
import { ProductRating } from './ProductRating'
import { ProductStatus } from './ProductStatus'

export const ProductCard = ({ product }) => {

  return (
    <div className='relative border border-gray-100 pt-2 px-2'>
      <div className='relative'>
        {
          product?.status ?
            <ProductStatus status={product?.status} />
            : null
        }
        <ProductFavorite favorite={product?.favorite} />
        <ProductDiscount discount={product?.discount} />
        {
          product?.images?.length ? (
            <ProductGallery images={product?.images} alt={product?.name} productId={product?.id} />
          ) : (
            <ProductImg src={product?.image} alt={product?.name} productId={product?.id} />
          )
        }
        {
          product?.colors?.length ? <ProductCardColors colors={product?.colors} /> : null
        }

      </div>
      <ProductInfo brand={product?.company_name} title={product?.name} productId={product?.id} />
      <ProductRating rating={product?.rating} />
      <div className='flex -mx-2 mt-4'>
        <ProductPrice price={product?.price} discount={product?.discount} />
        <span className='border text-[10px] flex items-center justify-center px-2 text-[#6881A1]'>{product?.delivery_time}</span>
      </div>
    </div>
  )
}
