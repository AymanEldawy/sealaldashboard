import { SectionBar } from '@/components/Global/SectionBar/SectionBar'
import { Layout } from '@/components/Layout/Layout'
import { AllOrders } from '@/components/OrdersComponents/AllOrders'
import TabsContent from '@/components/Tabs/TabsContent'
import TabsList from '@/components/Tabs/TabsList'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import Link from 'next/link'
import React, { useContext, useState } from 'react'

const Products = () => {
  const { lang } = useContext(LanguageContext)
  const [loading, setLoading] = useState(false);
  const listFilter = [
    { name: 'ALL_ORDERS', extraContent: `${fetchWord('PACKAGES', lang)}` },
    { name: 'NEW', extraContent: `${fetchWord('PACKAGES', lang)}` },
    { name: 'PROCESSED', extraContent: `${fetchWord('PACKAGES', lang)}` },
    { name: 'IN_CASE_OF_CARRYING', extraContent: `${fetchWord('PACKAGES', lang)}` },
    { name: 'DELIVERED', extraContent: `${fetchWord('PACKAGES', lang)}` },
    { name: 'RESENDINGS', extraContent: `${fetchWord('PACKAGES', lang)}` },
    { name: 'PENDING_ORDERS', extraContent: `${fetchWord('PACKAGES', lang)}` },
  ]
  const [activeTab, setActiveTab] = useState(listFilter?.[0])
  return (
    <Layout containerClassName="mb-12">
      <SectionBar title={fetchWord('Orders_In_Shipping_Stage', lang)} />
      <div className='container '>
        <div className='mt-4 md:p-5'>
          <TabsList
            separated
            separatedClassName="mt-3 !h-[20px]"
            list={listFilter}
            setActiveTab={setActiveTab}
            keyName="name"
            activeTab={activeTab}
            containerClassName="bg-white !mb-0 px-2 md:px-4 pt-4 rounded-t-xl border-b scroll-hide max-w-full overflow-auto"
            itemClassName="px-3 md:!px-6 capitalize whitespace-nowrap  text-secondary flex flex-col relative text-sm !gap-1"
            iconEndClassName="absolute ltr:right-1 top-2 rtl:left-1"
            activeClassName="!text-primary before:w-[60px] before:bg-primary before:h-[2px] before:absolute before:bottom-0 ltr:before:left-0 rtl:before:right-0"
            extraContentClassName="text-xs"
          />
          <TabsContent activeTabName={activeTab?.name}>
            <AllOrders tabName="ALL_ORDERS" />
            <AllOrders tabName="NEW" />
            <AllOrders tabName="PROCESSED" />
            <AllOrders tabName="IN_CASE_OF_CARRYING" />
            <AllOrders tabName="DELIVERED" />
            <AllOrders tabName="RESENDINGS" />
            <AllOrders tabName="PENDING_ORDERS" />
          </TabsContent>
        </div>
      </div>
    </Layout>
  )
}

export default Products