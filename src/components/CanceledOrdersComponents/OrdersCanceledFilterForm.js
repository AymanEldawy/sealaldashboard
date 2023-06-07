import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import React from 'react'
import { useContext } from 'react';
import { useForm } from "react-hook-form";

import { InputField } from '../Forms/InputField';
import { Button } from '../Global/Button/Button';
import CustomSelectField from '../Forms/CustomSelectField';
import { CalenderIcon, CloseIcon } from '../Icons';

export const OrdersCanceledFilterForm = () => {
  const { lang } = useContext(LanguageContext)
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => console.log(data);
  console.log(register)
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='pt-6 px-4 pb-4 bg-white rounded-b-xl'>
      <div className='flex items-start gap-2 flex-wrap'>
        <InputField
          containerClassName="!mb-0 w-[200px]"
          className='text-sm !w-full border border-[#D5D9E1] rounded-md p-2'
          placeholder={fetchWord('ORDER_NUMBER', lang)}
          {...register("barcode", { required: true, maxLength: 20 })} />
        <InputField
          containerClassName="!mb-0 w-[200px]"
          className='text-sm !w-full border border-[#D5D9E1] rounded-md p-2'
          placeholder={fetchWord('SHIPPING_CODE', lang)}
          {...register("product_name", { required: true, maxLength: 20 })} />
        <InputField
          containerClassName="!mb-0 w-[200px]"
          className='text-sm !w-full border border-[#D5D9E1] rounded-md p-2'
          placeholder={fetchWord('BARCODE', lang)}
          {...register("product_name", { required: true, maxLength: 20 })} />
        <InputField
          containerClassName="!mb-0 w-[200px]"
          type="date"
          className='text-sm !w-full border border-[#D5D9E1] rounded-md p-2'
          placeholder={fetchWord('Cancelation_START_DATE', lang)}
          {...register("product_name", { required: true, maxLength: 20 })}
          iconEnd={<CalenderIcon className="bg-white w-5 h-5  pointer-events-none" />} iconEndClassName=" pointer-events-none"
          
        />
        <InputField
          containerClassName="!mb-0 w-[200px]"
          type="date"
          className='text-sm !w-full border border-[#D5D9E1] rounded-md p-2'
          placeholder={fetchWord('Cancelation_FINISH_DATE', lang)}
          {...register("stock_code", { required: true, maxLength: 20 })}
          iconEnd={<CalenderIcon className="bg-white w-5 h-5  pointer-events-none" />} iconEndClassName=" pointer-events-none"
        />
        <Button classes="!py-1 px-4 h-10 !bg-secondary" >{fetchWord('Download_Excel', lang)}</Button>
        <Button classes="h-10 px-4">{fetchWord('Search', lang)}</Button>
        <button className="bg-[#5CAEFF] text-white rounded-md h-10 w-10 flex items-center justify-center"><CloseIcon /> </button>
      </div>
    </form>
  )
}
