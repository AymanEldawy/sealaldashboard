import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import React from 'react'
import { useContext } from 'react';
import { useForm } from "react-hook-form";

import { InputField } from '../Forms/InputField';
import { Button } from '../Global/Button/Button';
import { CalenderIcon, CloseIcon } from '../Icons';

export const ReturnProcessFilterForm = () => {
  const { lang } = useContext(LanguageContext)
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => console.log(data);
  console.log(register)
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='pt-6 px-4 pb-4 bg-white rounded-b-xl'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4'>
        <div className='flex gap-4'>
          <InputField
            containerClassName="flex-1 !mb-0"
            className='text-sm !w-full border border-[#D5D9E1] rounded-md p-2'
            placeholder={fetchWord('Customer_name', lang)}
            {...register("barcode", { required: true, maxLength: 20 })} />
          <InputField
            containerClassName="flex-1 !mb-0"
            className='text-sm !w-full border border-[#D5D9E1] rounded-md p-2'
            placeholder={fetchWord('ORDER_NUMBER', lang)}
            {...register("product_name", { required: true, maxLength: 20 })} />
        </div>
        <div className='flex gap-4'>
          <InputField
            containerClassName="flex-1 !mb-0"
            className='text-sm !w-full border border-[#D5D9E1] rounded-md p-2'
            placeholder={fetchWord('Return_code', lang)}
            {...register("product_name", { required: true, maxLength: 20 })} />
          <InputField
            containerClassName="flex-1 !mb-0"
            className='text-sm !w-full border border-[#D5D9E1] rounded-md p-2'
            placeholder={fetchWord('BARCODE', lang)}
            {...register("product_name", { required: true, maxLength: 20 })} />
        </div>
        <div className='flex gap-4'>
          <InputField
            containerClassName="flex-1 !mb-0"
            className='text-sm !w-full border border-[#D5D9E1] rounded-md p-2'
            placeholder={fetchWord('Reason_for_return', lang)}
            {...register("product_name", { required: true, maxLength: 20 })} />
          <div className="flex-1 flex gap-2">
            <Button classes="h-10 px-4 flex-1">{fetchWord('Search', lang)}</Button>
            <button className="bg-[#5CAEFF] text-white rounded-md h-10 w-10 flex items-center justify-center"><CloseIcon /> </button>
          </div>
        </div>
      </div>
      <div className='flex justify-between flex-wrap gap-4'>
        <div className='flex flex-wrap gap-4'>
          <InputField
            containerClassName="flex-1 !mb-0 min-w-[220px]"
            type="date"
            className='text-sm !w-full border border-[#D5D9E1] rounded-md p-2'
            placeholder={fetchWord('Return_request_START_DATE', lang)}
            {...register("product_name", { required: true, maxLength: 20 })}
            iconEnd={<CalenderIcon className="w-5 h-5" />} 
            iconEndClassName=" pointer-events-none"
          />
          <InputField
            containerClassName="flex-1 !mb-0 min-w-[220px]"
            type="date"
            className='text-sm !w-full border border-[#D5D9E1] rounded-md p-2'
            placeholder={fetchWord('Return_request_FINISH_DATE', lang)}
            {...register("stock_code", { required: true, maxLength: 20 })}
            iconEnd={<CalenderIcon className="w-5 h-5" />} 
            iconEndClassName=" pointer-events-none"
          />
        </div>
        <Button classes="!py-1 px-4 h-10 !bg-secondary min-w-[220px]" >{fetchWord('Download_Excel', lang)}</Button>
      </div>
    </form>
  )
}
