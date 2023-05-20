import { Layout } from '@/components/Layout/Layout'
import React, { useContext } from 'react'
import Image from 'next/image';
import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import { CardFlatIcon, CardIcon, DollarIcon, MessageFlatIcon, MessageSolidIcon, SlashIcon, TagIcon, TrunkFlatIcon, TrunkIcon } from '@/components/Icons';
import { Button } from '@/components/Global/Button/Button';

const faqList = [
  { title: "faq_title1", description: "faq_desc1", icon: <MessageFlatIcon /> },
  { title: "faq_title2", description: "faq_desc2", icon: <CardFlatIcon /> },
  { title: "faq_title3", description: "faq_desc3", icon: <SlashIcon /> },
  { title: "faq_title4", description: "faq_desc4", icon: <TrunkFlatIcon /> },
  { title: "faq_title5", description: "faq_desc5", icon: <DollarIcon /> },
  { title: "faq_title6", description: "faq_desc6", icon: <TagIcon /> },

]




const FAQ = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <Layout>
      <div className="container">
        <figure className='relative'>
          <Image src='/images/contact-banner.png' alt='Contact banner' height={353} width={1200} className='w-full object-cover' />
          <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
            <h1 className='font-semibold text-4xl mb-5 items-center justify-center text-white flex flex-col gap-2'>
              {fetchWord('ask_us', lang)}
              <span className='text-2xl font-medium text-primary'>
                {fetchWord('faq', lang)}
              </span>
            </h1>
            <input type="search" className="px-5 py-3 rounded-[25px] w-full md:min-w-[450px]" placeholder={fetchWord('faq_placeholder', lang)} />
          </div>
        </figure>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {faqList?.map(item => (
            <div className="bg-bmain rounded p-2 flex items-start gap-2" key={item?.title}>
              <span className="flex items-center justify-center p-2 rounded-full bg-white">{item?.icon}</span>
              <div className="">
                <h4 className="text-secondary font-semibold mb-4">{fetchWord(item?.title, lang)}</h4>
                <p className="text-lead text-xs">{fetchWord(item?.description, lang)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <h3 className="text-xl text-secondary font-semibold mb-2">{fetchWord('faq_if', lang)}</h3>
          <p className="text-lead">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
        <div className="flex items-center justify-between bg-bmain rounded-md p-4 my-8">
          <div className>
            <h3 className="text-primary font-medium mb-1">{fetchWord('have_question', lang)}</h3>
            <p className="text-[#363636] text-xs">{fetchWord('have_question_msg', lang)}</p>
          </div>
          <div className="flex justify-center lg:min-w-[350px]">
            <Button classes="px-8 text-sm">{fetchWord('get_in_touch', lang)}</Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FAQ