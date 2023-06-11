import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';

import { InputField } from '../Forms/InputField';
import { Button } from '../Global/Button/Button';
import { CalenderIcon, CloseIcon } from '../Icons';

export const PaymentsHistoryFilter = () => {
  const { lang } = useContext(LanguageContext)
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => console.log(data);
  console.log(register)
  return (
    <div className='bg-white rounded-md p-2 md:p-4'>
      <h4 className='text-secondary font-medium mb-4'>
        {fetchWord('$', lang)}
      </h4>
      <div className='flex flex-wrap items-end gap-4'>
        <InputField containerClassName='text-sm flex-1 !mb-0'
          {...register("Search_by_date", { required: true, maxLength: 20 })}
          label={fetchWord('Search_by_date', lang)}
          className='text-sm !w-full border border-[#D5D9E1] rounded-md p-2'
        />
        <InputField containerClassName='text-sm flex-1 !mb-0'
          type="date"
          {...register("Starting_date", { required: true, maxLength: 20 })}
          label={fetchWord('Starting_date', lang)}
          className='text-sm !w-full border border-[#D5D9E1] rounded-md p-2'
          iconEnd={<CalenderIcon className="bg-white w-5 h-5  pointer-events-none" />} iconEndClassName=" pointer-events-none"
        />
        <InputField containerClassName='text-sm flex-1 !mb-0'
          type="date"
          {...register("End_date", { required: true, maxLength: 20 })}
          label={fetchWord('End_date', lang)}
          className='text-sm !w-full border border-[#D5D9E1] rounded-md p-2'
          iconEnd={<CalenderIcon className="bg-white w-5 h-5  pointer-events-none" />} iconEndClassName=" pointer-events-none"
        />
        <Button classes="h-10 flex-1 px-4">{fetchWord('filter', lang)}</Button>
        <button className="bg-blue-light text-white rounded-md h-10 w-10 flex items-center justify-center"><CloseIcon /> </button>
      </div>
    </div>
  )
}
