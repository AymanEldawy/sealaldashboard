import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'
const list = [
  { name: 'My_balance', count: '8890 ₺' },
  { name: 'orders_confirmed_shipped', count: '-6.00 ₺' },
  { name: 'Delivered_orders', count: '-41.96 ₺' },
]
export const FuturePayment = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='bg-white rounded-xl p-4 mt-4'>
      <h3 className='font-medium text-lg text-secondary'>{fetchWord('My_Future_Payouts', lang)}</h3>
      <div className='flex gap-2 flex-wrap'>
        {
          list?.map(item => (
            <div className='bg-secondary-light p-3 py-6 gap-4 rounded-md flex flex-col items-center justify-center' key={item?.name}>
              <h4 className='text-secondary'>{fetchWord(item?.name, lang)}</h4>
              <span className='text-blue-light'>{item?.count}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}
