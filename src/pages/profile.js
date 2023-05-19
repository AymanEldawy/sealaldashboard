import { Layout } from '@/components/Layout/Layout';
import { ProfileSidebar } from '@/components/ProfileComponents/ProfileSidebar'
import { GlobalOptions } from '@/context/GlobalOptions';
import React from 'react'
import { useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { ProfileCard } from '@/components/ProfileComponents/ProfileCard';
import { useState } from 'react';
import { ProductCard } from '@/components/Product/ProductCard';
import { products } from '@/data/dummyData';
import SubMenu from '@/components/Menu/SubMenu/SubMenu';
import TabsContent from '@/components/Tabs/TabsContent';
import { ProfileInfo } from '@/components/ProfileComponents/ProfileInfo';
import { SellerOrders } from '@/components/ProfileComponents/SellerOrders/SellerOrders';
import { MyOrders } from '@/components/ProfileComponents/Orders/MyOrders';
import { Addresses } from '@/components/ProfileComponents/Addresses/Addresses';
import { MyCards } from '@/components/ProfileComponents/MyCards/MyCards';
import { Stores } from '@/components/ProfileComponents/Stores/Stores';
import { Terms } from '@/components/ProfileComponents/Terms';
import { BuyAgain } from '@/components/ProfileComponents/BuyAgain';
import { SellerProducts } from '@/components/ProfileComponents/SellerProducts/SellerProducts';


// if there an id
// => view as 
// else 
// if user role = seller
// => my profile seller
// else
// => my profile user


const Profile = () => {
  const { user, changeUserRole } = useContext(GlobalOptions);
  console.log(user?.role,'----');
  const router = useRouter();
  const id = router?.query?.id
  const [sortBy, setSortBy] = useState('new');
  const [activeView, setActiveView] = useState('grid');
  const [activeTab, setActiveTab] = useState();
  console.log(activeTab, '-')
  return (
    <Layout hideSubMenu={!id}>
      {
        id ? (
          <div className="container">
            <figure>
              <Image src="/images/profile-banner.png" alt="Profile banner" height={324} width={1200} className="max-w-full object-cover" />
            </figure>
            <div className="mt-4">
              <ProfileCard
                setSortBy={setSortBy}
                sortBy={sortBy}
                activeView={activeView}
                setActiveView={setActiveView}
              />
            </div>
            <div className={`my-8 gap-4 grid ${activeView === 'grid' ? "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" : ""}`}>
              {
                products?.map(product => (
                  <ProductCard product={product} key={product?.id} />
                ))
              }
            </div>
          </div>
        ) : (
          <div className="container-lrg">
            <div className='flex gap-4 mb-8'>
              <ProfileSidebar changeUserRole={changeUserRole} username={user?.name} activeTab={activeTab} setActiveTab={setActiveTab} role={user?.role} />
              <div className='flex-1'>
                <SubMenu />
                <TabsContent activeTabName={activeTab}>
                  <ProfileInfo tabName="Profile_info" />
                  <SellerOrders tabName="orders" />
                  <MyOrders tabName="My_Orders" />
                  <Addresses tabName="My_Addresses" />
                  <MyCards tabName="My_saved_cards" />
                  <Stores tabName="Stores_follow" />
                  <Terms tabName="Terms" />
                  <BuyAgain tabName="Buy_again" />
                  <SellerProducts tabName="My_Products" />
                </TabsContent>
              </div>
            </div>
          </div >
        )
      }
    </Layout >
  )
}

export default Profile