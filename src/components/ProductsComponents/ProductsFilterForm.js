import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import React from 'react'
import { useContext } from 'react';
import { useForm } from "react-hook-form";

import { InputField } from '../Forms/InputField';
import { Button } from '../Global/Button/Button';
import CustomSelectField from '../Forms/CustomSelectField';

export const ProductsFilterForm = () => {
  const { lang } = useContext(LanguageContext)
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => console.log(data);
  console.log(register)
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='pt-6 px-4 pb-4 bg-white rounded-b-xl'>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        <div className='flex items-center gap-2 overflow-hidden'>
          <input className='text-sm min-w-auto w-auto max-w-full border flex-1 border-[#D5D9E1] rounded-md p-2' placeholder={fetchWord('Barcode', lang)} {...register("barcode", { required: true, maxLength: 20 })} />
          <input className='text-sm min-w-auto w-auto max-w-full border flex-1 border-[#D5D9E1] rounded-md p-2' placeholder={fetchWord('Name_of_the_product', lang)} {...register("product_name", { required: true, maxLength: 20 })} />
        </div>
        <div className='flex items-center gap-2 overflow-hidden'>
          <input className='text-sm min-w-auto w-auto max-w-full border flex-1 border-[#D5D9E1] rounded-md p-2' placeholder={fetchWord('Model_Code', lang)} {...register("product_name", { required: true, maxLength: 20 })} />
          <input className='text-sm min-w-auto w-auto max-w-full border flex-1 border-[#D5D9E1] rounded-md p-2' placeholder={fetchWord('Stock_code', lang)} {...register("product_name", { required: true, maxLength: 20 })} />
        </div>
        <div className='flex items-center gap-2 overflow-hidden'>
          <input className='text-sm min-w-auto w-auto max-w-full border flex-1 border-[#D5D9E1] rounded-md p-2' placeholder={fetchWord('Reason_for_Discontinuation', lang)} {...register("stock_code", { required: true, maxLength: 20 })} />
        </div>
        <CustomSelectField containerClassName='text-sm max-w-full flex-1 !mb-0 rounded-md' placeholder={fetchWord('Category', lang)} {...register("discontinuation_reason", { required: true, maxLength: 20 })}>

        </CustomSelectField>
        <CustomSelectField containerClassName='text-sm max-w-full flex-1 !mb-0 rounded-md' placeholder={fetchWord('Brand', lang)} {...register("category", { required: true, maxLength: 20 })} >

        </CustomSelectField>
        <div className='flex gap-4'>
          <Button classes="!py-1 flex-1" type="button" outline onClick={reset} >{fetchWord('Clean', lang)}</Button>
          <Button classes="!py-1 flex-1" >{fetchWord('filter', lang)}</Button>
        </div>
      </div>
    </form>
  )
}
