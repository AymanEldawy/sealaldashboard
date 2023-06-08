import { Layout } from "@/components/Layout/Layout";
import { LanguageContext } from "@/context/LangContext";
import { notifications } from "@/data/dummyData";
import { fetchWord } from "@/lang/fetchWord";
import Link from "next/link";
import React, { useContext } from "react";

import { BellFlatIcon, ChevronIcon } from "../Icons";

export const NotificationsBox = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="bg-white rounded-md p-2 md:p-4 mt-4">
      <h2 className='text-secondary lg:text-lg font-semibold mb-4'>{fetchWord('Notification', lang)}</h2>
      <div className="flex flex-col gap-4 md:px-4">
        {
          notifications?.map(item => (
            <div className="flex gap-4 bg-secondary-light mb-2" key={item?.id}>
              <span>
                <BellFlatIcon />
              </span>
              <div className="flex-1 ">
                <div className="text-[#5CAEFF] flex text-xs md:text-sm gap-2 justify-between items-start">
                  <span>{item?.title}</span>
                  <small>{new Date(item?.date).toLocaleDateString('en-UK')}</small>
                </div>
                <p className="text-secondary-dark text-xs md:text-sm font-semibold">{item?.description}</p>
              </div>
              <Link href="/">
                <ChevronIcon  className="text-secondary ltr:rotate-180 scale-90"/>
              </Link>

            </div>
          ))
        }
      </div>
    </div>
  );
};
