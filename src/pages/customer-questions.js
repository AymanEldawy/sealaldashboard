import { CustomerQuestionFilters } from '@/components/CustomerQuestionsComponent/CustomerQuestionFilters'
import { SectionBar } from '@/components/Global/SectionBar/SectionBar'
import { Layout } from '@/components/Layout/Layout'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React from 'react'
import { useContext } from 'react'


const CustomerQuestions = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <Layout>
      <SectionBar title={fetchWord('Customer_Questions', lang)} />
      <CustomerQuestionFilters />
    </Layout>
  )
}

export default CustomerQuestions