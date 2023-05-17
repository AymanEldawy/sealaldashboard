import { CategoriesAdd } from '@/components/CategoriesFilterComponents/CategoriesAdd'
import { CategoriesSortBar } from '@/components/CategoriesFilterComponents/CategoriesSortBar'
import { Filters } from '@/components/CategoriesFilterComponents/Filters'
import { Layout } from '@/components/Layout/Layout'
import SubMenu from '@/components/Menu/SubMenu/SubMenu'
import { ProductCard } from '@/components/Product/ProductCard'
import Sidebar from '@/components/Sidebar/Sidebar'
import { LanguageContext } from '@/context/LangContext'
import { categories, products } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext, useState } from 'react'

const Categories = () => {
  const { lang } = useContext(LanguageContext);
  const [activeView, setActiveView] = useState('grid');
  const [activeKeywords, setActiveKeywords] = useState('')
  const [sortBy, setSortBy] = useState('')
  return (
    <Layout hideSubMenu>
      <div className='container'>
        <div className='flex gap-4 mb-8'>
          <Sidebar
            list={categories} containerClassName="!relative w-[273px]"
            title={fetchWord('all_categories', lang)}
            listClassName="!list-none !p-0 gap-0"
            itemClassName="ltr:pl-8 ltr:pr-4 rtl:pr-8 rtl:pl-4 py-2 border-b relative whitespace-nowrap before:bg-gray-400 ltr:before:left-3 rtl:before:right-3 before:top-1/2 before:-translate-y-1/2 before:absolute before:w-[5px] before:h-[5px] before:rounded-full"
            extraContent={
              <>
                <Filters />
                <CategoriesAdd />
              </>
            }
          />
          <div className='flex-1 overflow-hidden'>
            <SubMenu />
            <CategoriesSortBar activeKeywords={activeKeywords} setActiveKeywords={setActiveKeywords} sortBy={sortBy} setSortBy={setSortBy} activeView={activeView} setActiveView={setActiveView} />
            <div className={`mt-8 gap-4 grid ${activeView === 'grid' ? "sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4" : ""}`}>
              {
                products?.map(product => (
                  <ProductCard key={product?.id} product={product} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Categories