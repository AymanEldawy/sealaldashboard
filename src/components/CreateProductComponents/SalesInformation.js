import { LanguageContext } from '@/context/LangContext'
import { salesInformation } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import React from 'react'
import { useContext } from 'react'

import SuperTable from '../CustomTable/SuperTable'

const columns = [
  "Image",
  "Barcode",
  "Color",
  "Trendyol_Sale_Price",
  "Stock",
  "VAT",
  "Stock code",
  "Process",
  "VAT",
  "Stock code",
  "Process",
]
export const SalesInformation = () => {
  const { lang } = useContext(LanguageContext)

  return (
    <div className='overflow-hidden'>
      <h3 className='text-lg text-secondary mb-4 font-medium'>{fetchWord('Sales_Information', lang)}</h3>
      <SuperTable
        columns={columns}
        data={salesInformation}
        classes={{containerClassName: '!rounded-none', table: 'border-none', colHead:'!py-3', colBody: 'ltr:first:border-l-0 rtl:first:border-r-0 ltr:last:border-r-0 last:border-l-0'}}
      />
    </div>
  )
}
