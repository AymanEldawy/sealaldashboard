import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Link from "next/link";
import React, { useContext, useState } from "react";

import { Button } from "../Global/Button/Button";
import { BellIcon, MessageSolidIcon, RequestsIcon, UserIcon } from "../Icons";
import LanguageBar from "../LanguageBar/LanguageBar";
import UserDropdownBar from "../UserDropdownBar/UserDropdownBar";
import { UserRoleContext } from "@/context/UserContext";
import MessageIcon from "../Icons/MessageIcon";

const UpperMenu = () => {
  const { lang } = useContext(LanguageContext);
  const { userRole } = useContext(UserRoleContext)
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className=" bg-primary text-white p-1 h-[45px]">
      <div className="flex justify-between items-center container">
        <div className="flex items-center gap-4">
          <LanguageBar />
          <Link href="/chat">
            <MessageIcon className={`text-white`} />
          </Link>
          <button>
            <BellIcon />
          </button>
        </div>
        <div className="relative flex gap-2 items-center">
          {loggedIn ? (
            <>
              {
                userRole === 'customer' ? (
                  <>

                    <Link href="my-requests" className="flex items-center gap-2">
                      {/* <RequestsIcon /> */}
                      {fetchWord('my_requests', lang)}
                      <span className="p-1 rounded-full bg-white text-red-500 min-w-[23px] text-center text-xs">{6}</span>
                    </Link>
                    <div className="h-[35px] w-[1px] border-l-2 border-gray-100 mx-2" />
                  </>
                ) : null
              }
              <Link
                href="/my-profile"
                // onClick={() => setLoggedIn((p) => !p)}
                className="flex items-center gap-2 rtl:pl-4 ltr:pr-4 text-black bg-white rounded-2xl p-1"
              >
                <span className="bg-primary p-1 rounded-full h-7 w-7 text-center flex items-center justify-center">

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
