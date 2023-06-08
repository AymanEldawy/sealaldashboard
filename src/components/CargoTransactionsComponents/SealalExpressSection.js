import { LanguageContext } from '@/context/LangContext'
import Image from 'next/image'
import React, { useContext } from 'react'
import { Button } from '../Global/Button/Button'
import { fetchWord } from '@/lang/fetchWord'

export const SealalExpressSection = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='bg-white flex items-center gap-4 md:gap-8  mt-4 flex-wrap'>
      <Image src="/images/banner-sealal.png" alt="banner sealal express" height={195} width={350} />
      <div className="flex flex-1 flex-wrap pb-4 gap-1 px-4 md:px-8 items-center">
        <div className="">
        <h3 className="text-secondary font-semibold text-lg ">{fetchWord('apply_sealal_text1', lang)}</h3>
        <p className="text-sm text-primary-text">{fetchWord('apply_sealal_text2', lang)}</p>
        </div>
        <Button outline classes="text-sm mt-6 md:mt-0 ltr:md:ml-auto rtl:md:mr-auto">{fetchWord('apply_sealal_text3', lang)}</Button>
      </div>
    </div>
  )
}
