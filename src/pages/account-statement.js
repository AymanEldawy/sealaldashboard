import SuperTable from '@/components/CustomTable/SuperTable'
import { InputField } from '@/components/Forms/InputField'
import { Button } from '@/components/Global/Button/Button'
import { SectionBar } from '@/components/Global/SectionBar/SectionBar'
import { CalenderIcon, CheckIcon } from '@/components/Icons'
import { Layout } from '@/components/Layout/Layout'
import { PaymentHistoryTable } from '@/components/PaymentHistoryComponents/PaymentHistoryTable'
import { PaymentsHistoryFilter } from '@/components/PaymentHistoryComponents/PaymentsHistoryFilter'
import { LanguageContext } from '@/context/LangContext'
import { accountStatementData, dailyRecordsData } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import Link from 'next/link'
import React, { useContext, useState } from 'react'

let columns = [
  'Request_No',
  'File_name',
  'Period',
  'Creation_Date',
]



const AccountStatement = () => {
  const { lang } = useContext(LanguageContext)
  const [date, setDate] = useState('')
  const handleFilterDate = () => { }
  return (
    <Layout>
      <SectionBar title={fetchWord('Current_account_statement', lang)} />
      <div className='container !my-4 md:!my-8'>
        <div className='md:p-4'>
          <div className='bg-white rounded-md p-2 md:p-4 grid grid-cols-1 sm:grid-cols-2 items-end gap-4'>
            <InputField containerClassName='text-sm flex-1 !mb-0'
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              label={fetchWord('Select_date', lang)}
              className='text-sm !w-full border border-[#D5D9E1] rounded-md p-2'
              iconEnd={<CalenderIcon className="bg-white w-5 h-5  pointer-events-none" />} iconEndClassName=" pointer-events-none"
            />
            <Button classes="flex-1 text-sm sm:text-base" onClick={handleFilterDate}>{fetchWord('Current_Account_Statement_List', lang)}</Button>
          </div>
          <div className='h-4 md:h-8' />
          <SuperTable
            primaryStyles
            columns={columns}
            data={accountStatementData}
            allowActions
            actionKey="TRANSACTIONS"
            actionsContent={() => (
              <button className="text-green-500 font-medium flex gap-2 items-center">
                {fetchWord('Download_Statement', lang)}
                <span className='h-7 w-7 flex items-center justify-center border border-green-500 rounded-full scale-75'><CheckIcon /></span>
              </button>
            )}
          />

        </div>
      </div>
    </Layout>
  )
}

export default AccountStatement