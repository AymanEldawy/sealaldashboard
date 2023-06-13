import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import React from 'react'
import { useContext } from 'react';
import { useForm } from "react-hook-form";

import CustomSelectField from '../Forms/CustomSelectField';
import { InputField } from '../Forms/InputField';
import { Button } from '../Global/Button/Button';
import { CloseIcon } from '../Icons';

export const OrdersFilterForm = () => {
  const { lang } = useContext(LanguageContext)
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => console.log(data);
  console.log(register)
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='pt-6 px-4 pb-4 bg-white rounded-b-xl'>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        <div className='flex items-end gap-4 overflow-hidden'>
          <InputField
            labelClassName="text-primary-text"
            containerClassName="flex-1 !mb-0"
            classes='text-sm !w-full border flex-1 border-[#D5D9E1] rounded-md p-2'
            {...register("barcode", { required: true, maxLength: 20 })}
            label={fetchWord('CUSTOMER_NAME', lang)} />
          <InputField
            labelClassName="text-primary-text"
            containerClassName="flex-1 !mb-0"
            classes='text-sm !w-full border flex-1 border-[#D5D9E1] rounded-md p-2'
            {...register("product_name", { required: true, maxLength: 20 })}
            label={fetchWord('ORDER_NUMBER', lang)} />
        </div>
        <div className='flex items-end gap-4 overflow-hidden'>
          <InputField
            labelClassName="text-primary-text"
            containerClassName="flex-1 !mb-0"
            classes='text-sm !w-full border flex-1 border-[#D5D9E1] rounded-md p-2'
            {...register("product_name", { required: true, maxLength: 20 })}
            label={fetchWord('PACKAGE_NO', lang)} />
          <InputField
            labelClassName="text-primary-text"
            containerClassName="flex-1 !mb-0"
            classes='text-sm !w-full border flex-1 border-[#D5D9E1] rounded-md p-2'
            {...register("product_name", { required: true, maxLength: 20 })}
            label={fetchWord('BARCODE', lang)} />
        </div>
        <div className='flex items-end gap-4 overflow-hidden'>
          <CustomSelectField
            labelClassName="text-primary-text"
            containerClassName='flex-1 text-sm w-full !mb-0 rounded-md'
            {...register("discontinuation_reason", { required: true, maxLength: 20 })}
            label={fetchWord('SUPPLY_TIME_STATUS', lang)}
            placeholder={fetchWord('All_Orders', lang)}
          />
          <div className="flex gap-2 flex-1 items-center">
            <Button classes="h-11 px-4 flex-1">{fetchWord('Search', lang)}</Button>
            <button className="bg-blue-light text-white rounded-md h-11 w-11 flex items-center justify-center"><CloseIcon /> </button>
          </div>
        </div>
      </div>
      <div className='h-[1px] bg-gray-300 my-4' />
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>

        <div className='flex items-end gap-4 overflow-hidden'>
          <InputField
            labelClassName="text-primary-text"
            containerClassName="flex-1 !mb-0"
            classes='text-sm !w-full border flex-1 border-[#D5D9E1] rounded-md p-2'
            {...register("barcode", { required: true, maxLength: 20 })}
            label={fetchWord('ORDER_START_DATE', lang)} />
          <InputField
            labelClassName="text-primary-text"
            containerClassName="flex-1 !mb-0"
            classes='text-sm !w-full border flex-1 border-[#D5D9E1] rounded-md p-2'
            {...register("product_name", { required: true, maxLength: 20 })}
            label={fetchWord('ORDER_FINISH_DATE', lang)} />
        </div>
        <div className='flex items-end gap-4 overflow-hidden'>
          <InputField
            labelClassName="text-primary-text"
            containerClassName="flex-1 !mb-0"
            classes='text-sm !w-full border flex-1 border-[#D5D9E1] rounded-md p-2'
            {...register("barcode", { required: true, maxLength: 20 })}
            label={fetchWord('SHIPPING_CODE', lang)} />
          <CustomSelectField
            labelClassName="text-primary-text"
            containerClassName='flex-1 text-sm w-full !mb-0 rounded-md'
            {...register("discontinuation_reason", { required: true, maxLength: 20 })}
            label={fetchWord('DELIVERY_TYPE', lang)}
            placeholder={fetchWord('All_Deliveries', lang)}
          />
        </div>
        <div className='flex items-end gap-4 overflow-hidden'>
          <label className='h-11 flex flex-1 whitespace-nowrap items-center gap-1'>
            <input type="checkbox" className="h-5 w-5" />
            {fetchWord('Come_Take_Point', lang)}
          </label>
          <Button classes="!py-1 flex-1 h-11 flex-1 !bg-secondary" >{fetchWord('Download_Excel', lang)}</Button>
        </div>

      </div>
    </form>
  )
}
