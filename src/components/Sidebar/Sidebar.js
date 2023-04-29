import { categories } from '@/data/dummyData'
import Link from 'next/link'
import React, { useContext } from 'react'
import BarsIcon from '../Icons/BarsIcon'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'

const Sidebar = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <aside className='sticky top-0 flex flex-col'>
      <h3 className='text-white bg-primary flex items-center p-2 px-6 gap-3'><BarsIcon /> {fetchWord('shop_department', lang)}</h3>
      <ul className='flex flex-col gap-2 border-2 py-2 px-8 overflow-auto flex-1'>
        {categories?.map((category, index) => (
          <li key={category} className='p-1 list-disc  hover:text-primary'>
            <Link href={`/categories/${category}`}>{category}

              {index === 4 ?
                <span className='p-1 text-xs ltr:ml-4 rtl:mr-4 bg-green-500 text-white'>New</span>
                : null}

            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar