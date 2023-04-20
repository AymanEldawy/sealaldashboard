import {
  CashFlowIcon,
  CircleStrokeIcon,
  ElectricIcon,
} from "@/components/Icons";
import PaymentMethods from "@/components/PaymentMethods/PaymentMethods";
import ProfileBanner from "@/components/ProfileBanner/ProfileBanner";
import RatingStars from "@/components/RatingStars/RatingStars";
import SocialCard from "@/components/SocialCard/SocialCard";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useContext } from "react";

const ProviderProfile = ({ provider }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <ProfileBanner bannerClassName="translate-y-20" containerClassName="mb-32">
      <div className="flex gap-4 relative ">
        <div className="relative flex flex-col items-center">
          <Image
            className="rounded-[50%] object-top object-cover h-32 w-h-32 border-4 border-[#F2F2F2] "
            src={provider?.image}
            alt={provider?.name}
            height={130}
            width={130}
          />
         
        </div>

        <div className="flex flex-1 justify-between gap-4">
          <div className="flex flex-col gap-4 h-full">
            <h3 className="font-medium text-lg">{provider?.name}</h3>
            <span className="bg-white -mt-3">
            <RatingStars rating={provider?.rating} />
          </span>
            <Link
              href="/services"
              className="flex gap-2 text-sm text-primary font-medium capitalize"
            >
              <ElectricIcon />
              {fetchWord(provider?.services?.name, lang)}
            </Link>
            <p className="font-medium flex gap-2 text-sm">
              <CashFlowIcon />
              <div className="flex">
                <span className="text-primary font-medium capitalize">
                  {provider?.hourPrice}$
                </span>
                /{fetchWord("hr", lang)}
              </div>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-medium text-gray-700">
                {fetchWord("follow_us", lang)}
              </h4>
              <SocialCard withMessage iconClassName="!text-yellow-500" />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-medium text-gray-700">
                {fetchWord("payment_available", lang)}
              </h4>
              <PaymentMethods />
            </div>
          </div>
        </div>
      </div>
    </ProfileBanner>
  );
};

export default ProviderProfile;
