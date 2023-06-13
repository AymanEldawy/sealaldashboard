import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'

import { Button } from '../Global/Button/Button'
import { LowCostIcon, SavingTimeIcon, SecureBilgingIcon } from '../Icons'

const list = [
  { title: "Saving_time", icon: <SavingTimeIcon /> },
  { title: "Secure_Billing", icon: <SecureBilgingIcon /> },
  { title: "Low_Cost_Advantage", icon: <LowCostIcon /> },
]
export const SealalInvoiceEditing = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='bg-white rounded-xl p-4'>
      <div className='bg-white border border-gray-200 rounded-xl p-4 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className=''>
          <h2 className='font-semibold md:tex-lg lg:text-2xl text-primary mb-4'>{fetchWord('My_Sealal_Invoice', lang)}</h2>
          <p className='text-sm md:text-base text-primary-text mb-4'>{fetchWord('speed_up_your_operation', lang)}</p>
          <div className='flex flex-col min-[450px]:flex-row gap-4 items-center mb-8'>
            {
              list?.map(item => (
                <div className='flex flex-1 w-full px-4 min-[450px]:px-0 min-[450px]:w-fit items-center min-[450px]:justify-center flex-row min-[450px]:flex-col gap-1' key={item?.title}>
                  <span className="w-[60px]">
                  {item?.icon}
                  </span>
                  <h3 className='text-secondary capitalize'>{fetchWord(item?.title, lang)}</h3>
                </div>
              ))
            }
          </div>
          <Button outline classes="px-6 block max-w-sm w-full mx-auto">{fetchWord('Frequently_Asked_Questions', lang)}</Button>
        </div>
        <div className=''>
          <div className='bg-black h-full' />
        </div>
      </div>
    </div>
  )
}
