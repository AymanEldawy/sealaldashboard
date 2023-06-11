import { LanguageContext } from '@/context/LangContext'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';

import { InputField } from '../Forms/InputField';
import { Button } from '../Global/Button/Button';
import { fetchWord } from '@/lang/fetchWord';

export const PaymentsFilterDetails = () => {
  const { lang } = useContext(LanguageContext)
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => console.log(data);
  console.log(register)
  return (
    <div className='bg-white rounded-md p-2 md:p-4'>
      <h4 className='text-secondary font-medium mb-4'>
        {fetchWord('Detailed_Payment_Search', lang)}
      </h4>
      <div className='flex gap-4 items-end flex-wrap'>
        <InputField containerClassName='text-sm flex-1 !mb-0'
          label={fetchWord('Search_type', lang)}
          {...register("Search_type", { required: true, maxLength: 20 })}
          className='text-sm !w-full border border-[#D5D9E1] rounded-md p-2'
        />
        <InputField containerClassName='text-sm flex-1 !mb-0'
          label={fetchWord('Order_number', lang)}
          {...register("Order_number", { required: true, maxLength: 20 })}
          className='text-sm !w-full border border-[#D5D9E1] rounded-md p-2'
        />
        <Button classes="h-10 flex-1 px-4">{fetchWord('SEARCH_PAYMENT', lang)}</Button>
      </div>
    </div>
  )
}
