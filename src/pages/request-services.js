import BannerTitle from "@/components/BannerTitle/BannerTitle";
import HowItWork from "@/components/HowItWork/HowItWork";
import { Layout } from "@/components/Layout/Layout";
import Modal from "@/components/Modal/Modal";
import RequestServicesConfirmation from "@/components/RequestServicesConfirmation/RequestServicesConfirmation";
import RequestServicesForm from "@/components/RequestServicesForm/RequestServicesForm";
import RequestServicesFormFeedback from "@/components/RequestServicesFormFeedback/RequestServicesFormFeedback";
import TabsContent from "@/components/Tabs/TabsContent";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import OfferEditIcon from './../components/Icons/OfferEditIcon';
import BackToHome from "@/components/Global/BackToHome/BackToHome";

const RequestServices = () => {
  const { lang } = useContext(LanguageContext);
  const [selectTab, setSelectedTab] = useState("information");
  const [open, setOpen] = useState(false);
  const getValues = (values) => { };
  const onFeedbackSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <Modal open={open} close={() => setOpen(false)}>
        <div className="flex flex-col gap-3 items-center ">
          <OfferEditIcon />
          <p className="text-primary">
            {fetchWord("add_offer_message", lang)}
          </p>
          <BackToHome />
          <button
            className="text-red-500 text-sm"
            onClick={() => setOpen(false)}
          >
            {fetchWord("cancel", lang)}
          </button>
        </div>
      </Modal>
      <Layout>
        <BannerTitle title={fetchWord("request_services", lang)} />
        <div className="container">
          <div className="flex gap-8 mt-12 items-start">
            <HowItWork />
            <div className="flex-1">
              <TabsContent activeTabName={selectTab}>
                <RequestServicesForm
                  tabName="information"
                  setSelectedTab={setSelectedTab}
                  getValues={getValues}
                />
                <RequestServicesConfirmation
                  tabName="confirmation"
                  setSelectedTab={setSelectedTab}
                  setOpen={setOpen}
                />
              </TabsContent>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default RequestServices;
