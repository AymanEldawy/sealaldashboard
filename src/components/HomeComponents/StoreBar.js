import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React from 'react'
import { useContext } from 'react'

import { StoreCard } from './StoreCard'

export const StoreBar = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='py-3 bg-white border-b border-gray-200'>
      <div className='container flex gap-2 items-center justify-between flex-wrap'>
        <StoreCard />
        <div className='flex gap-4 flex-wrap'>
          <div className='flex gap-2'>
            <span className='text-secondary md:text-base font-medium'> {fetchWord('Shipping_today', lang)}:</span>
            <strong>2 orders</strong>
          </div>
          <div className='flex gap-2'>
            <span className='text-secondary md:text-base font-medium'> {fetchWord('Current_Deadline', lang)}:</span>
            <strong>2 days</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
