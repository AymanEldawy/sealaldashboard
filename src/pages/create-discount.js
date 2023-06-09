import { SectionBar } from '@/components/Global/SectionBar/SectionBar'
import { Layout } from '@/components/Layout/Layout'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import Link from 'next/link'
import React, { useContext } from 'react'


const list = [
  { title: 'Discount_on_Amount', description: 'Special_discounts_text1' },
  { title: 'Discount_on_Pieces', description: 'Special_discounts_text2' },
  { title: 'Buy_Together', description: 'Special_discounts_text3' },
]

const CreateDiscount = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <Layout>
      <SectionBar
        title={fetchWord('Create_Discount', lang)}
        extraContent={
          <Link href="/" className="text-secondary">
            {fetchWord('Screen_Introduction', lang)}
          </Link>
        }
      />
      <div className='container my-4 md:my-8'>
        <div className='flex gap-4 md:gap-8'>
          <div className='flex-1 bg-white p-2 rounded-md md:p-4'>
            <h3 className='text-lg text-secondary font-semibold mb-1'>{fetchWord('Discount_type', lang)}</h3>
            <p className='text-sm text-primary-text'>{fetchWord('Select_discount_type', lang)}</p>
            <div className='flex gap-4 my-4 '>
              {list?.map(item => (
                <div key={item?.title} className='bg-[#F6FAFF] p-4 rounded-md flex flex-col gap-2'>
                  <label className='cursor-pointer text-secondary font-medium flex items-center gap-4'>
                    <input type="radio" name="type" className="h-4 w-4" />
                    {fetchWord(item?.title, lang)}
                  </label>
                  <p className="text-primary-text text-sm">{fetchWord(item?.description, lang)}</p>
                  <span className="mt-auto text-primary-text">{fetchWord('Front_Display', lang)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className='bg-white p-2 rounded-md md:p-4 flex-1 max-w-lg'>
            <h3 className='text-lg text-secondary font-semibold mb-1'>{fetchWord('Summery', lang)}</h3>
            <p className='text-sm text-primary-text'>{fetchWord('preview', lang)}</p>
            <div className='h-[202px] bg-secondary-light flex items-center justify-center my-4'>
              <p className='text-[#95A1B5] text-sm text-center mx-4 md:mx-8 lg:mx-12'>{fetchWord('Special_discounts_text4', lang)}</p>
            </div>
            <h4 className='text-[#5CAEFF] text-sm mb-2'>{fetchWord('Discount_Information', lang)}</h4>
            <p className="text-[#273142] text-sm mb-2">{fetchWord('Special_discounts_text5', lang)}</p>
            <div className="my-4 bg-gray-100 h-[1px]" />
            <h4 className='text-[#5CAEFF] text-sm mb-2'>{fetchWord('Detail', lang)}</h4>
            <p className="text-[#273142] text-sm mb-3">{fetchWord('Special_discounts_text5', lang)}</p>
            <p className="text-[#273142] text-sm mb-2 text-center">{fetchWord('Special_discounts_text6', lang)}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreateDiscount
