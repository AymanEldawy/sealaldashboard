import { HeartIcon, TrashIcon, UserCircleIcon } from "@/components/Icons";
import { LanguageContext } from "@/context/LangContext";
import { UserRoleContext } from "@/context/UserContext";
import { links } from "@/data/dummyData";
import { fetchWord } from "@/lang/fetchWord";
import Link from "next/link";
import React from "react";
import { useContext } from "react";

const MenuLinks = () => {
  const { userRole } = useContext(UserRoleContext)
  const { lang } = useContext(LanguageContext);
  return (
    <ul className="flex gap-8 items-center justify-end min-w-[220px] pr-12">
      <li className="flex gap-2">
        <Link href="" className="block w-6"><HeartIcon className="text-secondary" /> </Link>
      </li>
      <li className="flex gap-2">
        <Link href="" className="block w-6"><UserCircleIcon /> </Link>
      </li>
      <li className="flex gap-2 relative">

        <Link href="" className="relative block w-6">
          <TrashIcon />
          <span className="absolute -top-4 -right-1 bg-red-500 text-white text-[10px] px-1 rounded-xl">5</span>
        </Link>
        <div className="absolute -top-1 -right-16 flex flex-col text-sm">
          <span className="font-semibold whitespace-nowrap text-secondary">
            {fetchWord('my_cart', lang)}:
          </span>
          <span className="text-gray-400">255$</span>
        </div>
      </li>
    </ul>
  );
};

export default MenuLinks;
