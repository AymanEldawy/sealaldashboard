import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Link from "next/link";
import React, { useContext, useState } from "react";

import { BellIcon, CalenderIcon, StoreIcon, UserIcon, WorldIcon } from "../Icons";
import MessageIcon from "../Icons/MessageIcon";
import LanguageBar from "../LanguageBar/LanguageBar";

const UpperMenu = () => {
  const { lang, changeLang } = useContext(LanguageContext);

  return (
    <div className=" bg-secondary-dark text-white py-1">
      <div className="text-xs flex justify-between flex-wrap gap-4 items-center min-h-[35px] container">
        <div className="flex items-center gap-4 justify-between sm:justify-start w-full sm:w-fit">
          {/* <LanguageBar /> */}
          <Link href="">{fetchWord('Vendor_Panel', lang)}</Link>
          <Link href="">{fetchWord('Seller_Information_Center', lang)}</Link>
        </div>
        <div className="hidden md:flex relative gap-3 md:gap-6 items-center overflow-auto">
          <Link href="" className="flex gap-1 items-center whitespace-nowrap flex-col sm:flex-row font-medium max-[450px]:flex-col "><BellIcon className="w-5 h-5 text-white fill-white" /> {fetchWord('My_Announcements', lang)}</Link>
          <Link href="" className="flex gap-1 items-center whitespace-nowrap flex-col sm:flex-row font-medium max-[450px]:flex-col "><CalenderIcon className="w-5 h-5 text-white fill-white" /> {fetchWord('Calendar', lang)}</Link>
          <Link href="" className="flex gap-1 items-center whitespace-nowrap flex-col sm:flex-row font-medium max-[450px]:flex-col "><MessageIcon className="w-5 h-5 text-white fill-white" /> {fetchWord('Support', lang)}</Link>
          <Link href="" className="flex gap-1 items-center whitespace-nowrap flex-col sm:flex-row font-medium max-[450px]:flex-col "><StoreIcon className="w-5 h-5 text-white fill-white" /> {fetchWord('Go_To_Store', lang)}</Link>
          <Link href="" className="flex gap-1 items-center whitespace-nowrap flex-col sm:flex-row font-medium max-[450px]:flex-col "><UserIcon className="w-5 h-5 text-white fill-white" /> {fetchWord('with_the_Store', lang)}</Link>
          <button className="bg-white rounded-full h-6 w-6 flex items-center justify-center" onClick={() => changeLang(lang === 'ar' ? 'en' : 'ar')}><WorldIcon className="w-5 h-5 text-secondary" /> </button>
        </div>
      </div>
    </div>
  );
};

export default UpperMenu;
