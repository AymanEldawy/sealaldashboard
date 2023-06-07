import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import Image from 'next/image'
import React, { useContext, useState } from 'react'

const questions = [
  { q: 'question_text2', answer: ['question_text3', 'question_text4'] },
  { q: 'question_text5', answer: ['question_text3', 'question_text4'] },
  { q: 'question_text6', answer: ['question_text3', 'question_text4'] },
  { q: 'question_text7', answer: ['question_text3', 'question_text4'] },
  { q: 'question_text8', answer: ['question_text3', 'question_text4'] },
  { q: 'question_text9', answer: ['question_text3', 'question_text4'] },
  { q: 'question_text10', answer: ['question_text3', 'question_text4'] },
  { q: 'question_text11', answer: ['question_text3', 'question_text4'] },
  { q: 'question_text12', answer: ['question_text3', 'question_text4'] },
  { q: 'question_text13', answer: ['question_text3', 'question_text4'] },
  { q: 'question_text14', answer: ['question_text3', 'question_text4'] },
  { q: 'question_text15', answer: ['question_text3', 'question_text4'] },
  { q: 'question_text16', answer: ['question_text3', 'question_text4'] },
  { q: 'question_text17', answer: ['question_text3', 'question_text4'] },
  { q: 'question_text18', answer: ['question_text3', 'question_text4'] },
]


export const SealalQuestions = () => {
  const { lang } = useContext(LanguageContext)
  const [openCard, setOpenCard] = useState('')
  return (
    <div className='rounded-xl bg-white py-8 px-4 mt-4 md:mt-8'>
      <h2 className="md:text-xl mb-6 font-medium text-secondary">{fetchWord('question_text1', lang)}</h2>
      {
        questions?.map(question => (
          <div className='mb-4' key={question?.q}>
            <button onClick={() => setOpenCard(question?.q)} className={`p-4 ltr:text-left rtl:text-right w-full font-medium text-lg rounded-md ${openCard === question?.q ? 'text-primary bg-[#F6FAFF]' : 'border border-[#D5D9E1] text-secondary'}`}>{fetchWord(question?.q, lang)}</button>
            {openCard === question?.q ?
              <div className='border border-t-0 p-4 rounded-md text-sm text-secondary flex flex-col gap-3'>
                {
                  question?.answer?.map(item => (
                    <p key={item} className='w-full'>{fetchWord(item, lang)}</p>
                  ))
                }
              </div>
              : null}
          </div>
        ))
      }
    </div>
  )
}
