import { Button } from '@/components/Global/Button/Button'
import { SectionBar } from '@/components/Global/SectionBar/SectionBar'
import SectionTitle from '@/components/Global/SectionTitle/SectionTitle'
import { EducationIcon, PlusIcon, QuestionMarkIcon } from '@/components/Icons'
import { Layout } from '@/components/Layout/Layout'
import { ProductsFilters } from '@/components/ProductsComponents/ProductsFilters'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import Link from 'next/link'
import React, { useContext, useState } from 'react'

const Products = () => {
  const { lang } = useContext(LanguageContext)
  const [loading, setLoading] = useState(false)
  return (
    <Layout containerClassName="mb-12">
      <SectionBar title={fetchWord('Lists_of_products', lang)} />
      <ProductsFilters />
    </Layout>
  )
}

export default Products