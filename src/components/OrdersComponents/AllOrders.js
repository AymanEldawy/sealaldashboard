import { LanguageContext } from '@/context/LangContext'
import { newOrders, productsData } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'

import SuperTable from '../CustomTable/SuperTable'
import { Button } from '../Global/Button/Button'
import { ChevronIcon, GearIcon } from '../Icons'
import { OrdersFilterForm, ProductsFilterForm } from './OrdersFilterForm'
import CustomSelectField from '../Forms/CustomSelectField'

/********** Orders PAGE **********/
let columns = [
  'Order_Information',
  'Package_No',
  'Buyer',
  'Piece',
  'Information',
  'Unit_price',
  'Cargo',
  'Invoice',
  'Situation',
]
export const AllOrders = () => {
  const { lang } = useContext(LanguageContext)
  const [selectedList, setSelectedList] = useState([])
  return (
    <div>
      <OrdersFilterForm />
      <div className='h-4 md:h-8' />
      <div className='overflow-hidden bg-white rounded-xl'>
        <div className='p-4 flex gap-4 overflow-auto w-full scroll-hide flex-wrap'>
          <Button classes="text-sm !px-4 !h-10 flex justify-between gap-2 items-center block w-full sm:w-fit">
            {fetchWord('Batch_Actions', lang)}
            <ChevronIcon className="-rotate-90 scale-75" />
          </Button>
          <div className='flex gap-1 items-center rounded-md border border-gray-400 px-2 !w-full sm:!w-fit'>
            <span className="whitespace-nowrap">{fetchWord('Order_Date', lang)}</span>
            <CustomSelectField
              containerClassName="!mb-0 min-w-[150px] block "
              arrowClassName="ltr:!-right-3 rtl:-left-3 !top-1"
              selectClassName="!border-none w-full  !h-10 !py-0"
              placeholder={fetchWord('Old_to_New', lang)}
            />
          </div>
          <div className='flex whitespace-nowrap items-center gap-1 w-full sm:w-fit'>
            <span>
              {fetchWord('Filtering_Result', lang)}
            </span>
            <strong className='text-primary'>
              {fetchWord('Order', lang)}
            </strong>
          </div>
        </div>
        <SuperTable
          primaryStyles
          classes={{
            table: "!border-none !rounded-none",
            headRow: 'border-b !border-primary',
            colHead: "border-b !border-primary !py-4",
          }}
          selectedList={selectedList} setSelectedList={setSelectedList} allowSelect columns={columns} data={newOrders} />
      </div>
    </div>
  )
}
