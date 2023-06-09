import SuperTable from '@/components/CustomTable/SuperTable'
import { Button } from '@/components/Global/Button/Button'
import { SectionBar } from '@/components/Global/SectionBar/SectionBar'
import { Layout } from '@/components/Layout/Layout'
import TabsList from '@/components/Tabs/TabsList'
import { LanguageContext } from '@/context/LangContext'
import { myCoupons } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import Link from 'next/link'
import React, { useContext, useState } from 'react'

const columns = [
  'START_END_DATE',
  'COUPON_BUDGET',
  'COUPON_INFORMATION',
  'VALID_PRODUCT_NUMBER',
  'WIN_TOTAL',
  'USED_TOTAL',
  'COUPON_STATUS',
]

const list = [
  'WIN_FROM_THE_PRODUCT',
  'SPECIAL_TO_YOUR_TARGET_AUDIENCE',
  'EARN_FOLLOWERS',
  'COMMENT_WIN',
]

const MyCoupons = () => {
  const { lang } = useContext(LanguageContext);
  const [activeTab, setActiveTab] = useState(list?.[0]);
  return (
    <Layout>
      <SectionBar title={fetchWord('My_coupons', lang)}
        extraContent={
          <Link href="/" className="text-secondary">
            {fetchWord('Screen_Introduction', lang)}
          </Link>
        }
      />
      <div className='container '>
        <div className='mt-4 p-1 md:p-5 bg-white rounded-md'>
          <div className='flex gap-4 justify-between items-center mb-4 relative border-b'>
            <TabsList
              separated
              separatedClassName="mt-3 !h-[20px]"
              list={list}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
              containerClassName="flex-1 bg-white !mb-0 px-2 md:px-4 pt-4 rounded-t-xl scroll-hide overflow-auto"
              itemClassName="!px-6 py-3 capitalize whitespace-nowrap  text-secondary flex flex-col relative text-sm !gap-1"
              iconEndClassName="absolute ltr:right-1 top-2 rtl:left-1"
              activeClassName="before:w-[60px] before:bg-primary before:h-[2px] text-primary before:absolute before:bottom-0 ltr:before:left-0 rtl:before:right-0"
              extraContentClassName="text-xs"
            />
            <Button outline classes="text-xs">{fetchWord('Review_report', lang)}</Button>
          </div>
          <SuperTable
            columns={columns}
            data={myCoupons}
            classes={{ containerClassName: ' !rounded-none', table: '!border-none', colBody: "!border-x-0", colHead: 'border-b-2 border-primary !py-3' }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default MyCoupons