import { LanguageContext } from '@/context/LangContext'
import { customerQuestions, productsData } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'

import SuperTable from '../CustomTable/SuperTable'
import CustomSelectField from '../Forms/CustomSelectField'
import { Button } from '../Global/Button/Button'
import { ChevronIcon, GearIcon } from '../Icons'
import { CustomerQuestionForm } from './CustomerQuestionForm'

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
          selectClassName="border-primary text-secondary font-medium text-xs md:text-base"
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
