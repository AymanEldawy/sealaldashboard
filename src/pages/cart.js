import { CartBar } from '@/components/CartComponents/CartBar';
import { CartHead } from '@/components/CartComponents/CartHead';
import { CartItem } from '@/components/CartComponents/CartItem';
import { PromoCode } from '@/components/CartComponents/PromoCode';
import { EmptyPage } from '@/components/EmptyPage/EmptyPage';
import { Button } from '@/components/Global/Button/Button';
import PrimaryLink from '@/components/Global/PrimaryLink/PrimaryLink';
import { Layout } from '@/components/Layout/Layout';
import { LoadingBar } from '@/components/LoadingBar/LoadingBar';
import { GlobalOptions } from '@/context/GlobalOptions';
import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import React, { useContext, useState, useEffect } from 'react'

const Cart = () => {
  const { lang } = useContext(LanguageContext);
  const { cart, removeFromCart } = useContext(GlobalOptions);
  const [loading, setLoading] = useState();
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [msg, setMsg] = useState('')

  useEffect(() => {

  }, [])

  const applyCode = (e) => {
    e.preventDefault()
    if (code === 'monga') {
      setMsg('congratulation!,You got a 5% discount')
      setError('')
    }
    else {
      setMsg('')
      setError('Oops! invalid promo code')
    }
  }
  return (
    <Layout>
      <div className="container">
        {!loading ? (
          <>
            {
              cart?.length ? (
                <div className='mb-12 mt-20'>
                  <CartHead />
                  <div className='mt-8 border-[#ECECEC] border p-4'>
                    {cart?.map(item => (
                      <CartItem key={item?.id} item={item} />
                    ))}
                  </div>
                  <CartBar />
                  <div className="flex gap-8 justify-center items-end lg:max-w-[80%] mx-auto mt-8">
                    <PromoCode msg={msg} error={error} code={code} setCode={setCode} applyCode={applyCode} />
                    <div className="flex gap-4 items-end flex-1 justify-between">
                      <div className='flex flex-1 items-center justify-center min-w-[200px] font-semibold text-[#3D3D3D] border border-[#ECECEC] p-2 rounded-md gap-12'>
                        <span>{fetchWord('Total', lang)}</span>
                        <span>50$</span>
                      </div>
                      <PrimaryLink className="!p-2 min-w-[210px]" link="/checkout">{fetchWord('checkout', lang)} </PrimaryLink>
                    </div>
                  </div>
                </div>
              )
                :
                <EmptyPage msg={fetchWord('cart_empty_msg', lang)} />

            }
          </>
        ) : <LoadingBar />
        }
        {/* loading */}
        {/* cart empty */}
        {/* cart */}
      </div>
    </Layout >
  )
}

export default Cart