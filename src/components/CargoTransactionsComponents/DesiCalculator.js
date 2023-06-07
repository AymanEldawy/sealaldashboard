import React, { useContext, useState } from 'react'
import { WarningIcon } from '../Icons'
import { LanguageContext } from '@/context/LangContext'
import { InputField } from '../Forms/InputField'
import { Button } from '../Global/Button/Button'
import { fetchWord } from '@/lang/fetchWord'







export const DesiCalculator = () => {
  const { lang } = useContext(LanguageContext);
  const [EN, setEN] = useState()
  const [SIZE, setSIZE] = useState()
  const [HEIGHT, setHEIGHT] = useState()
  const [results, setResults] = useState(434)

  const calculator = () => {

  }
  return (
    <div className='px-4 rounded-md bg-white py-6'>
      <h3 className='text-secondary font-medium gap-2 flex mb-4 items-center'>
        {fetchWord('Desi_Calculator', lang)}
        <WarningIcon />
      </h3>
      <div className='flex gap-4'>
        <InputField type="number" labelClassName="!mb-0 text-primary-text text-sm" value={EN} onChange={e => setEN(e.target.value)} label={fetchWord('EN_CM', lang)} />
        <InputField type="number" labelClassName="!mb-0 text-primary-text text-sm" value={SIZE} onChange={e => setSIZE(e.target.value)} label={fetchWord('SIZE_CM', lang)} />
        <InputField type="number" labelClassName="!mb-0 text-primary-text text-sm" value={HEIGHT} onChange={e => setHEIGHT(e.target.value)} label={fetchWord('HEIGHT_CM', lang)} />
      </div>
      <Button classes="px-8 max-w-[341px] w-full mx-auto block" onClick={calculator}>{fetchWord('CALCULATE_DESI', lang)}</Button>
      <p className='text-center mt-8 mb-2 gap-4  font-medium'>
        <span className="text-secondary">{fetchWord('Calculation_Result', lang)}</span>
        <span>{results}</span>
      </p>
    </div>
  )
}
