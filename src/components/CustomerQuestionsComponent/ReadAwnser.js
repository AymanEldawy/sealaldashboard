import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';

import { Button } from '../Global/Button/Button';

export const ReadAnswer = () => {
  const { lang } = useContext(LanguageContext)
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => console.log(data);
  console.log(register)
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='pt-12 mb-8 px-4 pb-4 bg-white rounded-b-xl flex flex-col gap-4'>
      <input className='text-sm min-w-auto w-auto max-w-full border flex-1 border-[#D5D9E1] rounded-md p-2' placeholder={fetchWord('Answer_Title', lang)} {...register("answer_title", { required: true, maxLength: 20 })} />
      <textarea className='min-h-[350px] text-sm min-w-auto w-auto max-w-full border flex-1 border-[#D5D9E1] rounded-md p-2' placeholder={fetchWord('Answer_Text', lang)} {...register("answer_text", { required: true, maxLength: 20 })} />
      <Button classes="mx-auto max-w-xs text-sm w-full">{fetchWord('Add_to_my_Canned_Answers', lang)}</Button>
    </form>
  )
}
