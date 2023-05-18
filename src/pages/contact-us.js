import { ContactForm } from '@/components/Forms/ContactForm'
import { MessageSolidIcon, MobileIcon, MapIcon } from '@/components/Icons'
import { Layout } from '@/components/Layout/Layout'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import Image from 'next/image'
import React, { useContext } from 'react'

const contactInfo = [
  { icon: <MapIcon className="h-10 w-10 text-primary" />, title: "address", description: "Lorem Ipsum is simply dummy text of the printing" },
  { icon: <MobileIcon className="h-10 w-10 text-primary" />, title: "phone_number", description: "Lorem Ipsum is simply dummy text of the printing" },
  { icon: <MessageSolidIcon className="h-10 w-10 text-primary" />, title: "email_address", description: "Lorem Ipsum is simply dummy text of the printing" },

]
const Contact = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <Layout>
      <div className='container'>
        <figure className='relative'>
          <Image src='/images/contact-banner.png' alt='Contact banner' height={353} width={1200} className='w-full object-cover' />
          <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
            <h1 className='font-semibold text-4xl mb-5 items-center justify-center text-white flex flex-col gap-2'>
              {fetchWord('contact_msg', lang)}
              <span className='text-2xl font-medium text-primary'>
                {fetchWord('contact_us', lang)}
              </span>
            </h1>
          </div>
        </figure>
        <h2 className='font-semibold text-xl capitalize mb-2 text-secondary'>
          {fetchWord('contact_us', lang)}
        </h2>
        <p className='text-[#646464] leading-7 text-lg mb-8'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>

        <div className='flex justify-center gap-8 flex-wrap'>
          {
            contactInfo?.map(item => (
              <div className='max-w-[300px] flex flex-col items-center justify-center px-4 py-8 gap-2 rounded-md border border-[#ccc]' key={item?.title}>
                <span>
                  {item?.icon}
                </span>
                <h4 className="font-medium">{fetchWord(item?.title, lang)}</h4>
                <p className="text-[#646464] text-sm text-center">{item?.description}</p>
              </div>
            ))
          }
        </div>
      </div>
      <ContactForm />

    </Layout>
  )
}

export default Contact