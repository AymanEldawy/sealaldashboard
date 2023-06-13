import { SectionBar } from '@/components/Global/SectionBar/SectionBar'
import { Layout } from '@/components/Layout/Layout'
import { PaymentHistoryTable } from '@/components/PaymentHistoryComponents/PaymentHistoryTable'
import { PaymentsHistoryFilter } from '@/components/PaymentHistoryComponents/PaymentsHistoryFilter'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext, useState } from 'react'

// 
// 
// 
// 
// 
const PaymentHistory = () => {
  const { lang } = useContext(LanguageContext)
  const [openPaymentSummary, setOpenPaymentSummary] = useState('')
  return (
    <Layout>
      <SectionBar title={fetchWord('Payment_History', lang)} />
      <div className='container !my-4 md:!my-8'>
        <div className='md:p-4'>
          <PaymentsHistoryFilter />
          <div className='h-4 md:h-8' />
          {
            Array(5).fill(0)?.map((item, index) => (
              <PaymentHistoryTable
                key={index}
                openPaymentSummary={openPaymentSummary}
                setOpenPaymentSummary={setOpenPaymentSummary}
                index={index}
                canceled={index % 2 !== 0}
              />
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export default PaymentHistory