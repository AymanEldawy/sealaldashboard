import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import React from 'react'
import { useContext } from 'react';
import { useForm } from "react-hook-form";

import CustomSelectField from '../Forms/CustomSelectField';
import { InputField } from '../Forms/InputField';
import { Button } from '../Global/Button/Button';
import { CalenderIcon } from '../Icons';

export const FlashPricesForm = () => {
  const { lang } = useContext(LanguageContext)
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => console.log(data);
  console.log(register)
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='pt-6 px-4 pb-4 bg-white rounded-b-xl'>
      <div className='grid gap-4 grid-cols-2 md:grid-cols-4 items-end'>
        <InputField
          labelClassName="text-primary-text"
          containerClassName="flex-1 !mb-0"
          classes='text-sm !w-full border flex-1 border-[#D5D9E1] rounded-md p-2'
          {...register("Name_of_the_product", { required: true, maxLength: 20 })}
          label={fetchWord('Name_of_the_product', lang)} />
        <InputField
          labelClassName="text-primary-text"
          containerClassName="flex-1 !mb-0"
          classes='text-sm !w-full border flex-1 border-[#D5D9E1] rounded-md p-2'
          {...register("Barcode", { required: true, maxLength: 20 })}
          label={fetchWord('Barcode', lang)} />
        <InputField
          labelClassName="text-primary-text"
          containerClassName="flex-1 !mb-0"
          classes='text-sm !w-full border flex-1 border-[#D5D9E1] rounded-md p-2'
          {...register("Model_code", { required: true, maxLength: 20 })}
          label={fetchWord('Model_code', lang)} />
        <CustomSelectField  labelClassName="text-primary-text" containerClassName='text-sm max-w-full flex-1 !mb-0 rounded-md' label={fetchWord('Brand', lang)} placeholder={fetchWord('Brand', lang)} {...register("brand", { required: true, maxLength: 20 })} />
        <CustomSelectField  labelClassName="text-primary-text" containerClassName='text-sm max-w-full flex-1 !mb-0 rounded-md' label={fetchWord('Category', lang)} placeholder={fetchWord('Category', lang)} {...register("category", { required: true, maxLength: 20 })} />
        <InputField
         labelClassName="text-primary-text"
 containerClassName="flex-1 !mb-0"
           type="date"
classes='text-sm !w-full border flex-1 border-[#D5D9E1] rounded-md p-2 ltr:!pr-2 rtl:!pl-2'
          label={fetchWord('starting_date', lang)}
          {...register("starting_date", { required: true, maxLength: 20 })}
          iconEnd={<CalenderIcon className="bg-white w-5 h-5  pointer-events-none" />} iconEndClassName=" pointer-events-none"
          
        />
        <InputField
         labelClassName="text-primary-text"
 containerClassName="flex-1 !mb-0"
           type="date"
classes='text-sm !w-full border flex-1 border-[#D5D9E1] rounded-md p-2 ltr:!pr-2 rtl:!pl-2'
          label={fetchWord('Ending_date', lang)}
          {...register("Ending_date", { required: true, maxLength: 20 })}
          iconEnd={<CalenderIcon className="bg-white w-5 h-5  pointer-events-none" />} iconEndClassName=" pointer-events-none"
        />

        <div className='flex flex-1 gap-4'>
          <Button classes="!py-1 flex-1 h-11" type="button" outline onClick={reset} >{fetchWord('Clean', lang)}</Button>
          <Button classes="!py-1 flex-1 h-11" >{fetchWord('filter', lang)}</Button>
        </div>
      </div>
    </form>
  )
}
