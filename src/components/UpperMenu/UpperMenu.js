import { LanguageContext } from "@/context/LangContext";
import { UserRoleContext } from "@/context/UserContext";
import { fetchWord } from "@/lang/fetchWord";
import Link from "next/link";
import React, { useContext, useState } from "react";

import { Button } from "../Global/Button/Button";
import { BellIcon, MessageSolidIcon, PlusIcon, RequestsIcon, UserIcon } from "../Icons";
import MessageIcon from "../Icons/MessageIcon";
import LanguageBar from "../LanguageBar/LanguageBar";
import UserDropdownBar from "../UserDropdownBar/UserDropdownBar";

const UpperMenu = () => {
  const { lang } = useContext(LanguageContext);
  const { userRole } = useContext(UserRoleContext)
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className=" bg-primary text-white h-[35px]">
      <div className="flex justify-between items-center container">
        <div className="flex items-center gap-4">
          <LanguageBar />

        </div>
        <div className="relative flex gap-2 items-center">
          {loggedIn ? (
            <>
              <div className="flex gap-4 border-r-2 pr-4">
                <Link href="/request-services" className="bg-white text-primary rounded-full hover:text-white hover:bg-transparent duration-300 ">
                  <PlusIcon />
                </Link>
                <button className="flex items-center relative">
                  <BellIcon />
                  <span className="px-1 text-[9px] absolute -top-1 -right-1 rounded-full bg-white text-red-500 text-center">{4}</span>
                </button>
                <Link href="/chat" className="flex items-center relative">
                  <MessageIcon className={`text-white`} />
                  <span className="px-1 text-[9px] absolute -top-1 -right-1 rounded-full bg-white text-red-500 text-center">{2}</span>
                </Link>
                <Link href="my-requests" className="flex items-center relative">
                  <RequestsIcon />
                  <span className="px-1 text-[9px] absolute -top-1 -right-1 rounded-full bg-white text-red-500 text-center">{1}</span>
                </Link>

              </div>
              <Link
                href="/my-profile"
                className="flex items-center  rtl:pl-4 ltr:pr-4 text-white rounded-2xl p-1"
              >
                <span className="p-1 rounded-full h-7 w-7 text-center flex items-center justify-center">

                  <UserIcon />
                </span>
                John smeth
              </Link>
            </>

          ) : (
            <Link className="bg-white text-primary mt-[2px] p-1 rounded-md capitalize px-4" href="/login">{fetchWord("login", lang)}</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpperMenu;
