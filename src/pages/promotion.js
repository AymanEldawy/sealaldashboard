import { SectionBar } from '@/components/Global/SectionBar/SectionBar'
import { CoinsIcon, DiscountPercentageIcon, GiftIcon, KeyIcon, MessageTagIcon, OneStarIcon, PercentageIcon, StoreBixIcon, TagBoxIcon, ThunderIcon, UserBoxIcon } from '@/components/Icons'
import { Layout } from '@/components/Layout/Layout'
import { Pricing, PromotionList } from '@/components/PromotionComponents/PromotionList'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'

const pricingList = [
  { title: 'pricing_q1', description: 'pricing_a1', icon: <KeyIcon />, extraNew: 'new' },
  { title: 'pricing_q2', description: 'pricing_a2', icon: <OneStarIcon />, extraNew: 'new' },
  { title: 'pricing_q3', description: 'pricing_a3', icon: <ThunderIcon /> },
  { title: 'pricing_q4', description: 'pricing_a4', icon: <PercentageIcon /> },
]

const discountList = [
  { title: 'discount_q1', description: 'discount_a1', icon: <DiscountPercentageIcon /> },
  { title: 'discount_q2', description: 'discount_a2', icon: <CoinsIcon /> },
  { title: 'discount_q3', description: 'discount_a3', icon: <GiftIcon /> },
]

const couponsList = [
  { title: 'coupon_q1', description: 'coupon_a1', icon: <TagBoxIcon /> },
  { title: 'coupon_q2', description: 'coupon_a2', icon: <StoreBixIcon /> },
  { title: 'coupon_q3', description: 'coupon_a3', icon: <UserBoxIcon />, extraNew: 'new' },
  { title: 'coupon_q4', description: 'coupon_a4', icon: <MessageTagIcon />, extraNew: 'new' },


]

const Promotion = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <Layout>
      <SectionBar title={fetchWord('Promotion_Price_Home_Page', lang)} />
      <div className='container my-4 md:my-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
          <PromotionList
            list={pricingList}
            title='Pricing'
          />
          <PromotionList
            list={discountList}
            title='Create_Discount'
            linkDetails={{ name: 'Go_to_Create_Discount', href: '/create-discount' }}
            titleClassName="!text-secondary"
          />
          <PromotionList
            list={couponsList}
            title='Coupons'
            linkDetails={{ name: 'Go_To_Coupons', href: '/coupons' }}
            titleClassName="!text-secondary"
            itemTitleClassName='!text-blue-light'
            newClassName="!bg-primary"
          />
        </div>
      </div>
    </Layout>
  )
}

export default Promotion