import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React from 'react'
import { useContext } from 'react'

import { SectionBar } from '../Global/SectionBar/SectionBar'
import { VideoPlayIcon, VideoTimeIcon, VideoTimeLineIcon } from '../Icons'
import { Layout } from '../Layout/Layout'
import { DropzoneInfo } from './ImageGalleryComponents/DropzoneInfo'
import { InputField } from '../Forms/InputField'

const list = [
  { name: 'videoCenter_1', icon: <VideoTimeIcon /> },
  { name: 'videoCenter_2', icon: <VideoTimeLineIcon /> },
  { name: 'videoCenter_3', icon: <VideoPlayIcon /> },
]

const VideoCenter = () => {
  const { lang } = useContext(LanguageContext)
  return (
      // <Layout>
    //   <SectionBar hideAddProductButton title={fetchWord('Image_Gallery', lang)} />
    <div>
      <h3 className='text-lg text-secondary mb-4 font-medium'>{fetchWord('Video_Center', lang)}</h3>
      <div className='flex gap-4 lg:gap-8 flex-wrap xl:flex-no-wrap'>
        <DropzoneInfo
          list={list}
          containerClassName="max-w-auto xl:max-w-[400px] !md:py-6"
          dropzonePlaceholder={'SELECT_OR_DRAG_NEW_Video'}
          dropzoneSizes={`Your videos can be in (MPEG-4, H.264) format, 1280x720 and up to 100mb.`}
        />
        <div className='flex-1 bg-white rounded-md px-6 '>
          <h3 className='lg:text-lg text-sm mb-4 md:mb-6 text-secondary font-medium'>{fetchWord('Video_Information', lang)}</h3>
          <form className="min-w-[250px]">
            <InputField
              label={fetchWord('Video_Name', lang)}
              placeholder={fetchWord('Type_the_Video_Name', lang)}
              labelClassName="font-medium text-primary-text text-xs"
              classes="text-xs"
            />
            <InputField
              label={fetchWord('Explanation', lang)}
              placeholder={fetchWord('Type_the_description', lang)}
              labelClassName="font-medium text-primary-text text-xs"
              classes="text-xs"
            />
          </form>
        </div>
      </div>
    </div>
    // </Layout>
  )
}

export default VideoCenter