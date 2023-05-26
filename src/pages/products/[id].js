import { Layout } from '@/components/Layout/Layout'
import { ProductAdditionalInformation } from '@/components/SingleProductComponents/ProductAdditionalInformation';
import { ProductCompare } from '@/components/SingleProductComponents/ProductCompare';
import { ProductDescription } from '@/components/SingleProductComponents/ProductDescription';
import { ProductFeatures } from '@/components/SingleProductComponents/ProductFeatures';
import { ProductImages } from '@/components/SingleProductComponents/ProductImages';
import { ProductInformation } from '@/components/SingleProductComponents/ProductInformation';
import { ProductReviews } from '@/components/SingleProductComponents/ProductReviews';
import { ProductSizeChart } from '@/components/SingleProductComponents/ProductSizeChart';
import { SimilarProducts } from '@/components/SingleProductComponents/SimilarProducts';
import TabsList from '@/components/Tabs/TabsList';
import { GlobalOptions } from '@/context/GlobalOptions';
import { getItemById, productImages, products } from '@/data/dummyData';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'

import TabsContent from './../../components/Tabs/TabsContent';
import ShareProduct from '@/components/SingleProductComponents/ShareProduct';

// additional_information
const tabs = ['product_description', 'reviews', 'size_chart', 'compare', 'product_tech_description']

const maxQuantity = 5
const SingleProduct = () => {
  const router = useRouter();
  const { addToCart } = useContext(GlobalOptions);
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState(tabs?.[0])
  const [product, setProduct] = useState();
  const [openShare, setOpenShare] = useState(false)

  useEffect(() => {
    setProduct(getItemById(products, +router?.query?.id))
  }, [router?.query?.id])

  console.log(router)
  console.log(activeTab)
  // add to cart
  const handleToCart = () => {
    addToCart({ ...product, quantity: quantity })
  }
  return (
    <>
     {
        openShare ? <ShareProduct setShare={setOpenShare} /> : null
      }
      <Layout>
        <div className='container'>
          <div className='flex flex-col md:flex-row gap-8'>
            <ProductImages setOpenShare={setOpenShare} images={productImages} />
            <ProductInformation setOpenShare={setOpenShare} handleToCart={handleToCart} maxQuantity={maxQuantity} quantity={quantity} setQuantity={setQuantity} color={color} setColor={setColor} size={size} setSize={setSize} product={product} />
          </div>
          <TabsList
            list={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            containerClassName="border-gray-400 border-b-2 mt-12 p-0 gap-16 mb-4"
            itemClassName="capitalize !px-0 text-lead font-semibold"
            activeClassName="border-primary !text-primary border-b-[3px] -mb-[2px]"
          />

          <TabsContent activeTabName={activeTab}>
            <ProductDescription tabName="product_description" />
            <ProductReviews tabName="reviews" />
            <ProductAdditionalInformation tabName="additional_information" />
            <ProductSizeChart tabName="size_chart" />
            <ProductCompare tabName="compare" />
            <ProductFeatures tabName="product_tech_description" />
          </TabsContent>
          <SimilarProducts />
        </div>
      </Layout>
    </>
  )
}

export default SingleProduct