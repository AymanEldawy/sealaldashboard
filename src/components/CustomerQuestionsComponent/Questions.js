import React from 'react'
import { CustomerQuestionForm } from './CustomerQuestionForm'
import SuperTable from '../CustomTable/SuperTable'
import { useState } from 'react'
import { customerQuestions, productsData } from '@/data/dummyData'
import { Button } from '../Global/Button/Button'
import { useContext } from 'react'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import { ChevronIcon, GearIcon } from '../Icons'
import CustomSelectField from '../Forms/CustomSelectField'
let columns = [
  'Creation_Date',
  'Product_information',
  "Question_Detail",
  'Process',
]
export const Questions = () => {
  const { lang } = useContext(LanguageContext)
  const [selectedList, setSelectedList] = useState([])
  return (
    <div>
      <CustomerQuestionForm />
      <div className='h-4 md:h-8' />
      <div className='overflow-hidden bg-white rounded-xl p-2 md:p-6'>
        <CustomSelectField
          placeholder={fetchWord('New_by_creation_date', lang)}
          selectClassName="border-primary text-secondary font-medium"
          containerClassName="max-w-xs"
        />
        <SuperTable selectedList={selectedList} setSelectedList={setSelectedList} columns={columns} data={customerQuestions}

          classes={{
            table: "!border-none !rounded-none",
            headRow: 'border-b !border-primary',
            colHead: "border-b !border-primary !py-4",
          }}
        />
      </div>
    </div>
  )
}
