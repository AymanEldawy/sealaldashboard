import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import Link from 'next/link'
import React, { useContext, useState } from 'react'

import { Button } from '../Global/Button/Button'
import { WarningIcon } from '../Icons'

const list = [
  { name: 'My_Total_Sales', count: '-6.00 ₺' },
  { name: 'Commission', count: '-41.96 ₺' },
  { name: 'Cargo', count: '-6.00 ₺' },
  { name: 'Other', count: '-41.96 ₺' },
]

export const PaymentHistoryView = () => {
  const { lang } = useContext(LanguageContext);
  const [activeView, setActiveView] = useState('26.01.2023')
  return (
    <div className='bg-white rounded-xl p-4 flex-1'>
      <div className='flex gap-2 justify-between items-center'>
        <h3 className='font-medium text-lg mb-6 text-secondary'>{fetchWord('Payment_History', lang)}</h3>
        <Link href="/payment-history" className='text-sm text-[#273142]'>{fetchWord('View_All', lang)}</Link>
      </div>
      <div className='flex gap-4 items-center overflow-auto'>
        <Button onClick={() => setActiveView('26.01.2023')} classes={`rounded-3xl px-4 ${activeView === '26.01.2023' ? '' : '!bg-transparent text-blue-light'}`}>26.01.2023</Button>
        <Button onClick={() => setActiveView('19.01.2023')} classes={`rounded-3xl px-4 ${activeView === '19.01.2023' ? '' : '!bg-transparent text-blue-light'}`}>19.01.2023</Button>
        <Button onClick={() => setActiveView('12.01.2023')} classes={`rounded-3xl px-4 ${activeView === '12.01.2023' ? '' : '!bg-transparent text-blue-light'}`}>12.01.2023</Button>
      </div>
      <div className='mt-4'>
        <p className='text-center mb2'>{fetchWord('Total_Payment_Amount', lang)}</p>
        <span className='block text-center text-lg md:text-2xl text-primary my-2 font-medium'>453</span>
        <p className='text-sm text-blue-light flex items-center gap-1'><WarningIcon className="text-[]" /> {fetchWord('Payment_Could_Not', lang)}  -₺36,77</p>
        <h3 className='text-[#273142] mt-2 mb-4'>{fetchWord('Download_Payment_Details', lang)}</h3>
        <div className='flex gap-2 flex-wrap'>
          {
            list?.map(item => (
              <div className='bg-secondary-light p-3 py-6 flex-1 gap-4 rounded-md flex flex-col items-center justify-center' key={item?.name}>
                <h4 className='text-secondary'>{fetchWord(item?.name, lang)}</h4>
                <span className='text-blue-light'>{item?.count}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
