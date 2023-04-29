import PrimaryLink from '@/components/Global/PrimaryLink/PrimaryLink'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'

export const FlashSaleTimer = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className="flex flex-col justify-center items-center gap-4 max-w-[500px] h-full relative z-[5]">
      <h2 className='font-semibold text-4xl capitalize text-secondary mb-4'>{fetchWord('flash_sale', lang)} 24 {fetchWord('hours', lang)}</h2>
      <div className='flex items-center gap-6'>
        <span className="text-primary -mt-4 font-medium capitalize text-lg">{fetchWord('ends_in', lang)}</span>
        <div className='flex items-center gap-6'>
          <div className='flex flex-col gap-4 items-center'>
            <span className='text-[35px] bg-white py-2 px-6 rounded-md border border-[#DBDBDB] '>22</span>
            <p className='text-sm capitalize'>{fetchWord('hours', lang)}</p>
          </div>
          <div className='flex flex-col gap-4 items-center'>
            <span className='text-[35px] bg-white py-2 px-6 rounded-md border border-[#DBDBDB] '>40</span>
            <p className='text-sm capitalize'>{fetchWord('minutes', lang)}</p>
          </div>
          <div className='flex flex-col gap-4 items-center'>
            <span className='text-[35px] bg-white py-2 px-6 rounded-md border border-[#DBDBDB] '>24</span>
            <p className='text-sm capitalize'>{fetchWord('seconds', lang)}</p>
          </div>
        </div>
      </div>
      <PrimaryLink link="" className="!border-none mt-8 !rounded-3xl !p-3 !px-5 w-[140px]">{fetchWord('shop_now', lang)}</PrimaryLink>
    </div>
  )
}
