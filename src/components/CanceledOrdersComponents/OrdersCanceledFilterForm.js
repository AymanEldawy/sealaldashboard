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
      <div className='flex items-start gap-4 max-[550px]:flex-col sm:flex-row flex-wrap'>
        <InputField
          containerClassName="!mb-0 sm:w-[200px] min-w-[180px] max-[550px]:!w-full flex-1"
          className='text-sm !w-full border border-[#D5D9E1] rounded-md p-2'
          placeholder={fetchWord('ORDER_NUMBER', lang)}
          {...register("ORDER_NUMBER", { required: true, maxLength: 20 })} />
        <InputField
          containerClassName="!mb-0 sm:w-[200px] min-w-[180px] max-[550px]:!w-full flex-1"
          className='text-sm !w-full border border-[#D5D9E1] rounded-md p-2'
          placeholder={fetchWord('SHIPPING_CODE', lang)}
          {...register("SHIPPING_CODE", { required: true, maxLength: 20 })} />
        <InputField
          containerClassName="!mb-0 sm:w-[200px] min-w-[180px] max-[550px]:!w-full flex-1"
          className='text-sm !w-full border border-[#D5D9E1] rounded-md p-2'
          placeholder={fetchWord('BARCODE', lang)}
          {...register("BARCODE", { required: true, maxLength: 20 })} />
        <InputField
          containerClassName="!mb-0 sm:w-[200px] min-w-[180px] max-[550px]:!w-full flex-1"
          type="date"
          className='text-sm !w-full border border-[#D5D9E1] rounded-md p-2'
          placeholder={fetchWord('Cancelation_START_DATE', lang)}
          {...register("Cancelation_START_DATE", { required: true, maxLength: 20 })}
          iconEnd={<CalenderIcon className="bg-white w-5 h-5  pointer-events-none" />} iconEndClassName=" pointer-events-none"
          
        />
        <InputField
          containerClassName="!mb-0 sm:w-[200px] min-w-[180px] max-[550px]:!w-full flex-1"
          type="date"
          className='text-sm !w-full border border-[#D5D9E1] rounded-md p-2'
          placeholder={fetchWord('Cancelation_FINISH_DATE', lang)}
          {...register("Cancelation_FINISH_DATE", { required: true, maxLength: 20 })}
          iconEnd={<CalenderIcon className="bg-white w-5 h-5  pointer-events-none" />} iconEndClassName=" pointer-events-none"
        />
        <div className="flex gap-4">
        <Button classes="!py-1 px-4 h-10 !bg-secondary" >{fetchWord('Download_Excel', lang)}</Button>
        <Button classes="h-10 px-4">{fetchWord('Search', lang)}</Button>
        <button className="bg-blue-light text-white rounded-md h-10 w-10 flex items-center justify-center"><CloseIcon /> </button>
        </div>
      </div>
    </form>
  )
}
