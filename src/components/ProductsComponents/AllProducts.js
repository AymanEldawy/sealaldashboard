import { LanguageContext } from '@/context/LangContext'
import { productsData } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'

import SuperTable from '../CustomTable/SuperTable'
import { Button } from '../Global/Button/Button'
import { ChevronIcon, GearIcon } from '../Icons'
import { ProductsFilterForm } from './ProductsFilterForm'

let columns = [
  'buybox',
  'Product_information',
  "Barcode",
  'Brand',
  'Model_Code',
  'Color',
  'Body',
  'Commission',
  'Market_Selling_Price',
  'Sealal_Sale_Price',
  'Stock',
  'Situation',
  'Transactions',
]
export const AllProducts = () => {
  const { lang } = useContext(LanguageContext)
  const [selectedList, setSelectedList] = useState([])
  return (
    <div>
      <ProductsFilterForm />
      <div className='h-4 md:h-8' />
      <div className='overflow-hidden bg-white rounded-xl'>
        <div className='p-4 flex gap-4 overflow-auto scroll-hide flex-wrap sm:flex-nowrap'>
          <Button classes="text-sm !px-4 flex gap-2 w-full items-center justify-between">
            {fetchWord('Batch_Actions', lang)}
            <ChevronIcon className="-rotate-90 scale-75 ltr:ml-auto rtl:mr-auto" />
          </Button>
          <Button classes="text-sm !px-4 flex gap-2 w-full items-center" outline>
            <GearIcon className="text-primary" />
            {fetchWord('Customize_Table', lang)}
          </Button>
          <Button classes="text-sm !px-4 !bg-secondary  flex gap-2 w-full items-center justify-between">
            {fetchWord('Download_with_Excel', lang)}
            <ChevronIcon className="-rotate-90 scale-75 ltr:ml-auto rtl:mr-auto" />
          </Button>
        </div>
        <SuperTable selectedList={selectedList} setSelectedList={setSelectedList} allowSelect columns={columns} data={productsData} />
      </div>
    </div>
  )
}
