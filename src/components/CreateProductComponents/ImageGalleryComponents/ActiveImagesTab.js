import { Button } from '@/components/Global/Button/Button'
import { ChevronIcon } from '@/components/Icons'
import SearchBar from '@/components/SearchBar/SearchBar'
import { LanguageContext } from '@/context/LangContext'
import { gallery } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'
import { GalleryCard } from './GalleryCard'
import { DropzoneInfo } from './DropzoneInfo'
import { CameraIcon, FullScreenIcon, ImageIcon } from '@/components/Icons';
const list = [
  { name: 'The_image_format', icon: <ImageIcon /> },
  { name: 'The_image_size', icon: <FullScreenIcon /> },
  { name: 'To_view_rules', icon: <CameraIcon />, extraContent: 'click' }
]
export const ActiveImagesTab = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='flex gap-8 flex-wrap'>
      <div className='flex-1 bg-white p-4 rounded-xl'>
        <div className='flex gap-2'>
          <Button classes="text-sm !px-4 !py-2 whitespace-nowrap !bg-secondary  flex gap-2 items-center">
            {fetchWord('Download_All', lang)}
            <ChevronIcon className="-rotate-90 scale-75" />
          </Button>
          <Button classes="text-sm disabled:opacity-5 !px-4 !py-2 whitespace-nowrap flex gap-2 items-center">
            {fetchWord('Select_All_and_Delete', lang)}
          </Button>
          <Button disabled classes="text-sm disabled:opacity-75 !px-4 !py-2 whitespace-nowrap flex gap-2 items-center">
            {fetchWord('Delete_Selected', lang)}
          </Button>
          <Button classes="text-sm !px-4 !py-2 whitespace-nowrap !bg-secondary  flex gap-2 items-center">
            {fetchWord('Download_Excel', lang)}
          </Button>
          <SearchBar containerClassName="max-w-[340px]" inputClassName="!py-1" />
        </div>
        <div className='border-t h-[1px] border-gray-400 my-4' />
        <div className='flex flex-wrap gap-4'>
          {
            gallery?.map(item => (
              <GalleryCard key={item} item={item} />
            ))
          }
        </div>
      </div>
      <DropzoneInfo list={list} dropzonePlaceholder={'SELECT_OR_DRAG_NEW_IMAGE'} dropzoneSizes={'(JPG, JPEG, PNG, Minimum 600x800)'} />
    </div>
  )
}
