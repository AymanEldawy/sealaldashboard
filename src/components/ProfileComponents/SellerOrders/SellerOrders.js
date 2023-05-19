import React, { useState, useEffect, useContext } from 'react'
import { ProfileTitle } from '../ProfileTitle'
import { ViewAs } from '../../CategoriesFilterComponents/ViewAs'
import { SortBy } from '../../CategoriesFilterComponents/SortBy'
import { OrdersTable } from './OrdersTable'
import { OrderSellerDetails } from './OrderSellerDetails'
import { fetchWord } from '@/lang/fetchWord'
import { LanguageContext } from '@/context/LangContext'
import { sellerOrders } from '@/data/dummyData'

export const SellerOrders = () => {
  const [orderDetails, setOrderDetails] = useState();
  const [orders, setOrders] = useState();
  const { lang } = useContext(LanguageContext);
  useEffect(() => {
    setOrders(sellerOrders)
  }, [])
  return (
    <div className="ltr:pl-4 rtl:pr-4">
      <div className="flex justify-between gap-4 items-center mb-4">
        <ProfileTitle title={fetchWord('orders', lang)} />
        <div className="">
          <SortBy />
        </div>
      </div>
      {
        !!orderDetails ? (
          <OrderSellerDetails order={orderDetails} />
        ) : (
          <OrdersTable orders={orders} setOrderDetails={setOrderDetails} />
        )
      }
    </div>
  )
}
