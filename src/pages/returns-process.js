import { SectionBar } from '@/components/Global/SectionBar/SectionBar'
import { CheckTaskIcon, HistoryDeliveryIcon, TrunkRefusedIcon } from '@/components/Icons'
import { Layout } from '@/components/Layout/Layout'
import { AllReturnProcess } from '@/components/ReturnProcessComponents/AllReturnProcess'
import TabsContent from '@/components/Tabs/TabsContent'
import TabsList from '@/components/Tabs/TabsList'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
const listFilter = [
  "ALL_cancelation",
  "Customer_cancelled",
  "I_cancelled",
  "Sealal_canceled",
]
const ReturnsProcess = () => {
  const { lang } = useContext(LanguageContext)
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState(listFilter?.[0])
  return (
    <Layout containerClassName="mb-12">
      <SectionBar
        extraContentClassName="text-xs"
        title={fetchWord('Returns_Processes', lang)}
        extraContent={
          <>
            <Link href="/add-product" className="text-secondary text-xs flex gap-2 items-center">
              <CheckTaskIcon className="text-white w-5 h-5" />
              {fetchWord('Approval_Rejection_Pending_Returns', lang)}
            </Link>
            <span className='h-4 w-[1px] bg-[#D5D9E1]' aria-hidden={true} />
            <Link href="/add-product" className="text-secondary text-xs flex gap-2 items-center">
              <TrunkRefusedIcon className="text-white w-5 h-5" />
              {fetchWord('Needs_to_be_Shipped_Refused_Returns', lang)}
            </Link>
            <span className='h-4 w-[1px] bg-[#D5D9E1]' aria-hidden={true} />
            <Link href="/add-product" className="text-secondary text-xs flex gap-2 items-center">
              <HistoryDeliveryIcon className="text-white w-5 h-5" />
              {fetchWord('Delivery_Required_Returns', lang)}
            </Link>
            <span className='h-4 w-[1px] bg-[#D5D9E1]' aria-hidden={true} />
          </>
        }
        hideMangeProduct
      />
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
            <AllReturnProcess tabName="ALL_cancelation" />
            <AllReturnProcess tabName="Customer_cancelled" />
            <AllReturnProcess tabName="I_cancelled" />
            <AllReturnProcess tabName="Sealal_canceled" />
          </TabsContent>
        </div>
      </div>
    </Layout>
  )
}

export default ReturnsProcess