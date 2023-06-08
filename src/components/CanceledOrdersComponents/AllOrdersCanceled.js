import React from 'react'
import { OrdersCanceledFilterForm } from './OrdersCanceledFilterForm'
import SuperTable from '../CustomTable/SuperTable'
import { useState } from 'react'
import { canceledOrders, productsData } from '@/data/dummyData'
import { useContext } from 'react'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import CustomSelectField from '../Forms/CustomSelectField'
let columns = [
  'Order_Information',
  'Buyer',
  "Piece",
  'Information',
  'Unit_price',
  'Cancelation_date',
  'Reason_for_cancellation',
]
export const AllOrdersCanceled = () => {
  const { lang } = useContext(LanguageContext)
  const [selectedList, setSelectedList] = useState([])
  return (
    <div>
      <OrdersCanceledFilterForm />
      <div className='h-4 md:h-8' />
      <div className='overflow-hidden bg-white rounded-xl p-4'>
        <div className='flex gap-1 items-center rounded-md border border-gray-400 px-2 mb-4 max-w-[350px]'>
          <span className="whitespace-nowrap">{fetchWord('Order_Date', lang)}</span>
          <CustomSelectField
            containerClassName="!mb-0 min-w-[150px]"
            arrowClassName="ltr:!-right-3 rtl:-left-3 !top-1"
            selectClassName="!border-none w-full  !h-10 !py-0"
            placeholder={fetchWord('Old_to_New', lang)}
          />
        </div>
        <SuperTable selectedList={selectedList} setSelectedList={setSelectedList} allowSelect columns={columns} data={canceledOrders} />
      </div>
    </div >
  )
}
