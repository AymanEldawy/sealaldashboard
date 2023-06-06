import React from 'react'
import { DocumentTransactionsForm } from './DocumentTransactionsForm'
import SuperTable from '../CustomTable/SuperTable'
import { useState } from 'react'
import { customerQuestions, documentData, productsData } from '@/data/dummyData'
import { useContext } from 'react'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import CustomSelectField from '../Forms/CustomSelectField'
let columns = [
  'Creation_Date',
  'Brand',
  'Category',
  'Document_Detail',
  'Document_Status',
]

export const DocumentTransactionsTable = () => {
  const { lang } = useContext(LanguageContext)
  const [selectedList, setSelectedList] = useState([])
  return (
    <div>
      <DocumentTransactionsForm />
      <div className='h-8' />
      <div className='overflow-hidden bg-white rounded-xl p-6'>
        <CustomSelectField
          placeholder={fetchWord('Upload_documents_to_selected', lang)}
          selectClassName="border-primary !text-white text-sm !bg-transparent"
          containerClassName="max-w-[330px] !bg-primary rounded-md"
          iconClassName="text-white w-7 h-7 !bg-transparent"
        />
        <SuperTable
          selectedList={selectedList}
          setSelectedList={setSelectedList}
          columns={columns}
          data={documentData}
          allowSelect
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
