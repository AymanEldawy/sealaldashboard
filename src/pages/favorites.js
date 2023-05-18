import { EmptyPage } from '@/components/EmptyPage/EmptyPage'
import { FavoriteHead } from '@/components/FavoritesComponents/FavoriteHead'
import { FavoriteItem } from '@/components/FavoritesComponents/FavoriteItem'
import { Layout } from '@/components/Layout/Layout'
import { LoadingBar } from '@/components/LoadingBar/LoadingBar'
import { LanguageContext } from '@/context/LangContext'
import { products } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext, useEffect, useState } from 'react'

const Favorites = () => {
  const [loading, setLoading] = useState(false)
  const [favorites, setFavorites] = useState([])
  const { lang } = useContext(LanguageContext)
  useEffect(() => {
    setLoading(true)
    setFavorites(products?.filter(product => product?.favorite))
    setLoading(false)
  }, [])
  return (
    <Layout>
      <div className="container">
        {!loading ? (
          <>
            {
              favorites?.length ? (
                <div className='mb-12 mt-20'>
                  <FavoriteHead />
                  <div className='mt-8 border-[#ECECEC] border p-4'>
                    {favorites?.map(item => (
                      <FavoriteItem key={item?.id} item={item} />
                    ))}
                  </div>

                </div>
              )
                :
                <EmptyPage msg={fetchWord('favorite_empty_msg', lang)} />

            }
          </>
        ) : <LoadingBar />
        }
      </div>
    </Layout >
  )
}

export default Favorites