import { CollectionSubCategories } from '@/components/HomeComponents/Collection/CollectionSubCategories/CollectionSubCategories'
import { FlashSaleBanner } from '@/components/HomeComponents/FlashSaleBanner/FlashSaleBanner'
import { Layout } from '@/components/Layout/Layout'
import { ProductCard } from '@/components/Product/ProductCard'
import { categories, products } from '@/data/dummyData'
import React, { useState, useEffect } from 'react'

const Sale = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[3]);

  return (
    <Layout>
      <div className="container">
        <FlashSaleBanner containerClassName="translate-y-0 mb-6" />
        <CollectionSubCategories categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <div className={`my-8 gap-2 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5`}>
          {
            products?.map(product => (
              <ProductCard product={product} key={product?.id} />
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export default Sale