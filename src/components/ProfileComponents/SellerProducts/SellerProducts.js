import React, { useState, useEffect, useContext } from 'react'
import { ProfileTitle } from '../ProfileTitle'
import { SortBy } from '../../CategoriesFilterComponents/SortBy'
import { ProductsTable } from './ProductsTable'
import { fetchWord } from '@/lang/fetchWord'
import { LanguageContext } from '@/context/LangContext'
import { products as allProducts } from '@/data/dummyData'

export const SellerProducts = () => {
  const { lang } = useContext(LanguageContext);
  const [products, setProducts] = useState([])
  useEffect(() => {
    setProducts(allProducts)
  }, [])
  return (
    <div className="ltr:pl-4 rtl:pr-4">
      <div className="flex justify-between gap-4 items-center mb-4">
        <ProfileTitle title={fetchWord('orders', lang)} />
        <div className="">
          <SortBy />
        </div>
      </div>
      <ProductsTable products={products}/>
    </div>
  )
}
