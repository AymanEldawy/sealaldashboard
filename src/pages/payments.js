import { SectionBar } from '@/components/Global/SectionBar/SectionBar'
import { Layout } from '@/components/Layout/Layout'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'

const Payments = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <Layout>
      <SectionBar title={fetchWord('Payments', lang)} />
    </Layout>
  )
}

export default Payments

/**
 
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