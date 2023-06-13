import React, { useContext } from 'react'
import { Dropzone } from './../../../lib/Dropzone';
import { CameraIcon, FullScreenIcon, ImageIcon } from '@/components/Icons';
import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';

export const DropzoneInfo = ({ containerClassName, list, dropzonePlaceholder, dropzoneSizes }) => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className={`bg-white rounded-xl max-w-[400px] ${containerClassName}`}>
      <Dropzone containerClassName="" dropzonePlaceholder={dropzonePlaceholder} dropzoneSizes={dropzoneSizes} />
      <ul className="flex flex-col gap-3 mt-4">
        {
          list?.map(item => (
            <li key={item?.name} className='flex items-center gap-4 p-4 rounded-md border border-gray-300 text-gray-500 text-sm'>
              <span>{item?.icon}</span>
              <p>{fetchWord(item?.name, lang)}</p>
              {item?.extraContent ? <button className='text-primary'>{fetchWord(item?.extraContent, lang)}</button> : null}
            </li>

          ))
        }
      </ul>
    </div>
  )
}
