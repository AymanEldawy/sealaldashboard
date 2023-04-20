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

const ServiceProviderViewList = ({ provider }) => {
  const { lang } = useContext(LanguageContext);
  const router = useRouter();
  const [favorite, setFavorite] = useState(provider?.favorite);
  console.log(router);
  const handleLink = () => {
    router.push({
      pathname: `/providers/${provider?.id}`,
      query: { prevPath: router?.pathname },
    }, `/providers/${provider?.id}`);
  }

  return (
    <div className="shadow rounded-md flex gap-4">
      <Image
        className="cursor-pointer object-cover max-w-full h-24"
        src={`${provider?.image}`}
        alt={provider?.name}
        height={80}
        width={90}
        onClick={handleLink}
      />
      <div className="flex flex-col flex-1 justify-between p-2 pl-0">
        <div className="flex justify-between items-start -mb-1">
          <h3 className="font-medium cursor-pointer hover:text-primary" onClick={handleLink}>
            {provider?.name}
          </h3>
          <button
            className="scale-75 cursor-pointer"
            onClick={() => setFavorite((p) => !p)}
          >
            <HeartIcon
              className={favorite ? "text-red-500" : "text-[#979797]"}
            />
          </button>
        </div>
        <RatingStars rating={provider?.rating} />
        <div className="flex justify-between mt-auto items-center">
          <p className="font-medium flex ">
            <span className="text-primary">{provider?.hourPrice}$</span>
            <span>/{fetchWord("hr", lang)}</span>
          </p>

          <PrimaryLink
            link={`/providers/${provider?.id}`}
            className="border-primary px-4 py-1 border-2 font-medium capitalize text-sm !bg-transparent !text-black"
          >
            {fetchWord("view_profile", lang)}
          </PrimaryLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderViewList;
