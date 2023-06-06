import { Layout } from '@/components/Layout/Layout'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext, useState } from 'react'

import { SectionBar } from '../../Global/SectionBar/SectionBar'
import TabsContent from '../../Tabs/TabsContent'
import TabsList from '../../Tabs/TabsList'
import { ActiveImagesTab } from './ActiveImagesTab'

export const ImageGallery = () => {
  const { lang } = useContext(LanguageContext)
  const list = [
    { name: "ACTIVE_IMAGES", extraContent: `4 ${fetchWord('PCS', lang)}` },
    { name: "REJECTED_IMAGES", extraContent: `4 ${fetchWord('PCS', lang)}` }
  ]
  const [activeTab, setActiveTab] = useState(list?.[0])
  return (
    <Layout>
      <SectionBar hideAddProductButton title={fetchWord('Image_Gallery', lang)} />
      <div className="container !mb-8">
        <TabsList
          keyName="name"
          list={list}
          activeTab={activeTab?.name}
          setActiveTab={setActiveTab}
          itemClassName="p-4 py-5 font-medium flex flex-col text-sm bg-white text-secondary !gap-1 items-center justify-center first:rounded-l-md last:rounded-r-md"
          activeClassName="!bg-secondary !text-white"
          containerClassName="bg-white my-4"
          extraContentClassName="text-xs"
        />
        <TabsContent activeTabName={activeTab?.name}>
          <ActiveImagesTab className='' tabName={list?.[0]?.name} />
          <div className='' tabName={list?.[1]?.name}>
          </div>
        </TabsContent>
      </div>
    </Layout>
  )
}
