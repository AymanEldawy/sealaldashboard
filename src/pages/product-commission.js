import SuperTable from '@/components/CustomTable/SuperTable'
import CustomSelectField from '@/components/Forms/CustomSelectField'
import { SectionBar } from '@/components/Global/SectionBar/SectionBar'
import { Layout } from '@/components/Layout/Layout'
import { ProductCommissionForm } from '@/components/ProductCommission/ProductCommissionForm'
import { LanguageContext } from '@/context/LangContext'
import { productCommissionData } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'

let columns = [
  'Creation_Date',
  'Product_Information',
  'Question_Detail',
  'Process',
]
const ProductCommission = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <Layout>
      <SectionBar title={fetchWord('Product_Commission_Tariffs', lang)} />
      <div className='container'>
        <div className='mt-4 md:p-5'>
          <ProductCommissionForm />
          <div className='bg-white mt-4 pt-4'>
            <div className='flex gap-1 mb-4 items-center rounded-md border border-gray-400 px-2 max-w-xs mx-4'>
              <span className="whitespace-nowrap">{fetchWord('Order_Date', lang)}</span>
              <CustomSelectField
                containerClassName="!mb-0 min-w-[150px]"
                arrowClassName="ltr:!-right-3 rtl:-left-3 !top-1"
                selectClassName="!border-none w-full  !h-10 !py-0 text-sm md:text-base"
                placeholder={fetchWord('Old_to_New', lang)}
              />
            </div>
            <SuperTable
              columns={columns}
              data={productCommissionData}
              classes={{ containerClassName: '!rounded-none', table: '!border-none', colBody: "!border-x-0", colHead: 'border-b-2 border-primary !py-3' }}
            />
          </div>
        </div>
      </div>
    </Layout>

  )
}

export default ProductCommission