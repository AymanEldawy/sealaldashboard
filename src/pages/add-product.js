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
  "Video_center"
]



const AddProduct = () => {
  const { lang } = useContext(LanguageContext);
  const [activeTab, setActiveTab] = useState(list?.[0])

  console.log(activeTab)
  return (
    <Layout>
      <SectionBar hideAddProductButton title={fetchWord('Create_Single_Product', lang)} />
      <div className='container !my-4 md:!my-8'>
        <div className='flex flex-wrap md:flex-nowrap gap-4'>
          <TabsList
            // direction="vertical"
            list={list}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            containerClassName="md:py-8 scroll-hide overflow-auto md:flex-col md:w-[200px] lg:w-[250px] xl:w-[320px]  gap-4 bg-white rounded-xl md:h-[100dvh] md:sticky top-0"
            itemClassName="md:border-b text-secondary !py-2 md:!py-4"
            activeClassName="text-primary"
          />
          <div className='overflow-auto w-full'>

            <TabsContent activeTabName={activeTab} containerClassName="flex-1 bg-white px-4 py-8 rounded-xl">
              <ProductInformationForm tabName="Product_Information" />
              <SalesInformation tabName="Sales_Information" />
              <ProductsFeatures tabName="Product_features" />
              <ImageGallery tabName="Image_Gallery" />
              <VideoCenter tabName="Video_center" />
            </TabsContent>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AddProduct