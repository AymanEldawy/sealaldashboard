import { LanguageContext } from '@/context/LangContext'
import { links } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'

const SubMenu = () => {
  const { lang } = useContext(LanguageContext);
  const router = useRouter()
  return (
    <div className='flex items-center mb-4 mt-2 gap-4 w-full'>
      <ul className='flex items-center justify-around flex-1'>
        {links?.map(item => (
          <li key={item?.name}>
            <Link href={item?.link} className={`capitalize text-secondary hover:text-primary ${router?.pathname === item?.link ? 'text-primary' : ''}`}>{fetchWord(item?.name, lang)}</Link>
          </li>
        ))}
      </ul>
      <p className='text-primary font-medium capitalize min-w-[180px] rtl:text-left ltr:text-right'>{fetchWord('hotline', lang)} (+0123456789</p>
    </div>
  )
}

export default SubMenu