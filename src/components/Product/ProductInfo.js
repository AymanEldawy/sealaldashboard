import Link from 'next/link'
import React from 'react'

export const ProductInfo = ({ productId, brand, title }) => {
  return (
    <div className='flex flex-col my-2'>
      <p className='text-secondary text-sm font-medium'>{brand}</p>
      <Link href={`/products/${productId}`} className='text-[#333E48] h-[20px] overflow-hidden hover:text-primary text-lg font-semibold'>{title}</Link>
    </div>
  )
}
