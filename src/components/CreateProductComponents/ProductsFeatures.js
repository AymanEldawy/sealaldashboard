import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import CustomSelectField from '../Forms/CustomSelectField';

const fields = [
  {
    name: 'Age_Group',
    placeholder: 'Make_Your_Choice'
  },
  {
    name: 'Gender',
    placeholder: 'Make_Your_Choice'
  },
  { name: 'Material_Optional', placeholder: "Make_Your_Choice" },
  {
    name: 'Pattern_Optional',
    placeholder: 'Make_Your_Choice'
  },
  {
    name: 'Type_Optional',
    placeholder: 'Make_Your_Choice'
  },
  {
    name: 'Package_Content_Optional',
    placeholder: 'Make_Your_Choice'
  },
  {
    name: 'Additional_Feature_Optional',
    placeholder: 'Make_Your_Choice'
  },
  {
    name: 'Usage_Area_Optional',
    placeholder: 'Make_Your_Choice'
  },
  {
    name: 'Fabric_Type_Optional',
    placeholder: 'Make_Your_Choice'
  },
  {
    name: 'Collection_Optional',
    placeholder: 'Make_Your_Choice'
  },
  {
    name: 'Back_to_School_Optional',
    placeholder: 'Make_Your_Choice'
  },
  {
    name: 'Persona_Optional',
    placeholder: 'Make_Your_Choice'
  },
  {
    name: 'Environment_Optional',
    placeholder: 'Make_Your_Choice'
  },
  {
    name: 'Sustainability_Detail_Optional',
    placeholder: 'Make_Your_Choice'
  },
  {
    name: 'Leather_Quality_Optional',
    placeholder: 'Make_Your_Choice'
  },
  {
    name: 'Weaving_Type_Optional',
    placeholder: 'Make_Your_Choice'
  },
  {
    name: 'Technical_Optional',
    placeholder: 'Make_Your_Choice'
  },
]


export const ProductsFeatures = () => {
  const { lang } = useContext(LanguageContext)
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => console.log(data);
  const [msg, setMsg] = useState('')
  console.log(register)
  return (
    <div className='w-full'>
      <h3 className='text-lg text-secondary mb-4 font-medium'>{fetchWord('Product_features', lang)}</h3>
      <form onSubmit={onSubmit} className='mb-8'>
        <div className='grid gap-4 grid-cols-2'>
          {
            fields?.map(field => (
              <CustomSelectField
                key={field?.name}
                label={fetchWord(field?.name, lang)}
                placeholder={fetchWord(field?.placeholder, lang)}
                labelClassName="text-primary-text text-xs font-medium"
                containerClassName="!mb-0"
                selectClassName="text-xs"
                {...register('')}
              />
            ))
          }
        </div>
      </form>
    </div>
  )
}
