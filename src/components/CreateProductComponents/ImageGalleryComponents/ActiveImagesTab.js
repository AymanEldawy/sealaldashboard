import { Button } from '@/components/Global/Button/Button'
import { ChevronIcon } from '@/components/Icons'
import { CameraIcon, FullScreenIcon, ImageIcon } from '@/components/Icons';
import SearchBar from '@/components/SearchBar/SearchBar'
import { LanguageContext } from '@/context/LangContext'
import { gallery } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'

import { DropzoneInfo } from './DropzoneInfo'
import { GalleryCard } from './GalleryCard'

const list = [
  { name: 'The_image_format', icon: <ImageIcon /> },
  { name: 'The_image_size', icon: <FullScreenIcon /> },
  { name: 'To_view_rules', icon: <CameraIcon />, extraContent: 'click' }
]
export const ActiveImagesTab = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className=''>
      <div className='flex flex-wrap xl:flex-nowrap gap-4 mt-4 border-t pt-4'>
        <Button classes="text-sm !px-4 justify-center !py-2 whitespace-nowrap w-full sm:w-[47%] lg:w-[23%] !bg-secondary  flex gap-2 items-center">
          {fetchWord('Download_All', lang)}
          {/* <ChevronIcon className="-rotate-90 scale-75" /> */}
        </Button>
        <Button classes="text-sm disabled:opacity-5 !px-4 justify-center !py-2 whitespace-nowrap w-full sm:w-[47%] lg:w-[23%] flex gap-2 items-center">
          {fetchWord('Select_All_and_Delete', lang)}
        </Button>
        <Button classes="text-sm disabled:opacity-75 !px-4 justify-center !py-2 whitespace-nowrap w-full sm:w-[47%] lg:w-[23%] flex gap-2 items-center">
          {fetchWord('Delete_Selected', lang)}
        </Button>
        <Button classes="text-sm !px-4 justify-center !py-2 whitespace-nowrap w-full sm:w-[47%] lg:w-[23%] !bg-secondary  flex gap-2 items-center">
          {fetchWord('Download_Excel', lang)}
        </Button>
        <SearchBar containerClassName="w-full xl:max-w-[340px]" inputClassName="!py-1" />
      </div>

      <div className='flex gap-8 flex-wrap border-t mt-4 pt-4'>
        <div className='flex-1 bg-white rounded-xl'>
          <div className='grid grid-cols-2 sm:flex flex-wrap gap-4 xl:grid xl:grid-cols-4'>
            {
              gallery?.map(item => (
                <GalleryCard key={item} item={item} />
              ))
            }
          </div>
        </div>
        <DropzoneInfo list={list} dropzonePlaceholder={'SELECT_OR_DRAG_NEW_IMAGE'} dropzoneSizes={'(JPG, JPEG, PNG, Minimum 600x800)'} />
      </div>
    </div>
  )
}
