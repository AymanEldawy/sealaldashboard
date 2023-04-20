import BackToHome from "@/components/Global/BackToHome/BackToHome";
import { Button } from "@/components/Global/Button/Button";
import { LampIcon } from "@/components/Icons";
import { Layout } from "@/components/Layout/Layout";
import Modal from "@/components/Modal/Modal";
import ProviderInfo from "@/components/ProviderInfo/ProviderInfo";
import ProviderProfile from "@/components/ProviderProfile/ProviderProfile";
import { LanguageContext } from "@/context/LangContext";
import { getItemById, serviceProviders } from "@/data/dummyData";
import { fetchWord } from "@/lang/fetchWord";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { FileUpload } from '@/components/Forms/FileUpload';
import RequestServicesForm from "@/components/RequestServicesForm/RequestServicesForm";

const SingleProvider = () => {
  const { lang } = useContext(LanguageContext);
  const router = useRouter();
  const { id, prevPath } = router?.query;
  const showButton = prevPath === "/offers" ? true : false;
  const [open, setOpen] = useState(false);
  const [openRequest, setOpenRequest] = useState(false);
  const [provider, setProvider] = useState();
  console.log(router);

  useEffect(() => {
    setProvider(getItemById(serviceProviders, id));
  }, [id]);
  const getValues = (values) => {
    setOpenRequest(false);
    setOpen(true)
  }
  return (
    <>
      <Layout>
        <ProviderProfile provider={provider} />
        <div className="pt-12">
          <div className="container">
            <ProviderInfo provider={provider} />
            <Button
              onClick={() => setOpenRequest(true)}
              classes="bg-secondary min-w-[320px] mt-8 !py-3 block mx-auto"
            >
              {fetchWord("book_now", lang)}{" "}
            </Button>
          </div>
        </div>
      </Layout>
      <Modal open={openRequest} close={() => setOpenRequest(false)} modalClassName="max-h-[80vh] overflow-auto max-w-[900px]">
        <RequestServicesForm
          tabName="information"
          getValues={getValues}
        />
      </Modal>

      <Modal open={open} close={() => setOpen(false)}>
        <div className="flex flex-col justify-center items-center gap-2 px-12">
          <span>
            <LampIcon />
          </span>
          <small className="text-primary font-medium">
            {fetchWord("thank_you", lang)}
          </small>
          <p className="font-medium">{fetchWord("soon", lang)}</p>
          <BackToHome />
        </div>
      </Modal>
    </>
  );
};

export default SingleProvider;
