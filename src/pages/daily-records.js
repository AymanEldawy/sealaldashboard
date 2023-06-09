import SuperTable from '@/components/CustomTable/SuperTable'
import { SectionBar } from '@/components/Global/SectionBar/SectionBar'
import { Layout } from '@/components/Layout/Layout'
import { PaymentHistoryTable } from '@/components/PaymentHistoryComponents/PaymentHistoryTable'
import { PaymentsHistoryFilter } from '@/components/PaymentHistoryComponents/PaymentsHistoryFilter'
import { LanguageContext } from '@/context/LangContext'
import { dailyRecordsData } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import Link from 'next/link'
import React, { useContext, useState } from 'react'

let columns = [
  'Receipt_NO',
  'DATE_OF_RELEASE',
  'EXPIRY_DATE',
  'TERM_DAY',
  'AMOUNT',

]


const DailyRecords = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <Layout>
      <SectionBar title={fetchWord('Daily_Records', lang)} />
      <div className='container'>
        <div className='md:p-4'>
          <PaymentsHistoryFilter />
          <div className='h-4 md:h-8' />
          <SuperTable
            columns={columns}
            data={dailyRecordsData}
            classes={{ containerClassName: 'bg-white px-4 !rounded-none', table: '!border-none', colBody: "!border-x-0", colHead: 'border-b-2 border-primary !py-3' }}
            allowActions
            actionKey="TRANSACTIONS"
            actionsContent={() => (
              <Link href="/" className="text-primary">{fetchWord('Details', lang)}</Link>
            )}
          />

        </div>
      </div>
    </Layout>
  )
}

export default DailyRecords