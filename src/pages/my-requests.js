import BannerTitle from "@/components/BannerTitle/BannerTitle";
import { Layout } from "@/components/Layout/Layout";
import OffersGrid from "@/components/OffersGrid/OffersGrid";
import TabsContent from "@/components/Tabs/TabsContent";
import TabsList from "@/components/Tabs/TabsList";
import { LanguageContext } from "@/context/LangContext";
import { offers } from "@/data/dummyData";
import { fetchWord } from "@/lang/fetchWord";
import React, { useContext, useState } from "react";

const tabs = ["current_orders", "previous_orders", "canceled_orders"];
const SingleRequest = () => {
  const { lang } = useContext(LanguageContext);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <Layout>
      <BannerTitle title={fetchWord("my_requests", lang)} />
      <div className="shadow-md mb-1">
        <div className="container">
          <TabsList
            containerClassName="p-3 justify-around"
            activeClassName="!border-0 first:bg-green-500 bg-gray-500 !text-white last:bg-red-500 "
            itemClassName="text-center justify-center border first:text-green-500 first:border-green-400 border-gray-500 rounded-lg last:text-red-500  last:border-red-500 text-black capitalize"
            list={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
      <div className="bg-[#F6F6F6] pt-4 pb-8">
        <div className="container  ">
          <TabsContent activeTabName={activeTab}>
            <OffersGrid tabName="current_orders" offers={offers} />
            <OffersGrid tabName="previous_orders" offers={offers} previousStage/>
            <OffersGrid tabName="canceled_orders" offers={offers} />
          </TabsContent>
        </div>
      </div>
    </Layout>
  );
};

export default SingleRequest;
