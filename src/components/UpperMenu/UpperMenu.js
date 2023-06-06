import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Link from "next/link";
import React, { useContext, useState } from "react";

import { BellIcon, CalenderIcon, StoreIcon, UserIcon } from "../Icons";
import MessageIcon from "../Icons/MessageIcon";
import LanguageBar from "../LanguageBar/LanguageBar";

const UpperMenu = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className=" bg-secondary-dark text-white ">
      <div className="text-xs flex justify-between items-center h-[35px] container">
        <div className="flex items-center gap-4">
          {/* <LanguageBar /> */}
          <Link href="">{fetchWord('Vendor_Panel', lang)}</Link>
          <Link href="">{fetchWord('Seller_Information_Center', lang)}</Link>
        </div>
        <div className="relative flex gap-6 items-center">
          <Link href="" className="flex gap-1 items-center font-medium"><BellIcon /> {fetchWord('My_Announcements', lang)}</Link>
          <Link href="" className="flex gap-1 items-center font-medium"><CalenderIcon /> {fetchWord('Calendar', lang)}</Link>
          <Link href="" className="flex gap-1 items-center font-medium"><MessageIcon /> {fetchWord('Support', lang)}</Link>
          <Link href="" className="flex gap-1 items-center font-medium"><StoreIcon /> {fetchWord('Go_To_Store', lang)}</Link>
          <Link href="" className="flex gap-1 items-center font-medium"><UserIcon /> {fetchWord('with_the_Store', lang)}</Link>
        </div>
      </div>
    </div>
  );
};

export default UpperMenu;
