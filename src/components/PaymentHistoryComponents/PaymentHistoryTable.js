import { LanguageContext } from '@/context/LangContext'
import { paymentHistory, paymentHistoryDetails } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext, useState } from 'react'

import SuperTable from '../CustomTable/SuperTable'
import { Button } from '../Global/Button/Button'
import { CheckIcon, ChevronIcon, CloseIcon } from '../Icons'

let columns = [
  'PROCESS_TYPE',
  'EXPLANATION',
  'INVOICE_NUMBER',
  'NET_AMOUNT',
]

let columnsDetails = [
  'PROCESS_TYPE',
  'ORDER_NUMBER',
  'TRANSACTION_DATE',
  'DATE_OF_EXTRACT',
  'DETAIL_PRODUCT__DESCRIPTION',
  'AMOUNT',
  'COMMISSION',
  'NET_AMOUNT',
]
export const PaymentHistoryTable = ({ openPaymentSummary, setOpenPaymentSummary, canceled, index }) => {
  const { lang } = useContext(LanguageContext);
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className='overflow-hidden bg-white rounded-xl p-2 md:p-4 mb-4'>
      <div className='flex gap-4 flex-wrap justify-between items-end sm:items-center'>
        <div className='flex gap-4 text-sm md:text-base py-2 flex-col sm:flex-row'>
          <h4 className='flex gap-1 items-center font-medium order-2 sm:order-1 text-secondary'>{fetchWord('Dated_Payment', lang)}: <span className='font-normal'> {new Date().toLocaleDateString('en-UK')} </span>  </h4>
          {
            canceled ?
              <h4 className='flex gap-1 items-center order-1 sm:order-2 font-medium text-red-500'>{fetchWord('Payment_cancelled', lang)} <span className='h-7 w-7 flex items-center justify-center border border-red-500 rounded-full scale-75'><CloseIcon /></span>  </h4>
              :
              <h4 className='flex gap-1 items-center order-1 sm:order-2 font-medium text-green-500'>{fetchWord('Payment_completed', lang)} <span className='h-7 w-7 flex items-center justify-center border border-green-500 rounded-full scale-75'><CheckIcon /></span>  </h4>
          }
        </div>
        <div className='flex gap-2 items-center'>
          <div className='flex gap-1'>
            <span className='text-primary'>
              {fetchWord('The_total_payment', lang)}
            </span>
            <span className='text-secondary'>
              345
            </span>
          </div>
          <Button classes="!p-1" onClick={() => setOpenPaymentSummary(prev => prev !== index ? index : '')}>
            <ChevronIcon className={`${openPaymentSummary === index ? 'ltr:-rotate-90 rtl:rotate-90' : 'rtl:rotate-180'} scale-75 text-white`} />
          </Button>

        </div>
      </div>
      {
        openPaymentSummary === index ? (
          <>
            <div className='flex gap-2 my-4'>
              <Button onClick={() => setShowDetails(false)} classes={`text-sm rounded-3xl px-4 ${showDetails ? '!bg-transparent !text-blue-light' : ''}`}>{fetchWord('Summery_view', lang)}</Button>
              <Button onClick={() => setShowDetails(true)} classes={`text-sm rounded-3xl px-4 ${!showDetails ? '!bg-transparent !text-blue-light' : ''}`}>{fetchWord('Detail_view', lang)}</Button>
            </div>
            <SuperTable columns={showDetails ? columnsDetails : columns} data={showDetails ? paymentHistoryDetails : paymentHistory} classes={{ containerClassName: '!rounded-none', table: '!border-none', colBody: "!border-x-0", colHead: 'border-b-2 border-primary !py-3' }} />
          </>
        ) : null
      }
    </div>
  )
}
