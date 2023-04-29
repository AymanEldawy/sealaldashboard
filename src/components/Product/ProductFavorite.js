import React, { useState } from 'react'

import { HeartIcon } from '../Icons'

export const ProductFavorite = ({ favorite }) => {
  const [isFavorite, setIsFavorite] = useState(favorite)
  const changeFavorite = () => {
    setIsFavorite(p => !p)
  }
  return (
    <button onClick={changeFavorite} className='absolute ltr:right-4 rtl:left-4 top-6'>
      <HeartIcon className={isFavorite ? '!stroke-red-500 fill-red-500' : 'stroke-red-500'} />
    </button>
  )
}
