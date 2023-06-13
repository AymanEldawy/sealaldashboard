import { LanguageContext } from '@/context/LangContext'
import { packages } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'

import { Button } from '../Global/Button/Button'
import { PackageIcon, WarningIcon } from '../Icons'

export const SealalPackages = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='rounded-xl bg-white py-8 px-2 md:px-4 mt-4 md:mt-8'>
      <div className='flex justify-between items-center gap-4 flex-wrap'>
        <div className=''>
          <h4 className="md:text-lg font-medium text-secondary">{fetchWord('package_text', lang)}</h4>
          <p className='text-blue-light flex gap-1 items-center text-xs md:text-base'><WarningIcon className="text-inherit" /> {fetchWord('package_text1', lang)}</p>
        </div>
        <div className='flex items-center gap-2 bg-primary text-white p-2 px-4 rounded-md'>
          <PackageIcon />
          <div className='flex flex-col'>
            <span className='text-[10px]'>
              {fetchWord('Available_balance', lang)}
            </span>
            43
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-6'>
        {packages?.map((item, index) => (
          <div className='flex flex-col gap-1 bg-[#F6FAFF] items-center justify-center p-4' key={index}>
            <span className='font-medium text-primary text-lg'>{item?.size}</span>
            <h3 className='font-semibold text-base text-black sm:text-lg lg:text-2xl'>{item?.count}</h3>
            <p className='text-[#273142]'>{item?.quality}</p>
            <div className='flex border-y flex-wrap sm:flex-nowrap border-gray-300 py-2 px-4 w-full'>
              <div className='flex flex-col gap-1 flex-1 justify-center items-center'>
                <span className="whitespace-nowrap text-xs text-primary-text">{fetchWord('Unit_price', lang)}</span>
                <span className='text-primary font-semibold'>{item?.unit_price}</span>
              </div>
              <div className='flex flex-col gap-1 flex-1 justify-center items-center'>
                <span className="whitespace-nowrap text-xs text-primary-text">{fetchWord('Package_Price', lang)}</span>
                <span className='text-primary font-semibold'>{item?.package_price}</span>
              </div>
            </div>
            <Button classes="w-full max-w-[80%] block mx-auto mt-4">{fetchWord('Buy', lang)}</Button>
          </div>
        ))}
      </div>
    </div>
  )
}
