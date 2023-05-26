import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

export const ProductImg = ({ src, alt, productId }) => {
  const router = useRouter()
  const handelLink = () => {
    router.push(`/products/${productId}`)
  }
  return (
    <figure className=' cursor-pointer h-[280px]' onClick={handelLink}>
      <Image src={src} alt={alt} height={284} width={230} className='w-full h-full object-contain' />
    </figure>
  )
}
