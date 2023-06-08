import React from 'react'
import { ProductsFilterForm } from './ProductsFilterForm'
import SuperTable from '../CustomTable/SuperTable'
import { useState } from 'react'
import { productsData } from '@/data/dummyData'
import { Button } from '../Global/Button/Button'
import { useContext } from 'react'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import { ChevronIcon, GearIcon } from '../Icons'
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
        <div className='p-4 flex gap-4 overflow-auto scroll-hide'>
          <Button classes="text-sm !px-4 flex gap-2 items-center">
            {fetchWord('Batch_Actions', lang)}
            <ChevronIcon className="-rotate-90 scale-75" />
          </Button>
          <Button classes="text-sm !px-4 flex gap-2 items-center" outline>
            <GearIcon className="text-primary" />
            {fetchWord('Customize_Table', lang)}
          </Button>
          <Button classes="text-sm !px-4 !bg-secondary  flex gap-2 items-center">
            {fetchWord('Download_with_Excel', lang)}
            <ChevronIcon className="-rotate-90 scale-75" />
          </Button>
        </div>
        <SuperTable selectedList={selectedList} setSelectedList={setSelectedList} allowSelect columns={columns} data={productsData} />
      </div>
    </div>
  )
}
