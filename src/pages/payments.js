import { SectionBar } from '@/components/Global/SectionBar/SectionBar'
import { Layout } from '@/components/Layout/Layout'
import { FuturePayment } from '@/components/PaymentsComponents/FuturePayment'
import { PaymentHistoryView } from '@/components/PaymentsComponents/PaymentHistoryView'
import { PaymentsFilterDetails } from '@/components/PaymentsComponents/PaymentsFilterDetails'
import { TodayProgress } from '@/components/PaymentsComponents/TodayProgress'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'

const Payments = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <Layout>
      <SectionBar title={fetchWord('Payments', lang)} />
      <div className='container my-4 md:my-8'>
        <PaymentsFilterDetails />
        <div className='flex gap-4 mt-8 flex-wrap'>
          <TodayProgress />
          <PaymentHistoryView />
        </div>
        <FuturePayment />
      </div>
    </Layout>
  )
}

export default Payments

/**
 














Total
commission
invoice
penalty
other
 Payments
Detailed_Payment_Search
Search_type
Order_number
SEARCH_PAYMENT
Today_Progress
progress_payment
Early_payment
Total_Progress_Amount
Payment_Failed
Total_Sales_Amount
Commission_Deduction
Shipping_Invoice
Penalty_Bill
Other
Total
commission
invoice
penalty
other
 Payments
Detailed_Payment_Search
Search_type
Order_number
SEARCH_PAYMENT
Today_Progress
progress_payment
Early_payment
Total_Progress_Amount
Payment_Failed
Total_Sales_Amount
Commission_Deduction
Shipping_Invoice
Penalty_Bill
Other
Total
commission
invoice
penalty
other
 */