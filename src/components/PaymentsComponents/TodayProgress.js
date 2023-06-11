import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import React, { useContext, useState } from 'react'

import { Button } from '../Global/Button/Button';
import { BookProgressIcon, EarlyIcon, WarningIcon } from '../Icons';
import { ChartProgress } from './ChartProgress';

export const TodayProgress = () => {
  const list = [
    { name: 'Total_Sales_Amount', color: 'bg-secondary', result: 29.99},
    { name: 'Commission_Deduction', color: 'bg-[#FFF743]', result: 18},
    { name: 'Shipping_Invoice', color: 'bg-blue-light', result: 41.96},
    { name: 'Penalty_Bill', color: 'bg-primary', result: 11},
    { name: 'Other', color: 'bg-[#64E84E]', result: 10},
  ]
  const { lang } = useContext(LanguageContext);
  const [activeView, setActiveView] = useState('progress_payment')
  return (
    <div className='bg-white rounded-xl p-4 flex-1'>
      <h3 className='font-medium text-lg mb-6 text-secondary'>{fetchWord('Today_Progress', lang)}</h3>
      <div className='flex gap-2 items-center mb-4'>
        <Button onClick={() => setActiveView('progress_payment')} classes={`rounded-3xl flex items-center gap-2 px-4 py-2 text-sm ${activeView === 'progress_payment' ? '' : 'text-blue-light !bg-secondary-light'}`}><BookProgressIcon /> {fetchWord('progress_payment', lang)}</Button>
        <Button onClick={() => setActiveView('Early_payment')} classes={`rounded-3xl flex items-center gap-2 px-4 py-2 text-sm ${activeView === 'Early_payment' ? '' : 'text-blue-light !bg-secondary-light'}`}><EarlyIcon /> {fetchWord('Early_payment', lang)}</Button>
      </div>
      <div className='flex gap-4 md:gap-8 flex-wrap'>
        <div className='flex-1'>
          <p className='text-[Today_Progress] text-sm'>{fetchWord('Total_Progress_Amount', lang)}</p>
          <div className='flex gap-2 my-4'>
            <span className='text-secondary text-lg font-medium'>-36.77 ₺</span>
            <span className='text-sm text-primary flex gap-2'><WarningIcon /> {fetchWord('Payment_Failed', lang)}</span>
          </div>
          <ul className='flex gap-3 flex-col'>
            {list?.map(item => (
              <li key={item?.name} className="flex gap-2 text-[#273142] text-sm items-center justify-between">
                <div className='flex gap-2'>
                  <span className={`h-3 w-3 block rounded ${item?.color}`} />
                  {fetchWord(item?.name, lang)}
                  <WarningIcon className="fill-transparent h-4 w-4 text-secondary" />
                </div>
                <strong className={`w-[80px] flex justify-between ${item?.result > 0 ? 'text-secondary' : 'text-primary'}`}>:  <span>{item?.result}</span> </strong>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex-1'>
          <ChartProgress list={list && list} />
        </div>
      </div>
    </div>
  )
}
