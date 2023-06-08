import { ImageGallery } from '@/components/CreateProductComponents/ImageGalleryComponents/ImageGallery'
import { ProductInformationForm } from '@/components/CreateProductComponents/ProductInformationForm'
import { ProductsFeatures } from '@/components/CreateProductComponents/ProductsFeatures'
import { SalesInformation } from '@/components/CreateProductComponents/SalesInformation'
import VideoCenter from '@/components/CreateProductComponents/VideoCenter'
import { SectionBar } from '@/components/Global/SectionBar/SectionBar'
import { Layout } from '@/components/Layout/Layout'
import TabsContent from '@/components/Tabs/TabsContent'
import TabsList from '@/components/Tabs/TabsList'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'

const list = [
  "Product_Information",
  "Sales_Information",
  "Product_features",
  "Image_Gallery",
]



const AddProduct = () => {
  const { lang } = useContext(LanguageContext);
  const [activeTab, setActiveTab] = useState(list?.[0])

  console.log(activeTab)
  return <VideoCenter tabName="Image_Gallery" />
  return (
    <Layout>
      <SectionBar hideAddProductButton title={fetchWord('Create_Single_Product', lang)} />
      <div className='container !my-4 md:!my-8'>
        <div className='flex gap-4'>
          <TabsList
            direction="vertical"
            list={list}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            containerClassName="py-8 w-[349px] gap-4 bg-white rounded-xl h-[100dvh] sticky top-0"
            itemClassName="border-b text-secondary py-4"
            activeClassName="text-primary"
          />
          <TabsContent activeTabName={activeTab} containerClassName="flex-1 bg-white px-4 py-8 rounded-xl">
            <ProductInformationForm tabName="Product_Information" />
            <SalesInformation tabName="Sales_Information" />
            <ProductsFeatures tabName="Product_features" />
            {/* <ImageGallery tabName="Image_Gallery" /> */}
          </TabsContent>
        </div>
      </div>
    </Layout>
  )
}

export default AddProduct