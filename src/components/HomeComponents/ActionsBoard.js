import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'

const ActionsBoard = () => {
  const { lang } = useContext(LanguageContext)
  const actions = [
    { name: 'Pending_orders', count: `21 ${fetchWord('Pieces', lang)}` },
    { name: 'Delayed_orders', count: `21 ${fetchWord('Pieces', lang)}` },
    { name: 'Pending_Returns', count: `21 ${fetchWord('Pieces', lang)}` },
    { name: 'My_items_not_for_sale', count: `21 ${fetchWord('Pieces', lang)}` },
    { name: 'Products_pending_revision', count: `21 ${fetchWord('Pieces', lang)}` },
    { name: 'Pending_Products_questions', count: `21 ${fetchWord('Pieces', lang)}` },
    { name: 'Pending_Order_questions', count: `21 ${fetchWord('Pieces', lang)}` },
    { name: 'Eligible_Campaigns', count: `21 ${fetchWord('Pieces', lang)}` },
  ]

  return (
    <div className='bg-white rounded-md p-2 md:p-4 my-4'>
      <h2 className='text-secondary lg:text-lg font-semibold mb-4'>{fetchWord('Actions', lang)}</h2>
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {
          actions?.map(item => (
            <div className='bg-secondary-light flex flex-col rounded p-2' key={item?.title}>
              <h3 className="text-[#5CAEFF] text-sm md:text-base font-medium mb-2">{fetchWord(item?.name, lang)}</h3>
              <span className=' font-semibold mt-auto text-xs md:text-sm lg:text-lg text-[#094E99]'>{item?.count}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ActionsBoard