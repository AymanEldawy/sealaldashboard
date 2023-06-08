import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'
const listFilter = [
  'Cargo_company',
  'Trendyol_Express',
  'Other_Companies'

]
export const CargoTransactionsFilters = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='gap-4 md:gap-8 flex whitespace-nowrap scroll-hide overflow-auto my-4 sm:my-2  p-2 md:p-4'>
      {listFilter?.map(item => (
        <label key={item} className='flex gap-1 items-center text-secondary'>
          <input type="radio" name="option" value={item} className='accent-primary h-5 w-5' />
          {fetchWord(item, lang)}
        </label>
      ))}
    </div>)
}
