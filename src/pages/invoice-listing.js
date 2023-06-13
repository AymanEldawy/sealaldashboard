import SuperTable from '@/components/CustomTable/SuperTable'
import CustomSelectField from '@/components/Forms/CustomSelectField'
import { Button } from '@/components/Global/Button/Button'
import { SectionBar } from '@/components/Global/SectionBar/SectionBar'
import { ChevronIcon } from '@/components/Icons'
import { InvoiceListingFilter } from '@/components/InvoiceListingComponents/InvoiceListingFilter'
import { Layout } from '@/components/Layout/Layout'
import TabsList from '@/components/Tabs/TabsList'
import { LanguageContext } from '@/context/LangContext'
import { invoicing } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext, useState } from 'react'

const columns = [
  'INVOICE_NUMBER',
  'BILL_TYPE',
  'INVOICE_DATE',
  'AMOUNT',
]
const listFilter = [
  'MY_INVOICES',
  'INVOICES_SEALAL',
]
const InvoiceListing = () => {
  const { lang } = useContext(LanguageContext)
  const [activeTab, setActiveTab] = useState(listFilter?.[0])
  return (
    <Layout>
      <SectionBar title={fetchWord('Invoice_Listing', lang)} />
      <div className='container '>
        <div className='mt-4 p-1 md:p-5 bg-white rounded-md'>
          <TabsList
            separated
            separatedClassName="mt-3 !h-[20px]"
            list={listFilter}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            containerClassName="bg-white !mb-0 px-2 md:px-4 pt-4 rounded-t-xl border-b scroll-hide overflow-auto"
            itemClassName="!px-6 py-3 capitalize whitespace-nowrap  text-secondary flex flex-col relative text-sm !gap-1"
            iconEndClassName="absolute ltr:right-1 top-2 rtl:left-1"
            activeClassName="before:w-[60px] before:bg-primary before:h-[2px] text-primary before:absolute before:bottom-0 ltr:before:left-0 rtl:before:right-0"
            extraContentClassName="text-xs"
          />
          <InvoiceListingFilter />
        </div>
        <div className='mt-8 rounded-xl bg-white p-4'>
          <div className='flex justify-end gap-4 flex-col items-center sm:flex-row mb-4'>
            <div className='flex items-center gap-1'>
              <span>
                {fetchWord('Filtering_Result', lang)}
              </span>
              <strong className='text-primary'>
                {fetchWord('Question', lang)}
              </strong>
            </div>
            <Button classes="text-sm !px-4 !h-10 flex gap-2 !bg-secondary items-center">
              {fetchWord('Download_with_table', lang)}
              <ChevronIcon className="-rotate-90 scale-75" />
            </Button>
          </div>
          <SuperTable
            primaryStyles
            columns={columns}
            data={invoicing}
            allowActions
            actionKey={fetchWord('TRANSACTIONS', lang)}
            classes={{ containerClassName: 'mt-4 !rounded-none', table:'!rounded-none text-center', colHeadContentClassName: '!text-center !justify-center py-3', }}
            actionsContent={(data) => {
              console.log(data, 'testing')
              return (
                <div className='flex flex-col gap-1 px-4'>
                  <Button outline classes="text-xs">{fetchWord('Download_invoice', lang)}</Button>
                  <Button outline classes="text-xs !border-0">{fetchWord('Download_details', lang)}</Button>
                </div>
              )
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default InvoiceListing