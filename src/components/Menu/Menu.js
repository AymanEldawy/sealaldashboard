import React from "react";
import Brand from "../Brand/Brand";
import MenuLinks from "./MenuLinks/MenuLinks";
import { Button } from "../Global/Button/Button";
import SearchBar from "../SearchBar/SearchBar";
import { fetchWord } from "@/lang/fetchWord";
import { useContext } from "react";
import { LanguageContext } from "@/context/LangContext";
import UserDropdownBar from "../UserDropdownBar/UserDropdownBar";
import { useState } from "react";

const Menu = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className=" border-b border-[#ECECEC]">
      <div className="container justify-between flex items-center py-6 ">
        <Brand />
        <div className="flex flex-1 gap-4">
          <SearchBar />
         
          <MenuLinks />
        </div>
      </div>
    </div>
  );
};

export default Menu;
