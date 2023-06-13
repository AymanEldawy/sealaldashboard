import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Link from "next/link";
import React, { useContext } from "react";

const SectionTitle = ({ title, extraContent, containerClassName, titleClassName }) => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className={`flex justify-between items-center mb-6 ${containerClassName}`}>
      <h2 className={`capitalize text-secondary text-base sm:text-lg md:text-xl font-semibold flex items-center gap-2 ${titleClassName}`}>
        {title}
      </h2>
      {extraContent ? extraContent : null}

    </div>
  );
};

export default SectionTitle;
