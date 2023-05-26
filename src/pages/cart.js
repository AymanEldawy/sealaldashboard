import { CartAddress } from '@/components/CartComponents/CartAddress';
import { CartBar } from '@/components/CartComponents/CartBar';
import { CartHead } from '@/components/CartComponents/CartHead';
import { CartItem } from '@/components/CartComponents/CartItem';
import { CartProductsBody } from '@/components/CartComponents/CartProductsBody';
import ConfirmOrder from '@/components/CartComponents/ConfirmOrder';
import { CartPayment } from '@/components/CartComponents/Payment/CartPayment';
import { PromoCode } from '@/components/CartComponents/PromoCode';
import { EmptyPage } from '@/components/EmptyPage/EmptyPage';
import { Button } from '@/components/Global/Button/Button';
import PrimaryLink from '@/components/Global/PrimaryLink/PrimaryLink';
import { Layout } from '@/components/Layout/Layout';
import { LoadingBar } from '@/components/LoadingBar/LoadingBar';
import TabsContent from '@/components/Tabs/TabsContent';
import { GlobalOptions } from '@/context/GlobalOptions';
import { LanguageContext } from '@/context/LangContext';
import { paymentsBank } from '@/data/dummyData';
import { fetchWord } from '@/lang/fetchWord';
import React, { useContext, useEffect, useState } from 'react'

const stages = {
  cart: { stage: 1, stateName: "cart" },
  address: { stage: 2, stateName: "address" },
  payment: { stage: 3, stateName: "payment" },
  confirm: { stage: 4, stateName: "confirm" },
}

const Cart = () => {
  const { lang } = useContext(LanguageContext);
  const { cart, removeFromCart, updateQuantity } = useContext(GlobalOptions);
  const [loading, setLoading] = useState();
  const [total, setTotal] = useState(0)
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [msg, setMsg] = useState('');
  const [selectedPaymentCard, setSelectedPaymentCard] = useState(null);
  const [stage, setStage] = useState(stages?.cart);
  const [subtotal, setSubtotal] = useState(0)

  useEffect(() => {
    let total = cart?.reduce((result, cur) => {
      return result += cur?.price * cur?.quantity
    }, 0)
    setSubtotal(total?.toFixed(2))
    setTotal(total?.toFixed(2))
  }, [cart])

  const applyCode = (e) => {
    e.preventDefault()
    if (code === 'monga') {
      setTotal(prev => prev - 50)
      setMsg('congratulation!,You got a 50$ discount')
      setError('')
    }
    else {
      setMsg('')
      setError('Oops! invalid promo code')
    }
  }
  const selectedStage = (tab) => {
    setStage(stages?.[tab])
  }
  console.log(stage)
  return (
    <Layout>
      <div className="container">
        {!loading ? (
          <>
            {
              cart?.length ? (
                <TabsContent activeTabName={stage?.stateName}>
                  <CartProductsBody updateQuantity={updateQuantity} removeFromCart={removeFromCart} subtotal={subtotal} total={total} tabName={stages?.cart?.stateName} setStage={selectedStage} cart={cart} msg={msg} error={error} code={code} setCode={setCode} applyCode={applyCode} />
                  <CartAddress tabName={stages?.address?.stateName} setStage={selectedStage} />
                  <CartPayment
                    subtotal={subtotal}
                    total={total}
                    cart={cart}
                    banks={paymentsBank}
                    selectedPaymentCard={selectedPaymentCard}
                    setSelectedPaymentCard={setSelectedPaymentCard}
                    stage={stage}
                    tabName={stages?.payment?.stateName}
                    setStage={selectedStage} />
                  <ConfirmOrder tabName={stages?.confirm?.stateName} stage={stage} />
                </TabsContent>
              )
                :
                <EmptyPage msg={fetchWord('cart_empty_msg', lang)} />

            }
          </>
        ) : <LoadingBar />
        }
      </div>
    </Layout >
  )
}

export default Cart