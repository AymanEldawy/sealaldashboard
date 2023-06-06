import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React from 'react'
import { useContext } from 'react'

import { DiamondIcon } from '../Icons'

const performanceList = [
  { title: 'My_sales_Today', total: 134, discount: '10' },
  { title: 'My_last_days_sales_', total: 134, discount: '10' },
  { title: 'My_last_day_sales', total: 134, discount: '10' },
  { title: 'I_will_Buy_Next', total: 134, discount: '10' },
]
export const SalePerformance = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='bg-white rounded-md p-4'>
      <h2 className='text-secondary lg:text-lg font-semibold mb-4'>{fetchWord('My_sales_performance', lang)}</h2>
      <div className='grid lg:grid-cols-2 gap-4'>
        {
          performanceList?.map(item => (
            <div className='bg-secondary-light rounded p-2' key={item?.title}>
              <h3 className="text-[#5CAEFF] font-medium mb-2">{fetchWord(item?.title, lang)}</h3>
              <div className='flex justify-between items-center gap-2'>
                <span className=' font-semibold text-sm lg:text-lg text-[#094E99]'>{item?.total}$</span>
                <small className="text-xs text-gray-400 flex gap-1 items-center">% {item?.discount} <DiamondIcon /></small>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
