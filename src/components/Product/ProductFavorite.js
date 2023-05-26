import React, { useState } from 'react'

import { HeartIcon } from '../Icons'

export const ProductFavorite = ({ favorite, className }) => {
  const [isFavorite, setIsFavorite] = useState(favorite)
  const changeFavorite = () => {
    setIsFavorite(p => !p)
  }
  return (
    <button onClick={changeFavorite} className={`z-10 absolute ltr:right-2 rtl:left-2 top-2 ${className}`}>
      <HeartIcon className={isFavorite ? '!stroke-red-500 fill-red-500' : 'text-transparent stroke-red-500'} />
    </button>
  )
}
