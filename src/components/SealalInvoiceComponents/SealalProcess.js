import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'
import { ThumbUpIcon } from '../Icons'

const processes = [
  { title: 'process_text2', description: 'process_text3', icon: '1' },
  { title: 'process_text4', description: 'process_text5', icon: '2' },
  { title: 'process_text6', description: 'process_text7', icon: '3' },
  { title: 'process_text8', description: 'process_text9', icon: <ThumbUpIcon /> }
]
export const SealalProcess = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='mt-8 bg-white p-4 rounded-xl'>
      <h2>{fetchWord('process_text1', lang)}</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
        {
          processes?.map(item => (
            <div className='flex items-center justify-center flex-col gap-2 ' key={item?.title}>
              <span className='h-16 w-16 rounded-full flex items-center justify-center text-lg bg-[#eaf5ff] text-primary font-semibold'>{item?.icon}</span>
              <h4 className='text-[#273142] font-medium text-sm md:text-base' >{fetchWord(item?.title, lang)}</h4>
              <p className='text-[#273142] text-xs md:text-sm text-center'>{fetchWord(item?.description, lang)}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
