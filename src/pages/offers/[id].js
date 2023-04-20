import BannerTitle from "@/components/BannerTitle/BannerTitle";
import { Layout } from "@/components/Layout/Layout";
import OfferCard from "@/components/OfferCard/OfferCard";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { allProposal, getOfferById, offers, serviceProviders } from "@/data/dummyData";
import Image from "next/image";
import Link from "next/link";
import { HeartIcon, WhatsAppShareIcon } from "@/components/Icons";
import ServiceProviderCard from "@/components/ServiceContainerBox/ServiceProviderCard/ServiceProviderViewList";
import ProposalCard from "@/components/ProposalCard/ProposalCard";
import PrimaryLink from "@/components/Global/PrimaryLink/PrimaryLink";
const SingleOffer = () => {
  const { lang } = useContext(LanguageContext);
  const [offer, setOffer] = useState({});
  const [favorite, setFavorite] = useState({});
  const router = useRouter();
  const { id } = router?.query;
  useEffect(() => {
    setOffer(getOfferById(offers, id));
  }, [id]);
  console.log(offer)
  return (
    <Layout hideApp>
      <BannerTitle title={fetchWord("offers", lang)} />
      <div className="container">
        <div className="flex gap-12 mt-8">
          <Image
            className="object-cover w-full flex-1 max-w-[400px]"
            src={offer?.image}
            alt={offer?.name}
            width={140}
            height={200}
          />
          <div className="flex flex-col gap-4 flex-1 relative">
            <div className="flex justify-between gap-2 flex-wrap">
              <h3 className="font-medium text-2xl">{offer?.name}</h3>
              <span className="text-secondary ">#{offer?.offerNumber}</span>
            </div>

            <p className="text-lead text-sm">{offer?.date} | 04:30 PM</p>
            <p className="text-lead flex items-center capitalize">
              <span className="scale-[70%] ltr:-ml-2 rtl:-mr-2">
                {offer?.services?.icon}
              </span>
              {offer?.services?.name}
            </p>
            <div className="flex gap-2">
              <span className="bg-white rounded-md border flex items-center p-1 cursor-pointer" onClick={() => setFavorite(p => !p)}>
                <HeartIcon
                  className={`h-[25px] w-[25px] ${
                    favorite
                      ? "text-red-500"
                      : "text-[#979797]"
                  }`}
                />
              </span>
              <PrimaryLink
                link={`/submit-offers/${323}`}
                className="p-2 px-6 !text-white !bg-primary border rounded-md"

              >
                {fetchWord("submit_offer", lang)}
              </PrimaryLink>
            </div>
          </div>
        </div>
        <div className="mt-12  max-w-[800px]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-primary text-xl items-center capitalize font-medium flex gap-2">
              {fetchWord("all_offers", lang)}
              <span className="text-gray-400 text-xs">(20)</span>
            </h2>
            <Link href="" className=" text-secondary capitalize">
              {fetchWord("see_all", lang)}
            </Link>
          </div>
          <div className="flex flex-col gap-4 mb-8">
            {allProposal?.slice(0, 6)?.map((proposal, index) => (
              // <ServiceProviderCard key={index} provider={provider} />
              <ProposalCard proposal={proposal} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleOffer;
