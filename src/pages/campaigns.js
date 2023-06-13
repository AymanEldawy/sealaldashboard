import SuperTable from '@/components/CustomTable/SuperTable'
import CustomSelectField from '@/components/Forms/CustomSelectField'
import { SectionBar } from '@/components/Global/SectionBar/SectionBar'
import { CheckTaskIcon, ChevronIcon, HistoryDeliveryIcon, TrunkRefusedIcon } from '@/components/Icons'
import { Layout } from '@/components/Layout/Layout'
import TabsList from '@/components/Tabs/TabsList'
import { LanguageContext } from '@/context/LangContext'
import { companies } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import Link from 'next/link'
import React, { useContext, useState } from 'react'

const columns = [
  'company_name',
  'date_of_change',
  'working_status',
  'working_model',
  'change_channel',
]
const list = ['Campaigns_I_Can_Join', 'Ive_Attended_Before']
const Companies = () => {
  const { lang } = useContext(LanguageContext);
  const [activeTab, setActiveTab] = useState(list?.[0]);

  return (
    <Layout>
      <SectionBar
        extraContentClassName="text-xs"
        title={fetchWord('Campaigns', lang)}
        extraContent={
          <>
            <Link href="/add-product" className="text-secondary text-xs flex gap-2 items-center">
              <CheckTaskIcon className="text-white w-5 h-5" checked />
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
      <div className="container">
        <div className='px-4 mt-4 md:p-5 bg-white'>
          <TabsList
            separated
            separatedClassName="mt-3 !h-[22px]"
            list={list}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            containerClassName="flex-1 bg-white !mb-0 pt-4 gap-4 border-b rounded-t-xl scroll-hide overflow-auto"
            itemClassName="capitalize whitespace-nowrap !block text-secondary relative text-sm !py-3 ltr:text-left rtl:text-right !px-0"
            iconEndClassName="absolute ltr:right-1 top-2 rtl:left-1"
            activeClassName="before:w-[60px] before:bg-primary before:h-[2px] text-primary before:absolute before:bottom-0 ltr:before:left-0 rtl:before:right-0"
            extraContentClassName="text-xs"
          />
          <div className='my-4 flex flex-wrap  items-center justify-between gap-4'>
            <div className='flex justify-between gap-4 items-center text-sm text-secondary'>
              <label className='flex gap-2 items-center sm:whitespace-nowrap'>
                <input type="radio" name="type" className='w-4 h-4 accent-primary' />
                {fetchWord('All', lang)}
              </label>
              <label className='flex gap-2 items-center sm:whitespace-nowrap'>
                <input type="radio" name="type" className='w-4 h-4 accent-primary' />
                {fetchWord('Upcoming_Campaigns', lang)}
              </label>
              <label className='flex gap-2 items-center sm:whitespace-nowrap'>
                <input type="radio" name="type" className='w-4 h-4 accent-primary' />
                {fetchWord('Ongoing_Campaigns', lang)}
              </label>
            </div>
            <CustomSelectField
              containerClassName="sm:!w-fit !mb-0"
              selectClassName="ltr:pr-10 rtl:pl-10 py-2"
              placeholder={fetchWord('According_to_Stock_Quantity', lang)}
            />
          </div>
          <SuperTable
            columns={columns}
            data={companies}
            classes={{ containerClassName: '!rounded-none', colBody: "", colHead: '!py-4 border' }}
            allowActions
            actionKey="TRANSACTIONS"
            actionsContent={() => (
              <button className="text-secondary bg-secondary-light font-medium py-1 px-4 flex gap-2 items-center">
                {fetchWord('TRANSACTIONS', lang)}
                <ChevronIcon className="-rotate-90 scale-75" />
              </button>
            )}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Companies