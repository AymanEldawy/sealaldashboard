import SuperTable from '@/components/CustomTable/SuperTable'
import { SectionBar } from '@/components/Global/SectionBar/SectionBar'
import { Layout } from '@/components/Layout/Layout'
import TabsList from '@/components/Tabs/TabsList'
import { LanguageContext } from '@/context/LangContext'
import { allNotifications } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import React, { useState, useContext } from 'react'

const columns = [
  'Notification_No',
  'Stream_Name',
  'occur_History',
  'Solve_History',
  'Redirect_Date',
  'Grade_Status',
  'Situation',
]

const Notifications = () => {
  const { lang } = useContext(LanguageContext)
  const listFilter = [
    { name: 'customer_requests', extraContent: `3 ${fetchWord('request', lang)}` },
    { name: 'My_supports_requests', extraContent: `5 ${fetchWord('request', lang)}` },
  ]
  const [activeTab, setActiveTab] = useState(listFilter?.[0])
  return (
    <Layout>
      <SectionBar title={fetchWord('Notifications', lang)} />
      <div className='container !my-4 md:!my-8'>
        <div className='bg-white rounded-md p-2 md:p-4'>
          <TabsList
            separated
            separatedClassName="mt-3 !h-[20px]"
            list={listFilter}
            setActiveTab={setActiveTab}
            keyName="name"
            activeTab={activeTab?.name}
            containerClassName="bg-white mb-4 px-2 md:px-4 pt-4 rounded-t-xl border-b scroll-hide overflow-auto"
            itemClassName="px-3 md:!px-6 capitalize whitespace-nowrap  text-secondary flex flex-col relative text-sm !gap-1"
            iconEndClassName="absolute ltr:right-1 top-2 rtl:left-1"
            activeClassName="before:w-[60px] before:bg-primary before:h-[2px] text-primary before:absolute before:bottom-0 ltr:before:left-0 rtl:before:right-0"
            extraContentClassName="text-xs"
          />
          <SuperTable
            columns={columns}
            data={allNotifications}
            primaryStyles
            classes={{ containerClassName: 'mt-8', table: '!rounded-0 !border-0', colHead: 'py-4', colBody: 'px-4 !border-x-0 border-b' }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Notifications