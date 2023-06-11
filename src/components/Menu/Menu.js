import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useContext } from "react";
import { useState } from "react";

import Brand from "../Brand/Brand";
import { ChevronIcon } from "../Icons";
import BarsIcon from "../Icons/BarsIcon";
import { menu } from "@/data/menu";

const Menu = ({openMenu}) => {
  const { lang } = useContext(LanguageContext);
  const router = useRouter();
  const [openSubMenu, setOpenSubMenu] = useState('')
  return (
    <nav className="bg-secondary">
      <div className="container justify-between flex items-center py-2 md:py-6 ">
        <Brand />
        <button className="lg:hidden" onClick={openMenu}><BarsIcon /></button>
        <div className="flex-1 gap-4 hidden lg:flex text-sm xl:text-base">
          <ul className='flex items-center justify-around flex-1'>
            {menu?.map(item => (
              <li key={item?.name} className="relative z-[3]">
                {
                  item?.children?.length ? (
                    <>
                      <button onClick={() => setOpenSubMenu(item?.id)} className="text-white  flex gap-1">
                        {fetchWord(item?.name, lang)}
                        <span className="scale-75 -rotate-90 block"> <ChevronIcon /></span>
                      </button>
                      {
                        openSubMenu == item?.id ? (
                          <>
                            <div onClick={() => setOpenSubMenu('')} className="fixed top-0 left-0 w-screen h-screen z-[2]" />
                            <ul className="absolute z-[3] bg-white flex flex-col gap-4 rounded-md xl:min-w-[250px] p-4 top-[40px]">
                              {item?.children?.map(subItem => (
                                <li key={subItem?.name}>
                                  <Link href={subItem?.link} className="whitespace-nowrap capitalize text-secondary hover:text-primary ">
                                    {fetchWord(subItem?.name, lang)}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : null
                      }
                    </>
                  ) :
                    <Link href={item?.link} className={`capitalize text-white hover:text-primary ${router?.pathname === item?.link ? 'text-primary' : ''}`}>{fetchWord(item?.name, lang)}</Link>
                }
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
