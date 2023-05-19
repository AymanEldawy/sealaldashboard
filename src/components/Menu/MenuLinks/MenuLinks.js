import { HeartIcon, TrashIcon, UserCircleIcon } from "@/components/Icons";
import { GlobalOptions } from "@/context/GlobalOptions";
import { LanguageContext } from "@/context/LangContext";
import { links } from "@/data/dummyData";
import { fetchWord } from "@/lang/fetchWord";
import Link from "next/link";
import React from "react";
import { useContext } from "react";

const MenuLinks = () => {
  const { lang } = useContext(LanguageContext);
  const { cartLength } = useContext(GlobalOptions)
  return (
    <ul className="flex gap-8 items-center justify-end min-w-[220px] pr-12">
      <li className="flex gap-2">
        <Link href="/favorites" className="block w-6"><HeartIcon className=" stroke-secondary" /> </Link>
      </li>
      <li className="flex gap-2">
        <Link href="/profile" className="block w-6"><UserCircleIcon className="text-secondary" /> </Link>
      </li>
      <li className="flex gap-2 relative">
        <Link href="/cart">
          <div className="relative block w-6">
            <TrashIcon />
            <span className="absolute -top-4 -right-1 bg-red-500 text-white text-[10px] px-1 rounded-xl">{cartLength}</span>
          </div>
          <div className="absolute -top-1 -right-16 flex flex-col text-sm">
            <span className="font-semibold whitespace-nowrap text-secondary">
              {fetchWord('my_cart', lang)}:
            </span>
            <span className="text-gray-400">255$</span>
          </div>
        </Link>
      </li>
    </ul>
  );
};

export default MenuLinks;
