import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import Link from 'next/link'
import React, { useContext } from 'react'

import { FollowBtn } from '../FollowBtn/FollowBtn'
import { Button } from '../Global/Button/Button'

export const SellerBar = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='bg-bmain p-4 px-8 flex items-center justify-between mb-4'>
      <div className='flex gap-1'>
        <strong className='text-secondary capitalize'>{fetchWord('seller', lang)}</strong>:
        <Link href="/profile/431" className='font-medium'>Seller name</Link>
        <FollowBtn />
        <span className="text-[#B9B9B9] border border-[#B9B9B9] bg-white rounded-3xl text-xs px-3 py-1 capitalize mx-2">{fetchWord('follow', lang)}</span>
      </div>
      <Button outline classes="">{fetchWord('rate_seller', lang)}</Button>
    </div>
  )
}
