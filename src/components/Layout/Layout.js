import React, { useContext, useState } from "react";

import { LanguageContext } from "../../context/LangContext";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import { MobileMenu } from "../Menu/MobileMenu";
import UpperMenu from "../UpperMenu/UpperMenu";

export const Layout = ({ children, hideFooter, containerClassName, mainClassName }) => {
  const { lang } = useContext(LanguageContext);
  const [openMenuMobile, setOpenMenuMobile] = useState(false)
  return (
    <div className={containerClassName}>
      <UpperMenu />
      <Menu openMenu={() => setOpenMenuMobile(true)} />
      {
        openMenuMobile ?
          <MobileMenu closeMenu={() => setOpenMenuMobile(false)} />
          : null
      }
      <main className={`${mainClassName}`}>
        {children}
      </main>
      {hideFooter ? null : <Footer />}
    </div>
  );
};
