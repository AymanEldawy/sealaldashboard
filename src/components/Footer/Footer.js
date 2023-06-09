import { LanguageContext } from "@/context/LangContext";
import { footerAllHere, footerCategories, institutional, popularBrands, popularPhones } from "@/data/dummyData";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

import Brand from "../Brand/Brand";
import { ContactInfo } from "./ContactInfo";
import { FooterListTitle } from "./FooterListTitle";
import FormSubscription from "./FormSubscription/FormSubscription";

const Footer = () => {
  const { lang } = useContext(LanguageContext);
  const [isLess, setIsLess] = useState(false)
  useEffect(() => {
    if (document.body.clientHeight > window.innerHeight) {
      // The body height is less than the screen height
      setIsLess(true)
      console.log('Body height is less than screen height');
    } else {
      // The body height is greater than or equal to the screen height
      console.log('Body height is greater than or equal to screen height');
    }

  }, [])
  return (
    <footer className={`bottom-0 left-0 w-full overflow-hidden bg-secondary-dark flex items-center justify-center ${isLess ? 'fixed' : ''}`}>
      <p className="text-white text-[12px] py-2">
        {fetchWord('Created_by', lang)}
        : <a href="http://whynot-tech.com">Why.Not.Tech</a>
      </p>
    </footer>
  );
};

export default Footer;
