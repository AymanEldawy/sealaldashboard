import SuperTable from '@/components/CustomTable/SuperTable'
import { FlashPricesForm } from '@/components/FlashPricesComponents/FlashPricesForm'
import CustomSelectField from '@/components/Forms/CustomSelectField'
import { SectionBar } from '@/components/Global/SectionBar/SectionBar'
import { Layout } from '@/components/Layout/Layout'
import { LanguageContext } from '@/context/LangContext'
import { flashPricesData } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import Link from 'next/link'
import React, { useContext } from 'react'
const columns = [
  'Creation_Date',
  'Product_Information',
  'Question_Detail',
  'Process',
]
const FlashPrices = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <Layout>
      <SectionBar
        title={fetchWord('Create_Discount', lang)}
        extraContent={
          <Link href="/" className="text-secondary">
            {fetchWord('Screen_Introduction', lang)}
          </Link>
        }
      />
      <div className='container'>
        <div className='mt-4 md:p-4'>
          <div className='flex gap-4 items-center bg-white rounded-t-xl md:pt-4 px-2 md:px-4 font-medium text-secondary'>
            <p>{fetchWord('Situation', lang)}</p>
            <label className='flex gap-2 items-center'>
              <input type="radio" name="extend" className="accent-primary h-4 w-4" />
              {fetchWord('What_I_May_Be_Included', lang)}
            </label>
            <label className='flex gap-2 items-center'>
              <input type="radio" name="extend" className="accent-primary h-4 w-4" />
              {fetchWord('Im_Included', lang)}
            </label>
          </div>
          <FlashPricesForm />
        </div>
        <div className='bg-white rounded-md'>
          <div className="flex gap-4 items-center pt-4 mb-2 md:p-4">
            <label className='flex items-center gap-2 text-secondary font-medium'>
              <input type="checkbox" className='h-4 w-4 accent-primary' />
              {fetchWord('Products_in_stock', lang)}
            </label>
            <div className='flex gap-1 items-center rounded-md border border-gray-400 px-2 max-w-xs mx-4'>
              <span className="whitespace-nowrap">{fetchWord('sort_by', lang)}</span>
              <CustomSelectField
                containerClassName="!mb-0 min-w-[150px]"
                arrowClassName="ltr:!-right-3 rtl:-left-3 !top-1"
                selectClassName="!border-none w-full  !h-10 !py-0"
                placeholder={fetchWord('Best_seller', lang)}
              />
            </div>
          </div>
        <SuperTable
          columns={columns}
          data={flashPricesData}
          classes={{ containerClassName: '!rounded-none', table: '!border-none', colBody: "!border-x-0", colHead: 'border-b-2 border-primary !py-3' }}
          />
          </div>
      </div>
    </Layout>
  )
}

export default FlashPrices