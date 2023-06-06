import React from 'react'
import SuperTable from '../CustomTable/SuperTable'
import { salesInformation } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import { LanguageContext } from '@/context/LangContext'
import { useContext } from 'react'

const columns = [
  "Image",
  "Barcode",
  "Color",
  "Trendyol Sale Price",
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
    <div>
      <h3 className='text-lg text-secondary mb-4 font-medium'>{fetchWord('Product_Information', lang)}</h3>
      <SuperTable
        columns={columns}
        data={salesInformation}
      />
    </div>
  )
}
