import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import React from 'react'
import { useContext } from 'react';
import { useForm } from "react-hook-form";

import { InputField } from '../Forms/InputField';
import { Button } from '../Global/Button/Button';
import CustomSelectField from '../Forms/CustomSelectField';

export const CustomerQuestionForm = () => {
  const { lang } = useContext(LanguageContext)
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => console.log(data);
  console.log(register)
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='pt-6 px-2 md:px-4 pb-4 bg-white rounded-b-xl'>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        <div className='flex items-center flex-col sm:flex-row gap-2 overflow-hidden'>
          <input className='text-sm w-full border flex-1 border-[#D5D9E1] rounded-md p-2' placeholder={fetchWord('Status', lang)} {...register("status", { required: true, maxLength: 20 })} />
          <input className='text-sm w-full border flex-1 border-[#D5D9E1] rounded-md p-2' placeholder={fetchWord('Name_of_the_product', lang)} {...register("product_name", { required: true, maxLength: 20 })} />
        </div>
        <div className='flex items-center flex-col sm:flex-row gap-2 overflow-hidden'>
          <input className='text-sm w-full border flex-1 border-[#D5D9E1] rounded-md p-2' placeholder={fetchWord('Barcode', lang)} {...register("barcode", { required: true, maxLength: 20 })} />
          <input className='text-sm w-full border flex-1 border-[#D5D9E1] rounded-md p-2' type="datetime-local" placeholder={fetchWord('Starting_date', lang)} {...register("starting_date", { required: true, maxLength: 20 })} />
        </div>
        <div className='flex items-center gap-2 overflow-hidden'>
          <input className='text-smw-full border flex-1 border-[#D5D9E1] rounded-md p-2' type="datetime-local" placeholder={fetchWord('End_Date', lang)} {...register("end_date", { required: true, maxLength: 20 })} />
        </div>
        <CustomSelectField containerClassName='text-sm max-w-full flex-1 !mb-0 rounded-md' placeholder={fetchWord('Keyword_Search', lang)} {...register("keyword_search", { required: true, maxLength: 20 })} />
        <CustomSelectField containerClassName='text-sm max-w-full flex-1 !mb-0 rounded-md' placeholder={fetchWord('Brand', lang)} {...register("brand", { required: true, maxLength: 20 })} />
        <div className='flex gap-4'>
          <Button classes="!py-1 flex-1" type="button" outline onClick={reset} >{fetchWord('Clean', lang)}</Button>
          <Button classes="!py-1 flex-1" >{fetchWord('filter', lang)}</Button>
        </div>
      </div>
    </form>
  )
}
