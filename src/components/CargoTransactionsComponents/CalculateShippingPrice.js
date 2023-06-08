import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'
import { InputField } from '../Forms/InputField'
import { Button } from '../Global/Button/Button'

export const CalculateShippingPrice = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='bg-white rounded-md px-4 py-6'>
      <div className='flex justify-between items-center gap-2 flex-wrap mb-4'>
        <h3 className="font-semibold text-secondary">{fetchWord('Calculate_Shipping_Price', lang)}</h3>
        <h4 className="font-medium text-primary text-sm">{fetchWord('Current_Shipping_Prices', lang)}</h4>
      </div>
      <div className='flex justify-between items-end gap-2 flex-wrap mb-6'>
        <InputField containerClassName="flex-1 !mb-0" labelClassName="text-primary-text text-sm !mb-0" label={fetchWord('DESI', lang)} />
        <Button classes="flex-1 h-12 text-sm sm:text-base">{fetchWord('CALCULATE', lang)}</Button>
      </div>
      <ul className='list-disc px-4 text-xs text-[#273142]'>
        <li className='marker:text-secondary-dark leading-5 mt-2'><p>{fetchWord('calculate_role1', lang)}</p> </li>
        <li className='marker:text-secondary-dark leading-5 mt-2'><p>{fetchWord('calculate_role2', lang)}</p> </li>
        <li className='marker:text-secondary-dark leading-4 mt-2'><p>{fetchWord('calculate_role3', lang)}</p>
          <ul className="px-4">
            <li><p> {fetchWord('prices_no1', lang)}</p></li>
            <li><p> {fetchWord('prices_no2', lang)}</p></li>
            <li><p> {fetchWord('prices_no3', lang)}</p></li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
