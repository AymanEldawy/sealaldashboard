import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'

import { AutomaticIcon, CardPrimaryIcon, ReportIcon, ReportViewIcon, TrunkPrimaryIcon, VideoCenterPrimaryIcon } from '../Icons'

const vehicles = [
  { name: 'Automatic_Pricing', icon: <AutomaticIcon /> },
  { name: 'Video_center', icon: <VideoCenterPrimaryIcon /> },
  { name: 'Fast_Delivery_operation', icon: <TrunkPrimaryIcon /> },
  { name: 'Future_Payments', icon: <CardPrimaryIcon /> },
  { name: 'My_Product_Evaluations_Report', icon: <ReportIcon /> },
  { name: 'My_Favorite_Views_Report', icon: <ReportViewIcon /> },
]

const Vehicles = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='bg-white rounded-md p-4 my-4'>
      <h2 className='text-secondary lg:text-lg font-semibold mb-4'>{fetchWord('Vehicles', lang)}</h2>
      <div className='flex gap-4'>
        {
          vehicles?.map(item => (
            <div className='bg-secondary-light w-[150px] rounded p-2 flex flex-col gap-2 items-center justify-start' key={item?.title}>
              <span  className='h-[60px]'>{item?.icon}</span>
              <h3 className="text-secondary font-medium mb-2 text-center break-words">{fetchWord(item?.name, lang)}</h3>
            </div>
          ))
        }
      </div>
    </div>)
}

export default Vehicles