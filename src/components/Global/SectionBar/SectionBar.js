import { EducationIcon, PlusIcon, QuestionMarkIcon } from '@/components/Icons'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import Link from 'next/link'
import React from 'react'
import { useContext } from 'react'

import SectionTitle from '../SectionTitle/SectionTitle'

export const SectionBar = ({ title, hideAddProductButton, hideMangeProduct, hideHelp, extraContent, extraContentClassName }) => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='border-b-2 border-gray-200 bg-white flex flex-wrap items-center'>
      <div className='container'>
        <SectionTitle
          containerClassName="!mb-0 py-6 flex-wrap"
          title={title}
          extraContent={
            <div className={`flex gap-4 text-sm scroll-hide md:text-base items-center overflow-auto whitespace-nowrap pb-4 mt-4 md:mt-0 md:pb-0 ${extraContentClassName}`}>
              {
                extraContent ? extraContent :
                  <>
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

                  </>
              }
              {hideMangeProduct ? null :
                <>
                  <Link href="#" className="text-secondary flex gap-2 items-center">
                    <EducationIcon className="text-white" />
                    {fetchWord('How_Product_List', lang)}
                  </Link>
                  <span className='h-4 w-[1px] bg-[#D5D9E1]' aria-hidden={true} />
                </>
              }
              {
                hideHelp ? null :
                  <Link href="/customer-questions" className="text-secondary flex gap-2 items-center">
                    <QuestionMarkIcon className="text-white" />
                    {fetchWord('Help', lang)}
                  </Link>
              }
            </div>
          }
        />
      </div>
    </div >)
}
