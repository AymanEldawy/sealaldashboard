import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'
import { CargoTransactionsFilters } from './CargoTransactionsFilters'
import SuperTable from '../CustomTable/SuperTable'
import { companyChanges } from '@/data/dummyData'

const columns = [
  'Company_name',
  'Date_of_Change',
  'Working_Status',
  'Working_Model',
  'Change_Channel',
  'Transactions'
]

export const CargoTransactionsTable = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='bg-white p-4'>
      <CargoTransactionsFilters />
      <SuperTable columns={columns } data={companyChanges} classes={{table:'!rounded-none', colHead: '!py-2', colBody: '!py-2'}}/>
    </div>

  )
}
