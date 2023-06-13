import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import React from 'react'
import { useContext } from 'react';
import { useForm } from "react-hook-form";

import CustomSelectField from '../Forms/CustomSelectField';
import { InputField } from '../Forms/InputField';
import { Button } from '../Global/Button/Button';

export const ProductCommissionForm = () => {
  const { lang } = useContext(LanguageContext)
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => console.log(data);
  console.log(register)
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='pt-6 px-4 pb-4 bg-white rounded-b-xl'>
      <div className='grid gap-4 grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-4 '>
        <InputField
          labelClassName="whitespace-nowrap overflow-hidden text-primary-text"
          containerClassName="flex-1 !mb-0"
          classes='text-sm !w-full border flex-1 border-[#D5D9E1] rounded-md p-2'
          {...register("Name_of_the_product", { required: true, maxLength: 20 })}
          label={fetchWord('Name_of_the_product', lang)} />
        <InputField
          labelClassName="whitespace-nowrap overflow-hidden text-primary-text"
          containerClassName="flex-1 !mb-0"
          classes='text-sm !w-full border flex-1 border-[#D5D9E1] rounded-md p-2'
          {...register("Barcode", { required: true, maxLength: 20 })}
          label={fetchWord('Barcode', lang)} />
        <InputField
          labelClassName="whitespace-nowrap overflow-hidden text-primary-text"
          containerClassName="flex-1 !mb-0"
          classes='text-sm !w-full border flex-1 border-[#D5D9E1] rounded-md p-2'
          {...register("Model_code", { required: true, maxLength: 20 })}
          label={fetchWord('Model_code', lang)} />
        <InputField
          labelClassName="whitespace-nowrap overflow-hidden text-primary-text"
          containerClassName="flex-1 !mb-0"
          classes='text-sm !w-full border flex-1 border-[#D5D9E1] rounded-md p-2'
          {...register("Product_status", { required: true, maxLength: 20 })}
          label={fetchWord('Product_status', lang)} />
      </div>
      <div className='flex gap-4 mt-4 flex-col min-[500px]:flex-row flex-wrap items-end'>
        <CustomSelectField containerClassName='min-w-[220px] text-sm max-w-full flex-1 !mb-0 rounded-md' label={fetchWord('Category', lang)} placeholder={fetchWord('Category', lang)} {...register("category", { required: true, maxLength: 20 })} />
        <CustomSelectField containerClassName='min-w-[220px] text-sm max-w-full flex-1 !mb-0 rounded-md' label={fetchWord('Brand', lang)} placeholder={fetchWord('Brand', lang)} {...register("brand", { required: true, maxLength: 20 })} />
        <div className='flex flex-1 gap-4 w-full'>
          <Button classes="!py-1 flex-1 h-11 flex-1 w-full" type="button" outline onClick={reset} >{fetchWord('Clean', lang)}</Button>
          <Button classes="!py-1 flex-1 h-11 flex-1 w-full" >{fetchWord('filter', lang)}</Button>
        </div>
      </div>
    </form>
  )
}
