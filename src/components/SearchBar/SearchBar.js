import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React from "react";
import { useContext } from "react";

import { Button } from "../Global/Button/Button";
import { SearchIcon } from "../Icons";

const SearchBar = ({ inputClassName, containerClassName, iconClassName }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <form className={`flex bg-white rounded-3xl flex-1 border border-primary items-center ${containerClassName}`}>
      <input
        type="search"
        placeholder={fetchWord("search_product", lang)}
        className={`capitalize bg-transparent text-sm px-4 p-3 rounded-none flex-1 ${inputClassName}`}
      />
      <Button classes={`!py-3 text-sm !px-8 ltr:rounded-l-none rtl:rounded-r-none ltr:rounded-r-3xl rtl:rounded-l-3xl ${iconClassName}`}>
        <SearchIcon />
      </Button>
    </form>
  );
};

export default SearchBar;
