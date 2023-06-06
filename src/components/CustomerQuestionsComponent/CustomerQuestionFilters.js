import React, { useState } from 'react'
import TabsContent from '../Tabs/TabsContent'
import TabsList from '../Tabs/TabsList'
import { Questions } from './Questions'
import { ReadAnswer } from './ReadAwnser'

const listFilter = [
  { name: 'Product_question', extraContent: '43 Question', iconEnd: '' },
  { name: 'Order_question', extraContent: '34 Question', iconEnd: '' },
  { name: 'My_ready_answer', extraContent: '12 Answer', iconEnd: '' },
]
export const CustomerQuestionFilters = () => {
  const [activeTab, setActiveTab] = useState(listFilter?.[0])
  return (
    <div className='container '>
      <div className='mt-4 p-5'>
        <TabsList
          separated
          separatedClassName="mt-3 !h-[20px]"
          list={listFilter}
          setActiveTab={setActiveTab}
          keyName="name"
          activeTab={activeTab}
          containerClassName="bg-white !mb-0 px-4 pt-4 rounded-t-xl border-b scroll-hide overflow-auto"
          itemClassName="!px-6 capitalize whitespace-nowrap  text-secondary flex flex-col relative text-sm !gap-1 !px-5"
          iconEndClassName="absolute ltr:right-1 top-2 rtl:left-1"
          activeClassName="before:w-[60px] before:bg-primary before:h-[2px] text-primary before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2"
          extraContentClassName="text-xs"
        />
        <TabsContent activeTabName={activeTab?.name}>
          <Questions tabName="Product_question" />
          <Questions tabName="Order_question" />
          <ReadAnswer tabName="My_ready_answer" />
        </TabsContent>
      </div>
    </div>
  )
}
