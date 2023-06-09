import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'
import PromotionCard from './PromotionCard'
import Link from 'next/link'
export const PromotionList = ({ title, linkDetails, list, titleClassName, newClassName, itemTitleClassName}) => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='bg-white rounded-md p-2 md:p-4'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className={`text-primary font-medium text-base md:text-lg ${titleClassName}`}>{fetchWord(title, lang)}</h2>
        {linkDetails ? <Link className="text-[#273142] text-sm" href={linkDetails?.href}>{fetchWord(linkDetails?.name, lang)}</Link> : null}
      </div>
      <div className='flex flex-col gap-4'>
        {list?.map(item => (
          <PromotionCard key={item?.title} item={item} newClassName={newClassName} itemTitleClassName={itemTitleClassName} />
        ))}
      </div>
    </div>
  )
}
