import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'

import Image from 'next/image'
import { EducationIcon } from '../Icons'

export const CampaignsAds = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='bg-white rounded-md p-4 my-4'>
      <h2 className='text-secondary lg:text-lg font-semibold mb-4'>{fetchWord('Campaigns', lang)}</h2>
      <div className='max-w-[90%] mx-auto'>
        <div className='flex items-center gap-4 lg:gap-8'>
          <span><Image src="/images/companies-ads-icon.svg" alt="companies-ads-icon" height={145} width={235} /></span>
          <div className='flex flex-col gap-2'>
            <p className='text-primary-text text-sm'>{fetchWord('campaign_ads_description', lang)}</p>
            <h3 className='text-primary font-medium flex items-center gap-1'><EducationIcon /> {fetchWord('Campaigns_Training', lang)}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
