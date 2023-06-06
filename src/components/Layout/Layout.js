import React, { useContext, useState } from "react";

import { LanguageContext } from "../../context/LangContext";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import UpperMenu from "../UpperMenu/UpperMenu";

export const Layout = ({ children, hideFooter, containerClassName, mainClassName }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className={containerClassName}>
      <UpperMenu />
      <Menu />
      <main className={`${mainClassName}`}>
        {children}
      </main>
      {hideFooter ? null : <Footer />}
    </div>
  );
};
