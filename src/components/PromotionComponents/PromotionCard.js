import React, { useContext } from 'react'
import { ChevronIcon } from '../Icons'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'

const PromotionCard = ({ item, newClassName, itemTitleClassName }) => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='flex items-center gap-4 bg-secondary-light px-2 py-4'>
      <span>{item?.icon}</span>
      <div>
        <h3 className={`text-secondary mb-2 font-medium ${itemTitleClassName}`}>{fetchWord(item?.title, lang)}</h3>
        <p className="text-sm text-primary-text">{fetchWord(item?.description, lang)}</p>
      </div>
      <div className='flex gap-[2px] mb-auto items-center'>
        <ChevronIcon className="ltr:rotate-180 text-secondary h-5 w-5" />
        {item?.extraNew ?
          <span className={`bg-blue-light text-white p-1 text-xs rounded-md w-8 ${newClassName}`}>
            {fetchWord(item?.extraNew, lang)}
          </span>
          : <span className="w-8" />}
      </div>
    </div>
  )
}

export default PromotionCard