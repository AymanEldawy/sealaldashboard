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

// Video_Center
// Video_Information
// Video_Name
// Type_the_Video_Name
// Explanation
// Type_the_description
const VideoCenter = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <Layout>
      <SectionBar hideAddProductButton title={fetchWord('Video_Center', lang)} />
      <div className="container !my-8">
        <div className='flex gap-8 flex-wrap'>
          <DropzoneInfo
            list={list}
            containerClassName="!py-8"
            dropzonePlaceholder={'SELECT_OR_DRAG_NEW_Video'}
            dropzoneSizes={`Your videos can be in (MPEG-4, H.264) format, 1280x720 and up to 100mb.`}
          />
          <div className='flex-1 bg-white rounded-md px-6 py-8'>
            <h3 className='lg:text-lg text-sm mb-6 text-secondary font-medium'>{fetchWord('Video_Information', lang)}</h3>
            <form>
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
    </Layout>
  )
}

export default VideoCenter