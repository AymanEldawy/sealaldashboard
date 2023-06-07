import React, { useState } from 'react'

import { WarningIcon } from '../Icons'
import TabsContent from '../Tabs/TabsContent'
import TabsList from '../Tabs/TabsList'
import { ProductsFilterForm } from './ProductsFilterForm'
import { AllProducts } from './AllProducts'

const listFilter = [
  { name: 'All_products', iconEnd: '' },
  { name: 'on_sale', extraContent: '31 Products', iconEnd: '' },
  { name: 'Out_of_stock', extraContent: '31 Products', iconEnd: '' },
  { name: 'What_Revise', extraContent: '31 Products', iconEnd: <WarningIcon /> },
  { name: 'Not_Available', extraContent: '31 Products', iconEnd: '' },
  { name: 'Locked_Products', extraContent: '31 Products', iconEnd: '' },
  { name: 'Archived_Products', extraContent: '31 Products', iconEnd: '' },
]
export const ProductsFilters = () => {
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
          activeClassName="before:w-[60px] before:bg-primary before:h-[2px] text-primary before:absolute before:bottom-0 ltr:before:left-0 rtl:before:right-0"
          extraContentClassName="text-xs"
        />
        <TabsContent activeTabName={activeTab?.name}>
          <AllProducts className='' tabName="All_products" />
          <AllProducts tabName="on_sale" />
          <AllProducts tabName="Out_of_stock" />
          <AllProducts tabName="What_Revise" />
          <AllProducts tabName="Not_Available" />
          <AllProducts tabName="Locked_Products" />
          <AllProducts tabName="Archived_Products" />
        </TabsContent>
      </div>
    </div>
  )
}
