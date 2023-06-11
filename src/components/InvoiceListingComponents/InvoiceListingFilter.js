
import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import React from 'react'
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { InputField } from '../Forms/InputField';
import { Button } from '../Global/Button/Button';
import CustomSelectField from '../Forms/CustomSelectField';
import { CalenderIcon, CloseIcon } from '../Icons';

export const InvoiceListingFilter = () => {
  const { lang } = useContext(LanguageContext)
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => console.log(data);
  console.log(register)
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='pt-6 px-4 pb-4 bg-white rounded-b-xl'>
      <div className='flex flex-wrap flex-col md:flex-wrap gap-4 items-end'>
        <InputField containerClassName='text-sm flex-1 !mb-0'
          label={fetchWord('Bill_type', lang)}
          {...register("Bill_type", { required: true, maxLength: 20 })}
          className='text-sm !w-full border border-[#D5D9E1] rounded-md p-2'
        />
        <InputField containerClassName='text-sm flex-1 !mb-0'
          type="datetime-local"
          label={fetchWord('Starting_date', lang)}
          {...register("Starting_date", { required: true, maxLength: 20 })}
          className='text-sm !w-full border border-[#D5D9E1] rounded-md p-2'
          iconEnd={<CalenderIcon className="bg-white w-5 h-5" />}
          iconEndClassName=" pointer-events-none"
        />
        <InputField containerClassName='text-sm flex-1 !mb-0'
          type="datetime-local"
          label={fetchWord('End_date', lang)}
          {...register("End_date", { required: true, maxLength: 20 })}
          className='text-sm !w-full border border-[#D5D9E1] rounded-md p-2'
          iconEnd={<CalenderIcon className="bg-white w-5 h-5" />}
          iconEndClassName=" pointer-events-none"
        />
        <div className='flex gap-8 flex-1 w-full md:w-fit'>
          <Button classes="h-10 flex-1 px-4 w-full md:w-fit">{fetchWord('filter', lang)}</Button>
          <button className="bg-blue-light text-white rounded-md h-10 w-10 flex items-center justify-center"><CloseIcon /> </button>
        </div>
      </div>
    </form>
  )
}
