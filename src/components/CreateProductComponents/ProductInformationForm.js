import React, { useState } from 'react'
import { InputField } from '../Forms/InputField'
import { fetchWord } from '@/lang/fetchWord';
import { useContext } from 'react';
import { LanguageContext } from '@/context/LangContext';
import { useForm } from 'react-hook-form';
import CustomSelectField from '../Forms/CustomSelectField';
import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('@/lib/Editor'), { ssr: false })

export const ProductInformationForm = () => {
  const { lang } = useContext(LanguageContext)
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => console.log(data);
  const [msg, setMsg] = useState('')
  console.log(register)
  return (
    <div>
      <h3 className='text-lg text-secondary mb-4 font-medium'>{fetchWord('Product_Information', lang)}</h3>
      <form onSubmit={onSubmit}>
        <InputField
          label={fetchWord('Product_Name', lang)}
          labelClassName="text-primary-text text-xs font-medium"
          placeholder={fetchWord('Enter_product_name', lang)}
          classes="text-xs"
          {...register('Product_Name')}
        />
        <InputField
          label={fetchWord('Select_Category', lang)}
          labelClassName="text-primary-text text-xs font-medium"
          placeholder={fetchWord('Category_Category', lang)}
          classes="text-xs"
          {...register('Select_Category')}
        />
        <InputField
          label={fetchWord('Model_Code', lang)}
          labelClassName="text-primary-text text-xs font-medium"
          placeholder={fetchWord('Enter_model_code', lang)}
          classes="text-xs"
          {...register('Model_Code')}
        />
        <CustomSelectField
          label={fetchWord('Brand', lang)}
          labelClassName="text-primary-text text-xs font-medium"
          placeholder={fetchWord('Please_choose_brand', lang)}
          selectClassName="text-xs"
          {...register('Brand')}
        />
        <InputField
          label={fetchWord('Color', lang)}
          labelClassName="text-primary-text text-xs font-medium"
          placeholder={fetchWord('Color', lang)}
          classes="text-xs"
          {...register('Color')}
        />
        <CustomSelectField
          label={fetchWord('Size', lang)}
          labelClassName="text-primary-text text-xs font-medium"
          placeholder={fetchWord('Body', lang)}
          selectClassName="text-xs"
          {...register('Size')}
        />
        <div className='mb-8'>
          <p className='text-primary-text text-xs mb-1'>{fetchWord('Product_Description_msg', lang)}</p>
          <Editor msg={msg} setMsg={setMsg} />
        </div>
      </form>
    </div>
  )
}
