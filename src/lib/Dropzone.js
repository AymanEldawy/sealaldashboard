import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useCallback, useContext } from 'react'
import { useDropzone } from 'react-dropzone'

export const Dropzone = ({ containerClassName, dropzonePlaceholder, dropzoneSizes }) => {
  const { lang } = useContext(LanguageContext)
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()} className={`min-h-[350px] rounded-xl border border-dashed text-center border-gray-300 bg-[#F1F2F780] flex flex-col px-8 items-center gap-2 justify-center ${containerClassName}`}>
      <input {...getInputProps()} />
      <div className='flex flex-col gap-1'>
        <p className='font-medium text-black'>{fetchWord(dropzonePlaceholder, lang)}</p>
        <span className='text-xs text-gray-500'>{dropzoneSizes}</span>
      </div>
      {/* {
        isDragActive ?
          : null
      } */}
    </div>
  )
}