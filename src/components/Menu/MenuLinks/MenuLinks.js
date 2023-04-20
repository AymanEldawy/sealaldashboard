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
    <ul className="flex gap-5 items-center">
      {links?.map((item) => (
        <>
          <li key={item?.name}>
            <Link href={item?.link}>{fetchWord(item?.name, lang)}</Link>
          </li>
        </>
      ))}
    </ul>
  );
};

export default MenuLinks;
