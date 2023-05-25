import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import React, { useContext, useState } from 'react'

import { Button } from '../Global/Button/Button';
import { InputField } from './InputField';
import { TextField } from './TextField';

export const ContactForm = () => {
  const { lang } = useContext(LanguageContext);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  return (
    <div className="bg-bmain py-12 mt-12">
      <div className="container">
        <h2 className='font-semibold text-xl capitalize mb-4 text-secondary'>
          {fetchWord('send_message', lang)}
        </h2>
        <form>
          <InputField
            value={name}
            onChange={e => setName(e.target.value)}
            label={fetchWord('your_name', lang)}
            placeholder={fetchWord('enter_your_name', lang)}
            
          />
          <InputField
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            label={fetchWord('your_email', lang)}
            placeholder="example@example.com"
          />
          <TextField
            value={message}
            onChange={e => setMessage(e.target.value)}
            label={fetchWord('message', lang)}
            placeholder={fetchWord('write_message', lang)}
            classes="h-[170px]"

          />
          <Button classes="w-full max-w-[300px] mt-4">{fetchWord('send', lang)}</Button>
        </form>
      </div>
    </div>
  )
}
