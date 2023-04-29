import React, { useContext, useState } from "react";

import { LanguageContext } from "../../context/LangContext";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import UpperMenu from "../UpperMenu/UpperMenu";
import SubMenu from "../Menu/SubMenu/SubMenu";

export const Layout = ({ children, hideSubMenu, hideFooter, containerClassName, mainClassName }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className={containerClassName}>
      <UpperMenu />
      <Menu />
      <main className={`${mainClassName}`}>
        {hideSubMenu ? null : (
          <div className={`container`}>
            <SubMenu />
          </div>
        )}
        {children}
      </main>
      {hideFooter ? null : <Footer />}
    </div>
  );
};
