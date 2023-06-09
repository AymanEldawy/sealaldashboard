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
    <div className='bg-white px-2 md:px-4 py-4'>
      <CargoTransactionsFilters />
      <SuperTable columns={columns } data={companyChanges} classes={{table:'!rounded-none', colHead: '!py-4', colBody: '!py-2'}}/>
    </div>

  )
}
