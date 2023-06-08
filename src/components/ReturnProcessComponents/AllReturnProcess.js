import React from 'react'
import { OrdersCanceledFilterForm, ReturnProcessFilterForm } from './ReturnProcessFilterForm'
import SuperTable from '../CustomTable/SuperTable'
import { useState } from 'react'
import { canceledOrders, productsData, returnsProcesses } from '@/data/dummyData'
import { useContext } from 'react'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import CustomSelectField from '../Forms/CustomSelectField'
let columns = [
  'Order_Information',
  'Buyer',
  'Piece',
  'Information',
  'Unit_price',
  'Cargo',
  'Invoice',
  'Reason_for_return',
  'Situation',
]
export const AllReturnProcess = () => {
  const { lang } = useContext(LanguageContext)
  const [selectedList, setSelectedList] = useState([])
  return (
    <div>
      <ReturnProcessFilterForm />
      <div className='md:h-8 h-4' />
      <div className='overflow-hidden bg-white rounded-xl md:p-4 mb-4'>
        <SuperTable selectedList={selectedList} setSelectedList={setSelectedList} allowSelect columns={columns} data={returnsProcesses} />
      </div>
    </div >
  )
}
