import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import React from 'react'
import { useContext } from 'react';
import { useForm } from "react-hook-form";

import { InputField } from '../Forms/InputField';
import { Button } from '../Global/Button/Button';
import CustomSelectField from '../Forms/CustomSelectField';

export const DocumentTransactionsForm = () => {
  const { lang } = useContext(LanguageContext)
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => console.log(data);
  console.log(register)
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='pt-6 px-4 pb-4 gap-4 bg-white rounded-b-xl grid sm:grid-cols-2 md:grid-cols-4'>
      <CustomSelectField containerClassName='text-sm max-w-full flex-1 !mb-0 rounded-md' placeholder={fetchWord('Category', lang)} {...register("category", { required: true, maxLength: 20 })} />
      <CustomSelectField containerClassName='text-sm max-w-full flex-1 !mb-0 rounded-md' placeholder={fetchWord('Brand', lang)} {...register("brand", { required: true, maxLength: 20 })} />
      <CustomSelectField containerClassName='text-sm max-w-full flex-1 !mb-0 rounded-md' placeholder={fetchWord('All', lang)} {...register("all", { required: true, maxLength: 20 })} />
      <div className='flex gap-4'>
        <Button classes="!py-1 flex-1" type="button" outline onClick={reset} >{fetchWord('Clean', lang)}</Button>
        <Button classes="!py-1 flex-1" >{fetchWord('filter', lang)}</Button>
      </div>
    </form>
  )
}
