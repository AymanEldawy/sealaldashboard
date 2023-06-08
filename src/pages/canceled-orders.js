import { AllOrdersCanceled } from '@/components/CanceledOrdersComponents/AllOrdersCanceled'
import { SectionBar } from '@/components/Global/SectionBar/SectionBar'
import { Layout } from '@/components/Layout/Layout'
import TabsContent from '@/components/Tabs/TabsContent'
import TabsList from '@/components/Tabs/TabsList'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext, useState } from 'react'
const listFilter = [
  "ALL_cancelation",
  "Customer_cancelled",
  "I_cancelled",
  "Sealal_canceled",
]
const CanceledOrders = () => {
  const { lang } = useContext(LanguageContext)
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState(listFilter?.[0])

  return (
    <Layout containerClassName="mb-12">
      <SectionBar title={fetchWord('Canceled_Orders', lang)} />
      <div className='container '>
      <div className='mt-4 md:p-5'>
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
        <TabsContent activeTabName={activeTab}>
          <AllOrdersCanceled tabName="ALL_cancelation" />
          <AllOrdersCanceled tabName="Customer_cancelled" />
          <AllOrdersCanceled tabName="I_cancelled" />
          <AllOrdersCanceled tabName="Sealal_canceled" />
        </TabsContent>
      </div>
    </div>
    </Layout>
  )
}

export default CanceledOrders