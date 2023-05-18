import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'

export const CartBar = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='flex flex-wrap gap-4 justify-center items-center my-4'>
      <div className='flex items-center justify-center min-w-[200px] font-medium text-[#3D3D3D] border border-[#ECECEC] p-4 rounded-md gap-12'>
        <span>{fetchWord('Discount', lang)}</span>
        <span>50$</span>
      </div>
      <div className='flex items-center justify-center min-w-[200px] font-medium text-[#3D3D3D] border border-[#ECECEC] p-4 rounded-md gap-12'>
        <span>{fetchWord('Delivery', lang)}</span>
        <span>50$</span>
      </div>
      <div className='flex items-center justify-center min-w-[200px] font-medium text-[#3D3D3D] border border-[#ECECEC] p-4 rounded-md gap-12'>
        <span>{fetchWord('Subtotal', lang)}</span>
        <span>50$</span>
      </div>
      <div className='flex items-center justify-center min-w-[200px] font-medium text-[#3D3D3D] border border-[#ECECEC] p-4 rounded-md gap-12'>
        <span>{fetchWord('Total', lang)}</span>
        <span>50$</span>
      </div>

    </div>
  )
}
