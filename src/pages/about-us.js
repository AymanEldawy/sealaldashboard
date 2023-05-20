import { WhyChooseUs } from '@/components/HomeComponents/WhyChooseUs/WhyChooseUs'
import { Layout } from '@/components/Layout/Layout'
import ReviewCard from '@/components/SingleProductComponents/ReviewCard'
import { LanguageContext } from '@/context/LangContext'
import { reviews } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import Image from 'next/image'
import React, { useContext } from 'react'

const About = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <Layout>
      <div className='container mt-12'>
        <h1 className='font-semibold text-xl capitalize mb-5 text-secondary'>
          {fetchWord('about_us', lang)}
        </h1>
        <p className='text-[#646464] leading-7 text-lg mb-8'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <WhyChooseUs />
      </div>
      <div className='mt-12 bg-bmain p-8'>
        <div className='container'>
          <h2 className='font-semibold text-xl capitalize mb-5 text-secondary'>
            {fetchWord('Our_Partner', lang)}
          </h2>
          <p className='text-[#646464] leading-7 text-lg mb-8'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {
              Array(9).fill(0)?.map((img, index) => (
                <Image key={index} src={`/images/partner/${index + 1}.png`} alt={`partner ${index + 1}`} height={68} width={68} className='bg-white rounded-full h-14 w-14 flex items-center justify-center' />
              ))
            }
          </div>
        </div>
      </div>
      <div className='mt-12'>
        <div className='container'>
          <h2 className='font-semibold text-xl capitalize mb-5 text-secondary'>
            {fetchWord('Happy_clients', lang)}
          </h2>
          <p className='text-[#646464] leading-7 text-lg mb-8'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>

          <div className='mt-8 max-w-[800px] mx-auto'>
            {reviews?.map(review => (
              <ReviewCard review={review} key={review?.id} />
            ))}

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About