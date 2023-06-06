import { LanguageContext } from "@/context/LangContext";
import { footerAllHere, footerCategories, institutional, popularBrands, popularPhones } from "@/data/dummyData";
import { fetchWord } from "@/lang/fetchWord";
import Link from "next/link";
import React, { useContext } from "react";

import Brand from "../Brand/Brand";
import PrimaryLink from "../Global/PrimaryLink/PrimaryLink";
import { ContactInfo } from "./ContactInfo";
import { FooterListTitle } from "./FooterListTitle";
import FormSubscription from "./FormSubscription/FormSubscription";
import Image from "next/image";

const Footer = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <footer className=" bottom-0 left-0 w-full overflow-hidden bg-secondary-dark flex items-center justify-center">
      <p className="text-white text-[12px] py-2">
        {fetchWord('Created_by', lang)}
        : <a href="http://whynot-tech.com">Why.Not.Tech</a>
      </p>
    </footer>
  );
};

export default Footer;
