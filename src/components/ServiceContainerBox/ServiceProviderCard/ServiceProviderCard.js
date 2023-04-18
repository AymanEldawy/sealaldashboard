import { Button } from "@/components/Global/Button/Button";
import PrimaryLink from "@/components/Global/PrimaryLink/PrimaryLink";
import { HeartIcon } from "@/components/Icons";
import RatingStars from "@/components/RatingStars/RatingStars";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useContext } from "react";

const ServiceProviderCard = ({ provider }) => {
  const { lang } = useContext(LanguageContext);
  const router = useRouter();
  const [favorite, setFavorite] = useState(provider?.favorite);
  const handleLink = () => {
    router.push({
      pathname: `/providers/${provider?.id}`,
      query: { prevPath: router?.pathname },
    },`/providers/${provider?.id}`);
  };
  return (
    <div className="shadow rounded-md flex relative flex-col pb-4">
      <button
        className="scale-75 cursor-pointer absolute ltr:right-2 rtl:left-2 top-2"
        onClick={() => setFavorite((p) => !p)}
      >
        <HeartIcon className={favorite ? " text-red-500 " : "text-[#979797]"} />
      </button>
      <Image
        onClick={handleLink}
        className="w-full object-cover object-top h-48 cursor-pointer"
        src={`${provider?.image}`}
        alt={provider?.name}
        height={160}
        width={100}
      />
      <div className="flex flex-1 items-center justify-between gap-4 mt-2 flex-col px-4">
        <div className="flex w-full justify-between">
          <h3 className="font-medium text-lg cursor-pointer hover:text-primary" onClick={handleLink}>
            {provider?.name}
          </h3>
          <p className="font-medium flex ">
            <span className="text-primary">{provider?.hourPrice}$</span>
            <span>/{fetchWord("hr", lang)}</span>
          </p>
        </div>
        <RatingStars rating={provider?.rating} />
        <PrimaryLink
          link={`/providers/${provider?.id}`}
          className="border-primary  border-2 !w-full block font-medium capitalize text-sm !bg-transparent !text-black"
        >
          {fetchWord("view_profile", lang)}
        </PrimaryLink>
      </div>
    </div>
  );
};

export default ServiceProviderCard;
