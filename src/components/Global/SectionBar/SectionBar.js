import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import { EducationIcon, PlusIcon, QuestionMarkIcon } from '@/components/Icons'
import Link from 'next/link'
import { useContext } from 'react'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'

export const SectionBar = ({ title, hideAddProductButton }) => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='border-b-2 border-gray-200 bg-white flex items-center'>
      <div className='container'>
        <SectionTitle
          containerClassName="!mb-0 py-6"
          title={title}
          extraContent={
            <div className='flex gap-4 items-center'>
              {hideAddProductButton ? null : (
                <>
                  <Link href="/add-product" className="text-primary flex gap-2 items-center">
                    <span className='bg-primary rounded-full h-5 w-5 grid place-items-center'>
                      <PlusIcon className="text-white w-5 h-5" />
                    </span>
                    {fetchWord('Add_Product', lang)}
                  </Link>
                  <span className='h-4 w-[1px] bg-[#D5D9E1]' aria-hidden={true} />
                </>
              )}
              <button className="text-secondary flex gap-2 items-center">
                <EducationIcon className="text-white" />
                {fetchWord('How_Product_List', lang)}
              </button>
              <span className='h-4 w-[1px] bg-[#D5D9E1]' aria-hidden={true} />
              <Link href="/help" className="text-secondary flex gap-2 items-center">
                <QuestionMarkIcon className="text-white" />
                {fetchWord('Help', lang)}
              </Link>

            </div>
          }
        />
      </div>
    </div>)
}
