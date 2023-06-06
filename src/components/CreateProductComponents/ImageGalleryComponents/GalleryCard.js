import { EllipseIcon } from '@/components/Icons'
import Image from 'next/image'
import React from 'react'

export const GalleryCard = ({ item }) => {
  return (
    <div className='bg-white border pb-2 rounded relative flex flex-col gap-1 justify-center items-center'>
      <div className='flex gap-2 justify-between items-center w-full absolute top-0 p-2 z-[1]'>
        <input type="checkbox" className="accent-primary w-4 h-4" />
        <EllipseIcon className="rotate-90 w-5 h-5 text-primary" />
      </div>
      <Image src={item?.image} alt="Gallery image" height={290} width={195} className="" />
      <h4 className="text-sm">{item?.file_name}</h4>
      <p className='text-xs text-gray-500'>{item?.size}</p>
    </div>
  )
}
